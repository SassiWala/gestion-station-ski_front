FROM node:19.5.0-alpine

WORKDIR /gestion_station_ski_front/

COPY public/ /gestion_station_ski_front/public
COPY src/ /gestion_station_ski_front/src
COPY package.json /gestion_station_ski_front/

RUN npm install

CMD ["npm", "start"]

