# Projeto de conclusão do curso Vem Ser Dev

    O projeto proposto consiste em aplicaçao com front-end feito em REACT e back-end feito com NESTJS.

## Divisão dos projetos

    Foi dividido em duas pastas. A VemSerDev que possui o projeto igual que foi passado nas aulas e na pasta VemSerDev_versão com modificação onde foi acrescidas algumas modificações.

### Modificações em VemSerDev_versão com modificação

#### Back-End

##### 1 Foi acrescentado a entidade users
##### 2 Foi acrescentado um tratamento generico para exception
##### 3 Foram acrescentados o service e controller para autenticação do usuário na nossa aplicação
##### 4 Foi acrescentado a criptografia bcryptjs para as senhas

#### Front-End

##### 1 Acrescimo das telas de login e cadastro de usuário
##### 2 Modificação nas rotas

## Configuração para o back e front

### 1 npm install

#### Instalando as depedências.

### 2 Criar arquivo .env

#### Criar um arquivo .env para o back-end na raiz do projeto com a configuração do banco de dados relacional por exemplo PostgreSQL

![plot](/img-README/.env-back-end.png)

#### Criar um arquivo .env para o front-end na raiz do projeto com a configuraçao de qual url o back esta rodando

![plot](/img-README/.env-front-end.png)


### 3 Comandos para iniciar a aplicação

#### npm run start:dev para inciar o back-end

#### npm start para inciar o front-end

#### No browser na aplicação VemSerDev_versão com modificação no front-end o endereço que deve ser colocado é http://localhost:3000/login ao iniciar a aplicação
