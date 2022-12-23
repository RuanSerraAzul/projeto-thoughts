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

Agora, vamos entrar no container do mysql para adicionar as tabelas que serão usadas (será mudada para migration no futuro)<br>
**docker-compose exec db mysql -h localhost -u root -p toughts -P 3307** senha:Ruan@123 (possivel mudar alterando no .env e no arquivo /db/conn.js) <br>

Rodaremos a primeira query para gerar a tabela de users<br>

```javascript
CREATE TABLE `users` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`password` varchar(255) NOT NULL,
`createdAt` datetime NOT NULL,
`updatedAt` datetime NOT NULL,
PRIMARY KEY (`id`)
);
```

Rodaremos a segunda query para gerar a tabela de pensamentos<br>

```javascript
CREATE TABLE `toughts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `toughts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
);
```

A aplicação já esta pronta para uso no endereço "localhost:6868d"

<!--
 Ruan@123-> acessar mysql
criar tabela de pensamentos





-->

```

```
