let nav = document.querySelectorAll('nav > ul > li')
let nav_all = document.querySelectorAll('nav > ul > li > a')
let sub = document.querySelectorAll('.sub')
let sub_bg = document.querySelector('.nav_bg')
let sub_a = document.querySelectorAll('.sub > a')
console.log(nav, sub, sub_bg, sub_a)

//sub숨기기
for(let sub_all of sub){
    sub_all.style.height = '0'
    sub_all.style.overflow = 'hidden'
    sub_all.style.transition = 'height 0.3s'
}
//nav>li 마우스올렸을때 sub, sub_bg보이고, 마우스나가면 숨기기
for(let t of nav){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        for(let sub_all of sub){sub_all.style.height = '500px'; sub_all.style.borderTop = '2px solid #faebd7'}
        sub_bg.style.height = '500px'
        console.log(this)
        this.children[0].style.color = '#ce0e2d'
        sub_bg.style.display = 'block'
    })
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        for(let sub_all of sub){sub_all.style.height = '0'; sub_all.style.border = 'none'}
        sub_bg.style.height = '0'
        for(let i of nav_all){i.style.color = '#222'}
        sub_bg.style.display = 'none'
    })
}
//sub_a 마우스올렸을때 nav글자 색상변화
for(let t of sub_a){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        console.log(this)
        this.parentNode.parentNode.parentNode.parentNode.style.color = '#ce0e2d'
    })
}
