let UserInput = "576843929238746"

function checkOddEvenInput() {
     let A = Number(UserInput)
     let divideA = A/2
     let  B = divideA.toString();
     if (B.includes(".")){
          console.log("it's odd")

     } else {
          console.log("it's event")
     }
}

checkOddEvenInput()
