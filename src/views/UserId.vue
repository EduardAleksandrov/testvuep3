<template>
  <div>
    <h1>This is a User ID page</h1>
    <div class="block-wrapper">
      <div class="block">ID пользователя: {{ user.id }}</div>
      <div class="block">Логин: {{ user.login }}</div>
      <div class="block">Тип: {{ user.type }}</div>
      <div class="block">Адрес пользователя: {{ user.url }}</div>
      <div class="block">Ссылка на GitHub: {{ user.html_url }}</div>
    </div>
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
  mounted() {
    //console.log(this.$store.getters.userById(+this.$route.params.id));
  }
}
</script>

<style lang="scss" scoped>
.block-wrapper {
  width: 30%;
  margin: 50px auto 0 auto;
}
.block {
  margin-bottom: 10px;
  text-align: left;
}
</style>