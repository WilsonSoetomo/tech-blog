//attach event listerner to loginButton
if(document.getElementById("loginButton")){
document.querySelector('#loginButton').addEventListener('click', function(event) {
  event.preventDefault();
  var username = document.querySelector('#username').value;
  var password = document.querySelector('#password').value;
  var data = {
    username: username,
    password: password
  };
  //send data to server
  fetch('/api/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }).then((res)=> {
        if(res.ok){
            console.log('success');
        console.log(res);
        window.location.href = '/'; 
        return res.json();
        }else {
            alert("Wrong Username or Password");
        }
       
    }).catch((err)=> {
        console.log('error', err);
    });
});
}
if(document.getElementById("submitPost")){
document.querySelector('#submitPost').addEventListener('click', function(event) {
    console.log('submit post');
  event.preventDefault();
  var title = document.querySelector('#titlePost').value;
  var description = document.querySelector('#descriptionPost').value;
  var data = {
    title: title,
    description: description
  };
  //send data to server
  alert('post submitted');
  fetch('/api/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }).then((res)=> {
        console.log('success');
        return res.json();
    }).then((res)=>{
        window.location.href = '/';
    }).catch((err)=> {
        console.log('error', err);
    });
});
}