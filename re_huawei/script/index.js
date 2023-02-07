/* m1_bnr >> swiper */
let slide = new Swiper('.m1_bnr .swiper-container',{
    direction:'horizontal',
    autoplay:{delay:2000,},
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
    }
})
/* m2_notebook >> swiper */
const m2_btm_swiper = new Swiper('.m2_notebook .btm .swiper-container',{
    direction:'horizontal',//기본
    autoplay:{delay:2000},//속도1초
    loop:true,//반복
    slidesPerView:3,//한번에 보이는 슬라이드 개수
    spaceBetween:22,//슬라이드 사이 여백
    navigation:{
        nextEl:'.m2_notebook .swiper-button-next',
        prevEl:'.m2_notebook .swiper-button-prev'
    }
})
/* m3_tablet >> swiper */
const m3_btm_swiper = new Swiper('.m3_tablet .btm .swiper-container',{
    direction:'horizontal',//기본
    autoplay:{delay:2000},//속도1초
    loop:true,//반복
    slidesPerView:3,//한번에 보이는 슬라이드 개수
    spaceBetween:22,//슬라이드 사이 여백
    navigation:{
        nextEl:'.m3_tablet .swiper-button-next',
        prevEl:'.m3_tablet .swiper-button-prev'
    }
})
/* m4_wearable >> swiper */
const m4_btm_swiper = new Swiper('.m4_wearable .btm .swiper-container',{
    direction:'horizontal',//기본
    autoplay:{delay:2000},//속도1초
    loop:true,//반복
    slidesPerView:3,//한번에 보이는 슬라이드 개수
    spaceBetween:22,//슬라이드 사이 여백
    navigation:{
        nextEl:'.m4_wearable .swiper-button-next',
        prevEl:'.m4_wearable .swiper-button-prev'
    }
})