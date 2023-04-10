const fs = require("fs");

fs.appendFile("HelloWorld.txt", "My name is Sam", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("file updated")
    }
})