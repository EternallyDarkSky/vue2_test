<template>
    <div>
        ID{{this.$route.params.id}}-内容 {{this.$route.params.content}}
        <!-- a:{{a}} -->
        id{{id}}-content{{content}}
    </div>
</template>

<script>
export default {
    name:"MessageDetail",
    // props:["a"]
    props:['id','content']
}
</script>

<style>

</style>