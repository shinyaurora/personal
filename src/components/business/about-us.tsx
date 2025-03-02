import AboutImage from "@/assets/images/about.png";

const AboutUs = () => {
    return (
        <div className="bg-[#622091] py-20" id="about-us">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2 order-2 lg:order-1">
                        <p className="text-white text-sm indent-2">
                            Hi, there. Thank you for visiting this site and thank you for your interest.
                            <br />
                            And sorry for the inconvenience. This site is still under construction.
                            But I wonder you are here and understand the purpose of this site.
                        </p>
                        <p className="text-white text-sm indent-2">
                            My name is <span className="font-semibold">Dennis Kong</span> and I am a software developer.
                            I was born in Hong Kong and now live in Canada as a Canadian citizen.
                            With over 10 years of experience as a softwaer developer, I have worked on diverse projects
                            across multiple countries, including the 
                            <span className="font-semibold mx-0.5">US</span>,
                            <span className="font-semibold mx-0.5">Canada</span>,
                            <span className="font-semibold mx-0.5">UK</span>,
                            <span className="font-semibold mx-0.5">Switzerland</span> and
                            <span className="font-semibold mx-0.5">HongKong</span>.
                            Through these experiences, I have seen first-hand how salaries very drastically depending on location
                            -often unfarily. Even highly skilled senior developers struggle to earn what they truly
                            deserve when working alongside peers from different countries. And I think you already know why.
                        </p>
                        <p className="text-white text-sm indent-2">
                            That's why I came up with a new business idea - one that redefines collaboration and fair compensation.
                            It's not just another job platform; it's a new way to cooperate based on true teamwork - a concept 
                            I call <span className="font-bold mx-0.5">TeamUp</span>.
                        </p>
                        <p className="text-white text-sm indent-2">
                            Imagine a system where talent isn't limited by geography. Where people with strong 
                            communication skills can collaborate those who are technically skilled, and where 
                            professionals from high-paying regions work alongside experts from other parts of the world.
                            You don't need to have every skills to succeed - but together, we can create something bigger.
                        </p>
                        <p className="text-white text-sm indent-2">
                            If you have all the skills and conditions, that's incredible!
                            But if now, why not join us and complement your strengths with others?
                            Let's work together, grow together, and create a world where skills - no location - determine success.
                        </p>
                        <p className="text-white text-sm indent-2">
                            I can't wait to build this with you. Let's make it happen!
                        </p>
                    </div>
                    <div className="flex items-center justify-center order-1 lg:order-2">
                        <img src={AboutImage} className="max-w-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;