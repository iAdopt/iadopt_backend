#!/bin/bash
docker exec -it db_db_1 psql -U admin iadopt -f $1