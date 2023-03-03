import App from "./App"
import ErrorPage from "./routes/ErrorPage"
import HomePage from "./routes/HomePage"
import FormPage from "./routes/FormPage"
import QuestionPage from "./routes/QuestionPage"

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children : [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/form",
                element: <FormPage/>
            },
            {
                path: "/question/:id",
                element: <QuestionPage/>
            },
        ]
    }
])

export default router