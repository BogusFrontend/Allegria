import {Header} from "./components/header.jsx";
import {Footer} from "./components/footer.jsx";

export const Layout = (props) => {
    return (
        <>
            <Header/>
                <div className="container">
                    {props.children}
                </div>
            <Footer/>
        </>
    );
};
