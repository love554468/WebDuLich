function email()
{

	var vmail = document.getElementById("Email").value;
	var tmail = /^\w+@gmail.com$/;

	if(vmail == "")
	{
		alert("Bạn chưa nhập emali!");
	}
	else if(!tmail.test(vmail))
	{
		alert("Email chưa đúng định dạng!");
	}
	else
	{
		alert("Thông tin đã được gửi đi!");
	}
}