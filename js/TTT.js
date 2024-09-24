clickable=document.querySelectorAll('.button');
outputH=document.querySelector('.output')
pattern=[[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[6,4,2]]
o=true;
clickable.forEach((element,index,array,)=>{
    element.addEventListener('click',()=>{
        if(o){
            element.textContent='O';
            o=false;

        }
        else{
            element.textContent='X'
            o='true'

            
        }
        output();

        element.disabled;

    } )
   
})
function output(){
    for(elements of pattern){
      
        p1=clickable[elements[0]].innerText
        p2=clickable[elements[1]].innerText
        p3=clickable[elements[2]].innerText
        if(p1!=='' && p2!=='' && p3!==''){
            if(p1===p2 && p2===p3){
                outputH.innerText=`${p1} wins`
        }
        
}}}
document.querySelector('.reset').addEventListener('click', () => {
    clickable.forEach(button => {
        button.textContent = '';
        button.disabled = false;
        outputH.innerText=''
    })})
