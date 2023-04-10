const fs = require("fs");

fs.readFile("HelloWorld.txt", (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data.toString())
    }
})