function toast(message){
    const container = document.querySelector('#toast');
    const textBox = document.querySelector('#msg');

    container.style.display = 'block'
    textBox.innerText = message;
    setTimeout(() => {
        textBox.innerText = '';
        container.style.display = 'none';
    },1500)
}