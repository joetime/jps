jps
===

A small library for translating between GPS coordinates in different formats.
This is helpful when dealing with some API libraries, like MapBox.


```
// Convert string GPS to Array GPS:

var gps_str = "38.880810837362944, -77.10213661193848";
var gps_arr = jps.asArray(gps_str);
// gps_arr will = [38.880810837362944, -77.10213661193848]


// Get the right param (Latitude or Longitude) first (for US GPS coords):

var lat_first = jps.latFirst(gps_str);
// lat_first will = [38.880810837362944, -77.10213661193848] 
// (note it returns array as default format)

var long_first = jps.longFirst(gps_arr);
// lat_first will = [-77.10213661193848, 38.880810837362944]
```

That's pretty much it for now... stay tuned.
