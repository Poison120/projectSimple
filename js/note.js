
let note=JSON.parse(localStorage.getItem('notes'))||[];
const submit=document.querySelector('.submit')
let input=document.querySelector('#nameInput')
let outputDiv=document.querySelector('.output');
submit.addEventListener('click',function(){    note.push(input.value);
    input.value=''
    addTOLS();
})
function addTOLS(){
    localStorage.setItem('notes',JSON.stringify(note));
    output();
}

function output(){ 


let html=''
     outputDiv.innerHTML='';
    for(element in note){
        html+=`<div class="noteop">${note[element]}
        <button class="delete"onclick=del(${element}) >delete</button></div>`
    }
  
    outputDiv.innerHTML=html;
}
function del(index){
    note.splice(index,1);

   addTOLS();
}




output();