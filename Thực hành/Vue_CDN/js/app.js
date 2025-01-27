const app = Vue.createApp({
    data(){
        return {
            url: "https://vuejs.org/",
            isActive: true
        }
    }
});


app.mount("#root");