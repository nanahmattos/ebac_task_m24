function AkumaNoMi (nome, tipo, poder, usuario) {
    this.nome = nome;
    this.tipo = tipo;
    this.poder = poder;
    this.usuario = usuario;
}

function BaraBaraNoMi (nome, tipo, poder, usuario) {
    AkumaNoMi.call(this, nome, tipo, poder, usuario);

    this.power1 = function(){
        console.log("Bara Bara Ho Kirihanashi !!");
    }
}

function GoroGoroNoMi (nome, tipo, poder, usuario) {
    AkumaNoMi.call(this, nome, tipo, poder, usuario);

    this.power2 = function(){
        console.log("30,000,000 Volt Hino !!");
    }
}


const AkumaNoMi_1 = new BaraBaraNoMi("BaraBara No Mi","Paramecia", "Divisão", "Buggy");
const AkumaNoMi_2 = new GoroGoroNoMi("GoroGoro No Mi", "Logia", "Relâmpago", "Enel");

console.log(AkumaNoMi_1);
console.log(AkumaNoMi_1.power1())

console.log(AkumaNoMi_2);
console.log(AkumaNoMi_2.power2())