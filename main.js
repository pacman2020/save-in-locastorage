const key_name = document.querySelector('#key_name')
const content = document.querySelector('#content')
const btn_send = document.querySelector('#btn_send')

const key_find = document.querySelector('#key_find')
const btn_find = document.querySelector('#btn_find')
const ul = document.querySelector('.ul')


btn_send.addEventListener('click',()=>{
    console.log(key_name.value, content.value)
    localStorage.setItem(`${key_name.value}`,content.value)
    alert('save')
})

btn_find.addEventListener('click', ()=>{
    if(localStorage.getItem(key_find.value)){
        ul.innerHTML = localStorage.getItem(key_find.value)
    }
})