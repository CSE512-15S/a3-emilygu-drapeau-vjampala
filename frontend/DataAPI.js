var JQuery = require('jquery');
var TAFFY = require('taffydb');
/**
 * Provides an interface to get data for the front end application
 */
var DataAPI = (function () {
    function DataAPI() {
    }
    /**
     * Gets the organizations
     * @param {Function} callback Callback to execute after retrieval
     */
    DataAPI.getTaffy = function (callback) {
        JQuery.get(DataAPI.PAYLOAD_URL, function (csv) {
            var lines = csv.split('\n');
            var header = lines[0].split(';');
            var output = [];
            for (var i = 1; i < lines.length; i++) {
                var line = lines[i].split(';');
                var course = { 'course_whole_code': line[0] + line[1] };
                for (var j = 0; j < line.length; j++) {
                    if (!isNaN(line[j])) {
                        course[header[j]] = Number(line[j]);
                    }
                    else {
                        if (line[j] === 'NULL') {
                            course[header[j]] = null;
                        }
                        else {
                            course[header[j]] = line[j];
                        }
                    }
                }
                output.push(course);
            }
            callback(TAFFY.taffy(output));
        });
    };
    DataAPI.PAYLOAD_URL = 'courses/data.csv';
    return DataAPI;
})();
module.exports = DataAPI;
