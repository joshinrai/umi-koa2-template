const sourcePath = require('path');
const sourceFs = require('fs');

class LibFileReader {
  filePath: string;
  fileType: string;
  constructor(path: string, type: string) {
    this.filePath = sourcePath.resolve(__dirname, path);
    this.fileType = type;
  }
  readFile(name: string) {
    return new Promise((resolve, reject) => {
      sourceFs.readFile(sourcePath.join(this.filePath, name), 'utf8', (err: any, data: any) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
  readDir() {
    return new Promise((resolve, reject) => {
      sourceFs.readdir(this.filePath, async (err: any, files: any) => {
        if (err) reject(err);
        const filesArray = files.filter((name: string) => name.substring(name.lastIndexOf('.')) === this.fileType);
        return await Promise.all(filesArray.map((fileName: string) => this.readFile(fileName)));
      });
    });
  }
};

module.exports = LibFileReader;
