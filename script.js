const buttonList=document.querySelectorAll(".grid-container  button");
const outputContainer=document.getElementById("input");
const clearButton=document.getElementById("clear");
clearButton.addEventListener("click",onClear)
function onClear(){ 
    outputContainer.value="";
}


for(let i=1;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",onButtonClick);
    
}
function onButtonClick(event){
    let target=event.target;
    let currentValue=target.innerText;
    let enteredValue=outputContainer.value;
    const operators=["+","-","*","/"];
    let lastKey=enteredValue[enteredValue.length-1];

    if(operators.includes(lastKey) && operators.includes(currentValue)){
        let newExp=enteredValue.slice(0,enteredValue.length-1)+currentValue;
        outputContainer.value=newExp;
    }
    else if(currentValue=="=" && enteredValue==""){
        alert("Please enter some data !")
    }
    else if(currentValue=="="){
        const result=eval(enteredValue);
        outputContainer.value=result;
    }else{
        outputContainer.value=outputContainer.value+currentValue;
    }

}


