let numeros = [];

document.getElementById('inserir').onclick = function() {
    let numero = parseInt(document.getElementById('numero').value);
    if (!isNaN(numero)) {
        numeros.push(numero);
        document.getElementById('numero').value = '';
        atualizarLista();
    } else {
        alert('Por favor, insira um número inteiro.');
    }
};

document.getElementById('ordenar').onclick = function() {
    let ordenados = bubbleSort(numeros.slice());
    document.getElementById('listaOrdenada').innerText = 'Números Ordenados: ' + ordenados.join(', ');
};

function atualizarLista() {
    document.getElementById('listaNumeros').innerText = 'Números Inseridos: ' + numeros.join(', ');
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}