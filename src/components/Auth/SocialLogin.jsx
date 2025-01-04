import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <button className="inline-block py-4 px-12 bg-secondary/40 rounded-2xl duration-300 transition-all hover:bg-secondary/60">
        <FcGoogle className="text-5xl" />
      </button>
      <button className="inline-block py-4 px-12 bg-secondary/40 rounded-2xl duration-300 transition-all hover:bg-secondary/60">
        <FaGithub className="text-5xl" />
      </button>
      <button className="inline-block py-4 px-12 bg-secondary/40 rounded-2xl duration-300 transition-all hover:bg-secondary/60">
        <FaApple className="text-5xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
