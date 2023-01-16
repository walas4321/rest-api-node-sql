FROM php:7.4-apache

RUN apt-get update
RUN apt-get install python3 python3-dev -y
RUN mkdir /app

WORKDIR /app

env MSG='PRUEBA'

ADD ..

CMD python3 -m http.server 5000

EXPOSE 5000
