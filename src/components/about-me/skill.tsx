import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import Icons from "../icons";
import { useState } from "react";

const Skills = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="border-b border-black/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="border-b lg:border-b-0 lg:border-r border-black/50 px-4 pt-4 ">
                    <h3 className="text-center font-bold font-[funny] text-3xl mt-8">
                        <TextAnimate>
                            What skills do you have
                        </TextAnimate>
                    </h3>
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                        <OrbitingCircles iconSize={40}>
                            <Icons.react />
                            <Icons.next />
                            <Icons.angular />
                            <Icons.threejs />
                            <Icons.express />
                            <Icons.nest />
                            <Icons.django />
                            <Icons.flask />
                            <Icons.mysql />
                            <Icons.postgresql />
                            <Icons.mongodb />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                            <Icons.git />
                            <Icons.azure />
                            <Icons.kubernetes />
                            <Icons.docker />
                            <Icons.aws />
                            <Icons.jira />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={40} radius={50} speed={3}>
                            <Icons.blockchain />
                            <Icons.ai />
                        </OrbitingCircles>
                    </div>
                </div>
                <div className="border-b lg:border-b-0 lg:border-r border-black/50 px-4 pt-4 ">
                    <h3 className="text-center font-bold font-[funny] text-3xl mt-8" onClick={() => setVisible(!visible)}>
                        <TextAnimate>
                            How do you handle task
                        </TextAnimate>
                    </h3>
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                        <Terminal>
                            <TypingAnimation>&gt; How do you complete your task</TypingAnimation>

                            <AnimatedSpan delay={1500} className="text-green-500">
                                <span>✔ Clear the runway with task analysis.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={2000} className="text-green-500">
                                <span>✔ Google-fu to find the latest and greatest solutions.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={2500} className="text-green-500">
                                <span>✔ Blueprint the solution with design and structure.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={3000} className="text-green-500">
                                <span>✔ Build fast, break things, then fix faster.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={3500} className="text-green-500">
                                <span>✔ Collaborate to spark those "aha" moments.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={4000} className="text-green-500">
                                <span>✔ Test thoroughly—because bugs are sneaky.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={4500} className="text-green-500">
                                <span>✔ Deploy like a pro and keep an eye on the skies.</span>
                            </AnimatedSpan>

                            <AnimatedSpan delay={5000} className="text-green-500">
                                <span>✔ Reflect, learn, and gear up for the next challenge</span>
                            </AnimatedSpan>

                            <TypingAnimation delay={6500} className="text-muted-foreground">
                                Success! Project completed.
                            </TypingAnimation>

                            <TypingAnimation delay={7000} className="text-muted-foreground">
                                Enjoy the rest!
                            </TypingAnimation>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;