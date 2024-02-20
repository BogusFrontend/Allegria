import {Header} from "./components/header.jsx";
import {Footer} from "./components/footer.jsx";

export const Layout = (props) => {
    return (
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
};
