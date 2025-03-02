import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="w-full h-[calc(100vh-72px)] border-y mt-[72px] border-black">
            <div className="container mx-auto border-r border-l border-black flex items-center justify-center flex-col h-full">
                <div className="text-[30px] font-[funny] flex">
                    {/* <TextAnimate> */}
                    Hi there<span className="animate-wiggle block ml-2">👋</span>
                    {/* </TextAnimate> */}
                </div>
                <div className="font-[funny] flex flex-col gap-4 justify-center items-center mt-4">
                    <div className="flex items-center text-lg">
                        I am a
                        <AnimatedGradientText className="mx-1">
                            <span
                                className={cn(
                                    `inline animate-gradient font-black bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                )}
                            >
                                Senior Software Engineer
                            </span>
                        </AnimatedGradientText>
                        with over 10 years of experience.
                    </div>
                    <div className="text-center px-2 flex items-center gap-1 text-md">
                        Proficient in
                        <div className="bg-black rounded-full font-bold border border-white text-white px-2 py-0.5 text-sm font-mono">
                            React
                        </div>
                        <div className="bg-black rounded-full font-bold border border-white text-white px-2 py-0.5 text-sm font-mono">
                            React Native
                        </div>
                        <div className="bg-black rounded-full font-bold border border-white text-white px-2 py-0.5 text-sm font-mono">
                            Angular
                        </div>
                        <div className="bg-black rounded-full font-bold border border-white text-white px-2 py-0.5 text-sm font-mono">
                            Node.js
                        </div>
                        <div className="bg-black rounded-full font-bold border border-white text-white px-2 py-0.5 text-sm font-mono">
                            Python
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        I am Diving into 
                        <AnimatedGradientText className="">
                            <span
                                className={cn(
                                    `inline animate-gradient font-black bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                )}
                            >
                                Artificial Intelligence
                            </span>
                        </AnimatedGradientText>
                        <AnimatedGradientText className="">
                            <span
                                className={cn(
                                    `inline animate-gradient font-black bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                )}
                            >
                                Web 3
                            </span>
                        </AnimatedGradientText> fields more deeply.

                    </div>
                    <div>
                        Let’s connect if you're seeking a results-driven developer.
                    </div>
                    <Button size="lg" className="text-md rounded-full mx-1 mt-4">
                        <span className="text-xl -mt-1">👉</span>
                        Explore my work
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero;