import { create } from 'zustand'

const useStore = create((set) => ({
    questions: [
        {
            "question": "What is React?",
            "choices": [
                "A JavaScript framework for building user interfaces.",
                "A Python web development framework.",
                "A database management system.",
                "A programming language."
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which virtual DOM library does React use?",
            "choices": [
                "Vue.js",
                "Angular",
                "jQuery",
                "None, React has its own virtual DOM implementation."
            ],
            "correctAnswer": 3
        },
        {
            "question": "What is JSX in React?",
            "choices": [
                "JavaScript XML, a syntax extension for JavaScript.",
                "A build tool for React applications.",
                "A state management library for React.",
                "A CSS preprocessor for styling React components."
            ],
            "correctAnswer": 0
        },
        {
            "question": "How can you pass data from a parent component to a child component in React?",
            "choices": [
                "Using Redux.",
                "By directly modifying the child's state.",
                "Using props.",
                "By calling a child's function."
            ],
            "correctAnswer": 2
        },
        {
            "question": "What does React Router do?",
            "choices": [
                "It helps with state management in React.",
                "It allows you to create reusable components.",
                "It helps with navigation and routing in a React application.",
                "It is a database library for React."
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which function is called when a component is first rendered in React?",
            "choices": [
                "render()",
                "componentDidMount()",
                "componentWillUnmount()",
                "constructor()"
            ],
            "correctAnswer": 1
        },
        {
            "question": "What is the purpose of the useState hook in React?",
            "choices": [
                "To fetch data from an API.",
                "To manage and update component state.",
                "To create new React components.",
                "To handle user authentication."
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which of the following is a core concept in React for optimizing performance?",
            "choices": [
                "Redux",
                "Memoization",
                "Promises",
                "Closures"
            ],
            "correctAnswer": 1
        },
        {
            "question": "What is the purpose of the useEffect hook in React?",
            "choices": [
                "To create animations in React components.",
                "To manage routing in a React application.",
                "To handle asynchronous operations and side effects in functional components.",
                "To define CSS styles for React components."
            ],
            "correctAnswer": 2
        },
        {
            "question": "What is the significance of keys in React lists?",
            "choices": [
                "They provide a unique identifier for each list item.",
                "They determine the order of list items.",
                "They control the visibility of list items.",
                "They are used to define the data structure of a list."
            ],
            "correctAnswer": 0
        }
    ],
    correctnessAnswers: [],
    questionNum: 0,

    incrementQuestionNum: () => set((state) => {
        const qN = useStore.getState().questionNum
        return (qN + 1) < useStore.getState().questions.length && qN >= 0 ? { questionNum: state.questionNum + 1 } : { questionNum: -1 }
    }),
    getQuestion: (index) => {
        const questions = useStore.getState().questions;
        if (index >= 0 && index < questions.length) {
            return questions[index];
        } else {
            return null; // Return null if the index is out of bounds
        }
    },
    setCorrectness: (index, answer) => set((state) => {
        const updateCorrectnessAnswers = [...state.correctnessAnswers];
        updateCorrectnessAnswers[index] = useStore.getState().getQuestion(index).correctAnswer === answer ? 1 : 0;
        console.log(updateCorrectnessAnswers)
        return { correctnessAnswers: updateCorrectnessAnswers }

    }),


}));
export default useStore;