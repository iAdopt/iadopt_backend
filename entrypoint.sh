#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z $DATABASE_HOST $DATABASE_PORT; do
    sleep 0.1
done

echo "PostgreSQL started"
echo "Running migrations..."

npm run migrate up

npm run build
npm run start