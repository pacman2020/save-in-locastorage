const key_name = document.querySelector('#key_name')
const content = document.querySelector('#content')
const btn_send = document.querySelector('#btn_send')

const key_find = document.querySelector('#key_find')
const btn_find = document.querySelector('#btn_find')
const infor = document.querySelector('.infor')


btn_send.addEventListener('click',()=>{
    try {
        console.log(key_name.value, content.value)
        localStorage.setItem(`${key_name.value}`,content.value)
        key_name.value = ''
        alert('save')
    
    } catch (error) {
        alert(error)
    }
})

btn_find.addEventListener('click', ()=>{
    if(localStorage.getItem(key_find.value)){
        infor.innerHTML = localStorage.getItem(key_find.value)
        key_find.value = ""
    }
})