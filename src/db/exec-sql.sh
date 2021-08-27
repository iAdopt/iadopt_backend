#!/bin/bash
docker exec -it iadopt_backend_db_1 psql -U admin iadopt -f $1