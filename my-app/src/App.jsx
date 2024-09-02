import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./app/root/root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>
    }
])

const App = () => {
    return <RouterProvider router={router}/>

};

export default App;