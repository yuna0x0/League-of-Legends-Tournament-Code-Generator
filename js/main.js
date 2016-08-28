/*
League of Legends Tournament Code.js for website
by edisonlee55
Website: https://www.edisonlee55.com
*/
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64;}else if(isNaN(i)){a=64;}
t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a);}
return t;},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r);}
if(a!=64){t=t+String.fromCharCode(i);}}
t=Base64._utf8_decode(t);return t;},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128);}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128);}}
return t;},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++;}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2;}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3;}}
return t;}};
$(document).ready(function(){
    $("#team-select").mouseover(function() {
        var mapselect = $("#map-select").dropdown('get value');
        var teamselecthtml = $("#team-select-menu").html();
        if(teamselecthtml === '<div class="item" data-value="team1">1</div><div class="item" data-value="team2">2</div><div class="item" data-value="team3">3</div>'){
            if(mapselect !== "map10"){
                $("#team-select-menu").empty();
                $("#team-select-menu").append('<div class="item" data-value="team1">1</div><div class="item" data-value="team2">2</div><div class="item" data-value="team3">3</div><div class="item" data-value="team4">4</div><div class="item" data-value="team5">5</div>');
            }
        }else if(mapselect === "map10") {
            $("#team-select-menu").empty();
            $("#team-select-menu").append('<div class="item" data-value="team1">1</div><div class="item" data-value="team2">2</div><div class="item" data-value="team3">3</div>');
        }else if(teamselecthtml === '<div class="item" data-value="team1">1</div><div class="item" data-value="team2">2</div><div class="item" data-value="team3">3</div><div class="item" data-value="team4">4</div><div class="item" data-value="team5">5</div>'){
        
        }else{
            $("#team-select-menu").empty();
            $("#team-select-menu").append('<div class="item" data-value="team1">1</div><div class="item" data-value="team2">2</div><div class="item" data-value="team3">3</div><div class="item" data-value="team4">4</div><div class="item" data-value="team5">5</div>');
        }
    });
    $('.ui.dropdown')
        .dropdown()
    ;
});
$("#submit").click(function() {
    $("#result").empty();
    $("#game-name-input").attr('class','field');
    $("#map-select").attr('class','ui selection dropdown');
    $("#submit").attr('class','ui primary loading button');
    var mapselect = $("#map-select").dropdown('get value');
    var pickselect = $("#pick-select").dropdown('get value');
    var teamselect = $("#team-select").dropdown('get value');
    var specselect = $("#spec-select").dropdown('get value');
    var gamename = $("#game-name").val();
    var gamepassword = $("#game-password").val();
    var gameid = $("#game-id").val();
    var gamereport = $("#game-report").val();
    if (gamename === "") {
<<<<<<< HEAD
        $("#game-name-input").attr('class','field error');
        $("#submit").attr('class','ui primary button');
    }
    if(mapselect === ""){
            $("#map-select").attr('class','ui selection dropdown error');
            $("#submit").attr('class','ui primary button');
    }
    if(pickselect === ""){
            $("#pick-select").attr('class','ui selection dropdown error');
            $("#submit").attr('class','ui primary button');
    }
    if(teamselect === ""){
            $("#team-select").attr('class','ui selection dropdown error');
            $("#submit").attr('class','ui primary button');
    }
    if(specselect === ""){
            $("#spec-select").attr('class','ui selection dropdown error');
            $("#submit").attr('class','ui primary button');
    }else{
        var json = '{"name":"' + gamename + '","extra":"' + gameid + '","password":"' + gamepassword + '","report":"' + gamereport + '"}';
        var code = "pvpnet://lol/customgame/joinorcreate/" + mapselect + "/" + pickselect + "/" + teamselect + "/" + specselect + "/" + Base64.encode(json);
        $("#result").append('<h3>Tournament Code</h3><textarea class="form-control" rows="3">' + code + '</textarea>');
        $("#submit").attr('class','ui primary button');
=======
        alert("Error: Game Name cannot be empty!");
    } else {
        var json = '{"name":"' + gamename + '","extra":"' + gameid + '","password":"' + gamepassword + '","report":"' + gamereport + '"}';
        var code = "pvpnet://lol/customgame/joinorcreate/" + mapselect + "/" + pickselect + "/" + teamselect + "/" + specselect + "/" + Base64.encode(json);
        $("#result").append('<h3>Tournament Code</h3><textarea class="form-control" rows="3">' + code + '</textarea>');
>>>>>>> origin/gh-pages
    }
});
