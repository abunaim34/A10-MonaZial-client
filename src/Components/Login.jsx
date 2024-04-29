import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { FaGoogle, FaGithub, } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { Bounce, Roll } from "react-awesome-reveal";



const Login = () => {
    const { logInUser, googleLogin, githubLogin } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleLogin = (data) => {
        const { email, password } = data || {}

        reset()


        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters or longer')
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should have at least one Uppercase characters')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Your password should have at least one Lowercase characters')
        }

        logInUser(email, password)
            .then(result => {
                toast.success('Login successfully', result.user)
                navigate("/")
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success('Login successfully', result.user)
                navigate("/")
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                toast.success('Login successfully', result.user)
                navigate("/")
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="flex flex-col mt-20 lg:flex-row text-center items-center gap-10 justify-between lg:mx-16">
            {/* <Helmet>
                <title>Residential House | Login page</title>
            </Helmet> */}
            <div className="lg:text-start md:text-center text-black">
                <h1 className="mb-5 md:text-4xl text-3xl font-bold">Welcome to the <br /> <span className='bg-gradient-to-r from-[#9b5273] via-red-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient'>MonaZila</span> Login Page..!</h1>
                <p className=" md:w-[400px] lg:w-full">Welcome to MonaZila, where the eyes are calm and every painting is an unforgettable experience. Join our exclusive community today by SignIn for your personal account. By becoming a member, you will gain access to special offers, personalized recommendations, and seamless booking experience.</p>
            </div>

            <div className="card lg:mt-5 shrink-0 w-full md:w-[450px] max-w-full shadow-[60px] bg-[#E1D4DA]">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered bg-[#675E62]" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered bg-[#675E62]" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-2 cursor-pointer">
                                {
                                    showPassword ? <FaEyeSlash className="text-white" /> : <FaEye className="text-white" />
                                }
                            </span>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mb-0 pb-0">
                            <Bounce duration={2000}><button data-tooltip-id="my-tooltip" data-tooltip-content="Login Now" className="btn font-bold border-none w-full text-white bg-[#9b5273]">Login</button></Bounce>
                            <div className="divider mt-6"> OR</div>
                        </div>
                    </form>
                    <div className=" mt-0 pt-0 flex flex-col md:flex-row justify-around items-center space-y-3 md:space-y-0">
                        <Roll><button data-tooltip-id="my-tooltip" data-tooltip-content="If you want to Login with Google. Please click me." onClick={handleGoogleLogin} className="btn btn-outline ">
                            <FaGoogle />
                            Login with Google
                        </button></Roll>
                        <Roll><button data-tooltip-id="my-tooltip" data-tooltip-content="If you want to Login with Github. Please click me." onClick={handleGithubLogin} className="btn btn-outline">
                            <FaGithub />
                            Login with Github
                        </button></Roll>
                    </div>
                    <div className="text-center mt-4">
                        <p>Dont have an account? <Link to='/register' className="text-blue-500 font-semibold">Sign UP</Link></p>
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Login;