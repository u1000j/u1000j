let login_btn = document.querySelector('.login_btn')
let login_contents = document.querySelector('.login_contents')
let nonMember_btn = document.querySelector('.non_member')
let nonMember_contents = document.querySelector('.nonMember_contents')

nonMember_btn.addEventListener('click',function(){
    login_contents.style.display = 'none'
    nonMember_contents.style.display = 'block'
    this.style.color = '#222'
    this.style.fontWeight = '500'
    login_btn.style.color = '#fff'
})
login_btn.addEventListener('click',function(){
    nonMember_contents.style.display = 'none'
    login_contents.style.display = 'block'
    this.style.color = '#222'
    this.style.fontWeight = '500'
    nonMember_btn.style.color = '#fff'
})