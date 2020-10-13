const form = document.querySelector('#login-form');
// password must container Uppercase, lowercase, one special character and a numeric character
const pass_reg = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

username.addEventListener('input', validate);
password.addEventListener('input', validate);

form.addEventListener('submit', function (e){
    e.preventDefault();

    alert('Hello world');
    return true;
});

function validate(e) {
   
    let target = e.target;
    
    if(target.name == "password"){
        //password validation
        

        if(pass_reg.test(target.value)){
            target.classList.add('valid');
            target.classList.remove('invalid');
        }else if(target.value == ""){
            target.classList.remove('invalid');
            target.classList.remove('valid');
        } else {
            target.classList.add('invalid');
            target.classList.remove('valid');
        } 
    }
    if(target.name == "username"){
        //username validation
        if (e.target.value.length > 3) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
           }else if(target.value == ""){
            target.classList.remove('invalid');
            target.classList.remove('valid');
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
           }
    }
}