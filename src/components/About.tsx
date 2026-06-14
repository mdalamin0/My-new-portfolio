import { FaLaptopCode, FaCode, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="container py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
        {/* About Content - Mobile First */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-6xl font-bold">About me</h2>

          <p className="mt-8 text-gray-300 leading-8 text-base md:text-lg">
            I am a passionate Full Stack Developer focused on creating modern,
            responsive and scalable web applications using Next.js, Node.js,
            Express and PostgreSQL. I love learning new technologies and turning
            ideas into real products.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-12">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold">
                5<span className="text-orange">+</span>
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-bold">
                100<span className="text-orange">%</span>
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Dedication
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-bold">
                1<span className="text-orange">+</span>
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Years Learning
              </p>
            </div>
          </div>
        </div>

        {/* Services Timeline */}
        <div className="order-2 lg:order-1 relative">
          {/* Vertical Line */}
          <div className="absolute left-[6px] top-0 h-full w-[2px] bg-primary shadow-[0_0_10px_#FF715A]" />

          <div className="space-y-16">
            {/* Website Development */}
            <div className="relative flex items-center gap-5">
              <span className="absolute -left-[5px] w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#FF715A] z-10" />

              <FaLaptopCode className="ml-10 text-4xl md:text-5xl text-white" />

              <h3 className="text-xl md:text-2xl font-semibold">
                Website Development
              </h3>
            </div>

            {/* Frontend Development */}
            <div className="relative flex items-center gap-5">
              <span className="absolute -left-[5px] w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#FF715A] z-10" />

              <FaCode className="ml-10 text-4xl md:text-5xl text-white" />

              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Development
              </h3>
            </div>

            {/* Backend Development */}
            <div className="relative flex items-center gap-5">
              <span className="absolute -left-[5px] w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#FF715A] z-10" />

              <FaServer className="ml-10 text-4xl md:text-5xl text-white" />

              <h3 className="text-xl md:text-2xl font-semibold">
                Backend Development
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
