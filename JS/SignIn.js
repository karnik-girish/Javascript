function onSignIn(){
    const email =  document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value;
    if (email == "" || password =="")
    {
        alert("Please fill the information");        
    }
    else
    {
        var userLst = JSON.parse(localStorage.getItem("RegisteredUsers")) || [];
        if(userLst.length>0) 
        {
            var user =  userLst.find( userObj => userObj.email === email && userObj.password ===password);
            if(user==undefined){
                alert("User doesn't exist");           
            }
            else{
                window.location.href ="ToDo.html"
           }
        }
        else{
           alert("no users are registered")
        }
    }
}


