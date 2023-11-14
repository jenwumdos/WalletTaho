FROM node:16-alpine

WORKDIR /tally-ho

COPY . . 

RUN mv .env.prod .env
