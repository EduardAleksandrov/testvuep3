<template>
  <div class="usersList">
    <h1>This is a Users page</h1>
    <form @submit.prevent="getUsers">
      <input type="text" v-model="loginName" placeholder="Введите логин">
      <button type="submit" class="button">Получить данные</button>
    </form>
    <div class="select-wrapper">
      <label for="rep">Выберите тип сортировки репозиториев:</label>
      <select id="rep" name="rep" v-model="orderRep">
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
    <div class="userText">Нажмите на пользователя, чтобы посмотреть подробности</div>
    <div class="wrapper">
      <div class="users-item"
           v-for="(item, number) of allUsers" :key="item.id"
           @click="getUserRoute(item.id)"
      >
        <div class="shape"></div>
        {{ item.login }}
      </div>
      <div ref="observer" class="observer"></div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  name: "UsersList",
  data() {
    return {
      //users: [],
      loginName: '',
      orderRep: 'asc'
    }
  },
  computed: {
    allUsers() {
      return this.$store.getters.allUsers
    },
  },
  watch: {
    orderRep() {
      //this.fetchUsers();  //повесить условие на page+=1 или page = 1
      let data = {loginName: this.loginName, orderRep: this.orderRep, flag:true}
      this.$store.dispatch("fetchUsers",data);
    },
  },
  mounted() {
    //this.fetchUsers();
    //let data = {loginName: this.loginName, orderRep: this.orderRep, flag:true}
    //this.$store.dispatch("fetchUsers",data);

    //пересечение и подгрузка страниц
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && (this.$store.getters.pageNum <= this.$store.getters.totalPageNum)) {
        let data = {loginName: this.loginName, orderRep: this.orderRep, flag:false}
        this.$store.dispatch("fetchUsers",data);
        //console.log(data);
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  methods: {
    getUserRoute(userIdLink) {
      this.$router.push({ name: 'UserId', params: { id: userIdLink } });
    },
    getUsers() {
      let data = {loginName: this.loginName, orderRep: this.orderRep, flag:true}
      this.$store.dispatch("fetchUsers",data);
    }

    // async fetchUsers(){
    //   try{
    //     let num_per_page = 30;
    //     const response = await axios.get('https://api.github.com/search/users',{
    //           params: {
    //             q: `${this.loginName} in:login+repos:>=0`,
    //             per_page: num_per_page,
    //             page: 1,
    //             sort: 'repositories',
    //             order: this.orderRep || 'asc'
    //           }
    //         });
    //     this.users = response.data.items;
    //     console.log(Math.ceil(response.data.total_count/num_per_page)); //totalpages
    //   } catch (e) {
    //     console.log(e.message);
    //   } finally {
    //   }
    // }
  }

}

</script>

<style lang="scss" scoped>
.shape {
  margin-top: 4px;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  background: #83A7C9;
  border-radius: 50%;
}
.wrapper {
  width: 20%;
  margin: 0 auto;
}
.users-item {
  display:flex;
  margin-bottom: 10px;
  text-align: left;
}
.button {
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 5px;
}
.button:active{
  background: #42b983;
}
input {
  width: 300px;
  font-size: 16px;
  padding: 8px 0 8px 10px;
  border: 1px solid #4676D7;
  background: #fcfcfc;
  border-radius: 5px;
  outline-color: #d7bf46;
}
form {
  margin-bottom: 10px;
}
.select-wrapper {
  margin-bottom: 10px;
}
#rep {
  margin-left: 10px;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 11px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
.userText {
  margin-bottom: 20px;
}
.observer {
  height: 30px;
  background: #ffffff;
}
</style>