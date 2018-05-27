function twitchUser()  {
    var url = 'https://wind-bow.gomix.me/twitch-api/channels/';
    var users = ["ESL_SC2", "Lobosjr", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    for (var i = 0; i < users.length; i++) {
        $.ajax({
            url: url + users[i] + '?callback=?',
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                userData(data);
            }
        })
    }
}

function userData(info) {
    var status;
    if(info.partner == true) {
        status = 'Online';
    } else {
        status = 'Offline';
    }
    const container = document.getElementsByClassName('container')[0];
    const item = document.createElement('div')
    const h1 = document.createElement('h1');
    const logo = document.createElement('img');
    const mode = document.createElement('div');

    item.setAttribute('class', 'item');
    mode.textContent = status;
    h1.textContent = info.display_name;
    logo.setAttribute('src', info.logo);

    container.appendChild(item);
    item.appendChild(logo)
    item.appendChild(h1)
    item.appendChild(mode)
}


$(document).ready(function() {
    twitchUser();
})