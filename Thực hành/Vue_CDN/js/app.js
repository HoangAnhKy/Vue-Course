const app = Vue.createApp({
    data(){
        return { 
            count: 0,
            show: true
        }
    },
    methods:{
        increment(){
            this.count++;
        }
    }
});


app.mount("#root");