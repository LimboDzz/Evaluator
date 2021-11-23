<template>
  <Page>
    <ion-grid fixed style="padding: 2vh 5vw;">
      <ion-row>
        <ion-col size="6" v-for="img in imgs" :key="img"
          ><Options :img="img"></Options
        ></ion-col>
      </ion-row>
    </ion-grid>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button @click="takePhoto()" style="margin-bottom: 10vh;">
        <ion-icon :icon="camera"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </Page>
</template>

<script>
import Options from "../views/Options.vue";
import { camera } from "ionicons/icons";
import { takePhoto } from "../api/takePhoto";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
export default {
  name: "Index",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    Options,
  },
  data() {
    return {
      camera,
    };
  },
  methods: {
    async takePhoto() {
      this.$store.state.imgs.push(await takePhoto());
    },
  },
  computed:{
    imgs(){
      return this.$store.state.imgs;
    }
  },
};
</script>