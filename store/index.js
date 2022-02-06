import axios from "axios"
// import * as _ from 'lodash'

export const state = () => ({
    card : [],
    cardCount: 0,
    workLoaded: [],
    blogLoaded: [],
    serviceLoaded: [],
    priceLoaded: [],
    commentsLoaded: [],
    workAdd: [],
    token: null
})

export const mutations ={
    //GOODS
    addGoodInPortfollio(state, work){
        state.workLoaded.push(work)
    },
    setWork(state, workArray) {
        state.workLoaded = workArray
    },
    editingGood(state, work){
        const indexWork = state.workLoaded.findIndex(workEdit => workEdit.id === work.id)
        state.workLoaded[work] = work;
    },
    editingGoodAdd(state, AdWork){
        const indexAdWork = state.workLoaded.findIndex(workEdit => workEdit.id === AdWork.id)
        state.workLoaded[AdWork] = AdWork;
    },
    editingGoodDelete(state, deleteCart){
        const indexDeletewWork = state.result.findIndex(workEdit => workEdit.id === deleteCart.id)
        state.result[deleteCart] = deleteCart;
    },
    //BLOG
    addPostInBlog(state, blog){
        state.blogLoaded.push(blog)
    },
    setPost(state, blogArray) {
        state.blogLoaded = blogArray
    },
    editingPost(state, blog){
        const indexPost = state.blogLoaded.findIndex(postEdit => postEdit.id === blog)
        state.blogLoaded[blog] = blog
    },
    //services
    addServiceInList(state, service){
        state.serviceLoaded.push(service)
    },
    setService(state, serviceArray) {
        state.serviceLoaded = serviceArray
    },
    editingService(state, service){
        const indexService = state.serviceLoaded.findIndex(serviceEdit => serviceEdit.id === service)
        state.serviceLoaded[service] = service
    },
    //prices
    adPrice(state, price){
        state.priceLoaded.push(price)
    },
    setPrice(state, priceArray) {
        state.priceLoaded = priceArray
    },
    editingPrice(state, price){
        const indexPrice = state.priceLoaded.findIndex(priceEdit => priceEdit.id === price)
        state.priceLoaded[price] = price
    },
    //comments 
    adComment(store, commentator){
        store.commentsLoaded.push(commentator)
    },
    // Корзина
    adCart(state, AdWork){
        let found = state.card.find(product => product.id == AdWork.id)
        if(found){
            found.quantity ++
            found.count -=1
        }else{
            state.card.push(AdWork)
        } 
        state.cardCount ++

    },
    delet(state, cart){
        let index = state.card.indexOf(cart);

    if (index > -1) {
        let product = state.card[index];
        state.cardCount -= product.quantity;

        state.card.splice(index, 1);
    }
    },
    adClient(state, user){
        state.card.push(user)
    },
    //authUser
    setToken(state, token){
        state.token = token
    },
    destroyToken(state){
        state.token == null
    }
}
export const actions = {
    //GOODS
    nuxtServerInitе({commit}, contex){
        return axios.get('https://lenaplash-16c83-default-rtdb.firebaseio.com//works.json')
        .then(res =>{
            const workArray = []
            for (let key in res.data) {
                workArray.push({...res.data[key], id: key})
            }
            commit ('setWork', workArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addGood({commit}, work){
        return axios.post('https://lenaplash-16c83-default-rtdb.firebaseio.com/works.json', work)
            .then(res =>{
                commit('addGoodInPortfollio', {...work, id: res.data.name})
            })
            .catch(e => {
                console.log(e)
            })
    },
    editGood({commit}, work){
        return axios.put(`https://lenaplash-16c83-default-rtdb.firebaseio.com/works/${work.id}.json`, work)
        .then(res => {
            commit('editingGood', work)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //post in Blog
    blogInite({commit}, contex){
        return axios.get('https://lenaplash-16c83-default-rtdb.firebaseio.com//blog.json')
        .then(res =>{
            const blogArray = []
            for (let key in res.data) {
                blogArray.push({...res.data[key], id: key})
            }
            commit ('setPost', blogArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addPost({commit}, blog){
        return axios.post('https://lenaplash-16c83-default-rtdb.firebaseio.com/blog.json', blog)
            .then(res =>{
                commit('addPostInBlog', {...blog, id: res.data.name})
            })
            .catch(e => {
                console.log(e)
            })
    },
    editPost({commit}, blog){
        return axios.put(`https://lenaplash-16c83-default-rtdb.firebaseio.com/blog/${blog.id}.json`, blog)
        .then(res=> {
            commit('editingPost', blog)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //services
    serviceInite({commit}, contex) {
        return axios.get('https://lenaplash-16c83-default-rtdb.firebaseio.com/services.json')
        .then(res => {
            const serviceArray = []
            for(let key in res.data) {
                serviceArray.push({...res.data[key], id: key})
            }
            commit ('setService', serviceArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addService({commit}, service){
        return axios.post('https://lenaplash-16c83-default-rtdb.firebaseio.com/services.json', service)
            .then(res => {
                commit('addServiceInList', {...service, id:res.data.name})
            })
            .catch(e => {
                console.log(e)
            })
    },
    editService ({commit}, service) {
        return axios.put(`https://lenaplash-16c83-default-rtdb.firebaseio.com/services/${service.id}.json`, service)
        .then(res => {
            commit('editingService', service)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //price
    priceInite({commit}, contex){
        return axios.get('https://lenaplash-16c83-default-rtdb.firebaseio.com//prices.json')
        .then(res =>{
            const priceArray = []
            for (let key in res.data) {
                priceArray.push({...res.data[key], id: key})
            }
            commit ('setPrice', priceArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addPrice({commit}, price){
        return axios.post('https://lenaplash-16c83-default-rtdb.firebaseio.com/prices.json', price)
            .then(res =>{
                commit('adPrice', {...price, id: res.data.name})
            })
            .catch(e => {
                console.log(e)
            })
    },
    editPrice({commit}, price){
        return axios.put(`https://lenaplash-16c83-default-rtdb.firebaseio.com/prices/${price.id}.json`, price)
        .then(res=> {
            commit('editingPrice', price)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //comment
    addComment({commit}, commentator){
        return axios.post('https://lenaplash-16c83-default-rtdb.firebaseio.com/comments.json', commentator)
            .then(res =>{
                commit('adComment', {...commentator, id: res.data.name})
            })
            .catch(e => {
                console.log(e)
            })
    },
    //товар в корзину
    addCart({commit}, AdWork){
        return axios.put(`https://lenaplash-16c83-default-rtdb.firebaseio.com/works/${AdWork.id}.json`, AdWork)
        .then(res => {
            commit('adCart', AdWork),
            commit('editingGoodAdd', AdWork)
        })
        .catch(e => {
            console.log(e)
        })
        
    },
    removeCart({commit}, deleteCart){
        return axios.put(`https://lenaplash-16c83-default-rtdb.firebaseio.com/works/${deleteCart.id}.json`, deleteCart)
        .then(res=> {
            commit('editingGoodDelete', deleteCart)
        })
    },
    delCard({commit}, cart){
        commit('delet', cart)
    },
    addClients({commit}, user){
        commit('adClient', user)
    },
    //auth
    authUser({commit}, authData){
        const key = 'AIzaSyB4RsDewLvjifrsKpVfMWo1F1d42OSeXJk'
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, 
        {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
            .then((res) => {
                let token = res.data.idToken
                commit('setToken', token)
                localStorage.setItem('token', token)
            })
            .catch((e) => {
                console.log(e)
            })
    },
    initAuth({commit}){
        let token = localStorage.getItem('token')
        if(!token){
            return false
        }
        commit('setToken', token)
    },
    logoutUser({commit}){
        commit('destroyToken')
        localStorage.removeItem('token')
    }
}

export const getters = {
    //good
    getWorks (state) {
        return state.workLoaded
    },
    //blog
    getBlog(state){
        return state.blogLoaded
    },
    //sevices
    getServices(state){
        return state.serviceLoaded
    },
    //prices
    getPrices(state){
        return state.priceLoaded
    },
    //comments
    getComments(state){
        return state.commentsLoaded
    },
    //корзина
    getCard(state) {
        return state.card
    },
    checkAuthUser(state){
        return state.token != null
    }
}