class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'uma magia';
                break;
            case 'guerreiro':
                ataque = 'uma espada';
                break;
            case 'monge':
                ataque = 'as artes marciais';
                break;
            case 'ninja':
                ataque = 'uma shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
        return mensagem;
    }
}

// Exemplo de uso
const heroiMago = new Heroi("Merlin", 100, "mago");
const heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
const heroiMonge = new Heroi("Li", 40, "monge");
const heroiNinja = new Heroi("Hanzo", 30, "ninja");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
