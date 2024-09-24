output=document.querySelector('.output');

value='';
buttonBox=document.querySelector('.buttons')
buttonBox.addEventListener('click',(e)=>{
    if(e.target.value!=='c' && e.target.value!=='=' ){
value+=e.target.value;
output.value=value;}
 if(e.target.value ==="c"){
    output.value="";
    value=''
}
 if(e.target.value=='='){
    value=eval(value)
    output.value=value;
    
}
})
