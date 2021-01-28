//menu-btn ласс на кнопке бургера

document.querySelector('.menu-btn').addEventListener('click',()=>{
    //.toggle() добавляет класс если его нет и удаляет если он есть
    document.querySelector('.menu-btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
})
//.header_menu_item это класс который в ссылках меню.
   // нужен при закрытии при клике на них
document.querySelectorAll('.header_menu_item').forEach((oneEl)=>{
    //oneLink это имя одной ссылки меню. придумываем сами название.
    oneEl.addEventListener('click',()=>{
        document.querySelector('.menu-btn').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active')
    })
})
