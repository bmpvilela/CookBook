const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cookbook',
    password: '123',
    port: 5432
});

const getRecipes = (request, response) => {
    var responseReturn = new ResponseClass();
    pool.query('SELECT * FROM recipe ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        responseReturn.status = true;
        responseReturn.code = 200;
        responseReturn.message = "Success";
        responseReturn.data = results.rows;

        response.status(200).json(responseReturn);
    })

const getRecipeById = (request, response) => {
    var responseReturn = new ResponseClass();
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM recipe WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rowCount == 0) {
            responseReturn.status = true;
            responseReturn.code = 404;
            responseReturn.message = "Recipe not found";
            responseReturn.data = null;
        } else {
            responseReturn.status = true;
            responseReturn.code = 200;
            responseReturn.message = "Success";
            responseReturn.data = results.rows[0];
        }
        response.status(200).json(responseReturn);
    })
}

const createRecipe = (request, response) => {
    const { firstname, lastname, origin } = request.body;
    pool.query('INSERT INTO recipe (id, name) VALUES ($1, $2)', [id, name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send("Recipe added");
    })
}

const updateRecipe = (request, response) => {
    const id = parseInt(request.params.id);
    var responseReturn = ResponseClass();
    try {
        const { id, name } = request.body;
        pool.query('UPDATE recipe SET id = $1, name = $2', [id, name], (error, results) => {
            if (error) {
                throw error
            }

            responseReturn.status = true;
            responseReturn.code = 200;
            responseReturn.message = "Recipe modification successed";
            responseReturn.data = null;
            response.status(200).send(responseReturn);
        })
    } catch (error) {
        responseReturn.status = false;
        responseReturn.code = 500;
        responseReturn.message = error.message;
        responseReturn.data = null
        response.status(500).json(responseReturn);
    }
}

const deleteRecipe = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM recipe WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send("Recipe deleted");
    })
}

export default () {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};