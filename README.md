# UserAllog
Documento de apresentação do terceiro projeto referente ao estágio na Egadnet.

# Requisitos
<b>Requisitos Funcionais:</b> <br>
1. O sistema deve manter o usuário; <br>
2. O sistema deve permitir a consulta de usuário específico; <br>
3. O sistema deve permitir a consulta de todos os usuários cadastrados; <br>
4. O sistema deve ler e esperar as informações de nome e idade vindas do corpo da requisição; <br>
5. O sistema deve ler e esperar as informações do id vindas do parâmetro da requisição; <br>
6. O sistema deve permitir o gerenciamento dos usuários cadastrados; <br>
7. O sistema deve gerar um id aleatório para cada usuário. <br>

<b>Requisitos Não Funcionais:</b> <br>
1. A linguagem do sistema deverá ser de fácil compreensão; <br>
2. O sistema deve armazenar os dados no Redis. <br>

<b>Regras de Negócio:</b> <br>
1. O cadastro não poderá ser realizado caso algum campo esteja nulo; <br>
2. O usuário não poderá acessar uma rota inválida; <br>
3. Alterações de usuário poderão apenas serem feitas caso o mesmo seja válido; <br>
4. Poderão existir usuários com o mesmo nome e idade. <br>
5. Na rota de editar usuário, será possível modificar o nome e/ou a idade. <br>


# Modelo de classes implementadas
<b>Services:</b> <br>

<b>Routes:</b> <br>

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
5. O sistema retorna a mensagem de success (COLOCAR AQUI O ID DA MENSAGEM);
6. O sistema retorna o id do usuário cadastrado.

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Campos vazios;
1. O usuário não digita todos os campos necessários para o cadastro;
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

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
5. O sistema retorna a mensagem de success (COLOCAR AQUI O ID DA MENSAGEM);
6. O sistema retorna como ficou os dados do usuário no sistema.

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Campos vazios;
1. O usuário não digita todos os campos necessários para a edição;
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

(E2) Exceção ao passo 3 - Usuário inexistente;
1. O usuário digita as informações necessárias, mas elas não são válidas;
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

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
5. O sistema retorna a mensagem de success (COLOCAR AQUI O ID DA MENSAGEM).

Fluxo de exceção: 
		
(E1) Exceção ao passo 3 - Parâmetro vazio;
1. O usuário não digita o id necessário para o funcionamento da exclusão;
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

(E2) Exceção ao passo 3 - Usuário inexistente;
1. O usuário digita a informação necessária, mas ela não é válida;
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

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
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

(E2) Exceção ao passo 3 - Usuário inexistente;
1. O usuário digita a informação necessária, mas ela não é válida;
2. O sistema retorna a exception (COLOCAR AQUI O ID DA MENSAGEM).

-------------------------------------

<h2><b>Consulta de todos os usuários </b> <br> </h2>

Pré-condições:
1. Ter realizado corretamente as configurações de ambiente; 
2. Possuir internet;
3. Ter pelo menos um usuário cadastrado no sistema;


Fluxo básico:
1. O usuário acessa o Insomnia ou Postman para testes; 
2. O usuário acessa a rota definida para a edição;
3. 
4. 
5. 

-------------------------------------


# Configuração de ambiente 



# Mensagens esperadas
<b>Exceptions</b> <br>

 ---------------------------
 
<b>Success</b> <br>

	 
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
		
		
/api/people/list
	
	nenhum parâmetro esperado
		
/api/people/delete/:id
       
    id: string
		

