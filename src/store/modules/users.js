import axios from "axios";

export default {
    actions: {
        async fetchUsers(ctx, data){
            try{
                let currentPage = 1;
                let num_per_page = 30;

                if (data.flag === true) {
                    currentPage = 1;
                } else {
                    currentPage += 1;
                }
                const response = await axios.get('https://api.github.com/search/users',{
                    params: {
                        q: `${data.loginName} in:login+repos:>=0`,
                        per_page: num_per_page,
                        page: currentPage,
                        sort: 'repositories',
                        order: data.orderRep || 'asc'
                    }
                });

                //this.users = response.data.items;
                //ctx.commit('updateUsers', response.data.items,data.flag);
                if (data.flag === true) {
                    ctx.commit('updateUsers', response.data.items);
                } else {
                    ctx.commit('addUpdateUsers', response.data.items);
                }
                //console.log(Math.ceil(response.data.total_count/num_per_page)); //totalpages
                let totalPages = Math.ceil(response.data.total_count/num_per_page);
                //console.log(data.flag);
                ctx.commit('updatePage',currentPage);
                ctx.commit('updateTotalPages',totalPages);


            } catch (e) {
                console.log(e.message);
            }
        }
    },
    mutations: {
        updateUsers(state, users){
            // if (flag === true) {
            //     state.users = users;
            // } else {
            //     state.users = [...state.users, ...users]
            // }
            state.users = users;
        },
        addUpdateUsers(state, users) {
            state.users = [...state.users, ...users]
        },
        updatePage(state, page){
            state.page = page;
        },
        updateTotalPages(state, totalPages){
            state.totalPages = totalPages;
        },
    },
    state: {
        users: [],
        page: 1,
        totalPages: 1
    },
    getters: {
        allUsers(state) {
            return state.users;
        },
        pageNum(state){
            return state.page;
        },
        totalPageNum(state) {
            return state.totalPages;
        },
        userById: s => id => s.users.find(t => t.id === id)

    }
}