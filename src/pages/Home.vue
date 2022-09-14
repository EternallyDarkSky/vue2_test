<template>
  <div>
    HOME
    <router-link to="/home/homenews" active-class="konck">UserNews</router-link>
    <router-link to="/home/homemessage" active-class="konck">UserMessage</router-link>
    <keep-alive exclude="HomeNews"><router-view></router-view></keep-alive>
  </div>
</template> 

<script>
export default {
    name:"Home",
       beforeRouteEnter(to,from,next){
        console.log("home组件进入");
        next()
    },
    beforeRouteLeave(to,from,next){
        console.log("home组件离开");
        next()
    }
}
</script>

<style>
.konck{
    background-color: aquamarine;
}

</style>