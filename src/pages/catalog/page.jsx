import {Link} from "react-router-dom";

export const CatalogPage = () => {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl p-4">Каталог</h1>
            <Link className="hover:underline" to="/">На главную</Link>
        </div>
    );
};
