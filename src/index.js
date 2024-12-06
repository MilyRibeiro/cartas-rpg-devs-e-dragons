import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroLegolas = new Arqueiro('Legolas', 6, 4);
const arqueiroMagoXavier = new ArqueiroMago('Xavier', 7, 10, 'Ar', 5, 8);

const personagens = [magoAntonio, magaJulia, arqueiroLegolas, arqueiroMagoXavier];

new PersonagemView(personagens).render();

// console.log(new Mago('Gelo', 7, 9));
// console.log(Personagem.verificarVencedor(arqueiroLegolas, magoAntonio));
console.log(arqueiroLegolas);

// AULA 1:
// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }

// const personagemAna = {
//     nome: 'Ana',
//     vida: 8,
//     mana: 10,
// }

// const personagemPedrinho = new Personagem();
// personagemPedrinho.nome = 'Pedrinho';
// personagemPedrinho.mana = 12;
// personagemPedrinho.vida = 7;
// personagemPedrinho.tipo = 'Mago';
// personagemPedrinho.level = 5;

// const personagemJose = new Personagem();
// personagemJose.nome = 'José';
// personagemJose.tipo = 'Arqueiro';
// personagemJose.level = 3;


// console.log('Insignia de  ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia());
// console.log('Insignia de  ' + personagemJose.nome + ': ' + personagemJose.obterInsignia());


