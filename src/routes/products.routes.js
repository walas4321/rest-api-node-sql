import { Router } from "express";
import { login, getProducts, getProduct, createProduct, updateProduct, deleteProduct, protected1, logout } from "../controllers/products.controllers.js";

const router = Router()

// const secret = 'mysecret'; 
// const payload = {
//     user_id: 123,
//     username: 'testuser'
// };

// const token = jwt1.sign(payload, secret);
// console.log(token);

//User loguearse
router.get('/login', login)

//User Logout
//router.delete('/logout', logout)

//get all product
router.get('/products', ensureToken, getProducts)

//get a product
router.get('/product/:id', ensureToken, getProduct)

//create a product
router.post('/product', ensureToken, createProduct)

//update a product
router.put('/product/:id', ensureToken, updateProduct)

//delete a product
router.delete('/product/:id', ensureToken, deleteProduct)


router.get('/protected', ensureToken, protected1)

function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403);
    }
}

export default router 