<template>
    <div>
        
            news1
        
            news2
       
    </div>
</template>
<script>
export default {
    name: "HomeNews",
    created(){
        console.log("New 组件创建");
    },
    beforeDestroy(){
        console.log("New 组件销毁");
    }
};
</script>

<style>
</style>