# UserAllog
Documento de apresentação do terceiro projeto referente ao estágio na Egadnet.

# Requisitos
<b>Requisitos Funcionais:</b> <br>
1. O sistema deve manter o usuário; <br>
2. O sistema deve permitir a consulta de usuário específico; <br>
3. O sistema deve ler e esperar as informações de nome e idade vindas do corpo da requisição; <br>
4. O sistema deve ler e esperar as informações do id vindas do parâmetro da requisição; <br>
5. O sistema deve permitir o gerenciamento dos usuários cadastrados; <br>
6. O sistema deve gerar um id aleatório para cada usuário. <br>

<b>Requisitos Não Funcionais:</b> <br>
1. A linguagem do sistema deverá ser de fácil compreensão; <br>
2. O sistema deve fazer uso do Redis para o armazenamento dos dados. <br>

<b>Regras de Negócio:</b> <br>
1. O cadastro não poderá ser realizado caso algum campo esteja nulo; <br>
2. O usuário não poderá acessar uma rota inválida; <br>
3. Alterações de usuário poderão apenas serem feitas caso o mesmo seja válido; <br>
4. Poderão existir usuários com o mesmo nome e idade; <br>
5. Na rota de editar usuário, será possível modificar o nome e/ou a idade. <br>


# Modelo de implementação
<b>Services:</b> <br>
1. Redis 
	- redisConnection: realiza a conexão incial com o redis, a qual será utilizada nos outros services; <br>
	- redisDeleteUser: exclui o usuário existente que possue o id passado por parâmetro; <br>
	- redisGetUser: busca as informações do usuário com o id passado por parâmetro; <br>
	- redisInsertUser: salva no redis as informações do novo usuário; <br>
	- redisUpdateUser: atualiza informações de usuários existentes. <br>

2. User
	- userCreate: faz as validações dos campos esperados pela requisição e depois utiliza do redisInsertUser para cadastrar o usuário; <br>
	- userDelete: faz uso do redisGetUser para verificar se o usuário existe no banco de dados. Se sim, então redisDeleteUser é chamado; <br>
	- userEdit: faz uso do redisGetUser para verificar se o usuário existe no banco de dados. Se sim, então redisUpdateUser é chamado; <br>
	- userGetById: faz uso do redisGetUser para verificar se o usuário existe no banco de dados e trazer as informações desejadas. <br>

<b>Routes:</b> <br>
```js 
 api/people/insert //rota POST responsável por receber as informações do corpo da requisição e chamar o service userCreate;
 api/people/update //rota PUT responsável por receber as informações do corpo da requisição e chamar o service userEdit; 
 api/people/getById/:id //rota GET responsável por receber o id pelo parâmetro da requisição e chamar o service userGetById; 
 api/people/delete/:id //rota DELETE responsável por receber o id pelo parâmetro da requisição e chamar o service userDelete. 
```
-------------------------------------	
<b>Docker:</b> <br>

Responsável por armazenar a imagem do Redis, possibilitando que a aplicação rode sem ter o Redis instalado na máquina. <br>	

-------------------------------------
<b>Enum:</b> <br>

Utilizado principalmente no status das respostas das requisições <br>

```js 
   SUCCESS = 200,
   BAD_REQUEST = 400, 
   NOT_FOUND = 404,
   UNAUTHORIZED = 401 
```
# Detalhamento do sistema 
<h2><b>Cadastrar usuário </b> <br> </h2>

Pré-condições:
1. Ter realizado corretamente as configurações de ambiente; 
2. Possuir internet.

Fluxo básico:
1. O usuário acessa o Insomnia ou Postman para testes; 
2. O usuário acessa a rota definida para o cadastro;
3. O usuário digita o nome e a idade;
4. O usuário clica em send;
5. O sistema retorna a mensagem SUC003;
6. O sistema retorna o id do usuário cadastrado.

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Campos vazios;
1. O usuário não digita todos os campos necessários para o cadastro;
2. O sistema retorna a mensagem EXC003.

-------------------------------------

<h2><b>Editar usuário </b> <br> </h2>

Pré-condições:
1. Ter realizado corretamente as configurações de ambiente; 
2. Possuir internet;
3. Ter um usuário cadastrado no sistema;
4. Possuir o id o usuário que se deseja editar.

Fluxo básico:
1. O usuário acessa o Insomnia ou Postman para testes; 
2. O usuário acessa a rota definida para a edição;
3. O usuário digita o id e as novas informações de nome e/ou idade;
4. O usuário clica em send;
5. O sistema retorna a mensagem SUC005;
6. O sistema retorna como ficou os dados do usuário no sistema.

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Campos vazios;
1. O usuário não digita todos os campos necessários para a edição;
2. O sistema retorna a mensagem EXC003.

(E2) Exceção ao passo 3 - Usuário inexistente;
1. O usuário digita as informações necessárias, mas elas não são válidas;
2. O sistema retorna a mensagem EXC005.

-------------------------------------

<h2><b>Deletar usuário </b> <br> </h2>

Pré-condições:
1. Ter realizado corretamente as configurações de ambiente; 
2. Possuir internet;
3. Ter um usuário cadastrado no sistema;
4. Possuir o id o usuário que se deseja deletar.

Fluxo básico:
1. O usuário acessa o Insomnia ou Postman para testes; 
2. O usuário acessa a rota definida para a exclusão;
3. O usuário digita no parâmetro da rota o id;
4. O usuário clica em send;
5. O sistema retorna a mensagem SUC004.

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Parâmetro vazio;
1. O usuário não digita o id necessário para o funcionamento da exclusão;
2. O sistema retorna a exception EXC003.

(E2) Exceção ao passo 3 - Usuário inexistente;
1. O usuário digita a informação necessária, mas ela não é válida;
2. O sistema retorna a exception EXC005.

-------------------------------------

<h2><b>Consulta de usuário específico </b> <br> </h2>

Pré-condições:
1. Ter realizado corretamente as configurações de ambiente; 
2. Possuir internet;
3. Ter um usuário cadastrado no sistema;
4. Possuir o id o usuário que se deseja consultar.

Fluxo básico:
1. O usuário acessa o Insomnia ou Postman para testes; 
2. O usuário acessa a rota definida para a consulta;
3. O usuário digita no parâmetro da rota o id;
4. O usuário clica em send;
5. O sistema retorna as informações do usuário.

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Parâmetro vazio;
1. O usuário não digita o id necessário para o funcionamento da consulta;
2. O sistema retorna a exception EXC003.

(E2) Exceção ao passo 3 - Usuário inexistente;
1. O usuário digita a informação necessária, mas ela não é válida;
2. O sistema retorna a exception EXC005.

-------------------------------------

# Configuração de ambiente 
1. Possuir o Docker instalado;
2. Possuir o Insomnia ou PostMan instalado;
3. Para rodar o programa utilizar os comandos abaixo e depois esperar as mensagens SUC001 e SUC002

	   npm install
	
	   docker image build -t dockerapi:1.0 .
	
	   npm run start

# Mensagens esperadas
<b>Exceptions</b> <br>

1. EAPI: erros provenientes do sistema e requisições;
2. EUS: erros causados pelo usuário.

(EXC001)
```js 
EAPI.invalidRouteException() 
return { msg: 'Você está tentando acessar uma rota inválida!' };
```
(EXC002)
 ```js 
EAPI.errorFromSystemException() 
return { msg: 'Algo de errado aconteceu, tente novamente ou entre em contato com o fornecedor da aplicação!' };
```
(EXC003)
 ```js 
EUS.emptyFieldException() 
return { msg: 'É necessário que sejam enviados os campos de nome e idade sejam enviados!' };
```
(EXC004)
 ```js 
EUS.gettingIdException()
return { msg: 'É necessário enviar um id válido no parâmetro da rota!' };
```
(EXC005)
 ```js 
EUS.invalidUserException() 
return { msg: 'Não é possível gerenciar usuários que não estejam cadastrados!' };
```
 ---------------------------
 
<b>Success</b> <br>

(SUC001)
 ```js 
console.log('Aplicação rodando!');
```
(SUC002)
 ```js 
console.log('Conectado ao Redis!');
```
(SUC003)
 ```js 
 { msg: 'Usuário inserido com sucesso!', id: `${userId}` }
```
(SUC004)
 ```js 
 { msg: 'Usuário removido com sucesso!' }
```
(SUC005)
 ```js 
 { msg: 'Usuário editado com sucesso!', user: `${userName}, ${userAge}` }
```

# Estrutura de dados

Abaixo estão listados os dados esperados em cada rota:

/api/people/insert
       
    name: string
		
	age: number
	
	
	
/api/people/update
       
    id: string
		
    name: string
		
	age: number
		
	
/api/people/getById/:id	
		
	id: string
	
		
/api/people/delete/:id
       
    id: string
		

