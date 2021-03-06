/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('safebrowsing', 'v4', () => {
        /** now we can use gapi.client.safebrowsing */

        run();
    });

    async function run() {
        await gapi.client.encodedFullHashes.get({
            clientId: "clientId",
            clientVersion: "clientVersion",
            encodedRequest: "encodedRequest",
        });
        await gapi.client.encodedUpdates.get({
            clientId: "clientId",
            clientVersion: "clientVersion",
            encodedRequest: "encodedRequest",
        });
        /** Finds the full hashes that match the requested hash prefixes. */
        await gapi.client.fullHashes.find({
        });
        /**
         * Fetches the most recent threat list updates. A client can request updates
         * for multiple lists at once.
         */
        await gapi.client.threatListUpdates.fetch({
        });
        /** Lists the Safe Browsing threat lists available for download. */
        await gapi.client.threatLists.list({
        });
        /** Finds the threat entries that match the Safe Browsing lists. */
        await gapi.client.threatMatches.find({
        });
    }
});
