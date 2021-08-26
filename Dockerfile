FROM node:14.16.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY /entrypoint.sh /package.json /package-lock.json /opt/app/
RUN npm install --no-optional
RUN chmod +x entrypoint.sh