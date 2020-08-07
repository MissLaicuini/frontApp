//全局变量
var bool_Email = false;
var bool_Password = false;
var bool_UserName = false;
var bool_Tel = false;
//登陆初始化
window.onload = function () {
    var getElement_userName = document.getElementById("userName");
    var getElement_password = document.getElementById("password");
    var getElement_passwordA = document.getElementById("passwordA");
    var getElement_Email = document.getElementById("email");
    var getElement_Tel = document.getElementById("tel");
    bool_Email = false;
    bool_Password = false;
    bool_Zhanghu = false;
    bool_Tel = false;
    getBool_UserName = '';
    getBool_Password.value = '';
    getElement_PasswordA.value = '';
    getElement_Email.value = '';
    getBool_Tel.value = '';
}
//判断用户框是否输入信息
function getBool_UserName() {
    var getElement_userName = document.getElementById("userName");
	var getElement_userName_check=document.getElementById("userName_check");
    if (getElement_userName.value != '') {
        bool_UserName = true;
		getElement_userName_check.innerHTML="<font color=red></font>";
    }
    else {
        bool_UserName = false;
		getElement_userName_check.innerHTML="<font color=red>用户名不能为空</font>";
    }
	console.log(getBool_UserName.value);
    return true;
}
//判断两个密码框的密码是否一致
function getBool_Password0() {
    var getElement_password = document.getElementById("password");
    var getElement_passwordA = document.getElementById("passwordA");
    if (getElement_password.value == getElement_passwordA.value && getElement_password.value != '') {
        bool_Password = true;
    }
    else {
        bool_Password = false;
    }
	console.log(getBool_Password0.value);
    return true;
}
//判断第二次密码是否错误
function getBool_Password() {
    var getElement_Password = document.getElementById("password");
    var getElement_PasswordA = document.getElementById("passwordA");
	var getElement_password_check=document.getElementById("passWord_check");
    if (getElement_Password.value == getElement_PasswordA.value && getElement_Password.value!='') {
        bool_Password = true;
		getElement_password_check.innerHTML="<font color=red></font>";
    }
    else {
        bool_Password = false;
		getElement_password_check.innerHTML="<font color=red>密码确认错误</font>";
    }
	console.log(getBool_Password.value);
    return true;
}
//判断email输入格式是否正确
function getBool_Email() {
    var getElement_email = document.getElementById("email");
	var getElement_email_check=document.getElementById("email_check");
    if (/^\w+@\w+.\w+$/.test(getElement_email.value)) {
        bool_Email = true;
		getElement_email_check.innerHTML="<font color=red></font>";
    }
    else {
        bool_Email = false;
		getElement_email_check.innerHTML="<font color=red>邮件格式错误</font>";
    }
	console.log(getBool_Email.value);
    return true;
}
//判断电话是否为空
function getBool_Tel() {
    var getElement_tel = document.getElementById("tel");
    var getElement_tel_check = document.getElementById("tel_check");
    
	if (getElement_tel.value != ''){
	    bool_Tel = true;
	    getElement_tel_check.innerHTML = "<font color=red></font>";
	} else {
        bool_Tel = false;
        getElement_tel_check.innerHTML="<font color=red>电话不能为空</font>"
    }
    console.log(getBool_Tel.value);
    return true;
}
//注册成功提示
function myRegister() {
	var getElement_userName = document.getElementById("userName");
	if(getElement_userName.value != '' && bool_Password == true && bool_Email ==true && bool_Tel == true){
		alert("注册成功!");
	}else{
		alert("注册失败，请检查信息填写是否完整!");
	}
}