const pessoas = [
  ["Aline", "1985", "F"],
  ["Bruno", "2015", "M"],
  ["Camila", "2020", "F"],
  ["Daniel", "1990", "M"],
  ["Eduardo", "1970", "M"]
];

const femMenor = [];
const femMaior = [];
const mascMenor = [];
const mascMaior = [];

const anoAtual = new Date().getFullYear();

function calcularIdade(anoNasc) {
  return anoAtual - parseInt(anoNasc);
}

function MenorDeIdade(idade) {
  return idade < 18;
}

pessoas.forEach(pessoa => {
  const nome = pessoa[0];
  const anoNasc = pessoa[1];
  const genero = pessoa[2];
  
  const idade = calcularIdade(anoNasc);
  const menorDeIdade = MenorDeIdade(idade);
  
  if (genero === "F") {
    if (menorDeIdade) {
      femMenor.push(pessoa);
    } else {
      femMaior.push(pessoa);
    }
  } else if (genero === "M") {
    if (menorDeIdade) {
      mascMenor.push(pessoa);
    } else {
      mascMaior.push(pessoa);
    }
  }
});

console.log("Feminino menor de idade:", femMenor);
console.log("Feminino maior de idade:", femMaior);
console.log("Masculino menor de idade:", mascMenor);
console.log("Masculino maior de idade:", mascMaior);