import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const publicRoutes = [
    {
        path:"/",
        element: <SignIn/>
    },
    {
        path:"/cadastro",
        element: <SignUp/>
    },
];