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

Uses `terraform` for infrastructure deployment
```
terraform init
terraform apply
```

Uses `node-deploy` for api-gateway, listings-service and users-service deployment
```
npm deploy
```

Uses `aw2 cli` for classified-app s3 bucket deployment
```
npm deploy
```
