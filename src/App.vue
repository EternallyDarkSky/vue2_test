<template>
    <div id="app" class="container">
        <my-promise/>
    </div>
</template>
    
<script>
import MyXhr from "components/xhr/MyXhr.vue"
import MyPromise from "components/Mypromise/MyPromise.vue"

export default {
    name: "App",
    components: {
        MyXhr,
        MyPromise,
    
    },

};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}
.container {
    display: flex;
}
.container > div {
    margin: 2px;
}
img {
    width: 100%;
    height: 80%;
    object-fit: contain;
}
/* 项目经历一：心理健康教育管理系统

项目经历二：超级商城购物平台系统

项目经历三：基于Aprioi算法的高校资产决策系统的研究与设计 */
</style>
