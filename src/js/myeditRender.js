window.addEventListener('load', async () => {
    const myData = JSON.parse(localStorage.getItem("myData"));

    const { userId, userName } = myData.data;

    const nameText = document.querySelector(".change-username");
    const idText = document.querySelector(".change-userid");
    const emailText = document.querySelector(".change-email");

    nameText.value = userName;
    idText.innerText = userId;
    emailText.value = myData.data.email;
})
