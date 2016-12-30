var application = angular.module('furgatWebpage', []);

// storing data in a service mostly to practice using one,,,
application.service('furgatData', function() {
    this.config = {
        'about' : {
            'icon' : 'img/avatar.png',
            'bio' : 'i never know how to write bios',
            'iconcredit' : '@toothmonsterr'
        },
        'media' : [
            {
                'service' : 'github',
                'icon' : 'fa-github-alt',
                'profile' : 'furgat',
                'url' : 'http://github.com/furgat'
            },
            {
                'service' : 'soundcloud',
                'icon' : 'fa-soundcloud',
                'profile' : 'furgat',
                'url' : 'https://soundcloud.com/furgat'
            },
            {
                'service' : 'twitter',
                'icon' : 'fa-twitter',
                'profile' : '@furgat',
                'url' : 'http://twitter.com/furgat'
            },
            {
                'service' : 'mastodon',
                'icon' : 'fa-pencil-square',
                'profile' : '@furgat',
                'url' : 'http://mastodon.social/users/furgat'
            }
        ],
        'games' : [
            {
                'title' : 'LIKEWISE (SAME)',
                'icon' : 'img/likewise.jpg',
                'location' : '/likewise/',
                'overview' : 'A microgame built from my feelings on existing, growth, and isolation.',
                'genre' : 'Experimental',  
                'playtime' : '5-10 minutes',
                'filesize' : '10.2MB',
                'engine' : 'Stencyl',
                'engine-url' : 'http://stencyl.com'
            },                
            {
                'title' : 'MXGENDER',
                'icon' : 'img/mxgender.jpg',
                'location' : '/mxgender/',
                'overview' : 'A microgame about identities and assumptions.',
                'genre' : 'Puzzle',
                'playtime' : '5-10 minutes',
                'filesize' : '906KB',
                'engine' : 'Stencyl',
                'engine-url' : 'http://stencyl.com'
            },
        ],
        'radfolx' : [
            {
                'name' : 'Nikki',
                'icon' : 'https://pbs.twimg.com/profile_images/2473172437/bsoc376sljihwjzp7ycv_400x400.png',
                'url' : 'http://skirtdingo.neocities.org/',
                'bio' : 'genderpunk jelly skirt-dingo'
            },
            {
                'name' : 'Tooth',
                'icon' : 'https://pbs.twimg.com/profile_images/531475928623218689/EnXckKAd_400x400.png',
                'url' : 'http://toothbops.neocities.org/',
                'bio' : ''
            },
            {
                'name' : 'h34rken!',
                'icon' : 'img/hearken.jpg',
                'url' : 'https://h34rken.bandcamp.com/',
                'bio' : 'agender #cripplepunk musician/glitch artist'
            },
            {
                'name' : 'Rabbit Rabbit',
                'icon' : 'img/rabbitrabbit.jpg',
                'url' : 'https://rabbitrabbit.bandcamp.com/',
                'bio' : 'social justice berserker'
            }
        ]
    };   
});

application.controller('furgatMain', ['$scope', 'furgatData', function($scope, furgatData) {
    
    $scope.about = furgatData.config.about;
    $scope.media = furgatData.config.media;
    $scope.games = furgatData.config.games;
    $scope.radfolx = furgatData.config.radfolx;
    
    $scope.chosenTab = 'games';
    
    $scope.setTab = function(tab) {
        $scope.chosenTab = tab;
    }
    
    $scope.whichTab = function(tab) {
        return ( tab == $scope.chosenTab );
    }
    
}]);