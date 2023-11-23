#Tên dự án: Assignment NodeTool
#Mô tả
Dự án thực hành NodeJS đọc ghi và tạo các file.
1. function read json file => javascript object
-'./src/ReadJsonAndChange.js'
-Hàm readJsonFileToObject(jsonPath) với jsonPath là đường dẫn tới file json, Hàm sẽ trả về 1 json object
2. add one more property for result => write it to your file
-'./src/ReadJsonAndChange.js'
- Hàm writeJsonFile(jsonObject,jsonPath) với jsonObeject là một đối tượng,jsonPath là đường dẫn tới file json
- Có thể dùng hàm testReadAndWrite(property,data,jsonPath) để test 2 chức năng trên. Với property là trường, data là giá trị, jsonPath là đường dẫn tới file json
3. function search all image in a folder 
- './src/ReadAllImage.js'
- Hàm readAllImage(directoryPath) với directoryPath là đường dẫn tới folder cần lấy hình ảnh
- Hàm sẽ lưu lại các đường dẫn image vào mảng.
4. function copy all image type "png" to new folder
- './src/ReadAllImage.js'
- Hàm copyImage(folderName, ...extensions) với folderName là tên folder muốn dặt,...extensions truyền các định dạng muốn copy
- Hàm sẽ tạo 1 folder và lưu các hình ảnh copy vào folder đó
5. function resize all images to 70%
- './src/ResizeImages.js'
- Hàm resizeImages(directoryPath, size) với directoryPath là đường dẫn tới folder cần resize, size là kích thước muốn resize so với ban đầu.
- Hàm sẽ resize và ghi đè hình ban đầu.
6. tool create index.js, import all script in "src"
- Hàm function getJSFile(directoryPath, ...extensions) với directoryPath là đường dẫn tới thư mục chứa file, ...extensions là định dạng các file muốn giữ đuôi
- Hàm sẽ đọc các file và định dạng import vào biến content
