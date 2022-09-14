<template>
    <div>about</div>
</template>

<script>
export default {
    name:"About",
    beforeRouteEnter(to,from,next){
        console.log("about组件进入");
        next()
    },
    beforeRouteLeave(to,from,next){
        console.log("about组件离开");
        next()
    },
    beforeRouteUpdate(to,from,next){
        console.log("about 组件更新");
    }
}
</script>

<style>

</style>