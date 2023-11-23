const fs = require('fs');
const path = require('path');
const directoryPath = '/Users/user/Desktop/TheNam_JS05/basics';
let imagesSrc = [];
let directories = [];
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
function readAllImage(directoryPath) {
    let files = fs.readdirSync(directoryPath);
    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            readAllImage(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
                imagesSrc.push(filePath);
            }
        }
    });
}
function copyImage(folderName, ...extensions) {
    let imagExtensions = extensions;
    fs.mkdir(folderName, (err) => {
        if (err) {
          console.error('Lỗi khi tạo thư mục:', err);
        } else {
          console.log('Thư mục đã được tạo thành công!');
        }
      });
    imagesSrc.forEach(imageSrc => {
        const ext = path.extname(imageSrc).toLowerCase();
        if (imagExtensions.includes(ext)) {
            const targetPath = path.join(folderName, path.basename(imageSrc));
            fs.copyFileSync(imageSrc, targetPath);
        }
    });
}
readAllImage(directoryPath);
copyImage("./Newfolder", '.png');
