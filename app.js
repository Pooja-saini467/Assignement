$(document).ready(function(){
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });
  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');
    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }
  });
  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
});

searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}
window.onscroll = () =>{
  searchForm.classList.remove('active');
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
}  
window.onload = () =>{
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
}else{
document.querySelector('.header .header-2').classList.remove('active');
}
fadeOut();
}
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
  setTimeout(loader, 4000);
}
  var email = document.forms['form']['email'];
  var password = document.forms['form']['password'];
  
  var email_error = document.getElementById('email_error');
  var pass_error = document.getElementById('pass_error');
  
  email.addEventListener('textInput', email_Verify);
  password.addEventListener('textInput', pass_Verify);
  
  function validated(){
    if (email.value.length < 9) {
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false;
    }
    if (password.value.length < 6) {
      password.style.border = "1px solid red";
      pass_error.style.display = "block";
      password.focus();
      return false;
    }
  
  }
  function email_Verify(){
    if (email.value.length >= 8) {
      email.style.border = "1px solid silver";
      email_error.style.display = "none";
      return true;
    }
  }
  function pass_Verify(){
    if (password.value.length >= 5) {
      password.style.border = "1px solid silver";
      pass_error.style.display = "none";
      return true;
    }
  }
  
  
  
  
  
      