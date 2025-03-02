import SalaryChart from "@/assets/images/salary.png";

const QUESTIONS = [
    "What skills do you have? A fulent speaker of English? A master of Python? A wizard of React?",
    "Why should location determine how much your skills are worth?",
    "Have you ever tried entering the highest-paying and fast markets? What stopped you?",
    "You have the skills. You have the experience. So why aren't you getting paid what you deserve?",
    "What barriers are prventing global talent from accessing high-paying opportunities?",
    "How can we change a system that undervalues skilled professinals besed on geography?",
    "Isn't it time for a world where talent-not location-determines your worth?",
    "Do you want to learn more? Join us in our mission to unlock the true worth of skills."
]

const Salary = () => {
    return (
        <div className="w-full bg-white py-20">
            <h1 className="text-black text-3xl font-bold text-center">
                Salary Overview By Location
                <br />
                <span className="mt-1 text-xl text-black/70">
                    {`(Software Developer)`}
                </span>
            </h1>
            <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
                <div className="w-full flex justify-center">
                    <img src={SalaryChart} className="h-[500px] object-contain" />
                </div>
                <div className="w-full flex flex-col gap-3">
                    {
                        QUESTIONS.map((question, index) => {
                            return (
                                <div className="border px-4 py-3 rounded-lg text-sm bg-[#622091] text-white shadow-md hover:transform hover:scale-105 transition-all duration-300" key={index}>
                                    {question}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Salary;