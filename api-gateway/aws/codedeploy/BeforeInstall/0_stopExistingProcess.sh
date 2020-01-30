#!/bin/sh

deployment_dir=/opt/poetry-printer/api-gateway
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/poetry-printer/api-gateway

  # we have to do this because it throws an error if it can't find the process... and then the whole build breaks
  node -e 'try{require("child_process").execSync("pm2 stop api-gateway")}catch(e){}';
fi
