
let inputValue=document.querySelector("#inputVal");
let imageValue=document.querySelector("#image")
let buttonValue=document.querySelector(".btn");

buttonValue.addEventListener('click',()=>{
  let inputText=inputValue.value;
  
  if(inputText==''){
    alert("Please enter a valid URL");
    return;
  }
  else{
    imageValue.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
    imageValue.alt=`QR Code for ${inputText}`;
  }
  
})