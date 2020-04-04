let login = prompt("Введите имя");
if (login == "Админ") {
    let name = prompt("Введите пароль");

    if (name == "Я здесь главный") {
        alert("Здравствуйте");
    } else if (name == "" || name == null) {
        alert('неверный пароль');
    } else {
        alert("отменено");
    }
} 
else if (login == "" || login == null) {
    alert("отменено");
} else {
    alert("я вас не знаю");
}