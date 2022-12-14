
register = () => {
    var url = 'http://localhost:8080/api/auth/registrar';
    var nombres = $("#nombres").val();
    var apellidos = $("#apellidos").val();
    var email = $("#email").val();
    var telefono = $("#telefono").val();
    var passwordPlain = $("#passwordPlain").val();


    var data = {
        "nombres":nombres,
        "apellidos":apellidos,
        "email": email,
        "telefono":telefono,
        "passwordPlain":passwordPlain
    };
    
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    window.location.href = "http://127.0.0.1:5500/login.html";
    

}