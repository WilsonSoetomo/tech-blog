//attach event listerner to loginButton
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
        console.log('success');
        return res.json();
    }).then((res)=>{
        window.location.href = '/';
    }).catch((err)=> {
        console.log('error', err);
    });
});