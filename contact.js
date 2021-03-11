
function check (argument) {
	// body...
	var a =/\w{7,12}/;//ten 5-12
	var b =/\w+@gmail.com/;//email
	var c =/\d{9}/;//sdt chin chu so
	var stra = document.getElementById("name").value;
	var strb = document.getElementById("email").value;
	var strc = document.getElementById("phone").value;
	if(stra=="")
	{
		alert("Bạn chưa nhập họ và tên!");	
	}
	else if(!a.test(stra))
	{
		alert("Nhập sai định dạng!(tên phải từ 7-12 kí tự)");
		document.getElementById("name").value="";
	}

	if(strb=="")
	{
		alert("Bạn chưa nhập email!");	
	}
	else if(!b.test(strb))
	{
		alert("Nhập sai định dạng email!");
		document.getElementById("email").value="";
	}
	

	if(strc=="")
	{
		alert("Bạn chưa nhập phone!");	
	}
	else if(!c.test(strc))
	{
		alert("Nhập sai định dạng!");
		document.getElementById("phone").value="";
	}
	
}