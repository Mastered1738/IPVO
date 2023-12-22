<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
A university project about the difference between database queries with and without secondary indexes.
The project is made with Nest and Docker.

## Recommended tools for testing the project

To test the project as easily as possible there is only 1 tool need: VSCode (or VIM, Neovim, ...) 
Postman/Insomnia is recommended only because it enables the user to test specific URL requests.

NOTE 1: You don't need Postman/Insomnia, you can test the project without both. They're just recommended to ease the process of testing.
NOTE 2: Since Postman is a big application it also takes time to load the data into Postman which sometimes increases the response time number. Postman gives the tester a clear and easy to use UI but it affects the actual response time. Please take that into consideration.

## Installation

Download through the .zip file or clone the repo. Simple as that.

## Project architecture

The project consist of 2 main parts: Nest framework and Docker. Docker is implemented with the Dockerfile.
The Nest part is inside the ./src folder and hold many files. In the following part I will explain what means what.

### The Nest part of the project

This is the architecture of the "src" folder inside the project.
```bash
│   app.controller.ts
│   app.module.ts
│   app.service.ts
│   main.ts
│
├───indexed
│       indexed.controller.ts
│       indexed.module.ts
│       indexed.service.ts
│       movies.model.ts
│
└───not-indexed
        movies.model.ts
        not-indexed.controller.ts
        not-indexed.module.ts
        not-indexed.service.ts
```
It is made of 3 parts: the main part, the indexed part and the not-indexed part. The main part is used to create connections to 2 Mongo databases where one has secondary indexes and the other does not. That is why one part is called "indexed" and "not-indexed" respectively.

#### Database connection
To check the database connection code go to app.module.ts.

#### Schema and Model
To see the schema and model code for a collection inside the Mongo databases go to movies.model.ts. Inside you will see that inside the "indexed" folder the movie schema and model have indexes while in the other they don't. That is the only difference in those models.

#### Controllers and URLs
To see the code used to create GET, POST requests got to not-indexed.controller.ts or indexed.controller.ts. Controllers in Nest are used to "control" incoming URL requests. All functions are asynchronous which helps the application to be much faster and simulate parallel function execution.

#### Services and queries
In case you want to see the actual queries go to not-indexed.service.ts or indexed.service.ts. In Nest services are used to query databases. In this project the ODM Mongoose is used to simplify querying. Functions are also asynchronous. 

#### Modules
Modules are used to detect which service, model, controller, connection, so on and so forth, are used for a specific part of the application. 
E.g. Inside the indexed.module.ts file indexed.controller, indexed.service, movies.model are all imported and then through the indexed.module transfered to the main app.module which actually runs the application.

### Results from testing





### Conclusion






## Running the app

To run the actual application make sure you have Docker installed.
If you don't have it installed, got to [Docker website](https://docs.docker.com/get-docker/) and install Docker with the given tutorial depending on your operating system. 

### With Linux

When you've installed Docker open your terminal and do the following.

Position yourself in the folder in which you've downloaded/cloned the repo.
NOTE: The <name> part you can name it any way you want.

***
Build the Docker image
```bash
sudo docker build ./ipvo -t <name>/nestjs 
```
e.g. sudo docker build ./ -t vinko/nestjs
***
To check if the Docker image is built run
```bash
sudo docker images
```
***

***
To start the container  
```bash
sudo docker run -p 8080:3000 -d <name>/nestjs
```
***

***
To stop the container
```bash
sudo docker stop <container ID>
```
***

### With Windows

The process with windows is basically the same as with Linux.
The only difference is that you don't need the "sudo" command.

***
Example from my pc
```bash
PS C:\Users\omglo\Documents\GitHub\IPVO\ipvo> cd ..
PS C:\Users\omglo\Documents\GitHub\IPVO> docker build .\ipvo\ -t vinko/nestjs
```
***

### With Mac

Idk how to use Mac terminals or Mac in general. If you have Mac you're on your own.
But I do assume commands are the same or at least the principle about running the project is the same.

## After the app has started running

### Using Postman

1. Enter Postman and check the following URLs
***
For the database with indexes
- Get request localhost:8080/indexed/getAll
- Post request localhost:8080/indexed/getMovieByTitle
- Get request localhost:8080/indexed/getMovieByNominations
- Get request localhost:8080/indexed/getMoviesAboveACertainYear
***

***
For the database without indexes
- Get request localhost:8080/not-indexed/getAll
- Post request localhost:8080/not-indexed/getMovieByTitle
- Get request localhost:8080/not-indexed/getMovieByNominations
- Get request localhost:8080/not-indexed/getMoviesAboveACertainYear
***

2. After running whatever URL you've chosen you will see the response time of the query of the URL (e.g. 78ms) and the size of the payload (e.g. 20 MB)
3. You can also see the payload itself in any format you want, JSON is recommended.

Example from my PC inside Postman app with a given URL

![image](https://github.com/Mastered1738/ipvo/assets/87418738/6417f6de-f21f-448b-bed5-edb13fd5ddce)

NOTE: since Postman is a big application it also takes time to load the data into Postman which sometimes increases the response time number. Postman gives the tester a clear and easy to use UI but it affects the actual response time.

### Without using Postman

1. Run your browser and check the following URLs.

***
For the database with indexes
- Get request localhost:8080/indexed/getAll
- Post request localhost:8080/indexed/getMovieByTitle
- Get request localhost:8080/indexed/getMovieByNominations
- Get request localhost:8080/indexed/getMoviesAboveACertainYear
***

***
For the database without indexes
- Get request localhost:8080/not-indexed/getAll
- Post request localhost:8080/not-indexed/getMovieByTitle
- Get request localhost:8080/not-indexed/getMovieByNominations
- Get request localhost:8080/not-indexed/getMoviesAboveACertainYear
***

2. After entering any URL give it some time to respond (sometimes even more than 20 seconds depending on your internet connection).
3. To check the response speed look at the terminal inside VSCode (or any IDE's console your using, or Docker Desktop if you're on Windows/Mac). There should be a logged messege describing the response time in miliseconds.
4. This is an example from my terminal
```bash
2023-12-21 22:50:42 Time to get indexed (by nominations) movies in miliseconds:  206.73747999999998
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author's university email - [vinko.milotic@uniri.hr]
- Author's private email - [vinkomilotic632@gmail.com]

## License

Nest is [MIT licensed](LICENSE).
This project is stritctly readonly and only UNIRI FIDIT students/professors are allowed to read this project. 
