import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors()); // allows frontend to call backend
app.use(express.json());



const PORT = 5000;

// 🗺️ Route to fetch geocode data
app.get("/api/geocode", async (req, res) => {
  const { text } = req.query;
  const apiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjljYzFhMDYwODczZTQ0Y2I4NDFjYmY2ZGRmMzgxMTEzIiwiaCI6Im11cm11cjY0In0=";


  try {
    const response = await axios.get("https://api.openrouteservice.org/geocode/search", {
      params: { text, boundary_country: "LK" },
      headers: { Authorization: apiKey },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching geocode:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
