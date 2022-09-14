<template>
    <div>
        <h2>XMLHttpRequest学习</h2>
        <button @click="createobj">创建一个xhr实例对象</button><br />
        <button @click="objinit">实例对象参数初始化</button><br />
        <button @click="objsend">实例对象参数post发送</button>
    </div>
</template>

<script>
export default {
    name: "MyXhr",
    data() {
        return { xhr: "" };
    },
    methods: {
        createobj() {
            this.xhr = new XMLHttpRequest();
            console.log(this.xhr);
        },
        objinit() {
            this.xhr.open("POST", "http://localhost:8080/cros/students");
            console.log(this.xhr);
        },
        objsend() {
            let fm = new FormData();
            fm.append("username", "dzq");
            fm.append("password", "614856415");
            this.xhr.send(fm);
            this.xhr.onreadystatechange = this.xhrstatechange
        },
        xhrstatechange(){
                if (this.xhr.readyState == 4 && this.xhr.status == 200) {
                    alert(this.xhr.responseText);
                } else {
                    alert(this.xhr.statusText);
                }
                console.log(this.xhr);
        }
    },
};
</script>

<style>
</style>