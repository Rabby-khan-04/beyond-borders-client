import authBG from "../../assets/image/auth-image.jpg";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/Auth/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Toast from "../../utils/Toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserLogin = (data) => {
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          Toast.fire({ icon: "success", title: "User Logged In Successfully" });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Toast.fire({ icon: "error", title: "Something went wrong" });
        console.error(`AUTH ERROR: ${err}`);
      });
  };

  return (
    <section className="bg-secondary h-screen flex items-center justify-center">
      <div className="container grid grid-cols-2 rounded-3xl overflow-hidden">
        <div
          style={{ backgroundImage: `url(${authBG})` }}
          className="text-center p-12 bg-cover bg-bottom bg-no-repeat"
        >
          <h1 className="text-white font-mansalva font-bold text-7xl mb-3">
            BeyondBorders
          </h1>
          <p className="text-xl text-white font-montserrat">
            Travel is the only purchase that enriches you in ways beyond
            material wealth
          </p>
        </div>
        <div className="bg-background p-12 text-center">
          <h2 className="text-6xl font-palanquin_park font-bold text-secondary mb-2">
            Welcome
          </h2>
          <p className="text-lg text-des_gray font-montserrat mb-10">
            Login wiht Email
          </p>

          <form
            onSubmit={handleSubmit(handleUserLogin)}
            className="text-left space-y-5"
          >
            <div className="w-full space-y-2">
              <label className="input__label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Enter email address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-base font-raleway inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full space-y-2">
              <label className="input__label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 text-base font-raleway inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-6 text-center">
              <button type="submit" className="secondary__btn">
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center  gap-2 my-4">
            <div className="grow h-px border border-dashed border-secondary"></div>
            <p className="text-2xl font-mansalva text-secondary font-semibold">
              OR
            </p>
            <div className="grow h-px border border-dashed border-secondary"></div>
          </div>

          <SocialLogin />

          <div className="mt-5">
            <p className="text-des_gray font-montserrat font-normal">
              <span> Don{"'"}t have account?</span>{" "}
              <Link className="font-semibold hover:text-primary" to="/register">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
