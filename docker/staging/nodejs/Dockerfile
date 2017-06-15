FROM node:6
MAINTAINER CloudCV Team

RUN apt-get update -qq && apt-get install -y build-essential git curl
RUN apt-get install -y ruby
RUN gem install sass

WORKDIR /code/
COPY ./frontend/ /code/
COPY ./docker/staging/nodejs/container-start.sh /code/

# Install Prerequisites
RUN npm cache clean -f

RUN npm install -g yarn
RUN yarn install

CMD ["/bin/bash", "/code/container-start.sh"]
EXPOSE 6003
