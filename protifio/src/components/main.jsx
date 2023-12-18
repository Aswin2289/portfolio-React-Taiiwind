import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const main = () => {
  return (
    <>
      <div>
        <div className="w-full h-screen top-0 left-0 text-black bg-white ">
          <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            {/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h1>React Animate On Scroll</h1>
              <h2>Using:</h2>
            </ScrollAnimation> */}
       
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
              I&apos;m Aswin Abraham
            </h1>
            <h2>
              <span className="text-3xl flex flex-row">
                Full Stack Developer with Skills in&nbsp;
              </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "JAVA-Spring boot",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "PYTHON-Django",
                  1000,
                  "Angular",
                  1000,
                  "React",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "red",
                }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex space-x-4">
              <FaTwitter size={20} className="" />
              <FaFacebook size={20} className="" />
              <FaInstagram size={20} className="" />
              <FaLinkedin size={20} className="" />
            </div>

            {/* <ScrollAnimation animateIn="fadeInUp">
              <p>Hello , I'm</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation> */}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default main;
 