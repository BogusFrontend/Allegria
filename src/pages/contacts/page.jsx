import {Link} from "react-router-dom";


export const ContactsPage = () => {
    return (
        <div>
            <div className="text-center p-10">
                <h1 className="text-3xl p-4">Контакты</h1>
                <Link className="hover:underline" to="/">На главную</Link>
            </div>
        </div>
    );
};
