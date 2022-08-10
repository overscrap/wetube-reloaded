import express from "express";

const PORT = 4000;

const app = express();

const urlLogger = (req, res, next) => {
    console.log(`path: ${req.url}`);
    next();
};
const securityLogger = (req, res, next) => {
    const protocol = req.protocol;
    if(protocol === "https"){
        console.log(`protocol: secure`);
    }else{
        console.log(`protocol: insecure`);
    }
    next();
};
const privateMiddleware = (req, res, next) => {
   const url = req.url;
   if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
   }
   console.log("Allowed, you may continue.");
   next();
};

const timeLogger = (req, res, next) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    console.log(`time: ${year}.${month}.${day}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
    return res.send("<h1>welcome to the private lounge</h1>");
};

app.use(urlLogger);
app.use(privateMiddleware);
app.use(timeLogger);
app.use(securityLogger);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT} !!!`);

app.listen(PORT, handleListening);