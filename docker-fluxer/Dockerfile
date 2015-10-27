FROM node:4
ENV TERM xterm-256color

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

RUN npm install -g gulp
RUN npm install -g node-gyp
RUN npm install -g bower
RUN npm install -g npm && npm -v

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

EXPOSE 3000 3001 3002
CMD [ "gulp", "watch" ]