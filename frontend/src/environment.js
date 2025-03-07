let IS_PROD = false;
const server = IS_PROD ? 
"https://zerodha-7qoh.onrender.com" : 
"http://localhost:3002"; // Use port 3002 for backend

export default server;
