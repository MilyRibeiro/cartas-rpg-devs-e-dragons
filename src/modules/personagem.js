export class Personagem {
    nome;
    vida = 100;
    mana = 100;
    #level;
    tipo;
    descricao;

    constructor(nome){
        this.nome = nome;
        this.#level = 1;
    }

    aumentarLevel() {
        this.level += 1;
    }

    diminuirLevel() {
        this.level -= 1;
    }

    // O get level() é chamado diretamente pela classe PersonagemView quando tenta acessar o level para realizar a renderização.
    // O get é utilizado para retornar o valor de um propriedade protegida que está sendo acessada fora da classe:
    get level() {
        return this.#level;
    }

    // O set serve para criar uma lógica de negócio onde há a necessidade de alterar o valor de uma propriedade privada — justamente o que está acontecendo nos métodos aumentarLevel() e diminuirLevel().
    // O set verifica o valor de novoLevel, e a cada tentativa de modificação atribuímos o seu valor ao this.level. O set level() também é chamado pela PersonagemView, mas de forma indireta. Na verdade, quem chama essa função são os métodos aumentarLevel() e diminuirLevel(). Este foi o motivo de termos retirado o sinal # dos métodos. Para chamarmos o método set level(), a chamada precisa ter o mesmo nome da função — ou seja, level.

    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <= 20) {
            this.#level = novoLevel;
        }
    }

    obterInsignia() {
        if(this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}` 
        } else {
            return `${this.constructor.tipo} iniciante`
        }
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return 'Empate'
        } else if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!!!`
        } else {
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!!!`
        }
    }
}