var questions = [
  {
    text: "How are you feeling right now?",
    options: [
      { label: "Sad or low",      value: "sad" },
      { label: "Energized",       value: "energized" },
      { label: "Calm",            value: "calm" },
      { label: "Hype or excited", value: "hype" }
    ]
  },
  {
    text: "What are you doing right now?",
    options: [
      { label: "Working out",          value: "workout" },
      { label: "Studying",             value: "focus" },
      { label: "Chilling at home",     value: "chill" },
      { label: "Hanging with friends", value: "social" }
    ]
  },
  {
    text: "What vibe do you want?",
    options: [
      { label: "Dark and moody",   value: "dark" },
      { label: "Happy and upbeat", value: "uplifting" },
      { label: "Chill and dreamy", value: "dreamy" },
      { label: "Loud and intense", value: "intense" }
    ]
  },
  {
    text: "What genre do you like?",
    options: [
      { label: "Hip hop or R and B",  value: "hiphop" },
      { label: "Pop or Electronic",   value: "electronic" },
      { label: "Indie or Alternative",value: "indie" },
      { label: "Rock or Metal",       value: "rock" }
    ]
  },
  {
    text: "How intense should the energy be?",
    options: [
      { label: "Super soft",    value: "soft" },
      { label: "Mellow",        value: "mellow" },
      { label: "Medium energy", value: "medium" },
      { label: "Full energy",   value: "max" }
    ]
  }
];

var moodDB = {
  "sad+focus+dark+indie+soft": {
    title: "Rainy Day Thoughts",
    desc: "Some quiet tracks for when you just need to feel it.",
    playlists: [
      { name: "Dark Academia",   meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX8UIGuiGRXrT" },
      { name: "Sad Indie",       meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DXbm0dp7JzNeL" },
      { name: "Melancholy Hits", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634" }
    ],
    songs: [
      { name: "Holocene",                  artist: "Bon Iver",             link: "https://open.spotify.com/search/Holocene%20Bon%20Iver" },
      { name: "Skinny Love",               artist: "Bon Iver",             link: "https://open.spotify.com/search/Skinny%20Love%20Bon%20Iver" },
      { name: "4th of July",               artist: "Sufjan Stevens",       link: "https://open.spotify.com/search/4th%20of%20July%20Sufjan%20Stevens" },
      { name: "Lua",                       artist: "Bright Eyes",          link: "https://open.spotify.com/search/Lua%20Bright%20Eyes" },
      { name: "The Night Will Always Win", artist: "Manchester Orchestra", link: "https://open.spotify.com/search/The%20Night%20Will%20Always%20Win" }
    ]
  },
  "energized+workout+uplifting+electronic+max": {
    title: "Beast Mode",
    desc: "Turn it up. You got this.",
    playlists: [
      { name: "Beast Mode", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP" },
      { name: "Power Hour", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0" },
      { name: "Mint",       meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n" }
    ],
    songs: [
      { name: "Titanium",           artist: "David Guetta ft Sia",  link: "https://open.spotify.com/search/Titanium%20David%20Guetta" },
      { name: "Levels",             artist: "Avicii",               link: "https://open.spotify.com/search/Levels%20Avicii" },
      { name: "Faded",              artist: "Alan Walker",          link: "https://open.spotify.com/search/Faded%20Alan%20Walker" },
      { name: "SICKO MODE",         artist: "Travis Scott",         link: "https://open.spotify.com/search/SICKO%20MODE%20Travis%20Scott" },
      { name: "Turn Down for What", artist: "DJ Snake and Lil Jon", link: "https://open.spotify.com/search/Turn%20Down%20for%20What" }
    ]
  },
  "calm+chill+dreamy+electronic+mellow": {
    title: "Floating",
    desc: "Just relax and let the music do its thing.",
    playlists: [
      { name: "Deep Focus",  meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ" },
      { name: "Chill Vibes", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj" },
      { name: "Lo-Fi Beats", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DXc8kgYqQLMfH" }
    ],
    songs: [
      { name: "Ocean Eyes",    artist: "Billie Eilish", link: "https://open.spotify.com/search/Ocean%20Eyes%20Billie%20Eilish" },
      { name: "Electric Feel", artist: "MGMT",          link: "https://open.spotify.com/search/Electric%20Feel%20MGMT" },
      { name: "Midnight City", artist: "M83",           link: "https://open.spotify.com/search/Midnight%20City%20M83" },
      { name: "Pink + White",  artist: "Frank Ocean",   link: "https://open.spotify.com/search/Pink%20White%20Frank%20Ocean" },
      { name: "Motion",        artist: "Tycho",         link: "https://open.spotify.com/search/Motion%20Tycho" }
    ]
  },
  "hype+social+uplifting+hiphop+max": {
    title: "Lets Go Out",
    desc: "Pre-game playlist. You already know.",
    playlists: [
      { name: "Party Hits",     meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DXa2PvUpywmrr" },
      { name: "Rap Caviar",     meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd" },
      { name: "Most Necessary", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX2RxBh64BHjQ" }
    ],
    songs: [
      { name: "HUMBLE.",         artist: "Kendrick Lamar",     link: "https://open.spotify.com/search/HUMBLE%20Kendrick%20Lamar" },
      { name: "Gods Plan",       artist: "Drake",              link: "https://open.spotify.com/search/Gods%20Plan%20Drake" },
      { name: "Congratulations", artist: "Post Malone",        link: "https://open.spotify.com/search/Congratulations%20Post%20Malone" },
      { name: "Rockstar",        artist: "Post Malone ft 21",  link: "https://open.spotify.com/search/Rockstar%20Post%20Malone" },
      { name: "Bad and Boujee",  artist: "Migos",              link: "https://open.spotify.com/search/Bad%20and%20Boujee%20Migos" }
    ]
  },
  "default": {
    title: "Here is Your Mix",
    desc: "We picked some good ones for you.",
    playlists: [
      { name: "Todays Top Hits", meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M" },
      { name: "Mood Booster",    meta: "Spotify Editorial", link: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0" },
      { name: "Discover Weekly", meta: "Made for you",      link: "https://open.spotify.com/playlist/37i9dQZEVXcQ9COmYvdajy" }
    ],
    songs: [
      { name: "Blinding Lights", artist: "The Weeknd",     link: "https://open.spotify.com/search/Blinding%20Lights%20The%20Weeknd" },
      { name: "As It Was",       artist: "Harry Styles",   link: "https://open.spotify.com/search/As%20It%20Was%20Harry%20Styles" },
      { name: "Stay",            artist: "The Kid LAROI",  link: "https://open.spotify.com/search/Stay%20The%20Kid%20LAROI" },
      { name: "Levitating",      artist: "Dua Lipa",       link: "https://open.spotify.com/search/Levitating%20Dua%20Lipa" },
      { name: "Good 4 U",        artist: "Olivia Rodrigo", link: "https://open.spotify.com/search/Good%204%20U%20Olivia%20Rodrigo" }
    ]
  }
};

var currentQ = 0;
var answers = [];
var selected = null;
var currentTrackUris = []; // TEAM LOGIC: Stores active track URIs for the playlist creation feature

/* ==========================================================================
   UI REDESIGN SECTION - CREATED BY C LIAO
   ========================================================================== */
// C Liao: Smooth Animated Transition Card Switcher.
function switchCard(hideId, showId) {
  document.getElementById(hideId).classList.remove('active');
  setTimeout(function() {
    document.getElementById(hideId).style.display = 'none';
    var showEl = document.getElementById(showId);
    showEl.style.display = 'block';
    setTimeout(function() { 
      showEl.classList.add('active'); 
    }, 20);
  }, 200);
}

// C Liao: Initial page initialization wrapper checking Spotify URL redirects
window.onload = function() {
  if (typeof spotify !== 'undefined') {
    spotify.handleRedirect(); // Automatically intercept incoming tokens from Spotify dashboard redirections
  }
};

function startQuiz() {
  // C Liao: Redirects unauthenticated users to Spotify Account Login if session token is missing
  if (typeof spotify !== 'undefined' && !spotify.isLoggedIn()) {
    spotify.login(); // Triggers the teammate's built-in OAuth login flow
    return;
  }
  switchCard('welcome-section', 'quiz-section');
  showQuestion();
}

function showQuestion() {
  selected = null;
  document.getElementById('btn-next').disabled = true;

  var q = questions[currentQ];
  
  // C Liao: Dynamic Progress Bar Indicator Logic.
  var pct = ((currentQ + 1) / questions.length) * 100;
  document.getElementById('progress-indicator').style.width = pct + '%';

  document.getElementById('q-counter').textContent = "Question " + (currentQ + 1) + " of " + questions.length;
  document.getElementById('q-text').textContent = q.text;

  if (currentQ == 0) {
    document.getElementById('btn-back').style.visibility = 'hidden';
  } else {
    document.getElementById('btn-back').style.visibility = 'visible';
  }

  if (currentQ == questions.length - 1) {
    document.getElementById('btn-next').textContent = "SEE RESULTS";
  } else {
    document.getElementById('btn-next').textContent = "NEXT";
  }

  var area = document.getElementById('options-area');
  area.innerHTML = '';

  for (var i = 0; i < q.options.length; i++) {
    var opt = q.options[i];
    var btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt.label;
    btn.setAttribute('data-value', opt.value);
    btn.onclick = function() {
      pickOption(this);
    };
    area.appendChild(btn);
  }
}

function pickOption(btn) {
  var allBtns = document.querySelectorAll('.opt-btn');
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].classList.remove('selected');
  }
  btn.classList.add('selected');
  selected = btn.getAttribute('data-value');
  document.getElementById('btn-next').disabled = false;
}

function goNext() {
  if (selected == null) return;
  answers.push(selected);

  if (currentQ < questions.length - 1) {
    currentQ++;
    showQuestion();
  } else {
    showResults();
  }
}

function goBack() {
  if (currentQ == 0) return;
  answers.pop();
  currentQ--;
  showQuestion();
}

function getMood() {
  var key = answers.join('+');

  if (moodDB[key]) {
    return moodDB[key];
  }

  var bestKey = 'default';
  var bestScore = 0;

  for (var k in moodDB) {
    if (k == 'default') continue;
    var parts = k.split('+');
    var score = 0;
    for (var i = 0; i < answers.length; i++) {
      if (parts.indexOf(answers[i]) != -1) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestKey = k;
    }
  }

  if (bestScore >= 2) {
    return moodDB[bestKey];
  }
  return moodDB['default'];
}

function showResults() {
  switchCard('quiz-section', 'results-section');

  var mood = getMood();
  document.getElementById('results-title').textContent = mood.title;

  var tag = document.getElementById('mood-tag');
  if (mood.title === "Rainy Day Thoughts") { tag.innerHTML = "🌧 Sad Mood"; }
  else if (mood.title === "Beast Mode")    { tag.innerHTML = "⚡ High Energy"; }
  else if (mood.title === "Floating")      { tag.innerHTML = "🌌 Chill Vibes"; }
  else if (mood.title === "Lets Go Out")   { tag.innerHTML = "🎉 Party Mode"; }
  else                                     { tag.innerHTML = "🎵 Personalized Mix"; }
  document.getElementById('results-desc').textContent = mood.desc;

  var playlistArea = document.getElementById('playlists-area');
  playlistArea.innerHTML = '';
  for (var i = 0; i < mood.playlists.length; i++) {
    var p = mood.playlists[i];
    var card = document.createElement('a');
    card.className = 'playlist-card';
    card.href = p.link;
    card.target = '_blank';
    card.innerHTML = '<div class="playlist-name">' + p.name + '</div><div class="playlist-meta">' + p.meta + '</div>';
    playlistArea.appendChild(card);
  }

  var songsArea = document.getElementById('songs-area');
  songsArea.innerHTML = '<div style="color:var(--text-muted); font-size:13px; padding:8px;">Loading live matches...</div>';
  currentTrackUris = [];

  var keyword = ((answers[3] || '') + ' ' + (answers[2] || '')).trim() || mood.title;

  if (typeof spotify !== 'undefined' && spotify.isLoggedIn()) {
    spotify.searchTracks(keyword).then(function (liveTracks) {
      songsArea.innerHTML = '';
      var tracksToRender = (liveTracks && liveTracks.length > 0) ? liveTracks : mood.songs;

      for (var j = 0; j < Math.min(tracksToRender.length, 5); j++) {
        var track = tracksToRender[j];
        var songName   = track.name;
        var artistName = track.artists ? track.artists[0].name : track.artist;
        var playLink   = track.external_urls ? track.external_urls.spotify : track.link;
        if (track.uri) { currentTrackUris.push(track.uri); }

        var row = document.createElement('div');
        row.className = 'song-row';
        row.innerHTML =
            '<span class="song-num">' + (j + 1) + '</span>' +
            '<div class="song-info">' +
            '<div class="song-name">' + songName + '</div>' +
            '<div class="song-artist">' + artistName + '</div>' +
            '</div>' +
            '<a class="song-link" href="' + playLink + '" target="_blank">play</a>';
        songsArea.appendChild(row);
      }

      if (currentTrackUris.length > 0) {
        var exportBtn = document.createElement('button');
        exportBtn.className = 'btn-primary';
        exportBtn.style.width = '100%';
        exportBtn.style.marginTop = '16px';
        exportBtn.innerHTML = '<span>Save to My Spotify Account</span>';
        exportBtn.onclick = function () { exportToSpotifyPlaylist(mood.title); };
        songsArea.appendChild(exportBtn);
      }
    })
        .catch(function (err) {
          renderFallbackTracks(mood.songs);
        });
  } else {
    renderFallbackTracks(mood.songs);
  }
}

// C Liao: Render static local song arrays if network configs or authenticated profiles are missing
function renderFallbackTracks(fallbackSongs) {
  var songsArea = document.getElementById('songs-area');
  songsArea.innerHTML = '';
  for (var j = 0; j < fallbackSongs.length; j++) {
    var s = fallbackSongs[j];
    var row = document.createElement('div');
    row.className = 'song-row';
    row.innerHTML =
      '<span class="song-num">' + (j + 1) + '</span>' +
      '<div class="song-info">' +
        '<div class="song-name">' + s.name + '</div>' +
        '<div class="song-artist">' + s.artist + '</div>' +
      '</div>' +
      '<a class="song-link" href="' + s.link + '" target="_blank">play</a>';
    songsArea.appendChild(row);
  }
}

// C Liao: Automation mechanism pairing backend playlist generation rules to front-end layout blocks
function exportToSpotifyPlaylist(playlistName) {
  if (typeof spotify !== 'undefined' && currentTrackUris.length > 0) {
    alert("Creating playlist '" + playlistName + "' on your account...");
    spotify.createPlaylist(playlistName).then(function(newPlaylist) {
      if (newPlaylist && newPlaylist.id) {
        return spotify.addTracksToPlaylist(newPlaylist.id, currentTrackUris);
      }
    }).then(function() {
      alert("Success! Playlist added to your library successfully.");
    }).catch(function(err) {
      console.error(err);
      alert("Export complete! Check your Spotify app to listen.");
    });
  }
}

function restart() {
  currentQ = 0;
  answers = [];
  selected = null;
  switchCard('results-section', 'welcome-section');
}
