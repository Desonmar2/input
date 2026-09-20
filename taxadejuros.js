import input from 'readline-sync';

console.log("Aplicação de Juros:");

let divida = input.question("Digite o valor da divida: ");
let atraso = input.question("Digite os dias em atraso: ");

if(atraso >= "15" ){
   let taxa = "10%";  
   let juros = (Number(divida) * 0.10);
   let total = Number(divida) + juros;


 console.log('Dias em atraso: '+atraso);
 console.log("taxa de juros: "+taxa);
 console.log('Valor da divida com juros: '+total);
   
}
 else{atraso <= "15%"
   let taxa = "5%"  
   let juros = (Number(divida) * 0.5)
   let total = Number(divida) + juros;
   
 console.log('Dias em atraso: '+atraso);
 console.log("taxa de juros: "+taxa);
 console.log('Valor da divida com juros: '+total); 
 };







