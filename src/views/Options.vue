<template>
  <ion-img :src="img.webPath" @click="presentActionSheet()"></ion-img>
</template>

<script>
import { IonImg, actionSheetController } from "@ionic/vue";
import { defineComponent } from "vue";
import { caretForwardCircle, close, trash, share } from "ionicons/icons";
import { evaluatePhoto } from "../api/evaluatePhoto";
import { sharePhoto } from "../api/sharePhoto";

// import { sharePhoto } from "../api/sharePhoto";
export default defineComponent({
  props: ["img"],
  components: { IonImg },
  methods: {
    del() {
      const img = this.img;
      this.$store.state.imgs = this.$store.state.imgs.filter((i) => i != img);
    },
    async toEvaluate(){
      // this.$store.commit("toStorage");
      const [greyImg,num]=await evaluatePhoto(this.img);
      // console.log(greyImg);
      this.$store.state.greyImg=greyImg;
      this.$store.state.grade=num;
      this.$router.push({ path:`/evaluation/${(new Date()).getTime()}/${this.img}` })
    },
    async toShare(){
      await sharePhoto(this.img);
    },
    async presentActionSheet() {
      const actionSheet = await actionSheetController.create({
        header: "Albums",
        cssClass: "my-custom-class",
        buttons: [
          {
            text: "Evaluate",
            icon: caretForwardCircle,
            handler: this.toEvaluate
          },
          {
            text: "Share",
            icon: share,
            handler: this.toShare
          },
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: this.del,
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ],
      });
      await actionSheet.present();

      const { role } = await actionSheet.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
  },
});
</script>