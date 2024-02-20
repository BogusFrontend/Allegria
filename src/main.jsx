import {StrictMode} from "react";
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import Context from "./utils/Context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Context>
            <App/>
        </Context>
    </StrictMode>
);