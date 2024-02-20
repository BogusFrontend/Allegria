import {createBrowserRouter} from "react-router-dom";

import {HomePage} from "../pages/home/page.jsx";
import {AboutPage} from "../pages/about/page.jsx";
import {CatalogPage} from "../pages/catalog/page.jsx";
import {ContactsPage} from "../pages/contacts/page.jsx";
import {ErrorPage} from "../pages/error/page.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "catalog",
        element: <CatalogPage/>,
    },
    {
        path: "about",
        element: <AboutPage />,
    },
    {
        path: 'contacts',
        element: <ContactsPage />
    },
]);
