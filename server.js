import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5500;

app.use(express.static('public'));

// Route to handle API request
// TODO: Change what the .get function does
app.get("/music", async (req, res) => {
    const gameName = req.query.search;
    const apiKey = process.env.API_KEY;  // Get the API key from the .env file
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&search=${gameName}`);
        res.json(response.data);  // Send the API data as a response
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});