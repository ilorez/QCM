import { Link } from 'react-router-dom'
import useStore from '../store'
// import './home.css'


function Home() {
    const { setQuestions } = useStore();

    // ---------------
    const setQtoSore = (index) => {
        setQuestions(qs[index].questions)
    }
    // ---------------
    async function fetchData(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataJson = await response.json();

            setQuestions(dataJson.questions);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const nextIcon = `<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6061 9.89832L9.60912 9.90129L11.0326 8.49643L2.42348 0L0.999978 1.40486L8.1826 8.49345L0.576477 16L1.99998 17.4049L9.6061 9.89832Z" fill="#808080"/>
  </svg>`;
    const paths = [['./src/data/level1.json', "Easy"], ['./src/data/level2.json', "Intermediate"], ['./src/data/level3.json', "Moderate"], ['./src/data/level4.json', "Challenging"], ['./src/data/level5.json', "Very Hard"], ['./src/data/levelImpossible.json', "Impossible"], ['./src/data/levelNotSense.json', "Not sens"]]
    const difficultyLevels = [
        { bgColor: 'bg-green-200', textColor: 'text-green-800', emoji: '🌟' },
        { bgColor: 'bg-blue-200', textColor: 'text-blue-800', emoji: '🔥' },
        { bgColor: 'bg-purple-200', textColor: 'text-purple-800', emoji: '🚀' },
        { bgColor: 'bg-orange-200', textColor: 'text-orange-800', emoji: '💡' },
        { bgColor: 'bg-red-200', textColor: 'text-red-800', emoji: '🌊' },
        { bgColor: 'bg-pink-200', textColor: 'text-pink-800', emoji: '🎵' },
        { bgColor: 'bg-black', textColor: 'text-white', emoji: '💀' },
    ];


    const links = paths.map((link, index) => {
        return (
            <div key={"level" + index} className='last:col-span-1 sm:last:col-span-2 '>
                <Link to="/ilQCM" onClick={() => setQtoSore(index)}>
                    <button className={' px-4 py-1.5 rounded-lg w-full flex flex-row justify-between items-center gap-2 shadow-md hover:bg-blue-100 overflow-hidden ' + difficultyLevels[index].textColor + " " + difficultyLevels[index].bgColor}>Level {index + 1} <div className='flex justify-between items-center gap-4'>({link[1] + difficultyLevels[index].emoji})<div dangerouslySetInnerHTML={{ __html: nextIcon }} /></div></button>
                </Link>
            </div>
        )
    })
    return (
        <main className='min-w-full min-h-screen flex flex-col items-center p-10 bg-gradient-to-b from-gray-0 to-gray-200 shadow-lg gap-16'>
            <div>
                <h1 className='text-blue-color mb-5  font-bold  text-2xl'>Welcome to React QCM!</h1>
                <p className='text-gray-600 pl-6'>Explore your React knowledge from easy to super hard! Test yourself with a variety of React questions.</p>
            </div>
            <div className='grid  sm:grid-cols-2 grid-cols-1 gap-4  '>
                {/* <h3 className='text-gray-700 text-lg  font-bold  '>React QCM Levels</h3> */}
                {links}
            </div>
        </main>
    )
}

const qs = [
    {
        "questions": [
            {
                "question": "What is the core building block of a React application?",
                "choices": [
                    "Component",
                    "Module",
                    "Element",
                    "Function"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What does JSX stand for in React?",
                "choices": [
                    "JavaScript XML",
                    "Just a Syntax Extension",
                    "Java XML Syntax",
                    "JavaScript XAML"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which React method is called once after the component is inserted into the DOM?",
                "choices": [
                    "componentWillUnmount",
                    "componentDidMount",
                    "componentWillUpdate",
                    "componentDidUpdate"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In React, how do you render a list of elements from an array?",
                "choices": [
                    "Using a for loop",
                    "Using the map() function",
                    "Using a while loop",
                    "Using a do...while loop"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'state' in a React component?",
                "choices": [
                    "To store props",
                    "To manage component styles",
                    "To hold data that may change over time",
                    "To define component structure"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the key prop used for when rendering a list of components in React?",
                "choices": [
                    "To set the component's ID",
                    "To control visibility",
                    "To provide a unique identifier for each item",
                    "To define the order of items"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What does the `ReactDOM.render()` method do in React?",
                "choices": [
                    "Renders a component to the DOM",
                    "Renders a component as a string",
                    "Renders a component to a virtual DOM",
                    "Renders a component as a function"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is a prop drilling in React?",
                "choices": [
                    "Passing props from parent to child components",
                    "Passing props from child to parent components",
                    "A performance optimization technique",
                    "A state management technique"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of the following is NOT a lifecycle method in a React class component?",
                "choices": [
                    "componentDidMount",
                    "componentWillUnmount",
                    "componentUpdate",
                    "shouldComponentUpdate"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the purpose of the 'render' method in a React component?",
                "choices": [
                    "To update component state",
                    "To render the component's HTML markup",
                    "To handle user input",
                    "To define CSS styles for the component"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "questions": [
            {
                "question": "What is the purpose of the 'props' object in React?",
                "choices": [
                    "To store component's state",
                    "To manage routing",
                    "To pass data between components",
                    "To define CSS styles"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the key difference between class components and functional components in React?",
                "choices": [
                    "Class components use class syntax, while functional components use function syntax",
                    "Class components have access to lifecycle methods, while functional components do not",
                    "Class components are faster than functional components",
                    "Functional components can only render static content"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'useEffect' hook in React?",
                "choices": [
                    "To define CSS styles",
                    "To create animations",
                    "To manage state in functional components",
                    "To handle side effects in functional components"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What is the Redux library commonly used for in React applications?",
                "choices": [
                    "Routing",
                    "State management",
                    "Styling",
                    "Server-side rendering"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the React Router library used for?",
                "choices": [
                    "Managing state",
                    "Handling HTTP requests",
                    "Optimizing rendering",
                    "Navigation and routing in React applications"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What is the purpose of the 'componentDidUpdate' lifecycle method in a React class component?",
                "choices": [
                    "To fetch data from an API",
                    "To perform cleanup operations",
                    "To handle updates to component state",
                    "To set initial component state"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is JSX in React?",
                "choices": [
                    "A build tool for React applications",
                    "A state management library",
                    "A syntax extension for JavaScript",
                    "A CSS preprocessor"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the role of the 'key' prop when rendering lists of components in React?",
                "choices": [
                    "To provide a unique identifier for each item",
                    "To control the visibility of list items",
                    "To define the order of list items",
                    "To set the component's ID"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the purpose of the 'useState' hook in React?",
                "choices": [
                    "To create new components",
                    "To handle user authentication",
                    "To fetch data from an API",
                    "To manage and update component state"
                ],
                "correctAnswer": 3
            },
            {
                "question": "In React, what is the purpose of the 'className' attribute?",
                "choices": [
                    "To set the component's name",
                    "To define the component's structure",
                    "To specify component state",
                    "To apply CSS styles to a component"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "questions": [
            {
                "question": "What is the purpose of the 'context' in React?",
                "choices": [
                    "To define the component's structure",
                    "To provide a way to pass data to components without props drilling",
                    "To manage routing",
                    "To create animations"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the primary benefit of using React Router for navigation in a React application?",
                "choices": [
                    "Improved performance",
                    "Better code organization",
                    "Support for server-side rendering",
                    "Single-page application (SPA) behavior"
                ],
                "correctAnswer": 3
            },
            {
                "question": "In React, what is the purpose of the 'useReducer' hook?",
                "choices": [
                    "To manage component state",
                    "To handle side effects in functional components",
                    "To create animations",
                    "To manage complex state logic"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What is the key difference between React's 'props' and 'state'?",
                "choices": [
                    "Props are immutable, while state is mutable",
                    "Props can only be used in class components, while state can be used in functional components",
                    "State is passed from parent to child components, while props are managed within a component",
                    "There is no difference, they can be used interchangeably"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the purpose of the 'useMemo' hook in React?",
                "choices": [
                    "To create animations",
                    "To memoize expensive calculations and optimize performance",
                    "To manage component styles",
                    "To handle asynchronous operations"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In React, what is the significance of the 'shouldComponentUpdate' method in class components?",
                "choices": [
                    "It is used to create animations",
                    "It allows components to skip rendering when certain conditions are met, optimizing performance",
                    "It manages component styles",
                    "It fetches data from an API"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is React's Context API primarily used for?",
                "choices": [
                    "Managing component state",
                    "Storing global configuration settings",
                    "Handling HTTP requests",
                    "Optimizing rendering"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In React, what is a controlled component?",
                "choices": [
                    "A component that can't be controlled by the user",
                    "A component that uses the 'useState' hook",
                    "A component that delegates control of its form elements to React state",
                    "A component that has no state"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the purpose of the 'forwardRef' function in React?",
                "choices": [
                    "To create animations",
                    "To access the DOM directly",
                    "To forward a ref from a parent to a child component",
                    "To define component structure"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the key advantage of using React for server-side rendering (SSR) in web applications?",
                "choices": [
                    "Improved client-side performance",
                    "Better SEO (Search Engine Optimization)",
                    "Reduced development time",
                    "Support for mobile devices"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "questions": [
            {
                "question": "What is server-side rendering (SSR) in React, and why is it beneficial?",
                "choices": [
                    "Rendering React components on the server before sending them to the client, improving performance and SEO",
                    "Rendering React components on the client for faster load times",
                    "Rendering React components on the server after loading the client-side application",
                    "Rendering static HTML pages"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is a higher-order component (HOC) in React?",
                "choices": [
                    "A component that is rendered above all other components",
                    "A function that takes a component and returns a new component with enhanced functionality",
                    "A component that is placed higher in the component tree",
                    "A component that is used for handling user authentication"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'shouldComponentUpdate' method in a React class component?",
                "choices": [
                    "To create animations",
                    "To prevent a component from re-rendering unnecessarily and optimize performance",
                    "To manage component styles",
                    "To fetch data from an API"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the difference between React's 'controlled' and 'uncontrolled' components in forms?",
                "choices": [
                    "Controlled components use refs, while uncontrolled components do not",
                    "Controlled components use state to manage form input, while uncontrolled components do not rely on state",
                    "Controlled components are always faster than uncontrolled components",
                    "There is no difference; the terms are used interchangeably"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'useLayoutEffect' hook in React?",
                "choices": [
                    "To perform layout calculations and updates synchronously before the browser paints",
                    "To create animations",
                    "To fetch data from an API",
                    "To manage component state"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What are React fragments used for?",
                "choices": [
                    "To create reusable components",
                    "To group multiple elements without adding extra nodes to the DOM",
                    "To define the structure of a component",
                    "To create animations"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'memo' function in React?",
                "choices": [
                    "To memoize expensive calculations and optimize performance",
                    "To create animations",
                    "To manage component styles",
                    "To handle asynchronous operations"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the significance of the 'dangerouslySetInnerHTML' prop in React?",
                "choices": [
                    "To enable server-side rendering (SSR)",
                    "To allow direct DOM manipulation",
                    "To prevent XSS attacks",
                    "To render HTML content as a string"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'react-router-dom' library in a React application?",
                "choices": [
                    "To manage component styles",
                    "To create animations",
                    "To handle server-side rendering (SSR)",
                    "To enable client-side routing and navigation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What is the key difference between 'useEffect' and 'useLayoutEffect' hooks in React?",
                "choices": [
                    "There is no difference; they are used interchangeably",
                    "useLayoutEffect runs before the browser paints, while useEffect runs after",
                    "useEffect runs synchronously, while useLayoutEffect runs asynchronously",
                    "useLayoutEffect is deprecated and should not be used"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "questions": [
            {
                "question": "Explain the concept of 'reconciliation' in React's virtual DOM.",
                "choices": [
                    "The process of creating a virtual DOM tree",
                    "The process of updating the actual DOM tree to match the virtual DOM",
                    "The process of optimizing rendering using the 'shouldComponentUpdate' method",
                    "The process of generating HTML from JSX"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'Profiler' component in React?",
                "choices": [
                    "To measure the performance of a React application",
                    "To create animations",
                    "To manage component styles",
                    "To handle asynchronous operations"
                ],
                "correctAnswer": 0
            },
            {
                "question": "In React, what is the significance of the 'Fragment' component?",
                "choices": [
                    "To group multiple elements without adding extra nodes to the DOM",
                    "To define the structure of a component",
                    "To enable server-side rendering (SSR)",
                    "To create animations"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is 'memoization' in the context of React performance optimization?",
                "choices": [
                    "A technique for optimizing HTTP requests",
                    "A way to store component state",
                    "A caching technique to avoid redundant calculations",
                    "A method for routing in React applications"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the purpose of the 'ErrorBoundary' component in React?",
                "choices": [
                    "To handle server-side rendering (SSR) errors",
                    "To manage component styles",
                    "To create animations",
                    "To catch and handle errors in child components"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What are 'portals' in React and what are they commonly used for?",
                "choices": [
                    "Portals are used for asynchronous data fetching",
                    "Portals are used for creating modals and tooltips that can be rendered outside of the normal DOM hierarchy",
                    "Portals are used for server-side rendering (SSR)",
                    "Portals are used for managing routing in React applications"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the purpose of the 'Suspense' component in React?",
                "choices": [
                    "To manage component styles",
                    "To create animations",
                    "To handle asynchronous operations with better loading states",
                    "To enable server-side rendering (SSR)"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the 'Concurrent Mode' in React, and why is it significant?",
                "choices": [
                    "Concurrent Mode is a mode for creating concurrent tasks in React applications",
                    "Concurrent Mode is a way to perform server-side rendering (SSR)",
                    "Concurrent Mode is a mode for handling HTTP requests",
                    "Concurrent Mode is a mode for optimizing rendering and user experience, especially in high-priority updates"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What is the 'strict mode' in React, and how does it impact development?",
                "choices": [
                    "Strict mode enforces strict code formatting rules",
                    "Strict mode is a mode for faster component rendering",
                    "Strict mode is a development mode that detects potential problems in the application and logs warnings to the console",
                    "Strict mode is a mode for server-side rendering (SSR)"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the primary purpose of the 'render props' pattern in React?",
                "choices": [
                    "To optimize rendering performance",
                    "To share component styles across the application",
                    "To handle asynchronous operations",
                    "To allow components to share code and behavior through a prop whose value is a function"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "questions": [
            {
                "question": "Explain the purpose and usage of React's 'concurrent' and 'suspense' features.",
                "choices": [
                    "Concurrent mode is used for handling concurrent tasks, while suspense is used for asynchronous data fetching.",
                    "Concurrent mode is used for optimizing rendering, while suspense is used for handling errors.",
                    "Concurrent mode is used for server-side rendering, while suspense is used for optimizing rendering performance.",
                    "Concurrent mode and suspense are not real features in React."
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is a 'fiber' in React and how does it relate to the virtual DOM?",
                "choices": [
                    "A fiber is a data structure used to represent elements in the virtual DOM.",
                    "A fiber is a lightweight thread that helps React manage component rendering.",
                    "A fiber is a method for defining CSS styles in React components.",
                    "A fiber is a virtual DOM tree."
                ],
                "correctAnswer": 1
            },
            {
                "question": "Explain the concept of 'React reconciliation' and its role in rendering optimization.",
                "choices": [
                    "Reconciliation is the process of rendering React components asynchronously to improve performance.",
                    "Reconciliation is the process of optimizing rendering by eliminating unused components.",
                    "Reconciliation is the process of updating the actual DOM tree to match the virtual DOM, optimizing rendering by avoiding unnecessary changes.",
                    "Reconciliation is a feature used for handling server-side rendering (SSR) in React."
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is a 'hook' in React, and how does it differ from class component methods?",
                "choices": [
                    "A hook is a function that allows you to 'hook into' React's lifecycle methods and customize behavior.",
                    "A hook is a component that renders other components.",
                    "Hooks are used for server-side rendering (SSR) in React applications.",
                    "Hooks are an alternative to JSX for defining component structure."
                ],
                "correctAnswer": 0
            },
            {
                "question": "Explain the principles of the 'Reactive Programming' paradigm and how it relates to React.",
                "choices": [
                    "Reactive Programming is a paradigm for managing asynchronous data flows, and React follows this paradigm with its state management.",
                    "Reactive Programming is a way of optimizing rendering performance in React applications.",
                    "Reactive Programming is a concept unrelated to React.",
                    "Reactive Programming is a way of handling server-side rendering (SSR) in React applications."
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the role of 'requestIdleCallback' in optimizing performance in React applications?",
                "choices": [
                    "requestIdleCallback is used for making HTTP requests in React applications.",
                    "requestIdleCallback is a method for handling errors in React applications.",
                    "requestIdleCallback is a feature used to optimize rendering performance by scheduling work during browser idle periods.",
                    "requestIdleCallback is a feature used for server-side rendering (SSR) in React."
                ],
                "correctAnswer": 2
            },
            {
                "question": "Explain the concept of 'fiber rehydration' and its significance in server-side rendering (SSR) with React.",
                "choices": [
                    "Fiber rehydration is a process of converting virtual DOM to HTML on the server-side.",
                    "Fiber rehydration is a feature for optimizing rendering performance in React applications.",
                    "Fiber rehydration is a process of converting HTML to virtual DOM on the client-side after server-side rendering.",
                    "Fiber rehydration is not related to React."
                ],
                "correctAnswer": 2
            },
            {
                "question": "What are the 'time-slicing' and 'lazy-loading' features in React, and how do they impact performance?",
                "choices": [
                    "Time-slicing and lazy-loading are features for rendering components only when they are in the viewport, improving performance by reducing initial load times.",
                    "Time-slicing and lazy-loading are features for optimizing HTTP requests in React applications.",
                    "Time-slicing and lazy-loading are not real features in React.",
                    "Time-slicing and lazy-loading are features for server-side rendering (SSR) in React."
                ],
                "correctAnswer": 0
            },
            {
                "question": "Explain the 'concurrent rendering' model in React and how it differs from the traditional 'stack-based' rendering model.",
                "choices": [
                    "Concurrent rendering is a model for handling server-side rendering (SSR) in React applications, while the traditional model is used for client-side rendering.",
                    "Concurrent rendering is a model that prioritizes high-priority updates and schedules work more efficiently, while the traditional model follows a stack-based approach.",
                    "Concurrent rendering is a model for handling routing in React applications, while the traditional model is used for rendering components.",
                    "Concurrent rendering is not a real concept in React."
                ],
                "correctAnswer": 1
            },
            {
                "question": "What are 'React Server Components' and how do they impact server-side rendering (SSR) in React?",
                "choices": [
                    "React Server Components are components that can only be used on the client-side and do not impact SSR.",
                    "React Server Components are components that allow for more efficient server-side rendering by fetching data asynchronously.",
                    "React Server Components are not real components in React.",
                    "React Server Components are components that can only be used on the server-side and do not impact the client-side rendering."
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "questions": [
            {
                "question": "If programming were a sandwich, what would be the main ingredient in a JavaScript sandwich?",
                "choices": [
                    "Bread",
                    "Functions",
                    "Variables",
                    "Syntax Errors"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In TypeScript, how would you declare a variable that holds magical unicorns?",
                "choices": [
                    "const unicorns: string;",
                    "let unicorns: unicorn;",
                    "var unicorns = 'unicorn';",
                    "declare unicorn;"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What happens when you try to use 'import sunshine' in React?",
                "choices": [
                    "You get a sunny component",
                    "The code brightens up",
                    "You can't use 'import sunshine'",
                    "Your screen turns yellow"
                ],
                "correctAnswer": 2
            },
            {
                "question": "In Python, what does 'import coffee' mean?",
                "choices": [
                    "Imports a coffee maker",
                    "Adds caffeine to your code",
                    "Imports a 'coffee' library",
                    "Raises a 'caffeine not found' error"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Why do programmers use 'print('Hello, World!')' in their code?",
                "choices": [
                    "To print 'Hello, World!' to the console",
                    "To greet the world",
                    "To start the program",
                    "To summon friendly aliens"
                ],
                "correctAnswer": 0
            },
            {
                "question": "In TypeScript, what type is 'null' considered to be?",
                "choices": [
                    "string",
                    "null",
                    "object",
                    "undefined"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What do you get when you run 'console.log([] + []);' in JavaScript?",
                "choices": [
                    "An empty array",
                    "NaN",
                    "0",
                    "An error"
                ],
                "correctAnswer": 0
            },
            {
                "question": "If you were to chat with dolphins using a programming language, what would you use?",
                "choices": [
                    "DolphinScript",
                    "JavaScript",
                    "Python",
                    "Dolphinese"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Why do programmers follow the 'snake_case' naming convention in Python?",
                "choices": [
                    "To confuse developers",
                    "To make code more readable",
                    "To avoid bugs",
                    "To attract snakes"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which programming language is known for its obsession with proper code indentation?",
                "choices": [
                    "JavaScript",
                    "Python",
                    "C++",
                    "Whitespace"
                ],
                "correctAnswer": 1
            }
        ]
    }

]

export default Home;