#!/bin/sh
cd /opt/poetry-printer/api-gateway
mv .production.env .env
yarn
