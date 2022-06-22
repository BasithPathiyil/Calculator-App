function getValue(e){
    const sumbutton=document.querySelector(".operatorsum")
    const minusbutton=document.querySelector(".operatorminus")
    const multiplybutton=document.querySelector(".operatormultiply")
    const devisionbutton=document.querySelector(".operatordevision")

    document.querySelector(".previousvalue").innerHTML+=e.target.value
    if(e.target.value=="-" || e.target.value== "+" || e.target.value== "*" || e.target.value== "/"){
        document.querySelector(".currentvalue").innerHTML=""
        sumbutton.disabled=true
        minusbutton.disabled=true
        multiplybutton.disabled=true
        devisionbutton.disabled=true
    }else{
        document.querySelector(".currentvalue").innerHTML+=e.target.value
        sumbutton.disabled=false
        minusbutton.disabled=false
        multiplybutton.disabled=false
        devisionbutton.disabled=false
        

    }
    
}
function calc(){
    let result=eval(previousvalue1.innerHTML)
    document.querySelector(".currentvalue").innerHTML=result

}
