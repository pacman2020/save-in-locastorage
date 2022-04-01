const key_name = document.querySelector('#key_name')
const content = document.querySelector('#content')
const btn_send = document.querySelector('#btn_send')

const key_find = document.querySelector('#key_find')
const btn_find = document.querySelector('#btn_find')
const infor = document.querySelector('.infor')

const key_find_del = document.querySelector('#key_find_del')
const btn_find_del = document.querySelector('#btn_find_del')

btn_find_del.addEventListener('click', ()=>{
    let res = confirm(`deseja realmente excluir ${key_find_del.value}: `)
    if (res) {
        alert('dado excluido')
        localStorage.removeItem(key_find_del.value)
        key_find_del.value = ''
    } else {
        alert('excluzão cancelada!')
        key_find_del.value = ''
    }

})

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