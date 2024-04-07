/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
   const input = document.getElementById(inputPass),
         iconEye = document.getElementById(inputIcon)
         
   iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
           // Switch to text
           input.type = 'text'

           // Add icon
           iconEye.classList.add('ri-eye-line');
           // Remove icon
           iconEye.classList.remove('ri-eye-off-line');
       }else{
           // Change to password
           input.type = 'password'

           // Remove icon
           iconEye.classList.remove('ri-eye-line')
           // Add icon
           iconEye.classList.add('ri-eye-off-line')
       }
   })
} 

showHiddenPass('input-pass','input-icon')
function store() {
    localStorage.setItem('saikiranbompelliwar0592@gmail.com', "saikiran@8897");
    localStorage.setItem('princesahoo123@gmail.com', "prince@123");
    localStorage.setItem('dibya234@gmail.com', "dibya@234");
}
store();

document.querySelector('.login__button').addEventListener('click', (e) =>{
    e.preventDefault();
    let email = document.querySelector('#input-email').value;
    let pw = document.querySelector("#input-pass").value;
    if(localStorage.getItem(email) != pw){
        alert("Incorrect Email or Password");
    } else{
        location.replace("home.html");
    }
}); 