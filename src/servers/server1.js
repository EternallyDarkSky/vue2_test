const express = require('express')
const fs = require('fs')
const app = express()
const multiparty = require('multiparty')

app.post('/students', (req, res) => {
    let form = new multiparty.Form();
 
    form.parse(req, function (err, fields, files) {
        try {
            console.log(files);
            let inputFile = files.file[0];
            let newPath = "C:/Users/DingZhiQiang/Desktop" + "/" + inputFile.originalFilename;
            fs.renameSync(inputFile.path, newPath);
            
            res.send({ data: "上传成功！" });
        } catch (err) {
            console.log(err);
            res.send({ err: "上传失败！" });
        };
    })
})

app.listen(5000, (err) => {
    if (!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})
