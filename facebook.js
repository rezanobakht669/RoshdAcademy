var databases = [
    {
        username: "sababas",
        password: "123"
    },
    {
        username: "rahabas",
        password: "456"
    },
    {
        username: "siabas",
        password: "789"
    }
];

var newsFeeds = [
    {
        username: "sababas",
        timeline: "this is the first timeline"
    },
    {
        username: "rahabas",
        timeline: "WOW JS is wonderfull"
    },
    {
        username: "siabas",
        timeline: "WOW JS is king"
    }
];


var userN = prompt('Enter Your Username:');
var passW = prompt('Enter Your Password:');


var faceBookSignin = function (user, pass) {
    for (var i = 0; i <= databases.length; i++) {
        if (user == databases[i].username && pass == databases[i].password) {
            // var result = facebookTimeline(user);
            for (var j = 0; j <= newsFeeds.length; j++) {
                if (user == newsFeeds[j].username) {
                    return (newsFeeds[j].timeline)
                }
            }  
        }
    
    }
    alert('UserName Or PassWord is INCORRECT');
    
}



// faceBookSignin(userN, passW);

console.log(faceBookSignin(userN, passW));