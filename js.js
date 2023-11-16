const button=document.querySelector('.btn');
const notesContainer=document.querySelector('.notes')
let notes=document.querySelector('.input-box')

button.addEventListener('click',function(){
    let inputBox=document.createElement('p')
    let img=document.createElement('img')
    inputBox.className='input-box'
    inputBox.setAttribute('contenteditable','true');
    img.src='delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
}
)
notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName==="P"){
       notes=document.querySelectorAll('.input-box')
       notes.forEach(nt,()=>{
        nt.onkeyup=function(){
            saveData();
        }
       })
    }
})


function saveData(){
    localStorage.setItem('data',notesContainer.innerHTML);
}
function showData(){
    notesContainer.innerHTML=localStorage.getItem('data');
}
showData();