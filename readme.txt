this project will use the MERN stack to build a website where users can write, share, and use madlib templates.
The frontend will be built in React and the Backend in NodeJS.
Authentication will use Firebase Auth.
The Database will be Mongo DB.

User Story one: There will be a text area where users can write their madlib stories. The app will parse strings to detect [] brackets. Users will write the requested word (ie [noun-plural], [An animal], etc.
The App will recognize these phrases and built a list of requested words.
The user can then save these to MongoDB. They will be publicly available to all users to view.

User Story 2: When a user loads a madlib, their will be an input field with the requested word type written above. There should be a progress bar to show
the number of words remaining.

User Story 3: When the user submits the final requested word, the final story with all of the new words will be displayed. This final story will be saved to Mongo DB.
There will be an option to view the stories that other people submitted.

user story 4: Users have a profile where they can view, edit, and create madlibs. 