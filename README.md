The React project 
 
--> React Custom Hook - useFetch

--> Project Overview

This project demonstrates how to create and use a **custom React Hook** named "useFetch" for fetching data from an API. The custom hook simplifies API calls by handling data fetching, loading states, and error handling, making the code reusable and easier to maintain.

--> Features

- Custom React Hook ("useFetch")
- Fetches data from a REST API
- Displays loading state while fetching data
- Handles API and network errors
- Displays fetched photos in a responsive grid layout
- Reusable hook that can be used with any API endpoint

--> Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- React Hooks
  - useState
  - useEffect
  - useCallback

--> Project Structure


src/
│
|-- App.jsx
|-- Photos.jsx
|-- Photos.css
|-- useFetch.js
|-- index.js
└── index.css

public/


--> API Used

JSONPlaceholder Photos API


https://jsonplaceholder.typicode.com/photos?_limit=20


> **Note:** If the placeholder images fail to load due to network restrictions, another API such as EscuelaJS Products API can also be used.

--> How the Project Works

1. The "useFetch" custom hook accepts an API URL.
2. The hook fetches data using the Fetch API.
3. It manages three states:
   - "data"
   - "loading"
   - "error"
4. The Photos component consumes the hook and displays the fetched photos in a card layout.

-->Installation


Navigate to the project folder:

bash
cd project-folder


Install dependencies:

bash
npm install


Start the development server:

For Create React App:

bash
npm start




--> Output

- Dark-themed photo gallery
- Responsive grid layout
- Dynamic data fetched from API
- Loading and error handling

--> Learning Outcomes

- Understanding React Custom Hooks
- API Integration
- State Management using Hooks
- Component Reusability
- Error Handling
- Responsive UI Design


Bachelor of Engineering (Mechanical)

Learning React.js and Frontend Development
