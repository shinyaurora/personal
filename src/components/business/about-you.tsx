import AboutYouImage1 from "@/assets/images/about-you.jpg";
import AboutYouImage2 from "@/assets/images/about-you-2.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IMAGES = [
    AboutYouImage1,
    AboutYouImage2
]

const AboutYou = () => {

    const [image, setImage] = useState<number>(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev: number) => prev === 1 ? 0 : 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="py-20">
            <div className="container px-4 mx-auto" id="about-you">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <img src={IMAGES[image]} className="max-w-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-center text-2xl font-bold mb-2">Who I AM? What Is My Case?</h4>
                        <p className="text-black text-sm indent-2">
                            Now, take a moment to think about yourself - who you are, what skills you have, and 
                            how you can contribute to this new way of working.
                        </p>
                        <p className="text-black text-sm font-semibold">
                            Are you living in the fast-paced, high-paying countries, like US or others? <br />
                            Are you a strong communicator with excellent language skills? <br />
                            Are you a talented programmer or an expert in your field?
                        </p>
                        <p className="text-black text-sm indent-2">
                            If you excel at something, if you're ready to take on a new challenge,
                            and if you want to be part of building something groundbreaking - 
                            don't hesitate to 
                            <Link to="/about-me">
                                <span className="hover:underline ml-0.5 pb-0.5 font-semibold border bg-[#622091] text-white rounded-md px-2">reach out to me</span>.
                            </Link>
                        </p>
                        <p className="text-black text-sm indent-2">
                            Let's team up and create something truly remarkable, together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutYou;