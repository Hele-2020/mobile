const Api = {
    VERSION: 'v1/', // doit finir par un '/'
    BASE_URL: 'http://509af329.ngrok.io/', // doit finir par un '/'

    url: function(route = '/') {
        return this.BASE_URL + this.VERSION + route.replace(new RegExp('^[/]+'), '');
    }
};

export default Api;
