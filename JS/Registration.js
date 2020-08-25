function onRegisterUser(){   
        
        const fname = document.getElementById("fname").value;        
        const lname = document.getElementById("lname").value;
        const email =  document.getElementById("email").value.toLowerCase();
        const password = btoa(document.getElementById("password").value);
        var gender;
        if(document.getElementById("male").checked){
           gender = "male";
        }
        else{
           gender="female";
        }        
        const address = document.getElementById("address").value;
        const image =  document.getElementById("img").value;
     
        let user ={
            firstName : fname,
            lastName : lname,
            email:email,
            pwd:password,
            gender: gender,
            address: address,
            image:image
        }
    
    if (user.firstName == "" || user.lastName =="" || user.email ==""|| user.pwd =="" || user.gender =="" || user.address =="" || user.image =="")
    {
        alert("Please fill the information");        
    }
    else
    {
        var userLst = JSON.parse(localStorage.getItem("RegisteredUsers")) || [];
        if(userLst.length>0) 
        {
           if(validateEmail(user.email,userLst)!=true){
            userLst.push(user);
            localStorage.setItem("RegisteredUsers",JSON.stringify(userLst));
            alert("User registration successful"); 
           }
           else
           {
            alert("User already exist");   
           }
        }
        else{
            userLst.push(user);
            localStorage.setItem("RegisteredUsers",JSON.stringify(userLst));
            alert("User registration successful"); 
        }
    }   

}

function validateEmail(emailId,usersData) 
{
    let result =  true;
    if(emailId != undefined) 
    {
        var user =  usersData.find( userObj => userObj.email == emailId.toLowerCase());
        if(user == undefined) {
            result = false;; 
        }      
    }    
    return result ; 
}




function nameValidation(id){
    var regex = /[a-zA-Z]$/;
    var ctrl =  document.getElementById(id).value

    if (regex.test(ctrl.value)) {
        return true;
    }
    else {
        return false;
    }
}