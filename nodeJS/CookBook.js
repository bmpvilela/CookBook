import express from "express";
import bodyParser from "body-parser"
import db from "./queries.js"

const app = express();
const PORT = 5000

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.listen(PORT, () => console.log("Server running on port: http://localhost:${PORT}"));

app.get("/", (request, response) => {
    response.json({
        info: "Hello world!"
    });
})

app.get("/recipe", db.getRecipes);
app.get("/recipe/:id", db.getRecipeById);
app.put("/recipe/:id", db.createRecipe);
app.post("/recipe", db.updateRecipe);
app.delete("/recipe/:id", db.deleteRecipe);