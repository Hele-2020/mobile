const Api = {
    VERSION: 'v1/', // doit finir par un '/'
    BASE_URL: 'https://cf35f37b.ngrok.io/', // doit finir par un '/'

    url: function(route = '/') {
        return this.BASE_URL + this.version + route.replace(new RegExp('^[/]+'), '');
    }
};

export default Api;
