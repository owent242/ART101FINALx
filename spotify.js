var PROXY_URL = 'https://api.lruri.me';

var spotify = {

    searchTracks: function (keyword) {
        return fetch(PROXY_URL + '/search?q=' + encodeURIComponent(keyword))
            .then(function (r) { return r.json(); })
            .then(function (d) { return (d.tracks && d.tracks.items) || []; });
    },


    isLoggedIn: function () { return true; },
    login: function () {},
    handleRedirect: function () {}
};