const apiUrl=' https://icanhazdadjoke.com'
const jokeSection=document.querySelector('.joke')
let jokeParagraph=document.querySelector('.jokeParagraph')
let generateButton=document.querySelector('.generateAnButton');

fetchAPi=async ()=>{
    response=await fetch(apiUrl,{headers:{'accept':'Application/json'}}
    )
data=await response.json()
jokeParagraph.textContent=data.joke
}
generateButton.addEventListener('click',()=>{fetchAPi();})



fetchAPi()