**Usage**
```js
var scSearch = new require("soudcloud-search-core")("YourClientID");

scSearch.tracks("<query(string)>", <limit(number)>, resoults => {
  // resoults is array of objects including info about tracks found
})

scSearch.playlists("<query(string)>", <limit(number)>, resoults => {
  // resoults is array of objects including info about playlists found
})

scSearch.users("<query(string)>", <limit(number)>, resoults => {
  // resoults is array of objects including info about users found
})

scSearch.nofilter("<query(string)>", <limit(number)>, resoults => {
  // resoults is array of objects including info about playlists and tracks found
})

scSearch.any("<query(string)>", <limit(number)>, resoults => {
  // resoults is array of objects including info about playlists, tracks and users found
})
```
