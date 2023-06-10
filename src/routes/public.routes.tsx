import { ConfirmEmail } from "../pages/ConfirmEmail";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

// Rota pública para quando não estiver logado

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
        path:"/confirmar-email",
        element: <ConfirmEmail/>
    },
];