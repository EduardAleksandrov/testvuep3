import axios from "axios";

export default {
    actions: {
        async fetchUsers(ctx, data){
            try{


                let num_per_page = 30;
                const response = await axios.get('https://api.github.com/search/users',{
                    params: {
                        q: `${data.loginName} in:login+repos:>=0`,
                        per_page: num_per_page,
                        page: 1,
                        sort: 'repositories',
                        order: data.orderRep || 'asc'
                    }
                });
                //this.users = response.data.items;
                ctx.commit('updateUsers', response.data.items);
                //console.log(Math.ceil(response.data.total_count/num_per_page)); //totalpages
            } catch (e) {
                console.log(e.message);
            }
        }
    },
    mutations: {
        updateUsers(state, users){
            state.users = users;
        },
    },
    state: {
        users:[]
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        userById: s => id => s.users.find(t => t.id === id)

    }
}