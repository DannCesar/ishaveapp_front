import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Adress } from "../pages/SignUp/Adress";

export const publicRoutes = [
    {
        path:"/",
        element: <SignIn/>
    },
    {
        path:"/cadastro",
        element: <SignUp/>
    },
    {
        path:"/endereco",
        element: <Adress/>
    },
];