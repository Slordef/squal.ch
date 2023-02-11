FROM cypress/included:cypress-12.5.1-node-16.18.1-chrome-109.0.5414.74-1-ff-109.0-edge-109.0.1518.52-1

RUN npm install -g pnpm

RUN mkdir -p /app

WORKDIR /app

COPY . .

CMD [ "cypress", "run" ]

