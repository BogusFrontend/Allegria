import React from 'react';
import Image1 from "/popular/1.jpg";
import Image2 from "/popular/2.jpg";
import Image3 from "/popular/3.jpg";
import Image4 from "/popular/4.jpg";

export const SliderSection = () => {
    return (
        <section className="mb-20">
            <h3 className="text-center uppercase text-2xl mb-10">Популярное</h3>
            <div className="flex justify-center gap-10 items-center">
                <div className="text-center">
                    <img src={Image1} alt="img"/>
                    <h4 className="uppercase mt-3">Replay</h4>
                    <p>Classic Shoes</p>
                    <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB
                    </p>
                </div>
                <div className="text-center">
                    <img src={Image2} alt="img"/>
                    <h4 className="uppercase mt-3">Replay</h4>
                    <p>Classic Shoes</p>
                    <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB
                    </p>
                </div>
                <div className="text-center">
                    <img src={Image3} alt="img"/>
                    <h4 className="uppercase mt-3">Replay</h4>
                    <p>Classic Shoes</p>
                    <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB
                    </p>
                </div>
                <div className="text-center">
                    <img src={Image4} alt="img"/>
                    <h4 className="uppercase mt-3">Replay</h4>
                    <p>Classic Shoes</p>
                    <p className="text-[#FD5454]"><strike className="text-gray-300">6100 RUB</strike> 3800 RUB
                    </p>
                </div>
            </div>
        </section>
    );
};
