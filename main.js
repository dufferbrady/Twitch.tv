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
    mode.setAttribute('class', 'status');
    h1.textContent = info.display_name;
    logo.setAttribute('src', info.logo);

    container.appendChild(item);
    a.appendChild(h1);
    item.appendChild(logo);
    item.appendChild(a);
    item.appendChild(mode);
}

function onlineButton()  {
    const item = document.getElementsByClassName('item')
    const status = document.getElementsByClassName('status');
    for (var i = 0; i < status.length; i++)  {
        if(status[i].innerText == 'Online') {
            item[i].style.display = 'block';
        } else {
            item[i].style.display = 'none';
        }
    }
}

function offlineButton()  {
    const item = document.getElementsByClassName('item')
    const status = document.getElementsByClassName('status');
    for (var i = 0; i < status.length; i++)  {
        if(status[i].innerText == 'Offline') {
            item[i].style.display = 'block';
        } else {
            item[i].style.display = 'none';
        }
    }
}

function allButton() {
    twitchUser();
}

$(document).ready(function() {
    twitchUser();
})