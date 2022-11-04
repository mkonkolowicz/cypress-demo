#!/bin/bash
echo "This script will launch the sorry-cypress stack!"
docker-compose -f ./docker-compose.minio.yml up &
open http://localhost:8080