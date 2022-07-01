let sobreMim = {
nome: "Michelle",  
idade: 32,
Trabalhando: false,
};

sobreMim.corFavorita = "Preto";

delete sobreMim.Trabalhando;

console.log(sobreMim);


let cadastro = [
{
   nome: "Michelle",
   idade: 32,
   telefone: 70707070,
   amigos: ["Ana", "Maria", "Fernando", "Luiza"]
},
{
    nome: "Ana",
    idade: 24,
    telefone: 7036427,
    amigos: ["Laura", "Jose", "Lucia", "Vanessa"]
},
{
    nome: "Amanda",
    idade: 30,
    telefone: 8743702,
    amigos: ["Maria", "Fernanda", "Loraine", "Maura"]
},
{
    nome: "Felipe",
    idade: 45,
    telefone: 7854378,
    amigos: ["Fernando","Lenon","Ruan", "Marilete"]
},
{
    nome: "Jose",
    idade: 73,
    telefone: 67523789,
    amigos: ["Terésa", "Custódio", "Josevaldo", "Crementina"]
},
]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[1])
