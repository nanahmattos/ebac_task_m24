function AkumaNoMi (nome, tipo, poder, usuario) {
    this.nome = nome;
    this.tipo = tipo;
    this.poder = poder;
    this.usuario = usuario;

    this.getPower = function() {
        return `A Akuma No Mi do ${this.usuario} se chama ${this.nome}, é do tipo ${this.tipo} e tem um poder ${this.poder}.`
    }
}

function BaraBaraNoMi (nome, tipo, poder, usuario) {
    AkumaNoMi.call(this, nome, tipo, poder, usuario);    

}

function GoroGoroNoMi (nome, tipo, poder, usuario) {
    AkumaNoMi.call(this, nome, tipo, poder, usuario);
}

function HitoHitoNoMi (nome, tipo, poder, usuario) {
    AkumaNoMi.call(this, nome, tipo, poder, usuario);
}


const AkumaNoMi_1 = new BaraBaraNoMi("Bara Bara No Mi","Paramecia", "Divisão", "Buggy");
const AkumaNoMi_2 = new GoroGoroNoMi("Goro Goro No Mi", "Logia", "Relâmpago", "Enel");
const AkumaNoMi_3 = new HitoHitoNoMi("Hito Hito No Mi", "Zoan", "Humano", "Tony Tony Chopper");

console.log(AkumaNoMi_1.getPower())
console.log(AkumaNoMi_2.getPower())
console.log(AkumaNoMi_3.getPower())

