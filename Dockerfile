FROM node:14

WORKDIR /gestion_station_ski_front/

COPY public/ /gestion_station_ski_front/public
COPY src/ /gestion_station_ski_front/src
COPY package.json /gestion_station_ski_front/

RUN npm install

ENV REACT_APP_API_ENDPOINT="http://192.168.33.10:8089/api/piste"

EXPOSE 3006

CMD ["npm", "start"]

