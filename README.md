# EcoModa
* Elahn Danee
* Kat Contreras
* Sophia Tony-Egbuniwe
* Tateana Pettiway
* Winda Hao
* Zelzin Marquez

Ecomoda plays on the Spanish word “cómoda” (to be comfortable) to allow users to find comfort in eco-friendly and sustainable fashion sources.

Visit the web app here: https://main.d3u3eipz2iqdk9.amplifyapp.com/

Created for: Women Who Code Hackathon For Social Good Oct 2023

# Mission

-   Our mission is to revolutionize fashion consumption by creating a sustainable and accessible clothing-swap app. We aim to reduce clothing waste, promote a circular fashion economy, and empower people to refresh their style responsibly, all while fostering a more eco-conscious and inclusive world.

# Project Initialization
## Docker

1. Clone the repository down to your local machine.
2. `cd` into the new project directory.
3. Create a `.env` file in the root directory, set the `NOD_ENV=production`, set the `PORT=5001` or a port number of your choosing, and set the `MONGODB_URI=your mongo database URI`.
4. Signup and get an API key and APP ID from Passage (https://console.passage.id/).
5. In the `.env` file created, set it as `PASSAGE_APP_ID=passage app ID` and `PASSAGE_API_KEY=passage api key`.
6. Signup and get an API key from OpenAI (https://openai.com/blog/openai-api).
7. In the `.env` file created, set it as `OPENAI_API_KEY=openAI api key`.
8. In the same root `.env`, set `GENERATE_SOURCEMAP=false`, `REACT_APP_PASSAGE_ID=passage app ID`, and `REACT_APP_API_HOST=http://localhost:5001` or with whatever your port may be.
9. Run `docker volume create mongodb-data`.
10. Run `docker-compose up --build`.
11. Go to http://localhost:3000.
12. Enjoy using EcoModa!

## Without Docker
1. Clone the repository down to your local machine.
2. `cd` into the new project directory.
3. `cd` into the server directory and create a `.env` file inside. Set the `NOD_ENV=production`, set the `PORT=5001` or a port number of your choosing, and set the `MONGODB_URI=your mongo database URI`.
4. Signup and get an API key and APP ID from Passage (https://console.passage.id/).
5. In the `.env` file created inside the server, set it as `PASSAGE_APP_ID=passage app ID` and `PASSAGE_API_KEY=passage api key`.
6. Signup and get an API key from OpenAI (https://openai.com/blog/openai-api).
7. `cd` into the chatgpt folder and create a `.env` file. Set it as `OPENAI_API_KEY=openAI api key`.
8. `cd` into the clieny directory and create a `.env` file inside. Set `GENERATE_SOURCEMAP=false`, `REACT_APP_PASSAGE_ID=passage app ID`, and `REACT_APP_API_HOST=http://localhost:5001` or with whatever your port may be.
9. In a terminal, `cd`  into the server directory and run `npm install` then `node server.js`.
10. In another terminal, `cd` into the client directory and run `npm install` then `npm start`.
11. In another terminal, `cd` into the chatgpt directory and run `npm install` then `npm start`.
12. Go to http://localhost:3000.
13. Enjoy using EcoModa!
