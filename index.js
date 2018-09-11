const app = "I don't do much."

function moveDodgerRight(){
  var rightNumbers = dodger.style.left.replace("px","")
  var right = parseInt(rightNumbers,10)
  
  if (right<360){
    dodger.style.right = `${left - 1}px`
  }
}