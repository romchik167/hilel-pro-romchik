let showUserInfo = function () {
    let whatUserShow = prompt(
        `Введіть ім'я користувача про якого треба показати інформацію`
    );
    for (user of users) {
        if (user.userName === whatUserShow) {
            console.log(
                `Ім'я користувача: ${user.userName}, Вік користувача: ${user.userAge}, Номер телефону користувача: ${user.userPhoneNumber}, Адреса проживання користувача: ${user.userAdress}`
            );
        }
    }
};