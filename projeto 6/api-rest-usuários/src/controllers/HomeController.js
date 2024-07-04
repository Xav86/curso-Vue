class HomeController{

    async index(req, res){
        res.send("Servidor rodando!");
    }

    async validate(res, req) {
        res.send('okay');
    }

}

module.exports = new HomeController();