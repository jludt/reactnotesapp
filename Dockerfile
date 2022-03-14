FROM node:16.14.0-alpine

WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "start"]


# #FROM node:16.14.0-alpine
# FROM node:16-alpine

# WORKDIR /usr/local/apps/myreactnotes/dev

# COPY package.json ./
# RUN npm install && npm cache clean --force
# ENV PATH = /usr/local/apps/myreactnotes/dev/node_modules/.bin:$PATH

# COPY src ./src
# COPY .env ./

# EXPOSE ${PORT}

# RUN npm run build
# CMD ["npm", "run", "start:dev"]



# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# COPY . ./

# CMD ["npm", "start"]
