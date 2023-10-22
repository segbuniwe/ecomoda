# EcoModa
* Elahn Danee
* Kat Contreras
* Sophia Tony-Egbuniwe
* Tateana Pettiway
* Winda Hao
* Zelzin Marquez

Ecomoda plays on the Spanish word “cómoda” (to be comfortable) to allow users to find comfort in eco-friendly and sustainable fashion sources.

Created for: Women Who Code Hackathon For Social Good Oct 2023

# Mission

-   Our mission is to revolutionize fashion consumption by creating a sustainable and accessible clothing-swap app. We aim to reduce clothing waste, promote a circular fashion economy, and empower people to refresh their style responsibly, all while fostering a more eco-conscious and inclusive world.

# Project Initialization
## Docker

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create a `.env` file in the root directory, set the `NOD_ENV=production`, set the `PORT=a port number of your choosing like 5001`, and set the `MONGODB_URI=your mongo database`
4. Signup and get an API key and APP ID from Passage (https://console.passage.id/)
5. In the `.env` file created, set it as `PASSAGE_APP_ID=passage app ID` and `PASSAGE_API_KEY=passage api key`
6. In the root directory`.env`, set `GENERATE_SOURCEMAP=false`, `REACT_APP_PASSAGE_ID=passage app ID`, and `REACT_APP_API_HOST=http://localhost:5001 or whatever your port may be`.
7. Run `docker volume create mongodb-data`
8. Run `docker-compose up --build`
9. Go to http://localhost:3000.
10. Enjoy using EcoModa!

## Without Docker
1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create a `.env` file inside the server directory, set the `NOD_ENV=production`, set the `PORT=a port number of your choosing like 5001`, and set the `MONGODB_URI=your mongo database`
4. Signup and get an API key and APP ID from Passage (https://console.passage.id/)
5. In the `.env` file created inside the server, set it as `PASSAGE_APP_ID=passage app ID` and `PASSAGE_API_KEY=passage api key`
6. Create a `.env` file inside the client directory. Set `GENERATE_SOURCEMAP=false`, `REACT_APP_PASSAGE_ID=passage app ID`, and `REACT_APP_API_HOST=http://localhost:5001 or whatever your port may be`.
7. In a terminal, cd into the server directory and run `npm install` then `node server.js`.
8. In another terminal, cd into the client directory and run `npm install` then `npm start`.
9. Go to http://localhost:3000.
10. Enjoy using EcoModa!
