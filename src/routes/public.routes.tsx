import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Adress } from "../pages/SignUp/Adress";

// Rota pública para quando não estiver logado

export const publicRoutes = [
    {
        path:"/login",
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