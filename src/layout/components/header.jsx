import { User, Heart, ShoppingBag } from "@phosphor-icons/react";
import Logo from '../../../public/logo/logo.svg'

export const Header = () => {
    return (
        <header className="pt-4">
            <div className="container">
                <nav className="flex justify-between items-center uppercase">
                    <a href="#">
                        <img src={Logo} alt="logo"/>
                    </a>
                    <div className="flex items-center gap-6">
                        <a className="hover:opacity-50 transition-opacity" href="#">Женщины</a>
                        <a className="hover:opacity-50 transition-opacity" href="#">Мужчины</a>

                        <label className="flex items-center gap-6">
                            <span>Поиск</span>
                            <input className="border-b-[1px] border-black outline-0" type="text"/>
                        </label>
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
