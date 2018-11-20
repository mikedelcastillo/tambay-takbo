<template lang='pug'>
  #header-wrapper(:class=`headerClass`)
    .center-wrapper
      .profile-image
        .green
          .message Contact me!
      .name
        router-link.firstname(:to=`'/'`) Mike #[span.lastname-small del Castillo]
        .lastname-big Del Castillo
        a.email(href="mailto:hello@mikedc.io") hello@mikedc.io
      .text I'm a developer and designer
      .nav-wrapper
        router-link.nav-item(v-for=`link in $store.state.wordpress.menus.nav_menu` :to=`link.url`) {{link.title}}
      //- pre {{$store.state}}
</template>

<script>


export default {
  data(){
    return {

    };
  },
  computed: {
    headerClass(){
      let large = false;

      if(this.$store.state.to)
        if(this.$store.state.to.is)
          large = this.$store.state.to.is.home;

      return {
        large,
        hidden: this.$store.state.from == null,
      };
    }
  },
}
</script>

<style lang='sass' scoped>

</style>
