const SchedulePage = () => {
    return (
        <>
            <section className="scroll-mt-[72px] bg-black text-white md:scroll-mt-[88px]">
                <main className="mx-auto max-w-8xl space-y-16 py-16 px-8 md:space-y-32 md:py-32 md:px-16">
                    <div className="relative space-y-8 md:space-y-0">
                        <h2 className="text-h1-mobile md:mb-8 md:text-d1-mobile xl:text-d1">
                            Our Events Schedule
                        </h2>
                        <p className="text-body xl:max-w-[680px]">
                            This is the schedule of our events. We will be updating this page as soon as we have more information.
                        </p>
                    </div>
                </main>
            </section>
            <div className="center max-w-full space-y-16 p-0 m-0">
                <h1 className="text-h1-mobile md:text-d1-mobile xl:text-d1 m-12">Day 1</h1>
                <iframe
                    src="https://localschedule.vercel.app/#v2%3A%7B%22name%22%3A%22Day%201%22%2C%22day%22%3A%222023-02-21%22%2C%22tz%22%3A%22Asia%2FKolkata%22%2C%22sessions%22%3A%7B%221600%22%3A%22Childhood%20Snack%20Auction%20Ends%22%2C%221700%22%3A%22Stand%20Up%20Ends%22%2C%222000%22%3A%22War%20of%20DJs%20Ends%22%2C%221200%40BJ%20Hall%22%3A%22Group%20Dance%20Starts%22%2C%221430%40Classroom%22%3A%22Childhood%20Snack%20Auction%20Starts%22%2C%221500%40Classroom%22%3A%22Stand%20Up%20Starts%22%2C%221800%40BJ%20Hall%22%3A%22War%20of%20DJs%20Starts%22%2C%221200%40Online%22%3A%22Valorant%20-%20All%20Day%22%2C%221200%40BJ%20Hall%20Dining%20Area%22%3A%22Gartic%20Phone%2C%20Fish%20Tank%2C%20Cards%20against%20Sattva%20and%20Self%20Defense%20Workshop%22%2C%221200%40Gymkhana%22%3A%22FiFa%20-%20All%20Day%22%2C%221330%40Classroom%22%3A%22Treasure%20Hunt%22%2C%221100%40Classroom%22%3A%22Origami%20Workshop%22%2C%220%40All%20Campuses%22%3A%22A%20Day%20at%20Sattva%22%2C%221600%40Classroom%22%3A%22The%20Covert%20to%20Polished%20Career%22%2C%221000%40Online%22%3A%22Cinebuster%20Magazine%20Photography%20-%20All%20Day%22%2C%221300%40Classroom%22%3A%22Advertise%20your%20product%22%7D%7D"
                    width="100%" height="1900px" className="border-0">
                </iframe>
            </div>
        </>
    );
};

export default SchedulePage;