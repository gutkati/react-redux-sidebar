import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./app/root/root";
import Contacts from "./components/contacts/contacts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contacts/>,
            }
        ]
    }
])

const App = () => {
    return <RouterProvider router={router}/>

};

export default App;