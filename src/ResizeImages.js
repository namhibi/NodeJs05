const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
function resizeImages(directoryPath, size) {
  let files = fs.readdirSync(directoryPath);
  files.forEach(file => {
    const imagePath = path.join(directoryPath, file);
    const stat = fs.statSync(imagePath);
    if (stat.isDirectory()) {
      resizeImages(imagePath,size);
    } else {
      sharp(imagePath)
        .metadata()
        .then(metadata => {
          const width = Math.round(metadata.width * size);
          const height = Math.round(metadata.height * size);
          sharp(imagePath)
            .resize(width, height)
            .toBuffer()
            .then(data => {
              fs.writeFile(imagePath, data, err => {
                if (err) {
                  console.error('Lỗi khi ghi đè lên hình ảnh:', err);
                } 
              });
            })
            .catch(err => {
              console.error('Lỗi khi resize hình ảnh:', err);
            });
        })
        .catch(err => {
          console.error('Lỗi khi lấy thông tin hình ảnh:', err);
        });
    }
  });
}
resizeImages('/Users/user/Desktop/TheNam_JS05/Newfolder', 0.7);