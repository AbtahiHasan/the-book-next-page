
import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Root from "../Root";
import Books from "../pages/Books";
import About from "../pages/About";
const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/books",
                element: <Books/>,
                loader: () => fetch("https://api.itbook.store/1.0/new")
            },
            {
                path: "/about",
                element: <About/>,
            }
        ]
    }
])

export default router