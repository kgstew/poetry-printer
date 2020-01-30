#!/bin/sh

deployment_dir=/opt/poetry-printer/api-gateway
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/poetry-printer/api-gateway

  rm -rf *
fi