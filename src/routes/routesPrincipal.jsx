import Home from"../pages/Home";
import Login from "../pages/Login";
import Registros from "../pages/Registros";

export let router=[
    {
        path:"/home",
        element:<Home/>
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path:"/Registros",
        element:<Registros/>,
    },
];