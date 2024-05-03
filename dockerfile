FROM node:14.21.2

ARG PORT

ENV PORT=$PORT

WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD ["npm","start"]