<template>
    <div>
        <button @click="handler">Promise</button>
    </div>
</template>

<script>
export default {
    name: "MyPromise",
    methods: {
        handler() {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    let xhr = new XMLHttpRequest();
                    xhr.open("get", "http://localhost:8080/cars");
                    xhr.send();
                    xhr.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            if (this.status === 200) {
                                resolve(this.response);
                            } else if (this.status === 404) {
                                reject("解析失败");
                            }
                        }
                    };
                }, 500);
            }).then(
                (success) => {
                    console.log(success);
                },
                (error) => {
                    console.log(error);
                }
            );
        },
    },
};
</script>

<style>
</style>