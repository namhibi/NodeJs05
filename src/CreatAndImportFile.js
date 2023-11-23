const fs = require('fs');
const path = require('path');

let content = '';

function creatfile(fileName, content) {
    try {
        fs.writeFileSync(fileName, content);
    } catch (err) {
        console.error('Lỗi khi tạo tệp tin:', err);
    }
}

function getJSFile(directoryPath, ...extensions) {
    let files = fs.readdirSync(directoryPath);
    const fileExtensions = extensions;
    const rootPath = path.resolve(__dirname, '..');

    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getJSFile(filePath, ...fileExtensions);
        } else {
            const ext = path.extname(file).toLowerCase();
            const name = path.basename(file, ext);
            
            if (fileExtensions.includes(ext)) {
                content += `import ${name} from '${filePath.replace(rootPath, '.')}';\n`;
            }else{
                content += `import ${name} from '${filePath.replace(rootPath, '.').replace(ext,'')}';\n`;
            }
        }
    });
    
    // Sau khi duyệt qua tất cả các file, gọi hàm creatfile để tạo tệp index.js
    creatfile('./index.js', content);
}

getJSFile('/Users/user/Desktop/TheNam_JS05/src', '.js');
