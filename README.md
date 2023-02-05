
# Curso FullCycle - Desafio node com nginx agindo como proxy reverso

Projeto desenvolvido para o desafio do módulo Docker. Segue abaixo a descrição do exercício:

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.


Portanto, além da aplicação node escrevendo num banco de dados mysql com dockerize atuando para sincronizar os containers, temos o nginx agindo como proxy reverso do node


Executando o build do projeto
* Partindo da premissa que você tenha o docker instalado e configurado...
* Execute o clone do projeto via terminal ou interface gráfica de sua preferência e, na pasta do projeto
    *  docker-compose up --build
* Como solicitado, a aplicação será servida em http://localhost:8080

* Caso queira manter o terminal livre, adicione o parâmetro -d ao comando acima:
    * docker-compose up -d --build
