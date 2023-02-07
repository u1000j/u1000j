let s_menu = document.querySelectorAll('.sm_menu > ul > li > a')
let s_subMenu = document.querySelectorAll('.sm_menu_sub')
let boolean = true
let s_menu_all = document.querySelector('.sm_left')
let s_main_bg = document.querySelector('.s_main_bg')

console.log(s_menu, s_subMenu, s_menu_all)

//메뉴 눌렀을때 서브메뉴 나오기
for(let t of s_subMenu){t.style.display='none'} //초기숨기기
s_menu.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        if(boolean==true){
            console.log(t)
            console.log(t.nextElementSibling)
            t.nextElementSibling.style.display='block'
            boolean = false //계속 true인 경우x
        }else{
            t.nextElementSibling.style.display='none'
            boolean = true
        }
    })
})

//스크롤 시 메뉴창 픽스
window.addEventListener('scroll',function(){
    if(s_main_bg.getBoundingClientRect().y <=400){
        s_menu_all.style.position = 'fixed'
    }
})

