document.querySelector("#submit").addEventListener("click", function () {
    buildChristmasObject()
})

document.querySelector("#char").addEventListener("keyup", function () {
    console.log(event.keyCode)
     if (event.keyCode === 13) {
         buildChristmasObject()
     }
 })

document.querySelector("#height").addEventListener("keyup", function () {
   console.log(event.keyCode)
    if (event.keyCode === 13) {
        buildChristmasObject()
    }
})

const buildChristmasObject = () => {
    let char = document.querySelector("#char").value
    if (char.length === 1) {
        let tree = {
            height: document.querySelector("#height").value,
            char: char
        }
        printChristmasTree(tree)
    } else {
        console.log("Must be one character")
    }
}

const printChristmasTree = (tree) => {
    let space = " "
    let letterCounter = 1;
    for (let i = tree.height; i != 0; i--) {
        console.log(space.repeat(i) + tree.char.repeat(letterCounter))
        letterCounter += 2;
    }
}   
