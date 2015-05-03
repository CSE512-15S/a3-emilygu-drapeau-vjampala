a3-emilygu-drapeau-vjampala
===============

## Team Members

1. Emily Gu [emilygu@cs.washington.edu]
2. Ryan Drapeau [drapeau@cs.washington.edu]
3. Vimala Jampala [vjampala@cs.washington.edu]

## Project Name: CourseRatings

### Background

One of the most stressful times during the school year for a student is registration for the next quarter.  Picking the best classes and more importantly the teacher for the class could change a student’s experience for the course. At the end of each quarter, students fill out an evaluation form for professors, rating the professor on different questions posed for example how hard the professor graded.  Currently, UW provides a Course Evaluation page for students to visit in order to see how previous students have rated a particular professor. The current course catalog page simply has a list of classes/professors, each one linked to a page containing a chart with percentages of effectiveness of professors for each category. All of those who have visited this website to decide which professors to take classes from has always complained about how difficult it is to compare ratings for different professor and how uninviting the website is.

The dataset contains professor ratings for different courses he or she has taught for the past two years. Each instructor/course was rated on a scale from 0 to 5 along 26 dimensions including:
* The course as a whole
* The course content
* The instructor’s effectiveness
* The amount learned
* The grading technique

The course catalog only contains information for the past 2-3 quarters, but this project has been on our to-do list for over a year, therefore we have data spanning 8 quarters. The dataset also  included information about the course for example quarter taught and the number of students who took the evaluation.

### Final Visualization

When our page loads, the user is presented with a page titled “CourseRatings”, a search box and a table header. The search box allows users to search using course code, department or instructor. When the user searches for a course code, department or instructor, the table is populated with rows, with one row for every entry that matches the search term. (If there are no matching results, the page does not change.)

The table has seven columns:
* Course code
* Instructor
* Overall
* Content
* Amount Learned
* Teaching
* Graded

Each course taught by a particular instructor is rated on the remaining five aspects with a score between zero and five. The last five columns are color encoded (with red representing scores in between 0 and 3, yellow representing scores in between 3 and 4, and green representing scores in between 4 and 5) and size encoded (with a larger size representing a better score). Each column can be sorted in ascending or descending order by simply clicking on the header. Additionally, clicking on a course code or instructor name repopulates the table, and shows only results with the clicked course code/instructor name.

## Running Instructions

Access our visualization at http://students.washington.edu/drapeau/course_rankings/ or download this repository and run `npm run-script serve` and access this from http://localhost:8000/.

### Data Pipeline

See the [data_pipeline/](data_pipeline/) for a look into the data scraping and parsing scripts for this data. The actual scraper has been omitted from this repository but the raw data and the data parser were included. To run the parser, run `python parse_data.py`. The final output and the data used for the application can be found in data.csv.

## Story Board

[storyboard.pdf](storyboard.pdf?raw=true)


### Changes between Storyboard and the Final Implementation

One major change between our storyboard and final implementation was the color encoding. We considered three different strategies:
1. Assigning the color red for scores in between zero and two, yellow for scores in between three and four, and green for scores in between four and five
2. Assigning the color green for scores in the top 10% of their column, and red for scores in the bottom 10% of their column of the data currently being displayed on the screen.
3. Assigning the color green for scores in the top 10%, and the color red for scores in the bottom 10%, aggregated across the entire dataset.

We implemented all three color encodings, but decided on the first one because the main use case for this application is to check if a class is a good one to take or not. The first color encoding best describes and targets this use case when compared with the other three. It would be interesting to see if the ratings could be weighted with the percentage of students that filled out the survey but this will be left as future work.

Another major change was adding a size encoding for the columns. We realized that distinguishing between red, green and yellow would be difficult for the color blind, so we also added a size encoding for each column. The larger the bar, the better the score. This will allow people that are color blind to spot trends as easily as people that are not color blind.

Lastly, we changed the name of our visualization from "CourseRankings" to "CourseRatings". Our visualization doesn't actually rank the courses, so we didn't want to mislead users with the name “CourseRankings”. We originally wanted to use either a purple or purple-and-gold color encoding for the title, since those are UW's colors, but decided on a purple-and-gray encoding for aesthetic reasons.

## Development Process

This application is largely built using [React.js](https://facebook.github.io/react/).

Include:
- Breakdown of how the work was split among the group members.
- A commentary on the development process, including answers to the following questions:
  - Roughly how much time did you spend developing your application?
  - What aspects took the most time?
