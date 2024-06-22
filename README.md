# Node App with Prisma ORM and PostgreSQL
This is a very simple Node CRUD app using express, prisma and postgres database.
you can test it with local postgres db or can be run in your docker. For local db you can find the database settings in ".env" file. Set the postgres db and run the app ( using "npm start" or "node index.js" ). It will work well.

if you wish to run it in your docker then just clone the repo, open your terminal (CMD) and navigate the repo and use these two commands. But before using these commands make sure your docker is on mode.

1) docker-compose up --build (the images and containers will created and start autometically) then

2) docker-compose exec app npx prisma migrate deploy (for db migration) 

The simple api end points are-

http://localhost:3004/users (method get or post) for create new user
{ "name" : "anyName", "email" : "anyEmail" } 

http://localhost:3004/users/id (put or delete) for edit or delete a user 

![Screenshot 2024-06-22 at 11 42 47 PM](https://github.com/bzamanbd/node-prisma-postgres-app/assets/90719674/ed8e8966-0bbb-43b1-9ae6-0498dfd3e25a)

![Screenshot 2024-06-22 at 11 43 21 PM](https://github.com/bzamanbd/node-prisma-postgres-app/assets/90719674/63548223-9867-4d19-8e96-8a5af59e54e9)

![Screenshot 2024-06-23 at 12 42 25 AM](https://github.com/bzamanbd/node-prisma-postgres-app/assets/90719674/230a0559-e79e-468d-838c-738fe7f8d911)

![Screenshot 2024-06-23 at 12 45 17 AM](https://github.com/bzamanbd/node-prisma-postgres-app/assets/90719674/ee26586e-9e29-4455-8e0b-71c122fd4db7)
