'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
    DOMAIN: 'http://localhost:9000',
    SESSION_SECRET: 'apimean-secret',

    FACEBOOK_ID: '1128325253916136',
    FACEBOOK_SECRET: '907c6bec900ec5570071a25cadd366f6',

    TWITTER_ID: 'ACWR7Kl65ovYNBchpaoApk9HI',
    TWITTER_SECRET: 'gOvgq3M4bKKS8aNJVIHLkF0nY1D7qKMUeNJANRk8GFlH3VZWir',

    GOOGLE_ID: '191860109715-ddo96gfirlj65tcejo4emhqee9ougp8e.apps.googleusercontent.com',
    GOOGLE_SECRET: 'HwLfyAwiMeP0ahJWZ2qWFGGC',

    // Control debug level for modules using visionmedia/debug
    DEBUG: ''
};
