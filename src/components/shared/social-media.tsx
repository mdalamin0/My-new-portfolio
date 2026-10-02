import { FaGithub, FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="lg:flex text-center items-center gap-3 xl:gap-4 ">
      <h4 className="font-medium mb-2 lg:mb-0">Follow Me on Social Media:</h4>

      <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.facebook.com/md.al.amin.626694"
          target="_blank"
          className="social-btn"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/in/md-al-amin-60aa32219/"
          target="_blank"
          className="social-btn"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/mdalamin0"
          target="_blank"
          className="social-btn"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
