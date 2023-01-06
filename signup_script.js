function register(){
    const name = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    var msg = "Name: " + name + " Email: " + email
    console.log(msg);
}
