import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const main = () => {
  return (
    <>
      <div>
        <div className="w-full h-screen absolute top-0 left-0 text-black bg-white ">
          <h1 className="text-2xl">I&apos;m Aswin Abraham</h1>
          <h2>
            <span className="text-3xl inline-block ">
              Full Stack Developer with Skills in
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
              style={{ fontSize: "2em", display: "inline-block", color: "red" }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <FaTwitter size={20} className="" />
            <FaFacebook size={20} className=""/>
            <FaInstagram size={20} className=""/>
            <FaLinkedin size={20} className=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
