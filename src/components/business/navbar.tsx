import { MailIcon } from "lucide-react";

const Navbar = () => {
    return (
        <div className="bg-[#622091] h-20 fixed w-full z-10 shadow-lg">
            <div className="container mx-auto h-full w-full px-4">
                <div className="flex items-center justify-between w-full h-full">
                    <span className="text-2xl font-bold text-white">TalentWorth</span>
                    <div className="text-md font-semibold text-white flex items-center gap-1">
                        <MailIcon className="w-5 h-5 -mb-1" />
                        <span>
                            cupid.jack505@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;