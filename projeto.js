const form = document.getElementById("center")

function validaB(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    let campoA = parseInt(document.getElementById('n1').value)
    let campoB = parseInt(document.getElementById('n2').value)
    
    if (validaB(campoA, campoB)) {
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
    else{
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
})

