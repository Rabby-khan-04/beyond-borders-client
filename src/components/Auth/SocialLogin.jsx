import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Toast from "../../utils/Toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          Toast.fire({ icon: "success", title: "User Logged In Successfully" });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Toast.fire({ icon: "error", title: "Something went wrong" });
        console.error(err);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        if (result.user) {
          Toast.fire({ icon: "success", title: "User Logged In Successfully" });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Toast.fire({ icon: "error", title: "Something went wrong" });
        console.error(err);
      });
  };

  return (
    <div className="flex items-center justify-center gap-5">
      <button
        onClick={handleGoogleLogin}
        className="inline-block py-4 px-12 bg-secondary/40 rounded-2xl duration-300 transition-all hover:bg-secondary/60"
      >
        <FcGoogle className="text-5xl" />
      </button>
      <button
        onClick={handleGithubLogin}
        className="inline-block py-4 px-12 bg-secondary/40 rounded-2xl duration-300 transition-all hover:bg-secondary/60"
      >
        <FaGithub className="text-5xl" />
      </button>
      <button className="inline-block py-4 px-12 bg-secondary/40 rounded-2xl duration-300 transition-all hover:bg-secondary/60">
        <FaApple className="text-5xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
