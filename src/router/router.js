import router from "vue-router"
import About from "pages//About.vue";
import Home from "pages/Home.vue";
import HomeMessage from "pages//HomeMessage.vue"
import HomeNews from "pages/HomeNews.vue"
import MessageDetail from "pages/MessageDetail"


const options = {
    routes: [
        {
            path: "/about",
            name:"guanyu",
            component: About,
        },
        {
            path: "/home",
            component: Home,
       
            children: [
                {
                    path: 'homemessage',
                    components: {
                        default: HomeMessage,
                    },
                    children: [
                        {
                            path: "detail/:id/:content",   
                            props:true ,
                            name:"xijie",
                            component: MessageDetail,  

                        },
                    ]
                },
                {
                    path:"homenews",
                    component:HomeNews,
                }
            ],
        },

    ],
}

const routerobj = new router(options)

export default routerobj