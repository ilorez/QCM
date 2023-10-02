import { Link } from 'react-router-dom'
import useStore from '../store'
// import './home.css'


function Home() {
    const { setQuestions } = useStore();
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
        }
    ]
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
export default Home;