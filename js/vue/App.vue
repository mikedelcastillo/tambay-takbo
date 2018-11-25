<template lang="pug">
  #global-wrapper(ref=`intro`)
    #header-wrapper
      .gradient
      .center-wrapper
        .text
          .title Tambay, Takbo
          .description Duterte sees the #[i tambay] as a threat and views the streets as potential for danger. For a street child, the danger is not found on the streets, but in the institutions that claim to protect them.
          .credits Written by Soleil Luna and Loreben Tuquero
    #navigation-wrapper(ref=`nav-wrapper`)
      .fixed-wrapper(:class=`{fixed:navigation.fixed}`)
        .nav-item(v-for=`nav, i in navigation.items` @click=`navigateTo(nav)` :class=`{selected:nav.selected}`) {{nav.label}}
    #introduction-wrapper
      .article-text.center-wrapper
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra maecenas.
    #simulation-wrapper(ref=`simulation`)
      transition(name="fade")
        .scene-background(:key=`sbg.id` v-if=`sbg.media_type == 'image'` :style=`{backgroundImage:'url(' + sbg.media_url + ')'}`)
          .gradient
        .scene-background(:key=`sbg.id` v-if=`sbg.media_type == 'video'`)
          video(loop="" muted="" autoplay="")
            source(:src=`sbg.media_url` type="video/mp4")
          .gradient
      .scene(
        v-for=`(scene, index) in simulation.storyline`
        :ref=`'scene-' + scene.id`)
        .center-wrapper
          transition(name="fade")
            .top-line(v-if=`index != 0`)
              .line
              .circle
          transition(name="fade")
            .bottom-line(v-if=`index != simulation.storyline.length - 1`)
              .circle
              .line
          .title {{scene.title}}
          .text(v-for=`t in scene.text`) {{t}}
          .question {{scene.question}}
          .options

            .option(
              v-for=`option in scene.options`
              @click=`selectOption(scene, option)`
              :class=`{selected: simulation.storyline[index + 1] && option.id == simulation.storyline[index + 1].id}`
              @mouseover=`optionMouseOver(option)`
              @mouseout=`optionMouseOut()`
              v-html=`option.label`)
    #article-wrapper(ref=`article`)
      .article-text.center-wrapper
        h1 Article Title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra maecenas. Dapibus ultrices in iaculis nunc sed. Dictum sit amet justo donec enim diam vulputate ut. Aliquam sem fringilla ut morbi tincidunt augue. Phasellus vestibulum lorem sed risus ultricies tristique. Praesent tristique magna sit amet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Amet risus nullam eget felis eget nunc lobortis. Tortor vitae purus faucibus ornare suspendisse sed nisi. Maecenas pharetra convallis posuere morbi. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Elementum integer enim neque volutpat ac tincidunt vitae.
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra maecenas. Dapibus ultrices in iaculis nunc sed. Dictum sit amet justo donec enim diam vulputate ut. Aliquam sem fringilla ut morbi tincidunt augue. Phasellus vestibulum lorem sed risus ultricies tristique. Praesent tristique magna sit amet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Amet risus nullam eget felis eget nunc lobortis. Tortor vitae purus faucibus ornare suspendisse sed nisi. Maecenas pharetra convallis posuere morbi. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Elementum integer enim neque volutpat ac tincidunt vitae.
        h2 Another section title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra maecenas. Dapibus ultrices in iaculis nunc sed. Dictum sit amet justo donec enim diam vulputate ut. Aliquam sem fringilla ut morbi tincidunt augue. Phasellus vestibulum lorem sed risus ultricies tristique. Praesent tristique magna sit amet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Amet risus nullam eget felis eget nunc lobortis. Tortor vitae purus faucibus ornare suspendisse sed nisi. Maecenas pharetra convallis posuere morbi. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Elementum integer enim neque volutpat ac tincidunt vitae.
        blockquote Bibendum neque egestas congue quisque egestas diam. Tortor posuere ac ut consequat semper viverra. Purus semper eget duis at tellus at urna condimentum. Diam vulputate ut pharetra sit.
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra maecenas. Dapibus ultrices in iaculis nunc sed. Dictum sit amet justo donec enim diam vulputate ut. Aliquam sem fringilla ut morbi tincidunt augue. Phasellus vestibulum lorem sed risus ultricies tristique. Praesent tristique magna sit amet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Amet risus nullam eget felis eget nunc lobortis. Tortor vitae purus faucibus ornare suspendisse sed nisi. Maecenas pharetra convallis posuere morbi. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Elementum integer enim neque volutpat ac tincidunt vitae.
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra maecenas. Dapibus ultrices in iaculis nunc sed. Dictum sit amet justo donec enim diam vulputate ut. Aliquam sem fringilla ut morbi tincidunt augue. Phasellus vestibulum lorem sed risus ultricies tristique. Praesent tristique magna sit amet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Amet risus nullam eget felis eget nunc lobortis. Tortor vitae purus faucibus ornare suspendisse sed nisi. Maecenas pharetra convallis posuere morbi. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Elementum integer enim neque volutpat ac tincidunt vitae.
    #footer-wrapper
      .center-wrapper
        .title Tambay, Takbo
        .line Written by Soleil Luna and Loreben Tuquero
        .line Thanks to Organization One, Organization Two
        .line Designed and developed by #[a(href="https://mikedc.io") Mike del Castillo]
</template>

<script>
const utils = require('../utils');

console.log(utils);
export default {
  data(){
    return {
      navigation: {
        fixed: false,
        items: [
          {
            ref: 'intro',
            label: 'Intro',
            selected: false,
          },
          {
            ref: 'simulation',
            label: 'Simulation',
            selected: false,
          },
          {
            ref: 'article',
            label: 'Article',
            selected: false,
          },
        ],
      },
      simulation: {
        scenes: [],
        background: null,
        hover: null,
        storyline: [],
      },
    }
  },
  computed: {
    sbg(){
      if(this.simulation.hover) return this.simulation.hover;
      if(this.simulation.background) return this.simulation.background;
      return {
        id: 0,
        media_type: 'none',
      };
    },
  },
  methods: {
    scrollHandler(){
      let scroll = window.scrollY;

      let navWrapperY = utils.getOffsetTop(this.$refs['nav-wrapper']);

      this.navigation.fixed = scroll >= navWrapperY;

      let navs = this.navigation.items;
      let buffer = window.innerHeight/2;

      navs.forEach(n => n.selected = false);
      for(let i = 0; i < navs.length - 1; i++){
        let n1 = navs[i + 0];
        let n2 = navs[i + 1];

        let e1 = this.$refs[n1.ref];
        let e2 = this.$refs[n2.ref];

        let y1 = utils.getOffsetTop(e1);
        let y2 = utils.getOffsetTop(e2);

        if(i == 0 && scroll <= y1){
          n1.selected = true;
          break;
        } else if(scroll >= y1 - buffer && scroll < y2 - buffer){
          n1.selected = true;
          break;
        } else if(i == navs.length - 2){
          n2.selected = true;
          break;
        }
      }

      let simY = utils.getOffsetTop(this.$refs.simulation);
      let simHeight = window.innerHeight * this.simulation.storyline.length;
      let simScroll = scroll + window.innerHeight/2;

      if(simScroll >= simY && simScroll <= simY + simHeight){
        let index = Math.min(this.simulation.storyline.length - 1, Math.floor((simScroll - simY) / window.innerHeight));
        this.simulation.background = this.simulation.storyline[index];
      } else{
        this.simulation.background = null;
      }

    },

    navigateTo(nav){
      let el = this.$refs[nav.ref];
      if(nav.ref == "simulation"){
        el = this.$refs[`scene-${this.simulation.storyline[this.simulation.storyline.length - 1].id}`][0];
      }
      utils.scrollTo(utils.getOffsetTop(el));
    },

    resetStoryline(){
      this.simulation.storyline = [];
      this.simulation.storyline.push(this.findScene('start'));
    },

    optionMouseOver(option){
      this.simulation.hover = this.findScene(option.id);
      console.log(this.simulation.hover);
    },

    optionMouseOut(){
      this.simulation.hover = null;
      console.log(this.simulation.hover);
    },

    loadScenes(){
      this.$http.get("https://script.google.com/macros/s/AKfycbwpdlB26nqSREiXGTYqghBfrBgDz0deaUa3Dyy36-GxKMIEiFRt/exec")
      .then(({data}) => {
        this.simulation.scenes = data;
        this.resetStoryline();
      })
      .catch(() => {
        this.loadScenes();
      })
      .then(() => {});
    },

    findScene(id){
      return this.simulation.scenes.find(scene => id == scene.id);
    },

    selectOption(scene, option){
      //read, again

      if(option.id == 'read'){
        return this.navigateTo(this.navigation.items.find(n => n.ref == 'article'));
      }

      if(option.id == 'again'){
        this.resetStoryline();
        return this.navigateTo(this.navigation.items.find(n => n.ref == 'simulation'));
      }

      if(this.simulation.storyline[this.simulation.storyline.length - 1] == scene){
        let nextScene = this.findScene(option.id);
        this.simulation.storyline.push(nextScene);
        this.$nextTick(() => {
          let el = this.$refs[`scene-${nextScene.id}`][0];
          utils.scrollTo(utils.getOffsetTop(el));
        });
      }
    }
  },
  mounted(){
    window.$app = this;
    this.loadScenes();

    window.addEventListener('load', this.scrollHandler.bind(this), false);
    window.addEventListener('scroll', this.scrollHandler.bind(this), false);
    window.addEventListener('mousewheel', this.scrollHandler.bind(this), false);
    window.addEventListener('wheel', this.scrollHandler.bind(this), false);
    window.addEventListener('keypress', this.scrollHandler.bind(this), false);
    window.addEventListener('resize', this.scrollHandler.bind(this), false);
    window.addEventListener('touchstart', this.scrollHandler.bind(this), false);
    window.addEventListener('touchend', this.scrollHandler.bind(this), false);
    window.addEventListener('touchmove', this.scrollHandler.bind(this), false);
  },
}
</script>

<style lang="sass">

</style>
