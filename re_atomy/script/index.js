/* p1_bnr >> swiper */
let slide = new Swiper('.p1_bnr .swiper-container',{
    direction:'horizontal',
    autoplay:{delay:3500,},
    pagination:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }
})
/* p2_hotNew >> swiper */
let p2_slide = new Swiper('.p2_hotNew .swiper-container',{
    direction:'horizontal',
    autoplay:{delay:3500,},
    pagination:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    slidesPerView:4,
})
/* p3_brandshop */
let p3_scale = document.querySelectorAll('.bs_contents a')
for(let s of p3_scale){
    s.addEventListener('mouseover',function(e){
        e.preventDefault()
        s.style.backgroundSize = '110%'
    })
    s.addEventListener('mouseout',function(e){
        e.preventDefault()
        s.style.backgroundSize = '100%'
    })
}
/* p4,p6,p7 product_hover */
let product = document.querySelectorAll('.product .product_contents')
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
/* p4,p6,p7 category > a_hover */
let category_a = document.querySelectorAll('.category div a')
console.log(category_a)
for(let t of category_a){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        t.style.backgroundColor = '#fff'
    })
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        t.style.backgroundColor = ''
    })
}
/* p5_beauty txt_up */
let beuaty = document.querySelectorAll('.beauty_product')
let beauty_txt = document.querySelectorAll('.beauty_product_txt')
console.log(beuaty, beauty_txt)
beuaty.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        console.log('잘?')
        beauty_txt[i].style.opacity = '1'
    })
    t.addEventListener('mouseout',function(){
        beauty_txt[i].style.opacity = '0'
    })
})
