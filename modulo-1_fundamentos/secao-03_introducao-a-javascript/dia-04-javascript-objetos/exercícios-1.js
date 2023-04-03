let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.

console.log("Seja bem-vinda, " + info.personagem);

console.log("-------");

// 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor.

info.recorrente = "Sim";
console.log(info.recorrente);

console.log("-------");

// 3 - Faça um for/in que mostre todas as chaves do objeto.

for (let information in info) console.log(information);

console.log("-------");

// 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.

for (let information in info) console.log(info[information]);

console.log("-------");
