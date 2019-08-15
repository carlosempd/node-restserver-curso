const jwt = require('jsonwebtoken');

// =====================
// Verificar Token
// =====================

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });


};

// =====================
// Verificar ADMINrole
// =====================

let verificaAdmin_role = (req, res, next) => {

    let role = req.usuario.role;

    if (role === 'ADMIN_ROLE') {
        next();
    } else {
        res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }


};

// ===========================
// Verificar token para imagen
// ===========================

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

}


module.exports = {
    verificaToken,
    verificaAdmin_role,
    verificaTokenImg
}