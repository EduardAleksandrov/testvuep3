<template>
  <div>
    <h1>This is a User ID page</h1>
    {{  }}
  </div>
</template>

<script>
export default {
  name: "UserId",
  // data() {
  //   return {
  //     page: +this.$route.params.id || 1
  //   }
  // },
  computed: {
    user() {
      return this.$store.getters.userById(+this.$route.params.id);
    }
  },

}
</script>

<style lang="scss" scoped>

</style>