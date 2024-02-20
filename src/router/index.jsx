import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {HomePage} from "../pages/Home/page.jsx";
import {AboutPage} from "../pages/About/page.jsx";
import {CatalogPage} from "../pages/Catalog/page.jsx";
import {ContactsPage} from "../pages/Contacts/page.jsx";

export const routes = createRoutesFromElements(
    <Route>
        <Route path="/" element={<HomePage/>}/>
        <Route>
            <Route path="about" element={<AboutPage/>}/>
        </Route>
        <Route>
            <Route path="catalog" element={<CatalogPage/>}/>
        </Route>
        <Route>
            <Route path="contacts" element={<ContactsPage/>}/>
        </Route>
    </Route>

)
export const router = createBrowserRouter(routes);