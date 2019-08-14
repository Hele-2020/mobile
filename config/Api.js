const Api = {
    BASE_URL: 'http://82c872a9.ngrok.io/v1/',

    url: function(route = '/') {
        console.log('url => ' + this.BASE_URL + route.replace(new RegExp('^[/]+'), ''));
        return this.BASE_URL + route.replace(new RegExp('^[/]+'), '');
    }
};

export default Api;
