import Image1 from '../../../public/popular/1.jpg';
import Image2 from '../../../public/popular/2.jpg';
import Image3 from '../../../public/popular/3.jpg';
import Image4 from '../../../public/popular/4.jpg';
import AboutImg from '../../../public/about/about.jpg';

export const HomePage = () => {
    return (
        <div className="container">
            <main className="mb-20 bg-[url('../../../public/background/bg-home.jpg')] h-[700px] bg-no-repeat bg-top bg-cover relative">
                <div
                    className="text-center uppercase text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <p className="font-light text-sm mb-0.5">Бренд</p>
                    <h2 className="font-bold mb-4 text-5xl">American Vintage</h2>
                    <a href="#">Смотреть коллекцию</a>
                </div>
            </main>
            <section className="flex items-center bg-[#CEC6C4] mb-20">
                <div className="bg-[url('../../../public/arrival/left.jpg')] w-[640px] h-[700px] bg-no-repeat">
                    <div className="text-white ml-20">
                        <h3 className="uppercase text-7xl pt-40 mb-5">New <br/> arrival</h3>
                        <p className="mb-5">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipLorem
                            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
                        <a className="uppercase" href="#">Смотреть коллекцию</a>
                    </div>
                </div>
                <div className="bg-white ml-20 p-20">
                    <div
                        className="bg-[url('../../../public/arrival/right.jpg')] w-[380px] h-[380px] bg-no-repeat relative">
                        <p className="text-center text-white absolute bottom-[20px] left-[35px] right-[35px] text-sm">Lorem
                            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem</p>
                    </div>
                </div>
            </section>
            <section className="mb-20">
                <h3 className="text-center uppercase text-2xl mb-10">Популярное</h3>
                <div className="flex justify-center gap-10 items-center">
                    <div className="text-center">
                        <img src={Image1} alt="img"/>
                        <h4 className="uppercase">Replay</h4>
                        <p>Classic Shoes</p>
                        <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB</p>
                    </div>
                    <div className="text-center">
                        <img src={Image2} alt="img"/>
                        <h4 className="uppercase">Replay</h4>
                        <p>Classic Shoes</p>
                        <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB</p>
                    </div>
                    <div className="text-center">
                        <img src={Image3} alt="img"/>
                        <h4 className="uppercase">Replay</h4>
                        <p>Classic Shoes</p>
                        <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB</p>
                    </div>
                    <div className="text-center">
                        <img src={Image4} alt="img"/>
                        <h4 className="uppercase">Replay</h4>
                        <p>Classic Shoes</p>
                        <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB</p>
                    </div>
                </div>
            </section>
            <section className="mb-60 bg-[#254A5A] p-20 text-white relative">
                <div className="w-[500px]">
                    <h3 className="text-8xl mb-10">О нас</h3>
                    <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem</p>
                    <img className="absolute top-10 right-40" src={AboutImg} alt="img"/>
                </div>
            </section>
        </div>
    );
};
