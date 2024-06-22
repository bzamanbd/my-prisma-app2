# Node App with Prisma ORM and PostgreSQL
This is a very simple Node CRUD app using express, prisma and postgres database.
you can test it with local postgres db or can be run in your docker. For local db you can find the database settings in ".env" file. Set the postgres db and run the app. It will work well.

if you wish to run it in your docker then just clone the repo, open your terminal (CMD) and navigate the repo and use these two commands. But before using these commands make sure your docker is on mode.

1) docker-compose up --build (the images and containers will created and start autometically) then

2) docker-compose exec app npx prisma migrate deploy (for db migration) 

The simple api end points are-

http://localhost:3004/users (method get or post) for create new user
{ "name" : "anyName", "email" : "anyEmail" } 

http://localhost:3004/users/id (put or delete) for edit or delete a user 