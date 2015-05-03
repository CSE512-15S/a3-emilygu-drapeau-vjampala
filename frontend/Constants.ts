/**
 * Contains the constants of the client application.
 */
class Constants {
	public static SCREENS : any = {
		OVERVIEW : 0,
		COURSE_DETAILS : 1,
	};

	public static OVERVIEW_HEADERS : string[] = [
		"Course Code",
		"Instructor",
		"Overall",
		"Content",
		"Amount Learned",
		"Teaching",
		"Grading"
	];

    public static HEADER_TO_KEY: any = {
        "Course Code": "course_whole_code",
        "Instructor": "professor",
        "Overall": "the_course_as_a_whole",
        "Content": "the_course_content",
        "Amount Learned": "amount_learned",
        "Teaching": "instructors_effectiveness",
        "Grading": "grading_techniques"
    };

    public static SEARCH_RESULT_LIMIT: number = 300;
}

export = Constants;
