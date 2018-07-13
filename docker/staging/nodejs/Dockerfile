
FROM node:6
MAINTAINER CloudCV Team

RUN apt-get update -qq && apt-get install -y build-essential git curl
RUN apt-get install -y ruby ruby-dev
RUN gem install sass

WORKDIR /code/
COPY ./frontend/ /code/
COPY ./docker/staging/nodejs/container-start.sh /code/

# Install Prerequisites
RUN npm cache clean -f
RUN apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn
RUN yarn install

CMD ["/bin/bash", "/code/container-start.sh"]
EXPOSE 6003
