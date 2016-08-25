var companies;
var authenticated = false;

var auth = function (callback) {
    $.get( "https://breezy.hr/api/user/companies/detail", function (result) {
        if(result) {
            var keys = Object.keys(result);
            var c = [];
            for(var i in keys) {
                var company = result[keys[i]];

                var p = [];
                for(var i in company.positions) {
                    var position = company.positions[i];
                    if(position.state == "published" || position.state == "draft") {
                        p.push(position)
                    }
                }
                company.positions = p;
                c.push(company);
            }
            companies = c
            authenticated = true;
        } else {
            authenticated = false;
        }
        console.log('authd');
        callback();
    }).fail(function() {
        console.log('not-authd');
        companies = undefined;
        authenticated = false;
        callback();
    });
};

/*
var auth = function (callback) {
    $.get( "https://breezy.hr/api/user/companies/detail", function (result) {
        if(result) {
            var keys = Object.keys(result);
            var data = result[keys[0]];
            var p = [];
            for(var i in data.positions) {
                var position = data.positions[i];
                if(position.state == "published" || position.state == "draft") {
                    p.push(position)
                }
            }
            positions = p;
        }
        console.log('authd');
        callback();
    }).fail(function() {
        console.log('not-authd');
        positions = undefined;
        callback();
    });
};
*/

var doWork = function () {
    console.log('Checking auth');
    auth(function () {
        setTimeout(function () {
            doWork();
        }, 30000);
    })
};

doWork();