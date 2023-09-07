import { create } from 'zustand'
const Ques = [
    {
        "question": "What is the core building block of a React application?",
        "choices": [
            "Component",
            "Module",
            "Element",
            "Function"
        ],
        "correctAnswer": 0
    }
]
const useStore = create((set) => ({
    questions: Ques,
    correctnessAnswers: [],
    questionNum: 0,
    setQuestions: (data) => set(() => {
        return { questions: data }
    }),
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
        return { correctnessAnswers: updateCorrectnessAnswers }
    }),
}));
export default useStore;