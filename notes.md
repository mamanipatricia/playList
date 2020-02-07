artist:
id, name, photo, slug

genre:
id, name, slug _/

song:
id, title, artists, genre, release_date, cover

- HACER CRUD

------
 DISENO DE LA DB
 - nombre

 ------------
 nodemon
 express
 sequelize => mysql => msql2
           => postgres => pg pg-hstore
           => sql server --- revisar....


- INSTALLING...
    npm i nodemon
    npm i express
    npm i sequelize
    npm i sequelize-cli  ---> scalfolding

- Crear scalfolding con express generator:
$ npm install express-generator -g
$ express --no-view artist

- Crear scalfolding con sequelize
$ ./node_modules/.bin/sequelize-cli init //
### boilerPlate nodejs --



-----------
TODO: 5 febrero, 2020
handler errors

TODO: 6 febrero, 2020
CRUD table song

------------

GENERATING MIGRATONS WITH SEQUELIZE MYSQL
$ npx sequelize model:generate --name artist --attributes name:string,photo:text,slug:string //create the model and migrations..

$ npx sequelize db:migrate // run the migrations..

