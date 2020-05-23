const fs = require('fs');

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {      // delete file on server with unlink
        if (err) {
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;