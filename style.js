function email (argument)
	 {
	var check = /\w+@gmail.com/ 
	var str = document.getElementById("email").value 
	if(str=="")
	{
		alert("Empty!");
	}
	else if(!check.test(str))
	{
	  alert("Nhập sai định dạng!");
      document.getElementById("email").value="";
      document.getElementById("email").focus();
	}
	else
	{
	  document.getElementById("email").value="";
	}
}