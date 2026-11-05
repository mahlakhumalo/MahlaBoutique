# Google Maps

The default map is a keyless Google Maps embed centred on Cape Town, South Africa. It loads only on request and provides Google's pan and zoom interaction. The external link opens Cape Town on Google Maps.

The official Maps Embed API route is also implemented. To activate it:
1. Enable Maps Embed API in your Google Cloud project.
2. Create a browser key restricted to Maps Embed API and your website's HTTP referrers.
3. Set googleMapsApiKey in js/config.js (dist/js/config.js in the hosted repository).
4. Replace mapQuery with the confirmed business address or Google place ID.

Never place a server secret in this browser configuration. The browser API key is intentionally public and must be restricted. No key was supplied for this build; the official keyed API route has not been live-tested.

Official documentation: https://developers.google.com/maps/documentation/embed/embedding-map
