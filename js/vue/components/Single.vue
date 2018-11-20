<template lang='pug'>
  #posts-wrapper
    .center-wrapper is single
    pre {{state}}
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
    state(){
      return this.$store.state;
    },
  },
  methods: {
    load(){
      this.$store.dispatch('getPosts');
    },
  },
}
</script>

<style lang='sass'>


</style>
