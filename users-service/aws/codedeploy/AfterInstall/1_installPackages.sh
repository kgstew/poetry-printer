#!/bin/sh
cd /opt/poetry-printer/users-service
mv .production.env .env
yarn
