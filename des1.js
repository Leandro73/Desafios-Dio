let prompt = require('prompt-sync')();

var A = [];

for(c=0;c<5;c++){
    A[c]=parseInt(prompt("Digite um numero: "));
}

var impares= [];
var pares= [];
var j=0 , k=0;

for(i=0;i<5;i++){
    if(A[i]%2==0){
        pares[j]=A[i];
        j++;
    }else{
        impares[k]=A[i];
        k++;
    }
}

console.log(pares + impares);
console.log('pares: ' +pares);
console.log('impares: ' +impares);