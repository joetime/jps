/*
    "Joe's Positioning System"
    jps.js :: by joseph scala 2013

    This library deals with some of the annoying GPS normalizations that need
    to occur when using APIs like MapBox or GooglePlaces.
*/

var jps = {
    // just some test methods
    helloWorld: function () {
        return 'hello world!';
    },
    echo: function (str) {
        return str;
    },

    asArray: function (gps) {
        //console.log(gps);
        if (Object.prototype.toString.call(gps) === '[object Array]')
            return [gps[0], gps[1]];
        else {
            var split = gps.split(",");
            return split;
        }

    },

    latFirst: function (gps) {
        // in the US, the Lat is always less than the Long
        var arr = this.asArray(gps);
        if (arr[0] > arr[1])
            return arr;
        else
            return [arr[1], arr[0]];
    },
    longFirst: function (gps) {
        // in the US, the Lat is always less than the Long
        var arr = this.asArray(gps);
        if (arr[0] < arr[1])
            return arr;
        else
            return [arr[1], arr[0]];
    }

};