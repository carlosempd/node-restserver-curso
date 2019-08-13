// ========================
// Puerto
// ========================

process.env.PORT = process.env.PORT || 3000;


// ========================
// Entorno
// ========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ========================
// Vencimiento del Token
// ========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = '100h';


// ========================
// Seed de autenticacion
// ========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ========================
// Base de Datos
// ========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI; //Variable de entorno creada en heroku
}

//'mongodb+srv://cmaldonado:C4rl0sm.@cluster0-j9hjq.mongodb.net/cafe?retryWrites=true&w=majority'
process.env.URLDB = urlDB;


// ========================
// Google Client ID
// ========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '559460896024-s643ie47d9j5cmas810pdpnl3a3kp3ol.apps.googleusercontent.com';