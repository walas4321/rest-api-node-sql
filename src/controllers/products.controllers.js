import { getConnection, sql } from "../database/connection.js";
import Jwt from "jsonwebtoken";


//logueo de Usuario
export const login = async (req, res) => {
    const user = {id: 3};
    //const token = Jwt.sign({user}, 'my_secret_key', { expiresIn: '30s' })
    const token = Jwt.sign({user}, 'my_secret_key')
    res.json({
        token
    })
}

//get all product
export const getProducts = async (req, res) => {
    try {
        Jwt.verify(req.token, 'my_secret_key', async (err, data)=>{
            if(err){
                res.sendStatus(403)
            }else{
                const pool = await getConnection();
                const result = await pool.request().query('SELECT * FROM products')
                console.log(result)
                res.json(result.recordset) 
            }
        })
    } catch (error) {
        res.sendStatus(500)
        res.sennd(error.message)
    }
    
}

//get a product
export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        Jwt.verify(req.token, 'my_secret_key', async (err, data)=>{
            if(err){
                res.sendStatus(403)
            }else{
                const pool = await getConnection();
                const result = await pool.request().input("Id", id).query('SELECT * FROM products WHERE id = @Id')
                console.log(result)
                res.json(result.recordset) 
            }
        })
    } catch (error) {
        res.sendStatus(500)
        res.sennd(error.message)
    }
    
}

//create a product
export const createProduct = async (req, res) => {
    const { name, description } = req.body
    console.log( name, description )
    

    if( name == null || description == null ){
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" })
    }

    try {    
        const pool = await getConnection()


        Jwt.verify(req.token, 'my_secret_key', async (err, data)=>{
            if(err){
                res.sendStatus(403)
            }else{
                await pool.request()
                .input("name", sql.VarChar, name)
                .input('description', sql.VarChar, description)
                .query('INSERT INTO products (name, description) VALUES (@name, @description)')

                res.json({ name, description })
            }
        })

        
        
    } catch (error) {
        res.sendStatus(500)
        res.sennd(error.message)
    }
    
}

//update a product
export const updateProduct = async (req, res) => {
    const { name, description } = req.body
    const { id } = req.params
    console.log( name, description )

    if( name == null || description == null ){
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" })
    }

    Jwt.verify(req.token, 'my_secret_key', async (err, data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            const pool = await getConnection();
            const result = await pool
                .request()
                .input('name', sql.VarChar, name)
                .input('description', sql.VarChar, description)
                .input('id', sql.Int, id)
                .query('UPDATE products SET name = @name, description = @description WHERE id = @id')
            console.log(result)
            res.json({ name, description }) 
        }
    })
}

//delete a product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    Jwt.verify(req.token, 'my_secret_key', async (err, data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            const pool = await getConnection();
             const result = await pool
                .request()
                .input("Id", id)
                .query('DELETE FROM products WHERE id = @Id');

            res.send(result)
           
        }
    })
}

//session close
export const logout = async (req, res) => {
    const token = req.headers['x-access-token'];
    console.log(req.user)
    delete req.user.token;
    activeTokens = activeTokens.filter(t => t !== token);

    res.json({ message: 'Sesión cerrada exitosamente' });
}






export const protected1 = async (req, res) => {
    Jwt.verify(req.token, 'my_secret_key', (err, data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.json({
                text: 'protected',
                data
            })
        }
    })
    // res.json({
    //     text: 'protected'
    // })
}

