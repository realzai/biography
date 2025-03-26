import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.get("/api/profile_picture", (req, res) => {
  res.send({
    url: "https://5dtle1ixev.ufs.sh/f/NVoH0HnelgtLFSA1ZSnozrHKMLJ42PFAc6tv0IOwpglBkWq1",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
