import { create } from 'zustand'

const useStore = create((set) => ({
    questions: [
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
    ],
    correctnessAnswers: [],
    questionNum: 0,
    userAnsawers: [],
    setQuestions: (data) => set(() => {
        return {
            questionNum: 0,
            correctnessAnswers: [],
            questions: data,
        }
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
        const updateUserAnsawers = [...state.userAnsawers];
        updateCorrectnessAnswers[index] = useStore.getState().getQuestion(index).correctAnswer === answer ? 1 : 0;
        updateUserAnsawers[index] = answer;
        return {
            correctnessAnswers: updateCorrectnessAnswers,
            userAnsawers: updateUserAnsawers
        }
    }),
}));
export default useStore;