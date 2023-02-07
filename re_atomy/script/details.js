let product = document.querySelectorAll('.product .product_contents')
let plus = document.querySelector('#plus')//수량더하기
let number = document.querySelector('#quantity')//수량
let minus = document.querySelector('#minus')//수량빼기
let result = document.querySelector('#total > span')//총금액
let num = 0
let price = 34800
let total = 0
console.log(product, plus, number, minus, result, num, price, total)

/* product_hover */
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

/* product_total */
plus.addEventListener('click',function(){
    if(num<10){
        num++
        number.innerHTML = num
        total = num*price
        result.innerHTML = total
    }else{
        window.alert('10팩 이상 구매 제한')
    }
})
minus.addEventListener('click',function(){
    if(num<11){
        num--
        number.innerHTML = num
        total = num*price
        result.innerHTML = total
        if(num<=-1){
            window.alert('1팩부터 구매 가능합니다')
            number.innerHTML = 0
            total = 0
            result.innerHTML = total
        }
    }
})