import express from "express";
import path from "path";
import morgan from "morgan";
import session from "express-session"
import MongoStore from 'connect-mongo'
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.set("views", path.join(__dirname, "views"));
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 200000,
        rolling:true,
    },
    store: MongoStore.create({mongoUrl: process.env.DB_URL}),
}));

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;