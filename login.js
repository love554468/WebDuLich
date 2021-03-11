function Rexp_username()
			{
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
				var user = document.getElementById("user_name");
				var pass = document.getElementById("login_password");
				if(user.value == "")
				{
					alert("Bạn chưa nhập email!");
				}	
				else if(!mailformat.test(user.value))
				{
					alert("Nhập sai định dạng email! ");
					document.getElementById("user_name").value = "";
				}
				else if(pass.value == "")
				{
					alert("Bạn chưa nhập password!");
				}
				else if(!passformat.test(pass.value))
				{
					alert("Nhập sai định dạng password ");
					document.getElementById("login_password").value = "";
				}
				else
				{
					alert("dang nhap thanh cong");
					document.getElementById("user_name").value = "";
					document.getElementById("login_password").value = "";
				}
			}
