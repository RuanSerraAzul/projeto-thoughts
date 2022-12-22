<h1 align="left">Projeto toughts</h1>

<p align="left">Este projeto é uma aplicação web, que usa Node.js, MySQL e Handlebars como template engine. Esta aplicação conta com autenticação de usuarios, e operações de adicionar, editar ou excluir um pensamento. Conta também com  uma home onde é possível ver o pensamento de outros usuarios</p>

<!--ts-->

-   [Sobre](#Sobre)
-   [Instalação](#instalacao)
<!--  -->

## Sobre

Este projeto é parte do curso Node.js do Zero a Maestria, a idéia é fazer uma aplicação web, onde usuarios possam se cadastrar, escrever/editar/excluir seus pensamentos e também ver pensamentos de outros usuarios (provavelmente uma seção de comentários será implementada)<br>
Como banco de dados usei o MySQL, pois é o banco de dados que mais trabalhei durante minha carreira como desenvolvedor, o que tornou o desenvolvimento mais fácil, pois já possuo conhecimento em MySQL.<br>
Usamos handlebars como template engine pois é a template engine usada no curso, e também pensei que seria interessante trabalhar com uma nova template engine ao invés de usar apenas o Laravel Blade (sinta se a vontade para fazer uma versão do projeto usando React.js, Vue.js ou qualquer outro framework front-end que quiser).<br>

<!--
## Instalação

### Requisitos

-Docker

### Como instalar

Baixe este projeto e o descompacte.<br>

Copiamos o .env.example como nosso .env principal<br>
**cp .env.example .env**

Navegue até o diretório do projeto e use<br>
**docker-compose build app**

Use este comando para executar os containers:<br>
**docker-compose up -d**

Agora, vamos executar o composer install para instalar as dependências do aplicativo:<br>
**docker-compose exec app composer install**

Rodaremos as nossas migrations para criar as tabelas do nosso banco de dados<br>
**docker-compose exec app php artisan migrate**

(Opcional) Foi inserido um pequeno seeder com apenas um úsuario para testar a rota de login<br>
**docker-compose exec app php artisan db:seed**

Primeiro precisamos criar a chave da nossa aplicação usando:<br>
**docker-compose exec app php artisan key:generate**

Neste passo iremos criar a chave do nosso JWT usando:<br>
**docker-compose exec app php artisan jwt:secret** -->
