import { Link } from "react-router-dom";
import { User, Heart, ShoppingBag } from "@phosphor-icons/react";
import { Logo } from "../../components/logo.jsx";

export const Header = () => {
    return (
        <header className="pt-8 pb-8">
            <div className="container">
                <nav className="flex justify-between items-center uppercase">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link className="hover:opacity-50 transition-opacity" to="catalog">Каталог</Link>
                        <Link className="hover:opacity-50 transition-opacity" to="about">О нас</Link>
                        <Link className="hover:opacity-50 transition-opacity" to="contacts">Контакты</Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-4">
                            <a href="#">Ru</a>
                            <a href="#">En</a>
                        </div>
                        <div className="flex gap-3">
                            <User className="cursor-pointer size-6"/>
                            <Heart className="cursor-pointer size-6"/>
                            <ShoppingBag className="cursor-pointer size-6"/>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
