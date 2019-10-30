module.exports = {
    projectName: 'Popcorn Viet Nam',
    projectUrl: 'https://vn.popcorn-api.io',
    projectTwitter: 'popcorntimetv',
    projectFacebook: 'PopcornTimedotSh',
    projectGooglePlus: 'popcorntimeshplus',
    projectBlog: 'https://blog.popcorntime.sh/',
    projectForum: 'https://www.reddit.com/r/PopcornTime',

    statusUrl: 'http://status.popcorntime.sh',
    changelogUrl: 'https://github.com/datnguyencse/popcorn-desktop-vn/commits/master',
    issuesUrl: 'https://github.com/datnguyencse/popcorn-desktop-vn/issues',
    sourceUrl: 'https://github.com/datnguyencse/popcorn-desktop-vn/',
    commitUrl: 'https://github.com/datnguyencse/popcorn-desktop-vn/commit',
     providers: {
         movie: {
             order: 1,
             name: 'Movies',
             uri: ['MovieApi?'
                   +'&apiURL='
                     + 'https://movies-v2.popcorn-api.io/,'
                     + 'cloudflare+https://movies-v2.popcorn-api.io,'
                  ]
         },
         tvshow: {
             order: 2,
             name: 'Series',
             uri: ['TVApi?'
                   +'&apiURL='
                     + 'https://tv-v2.popcorn-api.io/,'
                     + 'cloudflare+https://tv-v2.popcorn-api.io,'
                  ]
         },
       anime: {
             order: 3,
             name: 'Anime',
             uri: ['AnimeApi?'
                   +'&apiURL='
                     + 'https://anime-vi.popcorn-api.io/,'
                     + 'cloudflare+https://anime-vi.popcorn-api.io,'
                  ]
         },

         subtitle: 'OpenSubtitles',
         metadata: 'Trakttv',
         tvst: 'TVShowTime',
         torrentCache: 'TorrentCache'         
     },
    updateEndpoint: {
        url: 'https://vn.popcorn-api.io/',
        index: 0,
        proxies: [{
            url: 'https://vn.popcorn-api.io/'
        }]
    },
    updateKey: '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuAHq1Uz/dLblqMdmJALW\n' +
        'VgHuUukx3pLnhFUp6Tm2jMCG7SvXnSp748rnON8T4+7Sg1gHjwBfnpVnZbdpOcGs\n' +
        'Sjj9R5sb6A9FFzz3l0z3dm3pBRQkRavSsAnWapR90Lssp+frfKwWuv30Kde40ZlJ\n' +
        'f+cMElbEZz7IFo1eLQucr83+KY2ndfG7OgWTLMwiOVEZnZSICq3pWsqoVQWdJ1yf\n' +
        'oKc2Ax99BK63JtI3m82WCgke+0gN8w9fLFi+wJL9ppBu24V3wq1ChfvOzI4cAI2q\n' +
        'VVAWCi44xV0bzTPtUnPPIPgc7+8G1VWHp2JYVmSLSmtpiHFb2bJSrwMijACNVBUr\n' +
        'AwIDAQAB\n' +
        '-----END PUBLIC KEY-----\n',
    httpApiUsername: 'popcorn',
    httpApiPassword: 'popcorn',
    activateVpn: false
}
