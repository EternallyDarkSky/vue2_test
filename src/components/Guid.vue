<template>
    <div class="root">
       
        <div>
            <router-link to="/home" active-class="active" >Home</router-link>
        </div>
        <div>
            <router-link to="/about"  active-class="active">about</router-link>
        </div>
         <keep-alive>
        <div>
            <router-view></router-view>
        </div>
        </keep-alive>
    </div>
</template>
<script>
export default {
    name: "Guid",
};
</script>

<style>
.active {
    background-color: rgb(131, 213, 16);
}

.title {
    margin: 10px auto;
}
.root {
    width: 60%;
}
.row {
    border: 1px solid;
}
.row {
    margin-bottom: -1px;
}
</style>