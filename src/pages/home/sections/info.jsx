export const InfoSection = () => {
    return (
        <section className="flex items-center bg-[#CEC6C4] mb-20">
            <div className="bg-arrival-left w-[640px] h-[700px] bg-no-repeat">
                <div className="text-white ml-20">
                    <h3 className="uppercase text-7xl pt-40 mb-5">New <br/> arrival</h3>
                    <p className="mb-5">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem
                        ipLorem
                        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
                    <a className="uppercase" href="#">Смотреть коллекцию</a>
                </div>
            </div>
            <div className="bg-white ml-20 p-20">
                <div
                    className="bg-arrival-right w-[380px] h-[380px] bg-no-repeat relative">
                    <p className="text-center text-white absolute bottom-[20px] left-[35px] right-[35px] text-sm">Lorem
                        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem</p>
                </div>
            </div>
        </section>
    );
};
