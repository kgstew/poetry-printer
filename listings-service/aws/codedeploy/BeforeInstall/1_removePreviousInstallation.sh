#!/bin/sh

deployment_dir=/opt/poetry-printer/listings-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/poetry-printer/listings-service

  rm -rf *
fi