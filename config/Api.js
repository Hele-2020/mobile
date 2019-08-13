const Api = {
    BASE_URL: 'https://36067a90.ngrok.io/v1/',

    url: function(route = '/') {
        console.log('url => ' + this.BASE_URL + route.replace(new RegExp('^[/]+'), ''));
        return this.BASE_URL + route.replace(new RegExp('^[/]+'), '');
    }
};

export default Api;
