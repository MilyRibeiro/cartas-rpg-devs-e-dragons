import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroLegolas = new Arqueiro('Legolas', 6, 4);
const arqueiroMagoXavier = new ArqueiroMago('Xavier', 7, 10, 'Ar', 5, 8);
const guerreiroAragorn = new Guerreiro('Aragorn', 10);

const personagens = [magoAntonio, magaJulia, arqueiroLegolas, arqueiroMagoXavier, guerreiroAragorn];

new PersonagemView(personagens).render();



