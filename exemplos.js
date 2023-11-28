//ex1

class Sapato{
    constructor(marca, valor){
        this.marca = marca;
        this.valor = valor;
    }
    apresentar(){
        console.log("O sapato " + this.marca + ", custa " + this.valor)
    }
}

module.exports = Sapato

const Sapato = require("./repetido")

let sapato1 = new Sapato("Nike", 100)
sapato1.apresentar() 

//ex 2


let pessoa = { 
    nome: " ",
    idade: 0,
    fazAniversario: function(){
      this.idade++
    },
    exibirDetalhes: function(){
      return "Nome:  " + this.nome + ", Idade: " + this.idade;
  }
  }

  exports.pessoa = pessoa;

const { pessoa } = require("./projeto")
pessoa.nome = "Claúdia";
pessoa.idade = 32;


console.log(pessoa.exibirDetalhes());
pessoa.fazAniversario();
console.log(pessoa.exibirDetalhes() + ", Feliz Aniversário");
