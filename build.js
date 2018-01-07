
const fs = require("fs")
const path = require("path")

fs.readdir('./markdown', function(error, files){
    for(var i = 0; i < files.length; i++) {
        var p = path.join("./markdown", files[i]);
        var markdown = fs.readFileSync(p).toString();
        var template = fs.readFileSync("./template.html").toString()
        var result = template.replace("%content%", markdown)
        fs.writeFileSync(files[i].substring(0, files[i].length-3)+".html", result)
    }
})