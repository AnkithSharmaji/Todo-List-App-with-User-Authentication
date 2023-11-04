# Todo List App with User Authentication

## Project Description

This is a Todo List web application with user authentication features. Users can register for an account, log in, and manage their tasks. Local storage is used to simulate user accounts, and tasks persist in local storage.

## Features

1. **User Authentication**
   - Users can sign up with a username and password.
   - Users can log in with their credentials.
   - Forms are provided for both registration and login.

2. **Authentication State**
   - User authentication state is managed using React state.
   - Protected routes ensure that only authenticated users can access specific parts of the application.

3. **Task Management**
   - Users can create, edit, mark as completed, and delete tasks.
   - Tasks are associated with the logged-in user.
   - Task data persists in local storage, preventing data loss on page refresh.

4. **Logout**
   - A logout button allows users to log out of their accounts.

5. **User Interface**
   - The application features an intuitive user interface with a clean design for authentication and the todo list.
   - Tasks are displayed in a list with options to edit, mark as completed, and delete.

6. **Error Handling**
   - User-friendly error messages are displayed for scenarios such as incorrect login credentials, registration errors, or failed task updates.

## Requirements

- JavaScript
- React
- Local Storage

## Getting Started

### Prerequisites

Make sure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

  
   git clone https://github.com/AnkithSharmaji/Todo-List-App-with-User-Authentication.git


2. *Change to the project directory*:
 [**cd todo-list-app**]



3. *Install the project dependencies* [**npm install**] - Start the application:


4. [**npm start**] - *The application will run locally* at http://localhost:3000.

### User Authentication
To register a new account, click the "Sign Up" link on the login page and complete the registration form.
To log in, enter your credentials on the login page and click "Log In."

### Authentication State
The application manages user authentication state internally.
Certain parts of the application, such as the todo list, are only accessible to authenticated users.


### Task Management
Create tasks by entering a task description and clicking "Add Task."
Edit tasks by clicking the edit icon.
Mark tasks as completed by clicking the checkbox.
Delete tasks by clicking the delete icon.
### Logout
Click the "Logout" button to log out of your account.
### User Interface
The application features a clean and user-friendly design for both authentication and task management.
### Error Handling
If you encounter errors during registration, login, or task management, the application provides clear and informative error messages.
Security Considerations
Users can only see and manage their own tasks after logging in.
Task data is associated with the user who created them and is stored securely using local storage.

##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
