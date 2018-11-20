<template lang="pug">
  #global-wrapper
    #header-wrapper
      .gradient
      .center-wrapper
        .text
          .title Tambay, Takbo
          .description Life in unforgiving streets lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          .credits Written by Soleil Luna and Loreben Tuquero
    #navigation-wrapper
      .fixed-wrapper
        .nav-item.selected Introduction
        .nav-item Simulation
        .nav-item Article
    #introduction-wrapper
    #simulation-wrapper
      .scene(v-for=`scene, index in simulation.storyline`)
        .center-wrapper
          .top-line
            .line
            .circle
          .bottom-line
            .circle
            .line
          .title {{scene.title}}
          .text {{scene.text}}
          .question {{scene.question}}
          .options
            .option(v-for=`option in scene.options` @click=`selectOption(scene, option)`) {{option.label}}
    #article-wrapper
    #footer-wrapper
</template>

<script>
export default {
  data(){
    return {
      simulation: {
        scenes: [],
        currentScene: null,
        storyline: [],
      },
    }
  },
  computed: {

  },
  methods: {
    findScene(id){
      return this.simulation.scenes.find(scene => id == scene.id);
    },

    selectOption(scene, option){
      if(this.simulation.storyline[this.simulation.storyline.length - 1] == scene){
        this.simulation.storyline.push(this.findScene(option.id));
      }
    }
  },
  mounted(){
    window.$app = this;
    this.$http.get("https://script.google.com/macros/s/AKfycbwpdlB26nqSREiXGTYqghBfrBgDz0deaUa3Dyy36-GxKMIEiFRt/exec")
    .then(({data}) => {
      this.simulation.scenes = data;
      this.simulation.currentScene = this.findScene("start");
      this.simulation.storyline.push(this.simulation.currentScene);
    })
    .catch(() => {})
    .then(() => {});
  },
}
</script>

<style lang="sass">

</style>
