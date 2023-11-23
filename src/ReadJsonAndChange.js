const fs=require('fs');
const path=require('path');
function readJsonFileToObject(jsonPath){
let data=fs.readFileSync(jsonPath,'utf8');
return  JSON.parse(data);
}
function writeJsonFile(jsonObject,jsonPath){
    const jsonContent = JSON.stringify(jsonObject, null, 2);
    fs.writeFile(jsonPath, jsonContent, (err) => {
        if (err) {
          console.error('Lỗi khi ghi file:', err);
          return;
        }
        console.log('File được ghi thành công.');
      });
}
function testReadAndWrite(property,data,jsonPath){
    let jsonData=readJsonFileToObject(jsonPath);
    jsonData[property]=data;
    writeJsonFile(jsonData,jsonPath);
}
testReadAndWrite("score",250,'/Users/user/Desktop/TheNam_JS05/data.json');