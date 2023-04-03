let listUser = JSON.parse(localStorage.getItem("listUser"));
function signIn(e) {
  e.preventDefault();
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("pass").value;
  localStorage.setItem("flag", 1);
  if (emailInput == "vuongadmin@gmail.com" && passwordInput == "vuong123") {
    window.location.href = "./admin.html";
  }
  let registeredUser = listUser.find(
    (user) => user.email === emailInput && user.pass === passwordInput
  );

  if (registeredUser) {
    localStorage.setItem("flag", 1);

    localStorage.setItem("emailInput", emailInput);

    setTimeout(() => {
      window.location.href = "./home.html";
    }, 2000);
  } else {
    alert("Thông tin không đúng");
    localStorage.setItem("flag", 0);
  }
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
