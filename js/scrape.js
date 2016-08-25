var HiredCom = function () {

    var getStartDate = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        timePeriod = timePeriod.trim();
        try {
            var segments = timePeriod.split(' ');
            if(segments.length == 1) {
                return {
                    'year': parseInt(segments[0].trim().replace("(", "").replace(")", ""))
                }
            } else if (segments.length > 1) {
                var startYear = parseInt(segments[0].trim());
                if(startYear) {
                    return {
                        'year': startYear
                    };
                }
            }
        } catch(e) {
            console.log(e);
        }
    };

    var getEndDate = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        //console.log('Parsing: ' + timePeriod);
        try {
            var segments = timePeriod.split(' ');
            if (segments.length > 1) {
                var endYear = parseInt(segments[2].trim());
                if (endYear) {
                    return {
                        'year': parseInt(endYear)
                    };
                }
            }
        } catch(e) {
            console.log(e);
        }
    };

    var getSocialProfiles = function () {
        var url = window.location.href;
        if(!url) {
            return;
        }
        var socialProfiles = [{
            'type': 'angellist',
            'typeId': 'angellist',
            'typename': 'AngelList',
            'url': url
        }]
        return socialProfiles;
    };

    var isCurrent = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        //console.log('Parsing: ' + timePeriod);
        try {
            var segments = timePeriod.split(' ');
            if (segments.length > 1) {
                var endYear = segments[2].trim();
                if (endYear === "Present") {
                    return true;
                }
            }
        } catch(e) {
            console.log(e);
        }
    };


    var getName = function () {
        var name = $('.profiles-show h1').text();
        console.log('Name: ' + name);
        return name;
    };

    var getSummary = function () {
        var summary = $('.about .summary').text();
        return summary;
    };

    var getHeadline = function () {
        var headline = $('.profiles-show h2 p');
        return headline;
    };

    var getProfilePhotoUrl = function () {
        var profilePhotoUrl = $('.profiles-show .larger img').attr('src');
        return profilePhotoUrl;
    };

    var getEducationHistory = function () {
        var history = [];
        $("[data-field='tags_colleges'].value .tag").each(function (index) {
            var education = {
                'school_name': $(this).find('a').text()
            };
            if(education.school_name) {
                history.push(education);
            }
        });
        return history;
    };

    var getWorkHistory = function () {
        var history = [];
        $(".experience .startup_roles.experience").each(function (index) {
            var position = {
                'company_name': $(this).find('.text .show:nth-child(0)').text().replace('\\n', ''),
                'title': $(this).find('.text .show:nth-child(1)').text().replace('\\n', ''),
                'start_date': getStartDate($(this).find('.years').text()),
                'end_Date': getEndDate($(this).find('.years').text()),
                'is_current': isCurrent($(this).find('.years').text())
            };
            if(position.title && position.company_name) {
                history.push(position);
            }
        });
        return history;
    };

    return {
        scrape: function (callback) {
            console.log('Scraping AngelList.');
            var candidate = {
                'name': getName(),
                'headline': getHeadline(),
                'profile_photo_url': getProfilePhotoUrl(),
                'summary': getSummary(),
                'education': getEducationHistory(),
                'work_history': getWorkHistory(),
                'social_profiles': getSocialProfiles()
            };
            if(candidate.name) {
                return callback(candidate);
            }
            return callback();
        }
    };
};

var AngelList = function () {

    var getStartDate = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        timePeriod = timePeriod.trim();
        try {
            var segments = timePeriod.split(' ');
            if(segments.length == 1) {
                return {
                    'year': parseInt(segments[0].trim().replace("(", "").replace(")", ""))
                }
            } else if (segments.length > 1) {
                var startYear = parseInt(segments[0].trim());
                if(startYear) {
                    return {
                        'year': startYear
                    };
                }
            }
        } catch(e) {
            console.log(e);
        }
    };

    var getEndDate = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        //console.log('Parsing: ' + timePeriod);
        try {
            var segments = timePeriod.split(' ');
            if (segments.length > 1) {
                var endYear = parseInt(segments[2].trim());
                if (endYear) {
                    return {
                        'year': parseInt(endYear)
                    };
                }
            }
        } catch(e) {
            console.log(e);
        }
    };

    var getSocialProfiles = function () {
        var url = window.location.href;
        if(!url) {
            return;
        }
        var socialProfiles = [{
            'type': 'angellist',
            'typeId': 'angellist',
            'typename': 'AngelList',
            'url': url
        }]
        return socialProfiles;
    };

    var isCurrent = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        //console.log('Parsing: ' + timePeriod);
        try {
            var segments = timePeriod.split(' ');
            if (segments.length > 1) {
                var endYear = segments[2].trim();
                if (endYear === "Present") {
                    return true;
                }
            }
        } catch(e) {
            console.log(e);
        }
    };


    var getName = function () {
        var name = $('.profiles-show h1').text();
        console.log('Name: ' + name);
        return name;
    };

    var getSummary = function () {
        var summary = $('.about .summary').text();
        return summary;
    };

    var getHeadline = function () {
        var headline = $('.profiles-show h2 p');
        return headline;
    };

    var getProfilePhotoUrl = function () {
        var profilePhotoUrl = $('.profiles-show .larger img').attr('src');
        return profilePhotoUrl;
    };

    var getEducationHistory = function () {
        var history = [];
        $("[data-field='tags_colleges'].value .tag").each(function (index) {
            var education = {
                'school_name': $(this).find('a').text()
            };
            if(education.school_name) {
                history.push(education);
            }
        });
        return history;
    };

    var getWorkHistory = function () {
        var history = [];
        $(".experience .startup_roles.experience").each(function (index) {
            var position = {
                'company_name': $(this).find('.text .show:nth-child(0)').text().replace('\\n', ''),
                'title': $(this).find('.text .show:nth-child(1)').text().replace('\\n', ''),
                'start_date': getStartDate($(this).find('.years').text()),
                'end_Date': getEndDate($(this).find('.years').text()),
                'is_current': isCurrent($(this).find('.years').text())
            };
            if(position.title && position.company_name) {
                history.push(position);
            }
        });
        return history;
    };

    return {
        scrape: function (callback) {
            console.log('Scraping AngelList.');
            var candidate = {
                'name': getName(),
                'headline': getHeadline(),
                'profile_photo_url': getProfilePhotoUrl(),
                'summary': getSummary(),
                'education': getEducationHistory(),
                'work_history': getWorkHistory(),
                'social_profiles': getSocialProfiles()
            };
            if(candidate.name) {
                return callback(candidate);
            }
            return callback();
        }
    };
};

var LinkedIn = function () {

    var getQueryStringVariable = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    var getSocialProfiles = function () {
        var url = getProfileUrl();
        if(!url) {
            return;
        }
        var socialProfiles = [{
            'type': 'linkedin',
            'typeId': 'linkedin',
            'typeName': 'LinkedIn',
            'url': url
        }]
        return socialProfiles;
    };

    var getProfileUrl = function () {

        var profileUrl = $('.public-profile a').attr('href');
        console.log("Profile URL: " + profileUrl);
        if(profileUrl) {
            if(profileUrl.indexOf("http") < 0) {
                profileUrl = "https://www.linkedin.com" + profileUrl;
            }
            console.log("Profile URL final: " + profileUrl);
            return profileUrl;
        }

        var id = getQueryStringVariable('id');
        if(id) {
            return 'https://www.linkedin.com/profile/view?id=' + id;
        }
    };

    var getMonthIndex = function (month) {
        if(!month) {
            return;
        }
        month = month.toLowerCase();
        if(month === "january") {
            return 1;
        } else if(month === "february") {
            return 2;
        } else if(month === "march") {
            return 3;
        } else if(month === "april") {
            return 4;
        } else if(month === "may") {
            return 5;
        } else if(month === "june") {
            return 6;
        } else if(month === "july") {
            return 7;
        } else if(month === "august") {
            return 8;
        } else if(month === "september") {
            return 9;
        } else if(month === "october") {
            return 10;
        } else if(month === "november") {
            return 11;
        } else if(month === "december") {
            return 12;
        } else {
            return;
        }
    }

    var parseTimePeriod = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        //console.log('Parsing: ' + timePeriod);
        try {
            var segments = timePeriod.split(' ');
            if(segments.length == 1) {
                return {
                    'year': parseInt(segments[0].trim())
                }
            } else if (segments.length == 2) {
                var month = getMonthIndex(segments[0]);
                var year = parseInt(segments[1].trim());
                return {
                    'month': month,
                    'year': year
                }
            } else if (segments.length == 3) {
                var month = getMonthIndex(segments[1]);
                var year = parseInt(segments[2].trim());
                return {
                    'month': month,
                    'year': year
                }
            } else {
                return;
            }
        } catch(e) {
            console.log(e);
            return;
        }
    }

    var getName = function () {
        var name = $('.profile-overview-content .fn .full-name').text();
        return name;
    };

    var getSummary = function () {
        var summary = $('.background-content .summary .description').text();
        return summary;
    };

    var getHeadline = function () {
        var headline = $('.background-content .headline-container .title').text();
        return headline;
    };

    var getProfilePhotoUrl = function () {
        var profilePhotoUrl = $('.profile-picture img').attr('src');
        return profilePhotoUrl;
    };

    var getEmailAddress = function () {
        var email = $('.contact-info-section .email a').text();
        if(!email) {
            email = $('#relationship-email-item-0 a').text();
        }
        if(!email) {
            email = $('#contact-info-section #email ul li:first a').text();
        }
        console.log("Email: " + email);
        return email;
    };

    var getEducationHistory = function () {
        var history = [];
        $(".background-education .section-item").each(function (index) {
            var education = {
                'school_name': $(this).find('header h4 a').text(),
                'degree': $(this).find('header h5 .degree').text(),
                'field_of_study': $(this).find('header h5 .major a').text(),
                'start_date': parseTimePeriod(($(this).find('.education-date time:first').text())),
                'end_date': parseTimePeriod(($(this).find('.education-date time:last').text()))
            };
            if(education.school_name) {
                history.push(education);
            }
        });
        return history;
    };

    var getWorkHistory = function () {
        var history = [];
        $(".background-experience .section-item.current-position").each(function (index) {
            var position = {
                'title': $(this).find('header h4 a').text(),
                'company_name': $(this).find('header h5 a').text(),
                'start_date': parseTimePeriod(($(this).find('.experience-date-locale time:first').text())),
                'is_current': true
            };

            //alert(JSON.stringify(position));
            if(position.title && position.company_name) {
                history.push(position);
            }
        });
        $(".background-experience .section-item.past-position").each(function (index) {
            var position = {
                'title': $(this).find('header h4 a').text(),
                'company_name': $(this).find('header h5 a').text(),
                'start_date': parseTimePeriod(($(this).find('.experience-date-locale time:first').text())),
                'end_date': parseTimePeriod(($(this).find('.experience-date-locale time:last').text()))
            };
            //alert(JSON.stringify(position));
            if(position.title && position.company_name) {
                history.push(position);
            }
        });
        return history;
    };

    return {
        scrape: function (callback) {
            console.log('scrapping!')
            var candidate = {
                'name': getName(),
                'headline': getHeadline(),
                'profile_photo_url': getProfilePhotoUrl(),
                'email_address': getEmailAddress(),
                'summary': getSummary(),
                'work_history': getWorkHistory(),
                'education': getEducationHistory(),
                'social_profiles': getSocialProfiles()
            };
            if(candidate.name) {
                console.log('Found candidate');
                return callback(candidate);
            }
            console.log('No candidate');
            return callback();

        }
    };
};


var LinkedInRecruiter = function () {

    var getQueryStringVariable = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    var getSocialProfiles = function () {
        var url = getProfileUrl();
        if (!url) {
            return;
        }
        var socialProfiles = [
            {
                'type': 'linkedin',
                'typeId': 'linkedin',
                'typename': 'LinkedIn',
                'url': url
            }
        ]
        return socialProfiles;
    };

    var getProfileUrl = function () {

        var profileUrl = $('.public-profile a').attr('href');
        console.log("Profile URL: " + profileUrl);
        if(profileUrl) {
            if(profileUrl.indexOf("http") < 0) {
                profileUrl = "https://www.linkedin.com" + profileUrl;
            }
            console.log("Profile URL final: " + profileUrl);
            return profileUrl;
        }

        var id = getQueryStringVariable('id');
        if(id) {
            return 'https://www.linkedin.com/profile/view?id=' + id;
        }
    };

    var getMonthIndex = function (month) {
        if (!month) {
            return;
        }
        month = month.toLowerCase();
        if (month === "january") {
            return 1;
        } else if (month === "february") {
            return 2;
        } else if (month === "march") {
            return 3;
        } else if (month === "april") {
            return 4;
        } else if (month === "may") {
            return 5;
        } else if (month === "june") {
            return 6;
        } else if (month === "july") {
            return 7;
        } else if (month === "august") {
            return 8;
        } else if (month === "september") {
            return 9;
        } else if (month === "october") {
            return 10;
        } else if (month === "november") {
            return 11;
        } else if (month === "december") {
            return 12;
        } else {
            return;
        }
    }

    var parseTimePeriod = function (timePeriod) {
        if (!timePeriod) {
            return;
        }
        //console.log('Parsing: ' + timePeriod);
        try {
            var segments = timePeriod.split(' ');
            if (segments.length == 1) {
                return {
                    'year': parseInt(segments[0].trim())
                }
            } else if (segments.length == 2) {
                var month = getMonthIndex(segments[0]);
                var year = parseInt(segments[1].trim());
                return {
                    'month': month,
                    'year': year
                }
            } else if (segments.length == 3) {
                var month = getMonthIndex(segments[1]);
                var year = parseInt(segments[2].trim());
                return {
                    'month': month,
                    'year': year
                }
            } else {
                return;
            }
        } catch (e) {
            console.log(e);
            return;
        }
    }

    var getName = function () {
        var name = $('#topcard .profile-info h1').text();
        return name;
    };

    var getSummary = function () {
        var summary = $('#profile-summary .module-body').text();
        return summary;
    };

    var getHeadline = function () {
        var headline = $('#topcard .title').text();
        return headline;
    };

    var getProfilePhotoUrl = function () {
        var profilePhotoUrl = $('#topcard img').attr('src');
        return profilePhotoUrl;
    };

    var getEmailAddress = function () {
        var email = $('.contact-info-section .email a').text();
        if (!email) {
            email = $('#relationship-email-item-0 a').text();
        }
        if(!email) {
            email = $('#contact-info-section #email ul li:first a').text();
        }
        console.log("Email: " + email);
        return email;
    };

    var getEducationHistory = function () {
        var history = [];
        $("#profile-education .position").each(function (index) {
            var education = {
                'school_name': $(this).find('.position-header h4 a').text(),
                'degree': $(this).find('.position-header h5').text()
            };
            if (education.school_name) {
                history.push(education);
            }
        });
        return history;
    };

    var getWorkHistory = function () {
        var history = [];
        $("#profile-experience .position").each(function (index) {
            var position = {
                'title': $(this).find('.position-header h4 a').text(),
                'company_name': $(this).find('.position-header h5 a').text()
            };

            if (position.title && position.company_name) {
                history.push(position);
            }
        });

        return history;
    };
    return {
        scrape: function (callback) {
            console.log('scrapping Recruiter!')
            var candidate = {
                'name': getName(),
                'headline': getHeadline(),
                'profile_photo_url': getProfilePhotoUrl(),
                'email_address': getEmailAddress(),
                'summary': getSummary(),
                'work_history': getWorkHistory(),
                'education': getEducationHistory(),
                'social_profiles': getSocialProfiles()
            };
            if(candidate.name) {
                console.log('Found candidate');
                return callback(candidate);
            }
            console.log('No candidate');
            return callback();

        }
    };
};


var RabotaUa = function () {

    var parseDateString = function (timePeriod) {
        if(!timePeriod) {
            return;
        }
        timePeriod = timePeriod.trim();
        var m;
        var result = {};

        var re_full = /(.+?)\s(\d+?)\s-\s(.+?)\s(\d+?)\s/i;
        var re_current = /(.+?)\s(\d+?)\s-\s(?:present time|настоящее время)/i;

        if ((m = re_full.exec(timePeriod)) !== null) {
            if (m.index === re_full.lastIndex) {
                re_full.lastIndex++;
            }
            result = {
                "startMonth": getMonthIndex(m[1]),
                "startYear": parseInt(m[2]),
                "endMonth": getMonthIndex(m[3]),
                "endYear": parseInt(m[4])
            };

        }

        if ((m = re_current.exec(timePeriod)) !== null) {
            if (m.index === re_current.lastIndex) {
                re_current.lastIndex++;
            }
            result = {
                "startMonth": getMonthIndex(m[1]),
                "startYear": m[2],
                "isCurrent": true
            };

        }
        return result;
    };

    var getMonthIndex = function (month) {
        if (!month) {
            return;
        }
        month = month.toLowerCase();
        if (month === "jan" || month === "янв") {
            return 1;
        } else if (month === "feb" || month === "фев") {
            return 2;
        } else if (month === "mar" || month === "мар") {
            return 3;
        } else if (month === "apr" || month === "апр") {
            return 4;
        } else if (month === "may" || month === "май") {
            return 5;
        } else if (month === "jun" || month === "июн") {
            return 6;
        } else if (month === "jul" || month === "июл") {
            return 7;
        } else if (month === "aug" || month === "авг") {
            return 8;
        } else if (month === "sept" || month === "сен") {
            return 9;
        } else if (month === "oct" || month === "окт") {
            return 10;
        } else if (month === "nov" || month === "ноя") {
            return 11;
        } else if (month === "dec" || month === "дек") {
            return 12;
        } else {
            return;
        }
    };

    var getStartDate = function (date) {
        if(!date) {
            return;
        }
        return {
            'month': date.startMonth,
            'year': date.startYear
        }
    };

    var getEndDate = function (date) {
        if (!date || !date.endYear) {
            return;
        }
        return {
            'month': date.endMonth,
            'year': date.endYear
        }
    };

    var isCurrent = function (date) {
        return (date && date.isCurrent);
    };

    var getSocialProfiles = function () {
        return [];
    };

    var getName = function () {
        var name = $('#centerZone_BriefResume1_CvView1_cvHeader_lblName').text().trim();
        console.log('Name: ' + name);
        return name;
    };

    var getSummary = function () {
        var source = 'Source: ' + window.location.href + " **** ";
        var summary = source + $('#centerZone_BriefResume1_CvView1_Skills_txtSkills').text().trim();
        //console.log('Summary: ' + summary);
        return summary;
    };

    var getHeadline = function () {
        var headline = $('#centerZone_BriefResume1_CvView1_cvHeader_txtJobName').text().trim();
        //console.log('Headline: ' + headline);
        return headline;
    };

    var getProfilePhotoUrl = function () {
        var profilePhotoUrl = $('#centerZone_BriefResume1_CvView1_cvHeader_imageUser').attr('src');
        return profilePhotoUrl;
    };

    var getEducationHistory = function () {
        var history = [];
        var position = {};
        var processedFlag = false;
        $("#EducationHolder").children().each(function (index) {
            var tagName = $(this).prop("tagName").toLowerCase();

            if (tagName == 'h3' || tagName == 'div') {
                return;
            }

            if (tagName == 'hr' && position.title !== 'undefined') {
                history.push(position);
                position = {};
                processedFlag = true;
                return;
            }

            processedFlag = false;

            // Get school name and finish date.
            if (tagName == 'p') {
                position.school_name = $(this).find('b:first-child').text().trim();
                var date = $(this).find('span').text();
                var re = /(\d+)/i;
                var m;

                if ((m = re.exec(date)) !== null) {
                    if (m.index === re.lastIndex) {
                        re.lastIndex++;
                    }
                    position.start_date = m[1];
                    position.end_date = m[1];
                }
            }

        });
        if (!processedFlag && position.title !== 'undefined') {
            history.push(position);
        }

        if (history.length) {
            history.forEach(function(item, index) {
                var i = (index + 1) * 3 - 1;
                history[index].field_of_study = document.getElementById("EducationHolder").childNodes[i].textContent;
            });
        }

        return history;
    };

    var getWorkHistory = function () {
        var history = [];
        var position = {};
        var processedFlag = false;
        $("#ExperienceHolder").children().each(function (index) {
            var tagName = $(this).prop("tagName").toLowerCase();
            var tagStyle = $(this).attr('style');
            var tagClass = $(this).attr('class');

            if (tagName == 'h3' || tagName == 'div') {
                return;
            }

            if (tagName == 'hr' && position.title !== 'undefined') {
                history.push(position);
                position = {};
                processedFlag = true;
                return;
            }

            processedFlag = false;

            // Get title and dates.
            if (tagStyle == 'margin-bottom: 0') {
                position.title = $(this).find('b:first-child').text();
                var dates = parseDateString($(this).find('em').text());
                position.start_date = getStartDate(dates);
                position.end_date = getEndDate(dates);
                position.is_current = isCurrent(dates);
            }

            // Get company name.
            if (tagClass == 'muted') {
                position.company_name = $(this).find('b').text();
            }

        });
        if (!processedFlag && position.title !== 'undefined') {
            history.push(position);
        }

        return history;
    };

    return {
        scrape: function (callback) {
            console.log('Scraping RabotaUa.');
            var candidate = {
                'name': getName(),
                'headline': getHeadline(),
                'profile_photo_url': getProfilePhotoUrl(),
                'summary': getSummary(),
                'education': getEducationHistory(),
                'work_history': getWorkHistory(),
                'social_profiles': getSocialProfiles()
            };
            if(candidate.name) {
                return callback(candidate);
            }
            return callback();
        }
    };
};


var scrapePage = function (type, callback) {
    if(type == "linkedin") {
        LinkedIn().scrape(callback);
    } else if(type == "linkedinRecruiter") {
        LinkedInRecruiter().scrape(callback);
    } else if(type == "angel.co") {
        AngelList().scrape(callback);
    } else if(type == "workua") {
        WorkUa().scrape(callback);
    } else if(type == "rabotaua") {
        RabotaUa().scrape(callback);
    } else if(type == "hhua") {
        HhUa().scrape(callback);
    }
    else {
        callback();
    }
};

var getType = function () {
    var hostname = window.location.hostname;
    var pathname = window.location.pathname;
    if(hostname.indexOf("linkedin") > -1) {
        console.log(pathname);
        if(pathname.indexOf('/recruiter/') == 0) {
            return "linkedinRecruiter";
        }
        return "linkedin";
    }
    if(hostname.indexOf("angel.co") > -1) {
        return "angel.co";
    }
    if(hostname.indexOf("dribbble") > -1) {
        return "dribbble";
    }

    if(hostname.indexOf("work.ua") > -1) {
        return "workua";
    }
    if(hostname.indexOf("rabota.ua") > -1) {
        return "rabotaua";
    }
    if(hostname.indexOf("hh.ua") > -1) {
        return "hhua";
    }
    return;
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message rcv'd");
    var type = getType();
    if(type) {
        scrapePage(type, function (candidate) {
            sendResponse(candidate);
        });
    }
});