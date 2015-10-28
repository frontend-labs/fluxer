FROM node:4
ENV TERM xterm-256color

RUN mkdir -p /usr/src/app/frontend && mkdir /usr/src/app/public
WORKDIR /usr/src/app/frontend

#RUN wget https://raw.githubusercontent.com/frontend-labs/flux/master/frontend/package.json -P /usr/src/
COPY package.json /usr/src/

RUN npm install -g gulp
RUN npm install -g node-gyp
RUN npm install -g bower
RUN npm install -g npm && npm -v

RUN cd /usr/src && npm install

#COPY init.sh /usr/bin/init
#RUN chmod +x /usr/bin/init

EXPOSE 3000 3001 4000
CMD ["gulp", "watch"]