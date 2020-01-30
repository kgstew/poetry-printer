#!/bin/sh

deployment_dir=/opt/poetry-printer/users-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/poetry-printer/users-service

  rm -rf *
fi