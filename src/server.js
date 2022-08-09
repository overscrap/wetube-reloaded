import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>Home</h1>");
}

const handleAbout = (req, res) => {
    return res.send("<h1>About</h1>");
}

const handleContact = (req, res) => {
    return res.send("<h1>Contact</h1>");
}
const handleLogin = (req, res) => {
    return res.send("<h1>Login</h1>");
}

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}!!!`);

app.listen(4000, handleListening);