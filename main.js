function twitchUser()  {
    var url = 'https://wind-bow.gomix.me/twitch-api/channels/';
    var users = ["ESL_SC2","Lobosjr", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
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
    info.partner == true ? status = 'Online' : status = 'Offline';

    const container = document.getElementsByClassName('container')[0];
    const item = document.createElement('div')
    const a = document.createElement('a');
    const h1 = document.createElement('h1');
    const logo = document.createElement('img');
    const mode = document.createElement('div');

    a.setAttribute('href', info.url);
    a.setAttribute('target', '_blank');
    item.setAttribute('class', 'item');
    mode.textContent = status;
    h1.textContent = info.display_name;
    logo.setAttribute('src', info.logo);

    container.appendChild(item);
    a.appendChild(h1);
    item.appendChild(logo);
    item.appendChild(a);
    item.appendChild(mode);
}


$(document).ready(function() {
    twitchUser();
})