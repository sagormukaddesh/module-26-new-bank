document.getElementById('btn-submit').addEventListener('click', function(){
  const emailFiled = document.getElementById('user-email');
  const email = emailFiled.value;
//  console.log(email)
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password)
if(email ==='sagor@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html'
}else{
    alert('vul ache')
}


})