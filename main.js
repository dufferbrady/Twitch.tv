function twitchUser()  {
    var url = 'https://wind-bow.gomix.me/twitch-api/users/freecodecamp';
    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
        }
    })
}

$(document).ready(function() {
    twitchUser();
})