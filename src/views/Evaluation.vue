<template>
  <ion-app>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>{{ title + ".jpeg" }}</ion-title>
      </ion-toolbar> </ion-header
    >,
    <ion-content fullscreen>
      <ion-card>
        <ion-img
          v-if="loading"
          src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
        ></ion-img>
        <img v-else :src="webPath" alt="" />
        <ion-card-header>
          <ion-card-subtitle>Ringelmann Smoke Level</ion-card-subtitle>
          <ion-card-title v-if="loading"> Working on it ... </ion-card-title>
          <ion-card-title v-else>
            {{ grade }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>
            The Ringelmann scale is a scale for measuring the apparent density
            or opacity of smoke.
          </p>
          <p>
            The scale has 5 levels of density inferred from a grid of black
            lines on a white surface which, if viewed from a distance, merge
            into known shades of grey. It corresponds to an opacity of 20%.
            Shades 2, 3, 4 and 5 correspond to opacities of 40%, 60%, 80% and
            100% (completely black) and are usually considered to be "black
            smoke" by air pollution boards of most countries.
          </p>
        </ion-card-content>
      </ion-card>
      <ion-fab
        horizontal="end"
        vertical="bottom"
        slot="fixed"
        style="margin: 10px"
      >
        <ion-fab-button color="dark">
          <ion-icon md="caret-up" ios="chevron-up-circle-outline"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button color="light" href="/index">
            <ion-icon name="close"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="light">
            <ion-icon name="share"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="light">
            <ion-icon name="star-outline"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-app>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import {
  pin,
  walk,
  warning,
  wifi,
  wine,
  close,
  share,
  starOutline,
} from "ionicons/icons";
export default {
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  data() {
    return {
      pin,
      walk,
      warning,
      wifi,
      wine,
      close,
      share,
      starOutline,
      loading: false,
    };
  },
  computed: {
    title() {
      return this.$route.params.time;
    },
    webPath() {
      return this.$store.state.greyImg;
    },
    grade(){
      let grade=this.$store.state.grade;
      console.log(grade);
      let level=Math.floor(grade/255*100)+" %";
      return level
    }
  },
};
</script>