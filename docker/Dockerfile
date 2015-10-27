FROM node:4
ENV TERM xterm-256color

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/

RUN npm install -g gulp
RUN npm install -g node-gyp
RUN npm install -g bower
RUN npm install -g npm && npm -v

RUN cd /usr/src && npm install

EXPOSE 3000 3001 3002
CMD [ "bash", "init.sh" ]