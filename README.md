# Microservices Demo

Uses the following technologies:

- Docker (and Docker Compose)
- React
- Node.js
- MySQL
- Sequelize

## Setup

```sh
# in main directory
docker-compose up

# in a separate terminal, inside each app file 
yarn

# inside the classifieds-app folder

yarn watch
```

## Initial Migration
```sh
docker exec -it <service id> bash

yarn db:migrate

```

hint: use `docker ps` to get a list of the running processes

## Deploy

Check out my video series for a step-by-step tutorial on how to deploy this.
