/*
    "Joe's Positioning System"
    jps.js :: by joseph scala 2013

    Unit Tests
*/

Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

test ("jps", function () {
    //console.log("testing jps");
    //ok(jps.helloWorld() == "hello world!");
    //ok(jps.echo('test') == 'test');

    // 38... is the Latitude, -77... is the Longitude
    var gpsArr = [38.880810837362944, -77.10213661193848];
    var gpsStr = "38.880810837362944, -77.10213661193848";

    // asArray() : Convert to array
    ok(jps.asArray(gpsArr).compare([38.880810837362944, -77.10213661193848]),
        "jps - asArray w/ array");
    ok(jps.asArray(gpsStr).compare([38.880810837362944, -77.10213661193848]),
        "jps - asArray w/ string");
    ok(!jps.asArray(gpsStr).compare([38.880810837362944, -77.10213661193849]),
        "jps - asArray w/ changed digit (invalid)");  
    ok(!jps.asArray(gpsArr).compare([38.880810837362944, -77.10213661193848, 0]),
        "jps - asArray w/ extra param (invalid)"); 

    // latFirst(), longFirst() : Put correct param first
    ok(jps.latFirst(gpsArr).compare([38.880810837362944, -77.10213661193848]),
        "jps - latFirst, no change");
    ok(jps.longFirst(gpsArr).compare([-77.10213661193848, 38.880810837362944]),
        "jps - longFirst, change");
    ok(jps.latFirst(gpsStr).compare([38.880810837362944, -77.10213661193848]),
        "jps - latFirst, from string, no change");
    ok(jps.longFirst(gpsStr).compare([-77.10213661193848, 38.880810837362944]),
        "jps - latFirst, from string, change");
});
