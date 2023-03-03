import questionsSlice from "./routes/FormSlice";

const {configureStore} = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        questions: questionsSlice
    }
})

export default store