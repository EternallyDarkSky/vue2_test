import VueRoute from "vue-router"
import ElementUI from 'element-ui';

export const plug  = {
    install(Vue,options){
        
        //安装vue-router插件
        // console.log("正在使用插件进行vue-router导入");
        Vue.use(VueRoute)

        // console.log("正在进行安装Element-UI 插件安装")
        Vue.use(ElementUI)

    }
}