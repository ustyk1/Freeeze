document.querySelector('#btn_inquiry_form').addEventListener('click', function () {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const feedback = document.querySelector('#feedback').value;

    fetch(`https://api.telegram.org/bot5626397760:AAH6sTGYNFvaXESwvLjintDmRhOm0Tc3Om4/sendMessage?chat_id=-542915642&text=Name:+${name}%0AEmail:+${email}%0ASubject:+${subject}%0AFeedback:+${feedback}`).then((res) => {
        return res;
    }).catch((err) => {

    });
});