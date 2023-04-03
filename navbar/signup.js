let listUser = JSON.parse(localStorage.getItem("listUser"));
function signUpButton(e) {
  e.preventDefault();
  localStorage.setItem("flag", 0);
  let userNameInput = document.getElementById("userName").value;
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("pass").value;
  let infoUser = {
    userName: userNameInput,
    email: emailInput,
    pass: passwordInput,
  };
  if (listUser == null) {
    listUser = [];
    listUser.push(infoUser);
    localStorage.setItem("listUser", JSON.stringify(listUser));
  } else {
    let duplicateUser = listUser.find((user) => user.email === emailInput);
    if (duplicateUser) {
      document.getElementById("messager").innerHTML = "Email đã được sử dụng";
    } else {
      listUser.push(infoUser);
      localStorage.setItem("listUser", JSON.stringify(listUser));
      document.getElementById("messager").innerHTML = "";
    }
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 2000);
  }
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
