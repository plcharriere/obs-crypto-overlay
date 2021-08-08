<template>
  <Screen :title="title" :message="message" :social="getSocial()" />
</template>

<script>
import Screen from "@/components/Screen.vue";

export default {
  name: "StartView",
  components: {
    Screen
  },
  data() {
    return {
      title: "",
      message: "",
      screens: {
        start: {
          title: "Début du live !",
          message: "Le live va bientôt commencer, j'arrive les kheys !"
        },
        end: {
          title: "Fin du live !",
          message:
            "Le live est maintenant terminé, merci d'avoir suivi les kheys !"
        },
        idle: {
          title: "Pause !",
          message:
            "Je fais une petite pause, je reviens tout de suite les kheys !"
        }
      }
    };
  },
  mounted() {
    if (this.$route.query.start !== undefined) {
      this.title = this.screens.start.title;
      this.message = this.screens.start.message;
    } else if (this.$route.query.end !== undefined) {
      this.title = this.screens.end.title;
      this.message = this.screens.end.message;
    } else if (this.$route.query.idle !== undefined) {
      this.title = this.screens.idle.title;
      this.message = this.screens.idle.message;
    } else {
      this.title = "";
      this.message = "";
    }
  },
  methods: {
    getSocial() {
      return process.env.VUE_APP_SOCIAL_USERNAME;
    }
  }
};
</script>
