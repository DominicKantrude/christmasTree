document.querySelector("#submit").addEventListener("click", function(){
   let height= document.querySelector("#height").value
    let char = document.querySelector("#char").value
    if(char.length === 1){
  
    printChristmasTree(height, char)
    }else{
        console.log("Must be one character")
    }
})


const printChristmasTree = (height, letter) => {
    let space = " "
    let letterCounter = 1;
        for(let i=height; i != 0; i--){
            console.log(space.repeat(i)+ letter.repeat(letterCounter))
            letterCounter+=2;
        }
}   
