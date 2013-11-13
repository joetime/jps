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

test("jps", function () {
    console.log("testing jps");

    ok(jps.helloWorld() == "hello world!");
    ok(jps.echo('test') == 'test');

    // 38... is the Latitude, -77... is the Longitude
    var gpsArr = [38.880810837362944, -77.10213661193848];
    var gpsStr = "38.880810837362944, -77.10213661193848";

    // Convert to array
    ok(jps.asArray(gpsArr).compare([38.880810837362944, -77.10213661193848]));
    ok(jps.asArray(gpsStr).compare([38.880810837362944, -77.10213661193848]));
    ok(!jps.asArray(gpsStr).compare([38.880810837362944, -77.10213661193849]));  // should fail (changed digit)
    ok(!jps.asArray(gpsArr).compare([38.880810837362944, -77.10213661193848, 0])); // should fail, extra param
    // Put correct param first
    ok(jps.latFirst(gpsArr).compare([38.880810837362944, -77.10213661193848]));
    ok(jps.longFirst(gpsArr).compare([-77.10213661193848, 38.880810837362944]));
    ok(jps.latFirst(gpsStr).compare([38.880810837362944, -77.10213661193848]));
    ok(jps.longFirst(gpsStr).compare([-77.10213661193848, 38.880810837362944]));


});
