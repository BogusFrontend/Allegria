import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import Context from "./utils/Context.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Context>
            <RouterProvider router={router} />
        </Context>
    </React.StrictMode>
);
