const submitBtn=document.querySelector('.submit');
const input=document.querySelector('.enterTask');
let task=JSON.parse(localStorage.getItem('todo') )|| [];
output=document.querySelector('.output')
table=`<table class='table'border=1 > <tr>
<th>#</th>
<th>task</th>
<th>del</th>
</tr>
`


const showoutput=()=>{
  let data='';
    for(let i=0; i<task.length;i++){
      data+= ` <tr>
        <td>${i+1}</th>
        <td>${task[i]}</th>
        <td><button class="delete" onclick="del(${i})">delete</button></th>
        </tr>`

       
        
        }
        output.innerHTML=table+data;}
    del=(index)=>{
      let del=task.splice(index,1);
      localStorage.setItem('todo',JSON.stringify(task))
      
 
      showoutput();
   }
   
submitBtn.addEventListener('click',()=>{
   a=input.value.trim();
    task.push(input.value);
    
   localStorage.setItem('todo',JSON.stringify(task))
 
//    table.innerHTML('todo',JSON.stringify(value))
input.value='';


   showoutput();
 

})
showoutput();
