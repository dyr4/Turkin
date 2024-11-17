let heightIncreasedFirst = false; 
let heightIncreasedSecond = false; 
let heightIncreasedEmail = false;
let heightIncreasedTelephone = false;
let heightIncreasedDate = false;
let heightIncreasedAdress = false;


function updateDivHeight() {
    const myDiv = document.getElementById("divCenter1");
    const currentHeight = myDiv.offsetHeight; 
    const newHeight = currentHeight + 25;
    myDiv.style.height = newHeight + "px";
}

function checkFirst() {
    var first = document.getElementById("imya").value;
    var regex = /^[a-zA-Zа-яА-Яs]{2,15}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Введено верно";
        if (!heightIncreasedFirst) {
            updateDivHeight();
            heightIncreasedFirst = true; 
        }
        return true;
    } else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Имя должно быть от 2 до 15 символов";
        if (!heightIncreasedFirst) {
            updateDivHeight();
            heightIncreasedFirst = true;
        }
        return false;
    }
}

function checkSecond() {
    var second = document.getElementById("familia").value;
    var regex = /^[a-zA-Zа-яА-Яs]{2,25}$/;

    if (regex.test(second)) {
        document.getElementById("second_Check").style.color = "green";
        document.getElementById("second_Check").innerHTML = "Введено верно";
        if (!heightIncreasedSecond) {
            updateDivHeight();
            heightIncreasedSecond = true; 
        }
        return true;
    } else {
        document.getElementById("second_Check").style.color = "red";
        document.getElementById("second_Check").innerHTML = "Фамилия должно быть от 2 до 25 символов";
        if (!heightIncreasedSecond) {
            updateDivHeight();
            heightIncreasedSecond = true; 
        }
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("pochta").value;
    var regex = /^[^s@]+@[^s@]+.[^s@]+$/;

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Введено верно";
        if (!heightIncreasedEmail) {
            updateDivHeight();
            heightIncreasedEmail = true;
        }
        return true;
    } else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Неверный формат email";
        if (!heightIncreasedEmail) {
            updateDivHeight();
            heightIncreasedEmail = true;
        }
        return false;
    }
}

function checkTelephone() {
  var telephone = document.getElementById("telephone").value;
  var regex = /^\+?[0-9\s()-]{10,15}$/;

  if (regex.test(telephone)) {
      document.getElementById("telephone_Check").style.color = "green";
      document.getElementById("telephone_Check").innerHTML = "Введено верно";
      if (!heightIncreasedTelephone) {
          updateDivHeight();
          heightIncreasedTelephone = true;
      }
      return true;
  } else {
      document.getElementById("telephone_Check").style.color = "red";
      document.getElementById("telephone_Check").innerHTML = "Неверный формат телефона";
      if (!heightIncreasedTelephone) {
          updateDivHeight();
          heightIncreasedTelephone = true;
      }
      return false;
  }
}

function checkDate() {
  var date = document.getElementById("date").value;
  if (date === "") {
    document.getElementById("date_Check").style.color = "red";
    document.getElementById("date_Check").innerHTML = "Пожалуйста, выберите дату и время.";
    if (!heightIncreasedDate) {
      updateDivHeight();
      heightIncreasedDate = true;
    }
    return false;
  }

  var today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  var selectedDate = new Date(date);

  if (selectedDate.getDate() !== tomorrow.getDate()) {
    document.getElementById("date_Check").style.color = "red";
    document.getElementById("date_Check").innerHTML = "Выберите дату на завтра.";
    if (!heightIncreasedDate) {
      updateDivHeight();
      heightIncreasedDate = true;
    }
    return false;
  }

  var selectedHours = selectedDate.getHours();
  if (selectedHours < 8 || selectedHours > 20) {
    document.getElementById("date_Check").style.color = "red";
    document.getElementById("date_Check").innerHTML = "Выберите время с 8:00 до 20:00.";
    if (!heightIncreasedDate) {
      updateDivHeight();
      heightIncreasedDate = true;
    }
    return false;
  }

  document.getElementById("date_Check").style.color = "green";
  document.getElementById("date_Check").innerHTML = "Введено верно";
  if (!heightIncreasedDate) {
    updateDivHeight();
    heightIncreasedDate = true;
  }
  return true;
}


function checkAdress() {
  var adress = document.getElementById("adress").value;
  if (adress === "") {
    document.getElementById("adress_Check").style.color = "red";
    document.getElementById("adress_Check").innerHTML = "Пожалуйста, введите адрес.";
    if (!heightIncreasedAdress) {
      updateDivHeight();
      heightIncreasedAdress = true;
    }
    return false;
  } else {
    document.getElementById("adress_Check").style.color = "green";
    document.getElementById("adress_Check").innerHTML = "Введено верно";
    if (!heightIncreasedAdress) {
      updateDivHeight();
      heightIncreasedAdress = true;
    }
    return true;
  }
}

function outputData() {
  let first = document.getElementById("imya").value;
  let second = document.getElementById("familia").value;
  let email = document.getElementById("pochta").value;
  let phone = document.getElementById("telephone").value;
  let product = document.getElementById("product").value
  let date = document.getElementById("date").value;
  let adress = document.getElementById("adress").value;

  if (first !== "" && second !== "" && email !== "" && phone !== "" && date !== "" && adress !== "") {
    alert(`Имя: ${first}
Фамилия: ${second}
Почта: ${email}
Телефон: ${phone}
Товар: ${product}
Дата: ${date}
Адрес: ${adress}
      `); 
  } else {
    alert("Введите все данные");
  }
}


const myButton = document.getElementById("button1");

const handleMouseOver = (event) => {
 myButton.style.transform = "translate(0, 10px)";
 myButton.style.boxShadow = "10px 10px";
};
const handleMouseOut = (event) => {
 myButton.style.transform = "";
 myButton.style.boxShadow = "";
};
myButton.addEventListener('mouseover', handleMouseOver);
myButton.addEventListener('mouseout', handleMouseOut);



const myButton1 = document.getElementById("button2");

const handleMouseOver1 = (event) => {
 myButton1.style.width = "350px";
 myButton1.style.height = "50px";
 myButton1.style.boxShadow = "10px 10px";
 myButton1.style.backgroundColor = "Red";
};
const handleMouseOut1= (event) => {
  myButton1.style.width = "";
  myButton1.style.height = "";
 myButton1.style.boxShadow = "";
 myButton1.style.backgroundColor = "";
};
myButton1.addEventListener('mouseover', handleMouseOver1);
myButton1.addEventListener('mouseout', handleMouseOut1);