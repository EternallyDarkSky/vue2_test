<template>
    <div>
            <router-link :to="`/home/homemessage/detail/11/中国`" >message1</router-link>
            <router-link :to="{
                    name : 'xijie',
                    params: {
                        id:12,
                        content:'美国' 
                    }
            }">
                    message2
            </router-link>
            <router-link to="/home/homemessage/detail/13/俄国" >message3</router-link>
            <span  @click="demo">  
                message4
            </span>
            <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "HomeMessage",
    methods:{
        demo(){
            this.$router.push({name:"xijie",params:{id:13,content:"伊朗"}})
        }
    }
};
</script>

<style>
</style>