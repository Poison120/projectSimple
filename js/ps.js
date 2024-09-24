input=document.querySelector('.inputToCheck')
paragraph=document.querySelector('.overview')

function fn(){
    input.addEventListener('input',()=>{
        if(input.value.length!==0){
            paragraph.textContent=strength(input.value);
        }

    })
}
let onpage;
function strength(n){
    onpage;
    s=0;
    if(n.length>=8){
        s++;
    }
    if(/[0-9]/.test(n)){
        s++;
    }
    if(/[~!@#$%^&*()]/.test(n)){
        s++;
    }
    if(/[A-Z]/.test(n)){
        s++;
    }

if(s===0){
    onpage='enter the password'
    

}
else if(s===1){
    onpage='weakest'
    
}
else if(s===2){
    onpage="middle"
   
}
else if(s===3){
    onpage="strong"
   
}
else if(s===4){
    onpage="very strong"
}
return onpage;
}
fn()
