/**
 * Contains the constants of the client application.
 */
var Constants = (function () {
    function Constants() {
    }
    Constants.SCREENS = {
        OVERVIEW: 0,
        COURSE_DETAILS: 1
    };
    Constants.OVERVIEW_HEADERS = [
        "Course Code",
        "Instructor",
        "Overall",
        "Content",
        "Amount Learned",
        "Teaching",
        "Grading"
    ];
    Constants.HEADER_TO_KEY = {
        "Course Code": "course_whole_code",
        "Instructor": "professor",
        "Overall": "the_course_as_a_whole",
        "Content": "the_course_content",
        "Amount Learned": "amount_learned",
        "Teaching": "instructors_effectiveness",
        "Grading": "grading_techniques"
    };
    Constants.SEARCH_RESULT_LIMIT = 300;
    return Constants;
})();
module.exports = Constants;
