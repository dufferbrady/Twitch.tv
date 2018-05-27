function twitchUser()  {
    var url = 'https://wind-bow.gomix.me/twitch-api/users/';
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    for (var i = 0; i < users.length; i++) {
        $.ajax({
            url: url + users[i],
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
            }
        })
    }
}

$(document).ready(function() {
    twitchUser();
})