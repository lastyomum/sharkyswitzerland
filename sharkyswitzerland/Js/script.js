function check() {
    var username = document.getElementById("user").value
    var password = document.getElementById("pass").value
    if(username == "Money58" && password == atob('aWg4dXNvbXVjaA==')) {
        window.location.href = "dashboard.html"
    }
else if(username == "generic" && password == atob('dXNlcjEyMzQ=')) {
    window.location.href = "dashboard.html"
}



    else {
        alert("Error")
    }
}



function alo() {
    var start = document.getElementById("alot").value
 alert(start)
   
}