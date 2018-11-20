<template lang='pug'>
  #archive-wrapper
    transition-group.center-wrapper(name="fade" tag="div")
      router-link.post-item(v-for=`post in posts.items` :to=`post.url` :key=`post.id`)
        .image(:style=`{backgroundImage:'url('+post.image.src+')'}`)
        .details
          .left
            .title {{post.title}}
            .link-preview {{post.meta.link_preview || 'Hello'}}
          .right
    .more-button(:class=`{loading:state.loading.posts}` @click=`load`)
      .text {{buttonText}}
      .circle
        .mask
          .border
</template>

<script>
export default {
  data(){
    return {
      
    };
  },
  mounted(){
    this.load();
  },
  computed: {
    buttonText(){
      let posts = this.state.posts;
      let done = posts.max == posts.page;
      
      if(done){
        return "That's all!";
      } else{
        return "More please!";
      }
    },
    posts(){
      return this.state.posts;
    },
    state(){
      return this.$store.state;
    },
  },
  methods: {
    load(){
      if(!this.state.loading.posts){
        this.$store.dispatch('getPosts', location.href);
      } else{
        
      }
    },
  },
}
</script>

<style lang='sass'>


</style>
