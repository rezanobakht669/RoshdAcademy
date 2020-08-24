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


var faceBookSignIn = function (user, pass) {
    for (var d = 0; d <= databases.length; d++) {
        if (user == databases[d].username && pass == databases[d].password) {
            var showresult = result;
            alert(showresult);
            // break;
        }
        else {
            alert('UserName Or PassWord is INCORRECT');
            // break;
        }
    }
}


foreach( $newsFeeds as $newsFeed) {
    // !!!!
    if (user == newsFeed.username) {
        return (newsFeed.timeline)
    }
}




// newsFeed.forEach(function facebookTimeline(user) {
//     if (user === newsFeed.username) {
//         return (newsFeed.timeline)
//     }
// });

faceBookSignIn(userN, passW);