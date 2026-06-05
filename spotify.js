// =====usage =====
//
// spotify.handleRedirect();   // call once when the page loads
// spotify.login();            // send the user to log in (e.g. on a button)
//
// const tracks = await spotify.searchTracks("lofi beats");
// console.log(tracks[0].name, tracks[0].external_urls.spotify);
//
// All functions are async (use await / .then()).
//
// ===== Functions =====
// Auth:            login()  handleRedirect()  isLoggedIn()  logout()
// Search (→array): searchTracks(kw)  searchPlaylists(kw)  searchArtists(kw)  searchAlbums(kw)
// By ID:           getTrack(id)  getArtist(id)  getArtistTopTracks(id)  getAlbum(id)
//                  getPlaylist(id)  getPlaylistTracks(id)
// Your account:    getMe()  getMyPlaylists()  getMyTopTracks()  getMyTopArtists()
//                  getRecentlyPlayed()  getMySavedTracks()
// Edit playlists:  createPlaylist(name)  addTracksToPlaylist(id, uris)
// Playback (Prem): play()  pause()  next()  previous()
//
// Read results: track.name / track.artists[0].name / track.external_urls.spotify / track.uri
//               Lists are wrapped: search → .tracks.items, getMyPlaylists() → .items

const CLIENT_ID    = "Put the client id here.";
const REDIRECT_URI = "http://127.0.0.1:8000/";
const API          = "https://api.spotify.com/v1";


const SCOPES = [
    "user-read-private", "user-top-read", "user-read-recently-played",
    "user-library-read", "playlist-read-private",
    "playlist-modify-public", "playlist-modify-private",
    "user-modify-playback-state"
].join(" ");


function randomText(length) {
    const chars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const random = crypto.getRandomValues(new Uint8Array(length));
    let result = "";
    for (let i = 0; i < length; i++) result += chars[random[i] % chars.length];
    return result;
}
async function hashToChallenge(text) {
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return btoa(String.fromCharCode(...new Uint8Array(hash)))
        .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function apiGet(path) {
    const res = await fetch(API + path, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
    return res.json();
}

async function apiSend(method, path, body) {
    const res = await fetch(API + path, {
        method,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
    });
    const text = await res.text();
    return text ? JSON.parse(text) : null;
}

// All function
const spotify = {

    // login
    async login() {
        const verifier = randomText(64);
        localStorage.setItem("verifier", verifier);
        const challenge = await hashToChallenge(verifier);
        const query = new URLSearchParams({
            client_id: CLIENT_ID, response_type: "code", redirect_uri: REDIRECT_URI,
            code_challenge_method: "S256", code_challenge: challenge, scope: SCOPES
        });
        location.href = "https://accounts.spotify.com/authorize?" + query;
    },
    async handleRedirect() {
        const code = new URLSearchParams(location.search).get("code");
        if (!code) return;
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                client_id: CLIENT_ID, grant_type: "authorization_code", code,
                redirect_uri: REDIRECT_URI, code_verifier: localStorage.getItem("verifier")
            })
        });
        localStorage.setItem("token", (await res.json()).access_token);
        history.replaceState(null, "", REDIRECT_URI);
    },
    isLoggedIn() { return !!localStorage.getItem("token"); },
    logout()     { localStorage.removeItem("token"); },

    // search(return Array)
    search(keyword, type) {
        return apiGet("/search?" + new URLSearchParams({ q: keyword, type, limit: 10 }));
    },
    async searchTracks(keyword)    { return (await this.search(keyword, "track")).tracks.items; },
    async searchPlaylists(keyword) { return (await this.search(keyword, "playlist")).playlists.items.filter(Boolean); },
    async searchArtists(keyword)   { return (await this.search(keyword, "artist")).artists.items; },
    async searchAlbums(keyword)    { return (await this.search(keyword, "album")).albums.items; },


    getTrack(id)          { return apiGet("/tracks/" + id); },
    getAlbum(id)          { return apiGet("/albums/" + id); },
    getAlbumTracks(id)    { return apiGet("/albums/" + id + "/tracks"); },
    getArtist(id)         { return apiGet("/artists/" + id); },
    getArtistTopTracks(id){ return apiGet("/artists/" + id + "/top-tracks?market=US"); },
    getArtistAlbums(id)   { return apiGet("/artists/" + id + "/albums"); },
    getPlaylist(id)       { return apiGet("/playlists/" + id); },
    getPlaylistTracks(id) { return apiGet("/playlists/" + id + "/tracks"); },


    getNewReleases()      { return apiGet("/browse/new-releases"); },
    getCategories()       { return apiGet("/browse/categories"); },


    getMe()               { return apiGet("/me"); },
    getMyPlaylists()      { return apiGet("/me/playlists"); },
    getMyTopTracks()      { return apiGet("/me/top/tracks"); },
    getMyTopArtists()     { return apiGet("/me/top/artists"); },
    getRecentlyPlayed()   { return apiGet("/me/player/recently-played"); },
    getMySavedTracks()    { return apiGet("/me/tracks"); },

    // creat/edit playlist
    async createPlaylist(name) {
        const me = await this.getMe();
        return apiSend("POST", "/users/" + me.id + "/playlists", { name, public: false });
    },
    addTracksToPlaylist(playlistId, uris) {      // uris: ["spotify:track:xxx", ...]
        return apiSend("POST", "/playlists/" + playlistId + "/tracks", { uris });
    },

    play()     { return apiSend("PUT",  "/me/player/play"); },
    pause()    { return apiSend("PUT",  "/me/player/pause"); },
    next()     { return apiSend("POST", "/me/player/next"); },
    previous() { return apiSend("POST", "/me/player/previous"); }

};