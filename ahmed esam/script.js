searchform = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick =()=>{
    searchform.classList.toggle('active');
}
let loginform =document .querySelector('.login-form-container');
document .querySelector('.#login-btn') .onclick =()=>{
    loginform.classList.toggle('.active');
}
document .querySelector('.#login-btn') .onclick =()=>{
    loginform.classList.remove('.active');
}
window.onscroll =()=>{
    searchform.classList.toggle('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
        
    }else{
        document.querySelector('.header .header-2').classList.add('active');

    }
}
window.onload =()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
        
    }else{
        document.querySelector('.header .header-2').classList.add('active');

    }
}

