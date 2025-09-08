const cities = {
    kyiv: 'Kyiv',
    rivne: 'Rivne',
    london: 'London',
    tokyo: 'Tokyo'
};

const genders = {
    male: 'Male',
    female: 'Female'
}
document
    .querySelector('button')
    .addEventListener('click', () => {
        const form = document.forms.registerForm;
        const userName = form.userName.value;
        const birthday = form.birthday.value;
        const gender = form.gender.value;
        const city = form.city.value;
        const address = form.adress.value;
        const languages = Array.from(form.languages)
            .filter(input => input.checked)
            .map(input => input.value)
            .join(', ');

        form
            .classList
            .add('display-none');

        const informationAboutUserWrap = document.createElement('div');

        const informationAboutUser = document.createElement('p')
        informationAboutUser.innerHTML =
            `
    name: ${userName}<br> 
    birthday: ${birthday}<br>
    gender: ${gender}<br>
    city: ${cities[city]}<br>
    address: ${address}<br>
    languages: ${languages}
    `;
        informationAboutUserWrap.appendChild(informationAboutUser);
        document.body.appendChild(informationAboutUserWrap);

    });

