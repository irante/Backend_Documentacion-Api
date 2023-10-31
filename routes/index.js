//importamos router de productos y carrito

const ProductRouter = require('./api/products.router')    // importo el router de productos
const CartRouter = require('./api/Cart.router')    // importo el router de carrito
const HomeRoutes = require('./home.router.js')
const RealtimeRoutes = require('./realtime.router.js')
const LoginRoutes = require('./login.router.js')
const path = require('path')


//Importar liobrerias para swagger ( documetacion de API)

const swaggerJsDoc = require ('swagger-jsdoc')
const swaggerUiExpress = require ('swagger-ui-express')



const isAuth = require('../middlewares/auth.middleware')

// creamos un router de los otros routers

const { Router } = require('express')
const router = Router()




// rutas de productos
router.use('/api/products', ProductRouter)        // hacer que todas las rutas: /products usen el archivo product.router.js



// rutas de Carrito

router.use('/api/carts', CartRouter)


// ruta de Home

router.use('/', HomeRoutes)


// Ruta de Login

router.use('/', LoginRoutes)


// ruta realTimeProducts

router.use('/realTimeProducts', RealtimeRoutes)


// Ruta De chat
router.use('/chat',(req, res) => {   // isAuth es un midleware que impide acceder a la ruta si el usuario no esta autentificado
    res.render('chat')
    
  })



// ARCHIVO DE CONFIGURACION DE  SWAGGER
const specs = swaggerJsDoc({
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Ecommerce API',
      description: 'Documentacion Ecommerce API'
    }
  },
  apis: [
    path.join(__dirname,'..', 'doc', 'productos.yaml'),
    path.join(__dirname,'..', 'doc', 'carritos.yaml')
] 
})
 


  // Ruta de Swagger


 router.use ('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))


module.exports = router       







  