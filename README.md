# Node App with Prisma ORM and PostgreSQL
This is very simple Node app using express, prisma and postgres
you can test it with local postgres datbse or You can run this app in your docker. For local db you can find the database config in .env file. Set the postgres db and run the app. It will work well.

On the other hand if you use it in your docker just clone the repo then open your terminal (CMD) and navigate the repo and use this two commands. but before the commands make sure your docker is on mode.

1) docker-compose up --build (the images and containers will created and start autometically) then

2) docker-compose exec app npx prisma migrate deploy (for db migration) 

