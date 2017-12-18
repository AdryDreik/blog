export default (app) => {
  app.post('/register', (req, res) => {
    res.send({
      finalizado: true,
      message: `Hola ${req.body.email} te has registrado correctamente`,
    });
  });
};
