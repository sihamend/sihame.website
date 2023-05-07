var input_text=document.querySelector("#input_text");
var input_password=document.querySelector("#input_password");
var inputs=document.querySelectorAll(".input");
var login_btn=document.querySelector("#login_btn");
var error_msg=document.querySelector(".error_msg");

inputs.forEach((i)=>{
	i.addEventListener("input",function(){
	if (input_text.value.length>=1 && input_password.value.length>=8){
		login_btn.disabled=false;
		login_btn.className="btn enabled";
	}
	else{
		login_btn.disabled=true;
		login_btn.className="btn disabled";
	}
  })
})

function validation(){
    var exprUemail=/^\w+\d+@+gmail+\.+com+$/;
    var exprpass=/^\w+\d+$/;

    if(exprUemail.test(input_text.value)==false && exprpass.test(input_password.value)==true){
        error_msg.innerHTML="Email is incorrect";
        input_text.style.border="1px solid red";
        input_password.style.border="1px solid #1dbf73";
        return false;
    }
    if(exprUemail.test(input_text.value)==true && exprpass.test(input_password.value)==false){
        error_msg.innerHTML="password is incorrect";
        input_password.style.border="1px solid red";
        input_text.style.border="1px solid #1dbf73";
        return false;
    }
    if(exprUemail.test(input_text.value)==false && exprpass.test(input_password.value)==false){
        error_msg.innerHTML="Email and password are incorrect";
        input_text.style.border="1px solid red";
        input_password.style.border="1px solid red";

        return false;
    }

    return true;

}









