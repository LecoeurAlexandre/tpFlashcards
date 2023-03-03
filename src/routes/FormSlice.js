import {createSlice} from "@reduxjs/toolkit";
import { baseQuestions } from "../utils/baseQuestions";

const questionsSlice = createSlice ({
    name: "questions",
    initialState: {
        questions: [...baseQuestions],
        isLoading: false,
        error: null
    },
    reducers: {
        addFlashCard(state, action) {
            state.questions.push(action.payload)
        }
    }
})

export const { addFlashCard } = questionsSlice.actions;
export default questionsSlice.reducer;