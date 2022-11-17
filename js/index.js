function calcularIMC() {
    var txp = document.getElementById('peso');
    var txa = document.getElementById('altura');
    var peso = Number(txp.value);
    var altura = Number(txa.value);
    var IMC = peso / (altura * altura).toFixed(2);

    res.innerHTML = `O seu IMC é de ${IMC.toFixed(2)}`;
    if (IMC < 18.5) {
        grau.innerHTML = 'Você está abaixo do peso.';
    } else if (IMC >= 18.6 && IMC <= 24.99) {
        grau.innerHTML = 'Parabéns! Você está no peso ideal.';
    } else if (IMC >= 25 && IMC <= 29.99) {
        grau.innerHTML = 'Você está levemente acima do peso.';
    } else if (IMC >= 30 && IMC <= 34.99) {
        grau.innerHTML = 'Obesidade grau I'; 
    } else if (IMC >= 35 && IMC <= 39.99) {
        grau.innerHTML = 'Obesidade grau II (Severa)'; 
    } else {
        grau.innerHTML = 'Obesidade grau III (Mórbida)';  
    }
}