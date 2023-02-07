let s_menu = document.querySelectorAll('.s_menu ul > li > a')
let sm_subMenu = document.querySelectorAll('.sm_subMenu')
let sm_subMenu_a = document.querySelectorAll('.sm_subMenu > li > a')
let sm_subMenu_span = document.querySelectorAll('.sm_subMenu > li > a > span')
let boolean = true
let product = document.querySelectorAll('.s_product .product_contents')
let scroll = document.querySelector('main')
let fixed = document.querySelector('.sub_right')

/* menu_click >> s_menu-open */
for(let t of sm_subMenu){t.style.display='none'}
s_menu.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        if(boolean==true){
            t.style.color = '#00b6f0'
            t.style.fontWeight = '600'
            t.nextElementSibling.style.display='block'
            boolean = false
        }else{
            t.style.color = '#222'
            t.style.fontWeight = ''
            t.nextElementSibling.style.display='none'
            boolean = true
        }
    })
})
/* subMenu_a-mouseover >> color_change */
sm_subMenu_a.forEach(function(t,i){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        t.style.color = '#00b6f0',
        sm_subMenu_span[i].style.backgroundColor = '#00b6f0'
    })
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        t.style.color = '#222',
        sm_subMenu_span[i].style.backgroundColor = ''
    })
})

/* s_product_hover */
for(let c of product){
    c.addEventListener('mouseover',function(e){
        e.preventDefault()
        c.style.scale = '0.9'
        c.style.border = '0'
    })
    c.addEventListener('mouseout',function(e){
        e.preventDefault()
        c.style.scale = '1'
        c.style.border = '1px solid #00b6f0'
    })
}

//scroll >> s_menu-fix
/* window.addEventListener('scroll',function(){
    if(scroll.getBoundingClientRect().y <=400){
        
    }
}) */