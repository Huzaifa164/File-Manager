let fs = require("fs");
let path = require("path");
function treeFn(dirPath){
    if(dirPath == undefined){
        treeHelper(process.cwd(), "");
    }else{
        doesPathExist = fs.existsSync(dirPath);
        if(doesPathExist){
            treeHelper(dirPath, "");          
        }
        else{
            console.log("Kindly enter the correct path.")
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    // is File or Folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    }else{
        let folderName = path.basename(dirPath);
        console.log(indent + "└──" + folderName);
        let childrens = fs.readdirSync(dirPath);
        for(let i = 0; i < childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey : treeFn
}