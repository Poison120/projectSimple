
const section=document.querySelector('.clock-box');
const display=document.querySelector('.t-value')
const day=document.querySelector('.day')
const date=document.querySelector('.date')
time=()=>{
    a=(setInterval (()=>{
        display.style.color='blue';
        display.textContent= new Date().toLocaleTimeString();
        d=new Date().getDay();
        date.textContent=new Date().getUTCFullYear()
       switch(d){
        case 0:  day.textContent='sunday' ;break;
        case 1:  day.textContent='monday'; break;
        case 2:  day.textContent='tuesday'; break;
        case 3:  day.textContent='wednesday'; break;
        case 4:   day.textContent='thrusday';break;
        case 5:  day.textContent='friday'; break;
        case 6:   day.textContent='saturday'; break;
        default:  day.textContent='day not found'
       }

        
    },1000))
   
}
time();
value=0;
const stopped=document.querySelector('.stoppedTime')
const stopwatch=document.querySelector('.stopwatch-box')
output=document.querySelector('.timing')
stopwatch.addEventListener('click',(c)=>{
    if(c.target.value==='start'){
       a= setInterval(()=>{
        value+=1;
        output.value=value;
        

    } ,1000)}
    if(value===0 && c.target.value==="stop"){
        output.value=0;
        clearInterval(a);
        stopped.textContent=`stopped at  ${value} second`;
        value=0;

    }
    else if(value!==0 && c.target.value==="stop"){
        output.value=0;
        clearInterval(a);
        stopped.textContent=`stopped at  ${value} second`;
        value=0;
        
    }
})

start=document.querySelector('.stoppedTime')