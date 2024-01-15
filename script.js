const form = document.querySelector('.formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const weight = document.querySelector('#weigth').value;
    const heigth = document.querySelector('#heigth').value / 100;

    const imc = (weight / (heigth * heigth)).toFixed(2);

    const value = document.querySelector('.value');

    let description = '';

    document.querySelector('#infos').classList.remove('hidden');

    if (imc < 18.5) {
        description = "Cuidado ! você está abaixo do peso";
    } else if (imc >= 18.5 && imc <= 25) {
        description = "Parabéns ! você está no peso ideal";
    } else if (imc >= 25 && imc <= 30){
        description = "Cuidado, você está acima do peso";
    } else if (imc >= 30 && imc <= 35) {
        description = "Cuidado, você está com obesidade grau I"
    } else if (imc >= 35 && imc <= 39) {
        description = "Cuidado, você está com obesidade grau II"
    } else {
        description = "Cuidado, você está no bico do corvo já"
    }


    value.textContent = imc.replace('.' , ',');
    document.querySelector('.descricao').textContent = description;
})