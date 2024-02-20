import AboutImg from "/about/about.jpg";

export const AboutSection = () => {
    return (
        <section className="mb-60 bg-[#254A5A] p-20 text-white relative">
            <div className="w-[500px]">
                <h3 className="text-8xl mb-10">О нас</h3>
                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem</p>
                <img className="absolute top-10 right-40" src={AboutImg} alt="img"/>
            </div>
        </section>
    );
};
