class HomeController{

    async index(req, res){
        res.send("Servidor rodando!");
    }

    async validate(req, res) {
        res.status(200).send('okay');
    }

}

module.exports = new HomeController();