import express, { type Application } from "express"
import { globalError } from "./middleware/globalError.middleware";
import { notFound } from "./middleware/notFound.middleware";

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));













app.use(notFound);
app.use(globalError);

export default app;