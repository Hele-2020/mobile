const Api = {
    VERSION: 'v1/', // doit finir par un '/'
<<<<<<< Updated upstream
    BASE_URL: 'http://d990dc07.ngrok.io/', // doit finir par un '/'
=======
    BASE_URL: 'https://422476ac.ngrok.io', // doit finir par un '/'
>>>>>>> Stashed changes

    url: function(route = '/') {
        return this.BASE_URL + this.VERSION + route.replace(new RegExp('^[/]+'), '');
    }
};

export default Api;
