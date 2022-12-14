
login = () => {
    var url = 'http://localhost:8080/login';
    var username = $("#username").val();
    var password = $("#password").val();


    var data = {
        "username":username,
        "password":password,
    };
    if(username !== undefined && password !== undefined ){
      fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => Postlogin(response));
    }
    
}


Postlogin = (response) => {
    localStorage.setItem("token",response.token);
    console.log(localStorage.getItem("token"));
    response.role == "ADMIN" ? window.location.href = "http://127.0.0.1:5500/adminInmuebles.html" : window.location.href = "http://127.0.0.1:5500/superAdmin.html";
}

