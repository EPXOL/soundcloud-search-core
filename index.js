var request = require('request');

class Search {
    client_id = null;
    tracks = (query, limit = 6, callback) => {
        return new Promise((resolve, reject) => {
            if(typeof query !== "string") throw "Query need to be string !";
            if(isNaN(limit)) throw "Limit must be a number !";
            if(limit > 100||limit < 1) throw "Limit must be between 1 and 100";
            var searchURL = `https://api-v2.soundcloud.com/search?client_id=${this.client_id}&q=${query}&limit=${limit+20}`;
            searchURL = encodeURI(searchURL);
            request({
                "url": searchURL
            }, (err, res, body) => {
                if(err) throw err;
                if(res.statusCode === 200) {
                    var resoults = [];
                    var json = null;
                    try {
                        json = JSON.parse(body);
                    } catch(err) {
                        throw Error("Error on parsing body into JSON");
                    }
                    resoults = json.collection.filter(e => e.kind == "track").splice(0, limit);
                    callback||resolve(resoults);
                }
            })
        })
    }
    playlists = (query, limit, callback) => {
        return new Promise((resolve, reject) => {
            if(typeof query !== "string") throw "Query need to be string !";
            if(isNaN(limit)) throw "Limit must be a number !";
            if(limit > 100||limit < 1) throw "Limit must be between 1 and 100";
            var searchURL = `https://api-v2.soundcloud.com/search?client_id=${this.client_id}&q=${query}&limit=${limit+20}`;
            searchURL = encodeURI(searchURL);
            request({
                "url": searchURL
            }, (err, res, body) => {
                if(err) throw err;
                if(res.statusCode === 200) {
                    var resoults = [];
                    var json = null;
                    try {
                        json = JSON.parse(body);
                    } catch(err) {
                        throw Error("Error on parsing body into JSON");
                    }
                    resoults = json.collection.filter(e => e.kind == "playlist").splice(0, limit);
                    callback||resolve(resoults);
                }
            })
        })
    }
    users = (query, limit, callback) => {
        return new Promise((resolve, reject) => {
            if(typeof query !== "string") throw "Query need to be string !";
            if(isNaN(limit)) throw "Limit must be a number !";
            if(limit > 100||limit < 1) throw "Limit must be between 1 and 100";
            var searchURL = `https://api-v2.soundcloud.com/search?client_id=${this.client_id}&q=${query}&limit=${limit+20}`;
            searchURL = encodeURI(searchURL);
            request({
                "url": searchURL
            }, (err, res, body) => {
                if(err) throw err;
                if(res.statusCode === 200) {
                    var resoults = [];
                    var json = null;
                    try {
                        json = JSON.parse(body);
                    } catch(err) {
                        throw Error("Error on parsing body into JSON");
                    }
                    resoults = json.collection.filter(e => e.kind == "user").splice(0, limit);
                    callback||resolve(resoults);
                }
            })
        })
    }
    nofilter = (query, limit, callback) => {
        return new Promise((resolve, reject) => {
            if(typeof query !== "string") throw "Query need to be string !";
            if(isNaN(limit)) throw "Limit must be a number !";
            if(limit > 100||limit < 1) throw "Limit must be between 1 and 100";
            var searchURL = `https://api-v2.soundcloud.com/search?client_id=${this.client_id}&q=${query}&limit=${limit+20}`;
            searchURL = encodeURI(searchURL);
            request({
                "url": searchURL
            }, (err, res, body) => {
                if(err) throw err;
                if(res.statusCode === 200) {
                    var resoults = [];
                    var json = null;
                    try {
                        json = JSON.parse(body);
                    } catch(err) {
                        throw Error("Error on parsing body into JSON");
                    }
                    resoults = json.collection.filter(e => e.kind !== "user").splice(0, limit);
                    callback||resolve(resoults);
                }
            })
        })
    }
    any = (query, limit, callback) => {
        return new Promise((resolve, reject) => {
            if(typeof query !== "string") throw "Query need to be string !";
            if(isNaN(limit)) throw "Limit must be a number !";
            if(limit > 100||limit < 1) throw "Limit must be between 1 and 100";
            var searchURL = `https://api-v2.soundcloud.com/search?client_id=${this.client_id}&q=${query}&limit=${limit+20}`;
            searchURL = encodeURI(searchURL);
            request({
                "url": searchURL
            }, (err, res, body) => {
                if(err) throw err;
                if(res.statusCode === 200) {
                    var resoults = [];
                    var json = null;
                    try {
                        json = JSON.parse(body);
                    } catch(err) {
                        throw Error("Error on parsing body into JSON");
                    }
                    resoults = json.collection.splice(0, limit);
                    callback||resolve(resoults);
                }
            })
        })
    }
    constructor(clientID) {
        if(!clientID||clientID === undefined) throw "You must declare Client ID !";
        if(typeof clientID !== "string") throw "Client ID must be string !";
        this.client_id = clientID;
    };
}

module.exports = Search;
