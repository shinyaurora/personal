import HeroVideo from "@/assets/video/business.mp4";
import Logo from "@/assets/images/logo.png";

const Hero = () => {
  const handleGoTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full h-[800px] relative mt-20">
      <video autoPlay loop muted controls={false} className="w-full h-full object-cover">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="w-full h-full absolute top-0 bg-black/50">
        <div className="container mx-auto h-full w-full px-4 flex items-center justify-center">
          <div className="text-center text-white flex flex-col items-center justify-center max-w-[600px]">
            <img src={Logo} className="w-24" />
            <h1 className="text-4xl font-bold pt-4">Unlock Your True Worth <br /> with Your Skills</h1>
            <p className="text-lg font-semibold mt-4">
              A platform where talent is recognized, opportunities are fair, and skills define success—not geography or background.
            </p>
            <div className="flex items-center justify-center gap-4 mt-12">
              <button className="bg-[#622091] border-2 text-white w-52 py-2 rounded-md" onClick={() => handleGoTo("about-us")}>How It Works</button>
              <button className="bg-[#622091] border-2 text-white w-36 py-2 rounded-md" onClick={() => handleGoTo("about-you")}>Who I Am</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;