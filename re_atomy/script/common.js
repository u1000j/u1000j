let nav = document.querySelectorAll('.gnb > ul > li')
let nav_all = document.querySelectorAll('.gnb > ul > li > a')
let sub = document.querySelectorAll('.sub')
let sub_bg = document.querySelector('.nav_bg')
let sub_a = document.querySelectorAll('.sub > li a')
console.log(nav, sub, sub_bg, sub_a)

/* sub숨기기 */
for(let sub_all of sub){
    sub_all.style.height = '0'
    sub_all.style.overflow = 'hidden'
    sub_all.style.transition = 'height 0.3s'
}

/* nav_li-mouseover >> sub,sub_bg-show */
for(let t of nav){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        for(let sub_all of sub){sub_all.style.height = '650px'; sub_all.style.opacity = '1'}
        console.log(this)
        this.children[0].style.color = '#222'
        sub_bg.style.height = '650px'
        sub_bg.style.borderTop = '2px solid #f3f4f5'
    })
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        for(let sub_all of sub){sub_all.style.height = '0'; sub_all.style.opacity = '1'}
        for(let i of nav_all){i.style.color = '#fff'}
        sub_bg.style.height = '0'
        sub_bg.style.borderTop = '0'
    })
}
//sub_a-mouseover >> nav_color
for(let t of sub_a){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        console.log(this)
        t.style.color = '#222'
        this.parentNode.parentNode.parentNode.parentNode.style.color = '#ff0e00'
    })
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        t.style.color = '#fff'
        this.parentNode.parentNode.parentNode.parentNode.style.color = '#fff'
    })
}