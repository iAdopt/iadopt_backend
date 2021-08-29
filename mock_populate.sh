#!/bin/bash

docker exec -it iadopt_postgres psql -U admin iadopt -f ./opt/mock_data.sql