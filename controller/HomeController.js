export default class HomeController{

    async home(req,res){
        res.render('home');
    }

    form(req,res){
        res.render('form');
    }

}