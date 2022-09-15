<template>
    <div>
        <h2>XMLHttpRequest学习</h2>
        <input id="file" type="file" name="filedata" /><br /><br /><br /><br />
        <button @click="objsend">实例对象参数post发送</button>
        <input id="blob" type="file" name="filedata2" /><br /><br /><br /><br />
        <button @click="BolbtoDataURL">loadBolb</button>
        <img alt="" />
    </div>
</template>

<script>
export default {
    name: "MyXhr",
    data() {
        return { xhr: "" };
    },
    methods: {
        objsend() {
            let input = document.querySelector("#file");
            let file = input.files[0];
            console.log(file);
            this.xhr = new XMLHttpRequest();
            this.xhr.open("POST", "http://localhost:8080/cros/students");
            let fr = new FileReader();
            // let fm = new FormData()
            // fm.append("file", file);
            // fm.append("file2", file);
            // this.xhr.send(fm);
            // this.xhr.onreadystatechange = this.xhrstatechange;
            fr.readAsDataURL(file);
            new Promise((reslove, reject) => {
                fr.onload = function () {
                    reslove(fr.result);
                };
            }).then((data) => {
                let fm = new FormData()
                fm.append("file",this.dataURItoBlob(data))
                this.xhr.send(fm)
                this.xhr.onreadystatechange = this.xhrstatechange
            });
        },
        //base64 解码 转blob
        dataURItoBlob(dataURI) {
            // base64 解码
            let byteString = window.atob(dataURI.split(",")[1]);

            let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
            let T = mimeString.split("/")[1];
            let ab = new ArrayBuffer(byteString.length);
            let ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i); //指定位置的Unicode字符编码
            }
            return new Blob([ab], {
                type: mimeString,
            });
        },
        BolbtoDataURL() {
            let input = document.querySelector("#blob");
            let bolb = input.files[0];
            console.log(bolb);
            var result = new File([bolb], "tupian.img", {
                type: "image/jpeg",
                lastModified: Date.now(),
            });
            console.log(result);

            let fr = new FileReader();
            fr.readAsDataURL(result);
            new Promise((reslove, reject) => {
                fr.onload = function () {
                    reslove(fr.result);
                };
            }).then((data) => {
                let img = document.querySelector("img");
                img.src = data;
            });
        },
        xhrstatechange() {
            if (this.xhr.readyState == 4 && this.xhr.status == 200) {
                alert(this.xhr.responseText);
            } else {
                // alert(this.xhr.statusText);
            }
        },
    },
};
</script>

<style>
</style>