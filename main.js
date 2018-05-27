function twitchUser()  {
    var url = 'https://wind-bow.gomix.me/twitch-api/users/';
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    for (var i = 0; i < users.length; i++) {
        $.ajax({
            url: url + users[i],
            dataType: 'jsonp',
            success: function(data) {
                // console.log(data);
                userData(data);
            }
        })
    }
}

function userData(info) {
    const container = document.getElementsByClassName('container')[0];
    const h1 = document.createElement('h1');
    const logo = document.createElement('img');

    h1.textContent = info.display_name;
    logo.setAttribute('src', info.logo);

    container.appendChild(h1);
    container.appendChild(logo);
}


$(document).ready(function() {
    twitchUser();
})