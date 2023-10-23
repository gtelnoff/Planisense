FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 8080
CMD ["ng", "serve", "--host", "0.0.0.0" , "--port" , "8080"]