//Requisitos
  //1 - Criar um banco

//É necessario criar um banco, acessar o banco e depois executar o código abaixo;
//O código vai gerar uma coleção chamada cursor, com 100 registros

//Criar banco 
use CadastroItens

//Criar coleção
db.createCollection("cursor")

var docs = [];

for (let i = 1; i <= 100; i++) {
obj = { index: NumberInt(i) 

}; 

docs.push(obj);

 }

db.cursor.insertMany(docs)
