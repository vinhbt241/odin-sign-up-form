const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const containerPwd = document.querySelector("#container-pwd");

const errorMsg = document.createElement('p');
errorMsg.classList.add('error');
errorMsg.textContent = "* Passwords do not match";

function verifyPassword() {
  if (pwd.value != "" && confirmPwd.value != "") {
    if (pwd.value != confirmPwd.value) {
      containerPwd.append(errorMsg);
      pwd.style.border = "red 1px solid";
      confirmPwd.style.border = "red 1px solid";
      return
    } else {
      error = document.querySelector(".error")
      containerPwd.removeChild(error);
      pwd.style.border = "#e5e7eb 1px solid";
      confirmPwd.style.border = "#e5e7eb 1px solid";
      return
    }
  }
}

pwd.addEventListener('focusout', () => verifyPassword())
confirmPwd.addEventListener('focusout', () => verifyPassword())


