import { ArrowSquareRight } from "@phosphor-icons/react";
import {Link} from "react-router-dom";

 export const Footer = () => {
    return (
        <footer className="text-center mt-20">
            <div className="pt-20 border-t-[1px] border-b-[1px]">
                <h3 className="uppercase text-3xl tracking-widest mb-6">Будьте в курсе событий</h3>
                <label className="flex justify-center items-start gap-3">
                    <input className="mb-6 border-b-[1px] border-black outline-none placeholder:text-center" type="text"
                           placeholder="Katyamry"/>
                    <ArrowSquareRight className="cursor-pointer" size={24} color='#E64926'/>
                </label>
                <div className="flex justify-center gap-8 text-gray-400 pb-20">
                    <Link className="hover:underline" to="about">О нас</Link>
                    <Link className="hover:underline" to="catalog">Каталог</Link>
                    <Link className="hover:underline" to="contacts">Контакты</Link>
                </div>
            </div>
            <div className="p-5 container flex justify-between">
                <p>Все права защищены  &copy;2024</p>
                <p>Дизайн и разработка: BogusCode</p>
            </div>
        </footer>
    );
 };