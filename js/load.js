//跳转到注册页面
function myRegister(){
	window.location.href = "../html/register.html";
}
//账户密码校验成功登录后跳转的页面
function myEnter(){
	var userName = document.getElementById("userName");
	var password=document.getElementById("password");
	var check = document.getElementById("enter_check");	
	if(userName.value == '007' && password.value == '123456'){
		window.location.href = "../html/main.html";
	}else{
		check.innerHTML="<font color=red>登录失败，账户或密码有误!</font>"
	}
}
//提示账户/密码
function myDemand(){
	alert("账户/密码请看屏幕左上方！");
}
