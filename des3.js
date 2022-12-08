
let prompt = require('prompt-sync')();

let vetor = [];
let pares = [];
let impares = [];
var j=0 , k=0;

for(c=0;c<5;c++){
    vetor[c]=parseInt(prompt("Digite um numero: "));
}

for(i=0;i<5;i++){
    if(vetor[i]%2==0){
        pares[j]=vetor[i];
        j++;
    }else{
        impares[k]=vetor[i];
        k++;
    }
}

console.log('vetor: '+vetor);
console.log('pares: ' +pares);
console.log('impares: ' +impares);



