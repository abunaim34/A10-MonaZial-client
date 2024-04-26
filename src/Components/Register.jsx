import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    // const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {email, password, } = data || {}
        console.log(data);

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

        createUser(email, password)
            .then(result => {
                // updateUserProfile(name, photoURL)
                //     .then(() => {
                //         setReload(true)
                //         toast.success('Register successfully', result.user)
                //         navigate('/')
                //     })
                console.log(result.user);
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    useEffect(() => {
        reset()
    }, [reset])

    return (
        <div className=" flex flex-col mt-12 lg:flex-row text-center items-center gap-4 justify-between mx-auto lg:mx-16">
            {/* <Helmet>
                <title>Residential House | Register page</title>
            </Helmet> */}
            <div className="lg:text-start  md:text-center text-black">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Welcome to the <br /> <span className='bg-gradient-to-r from-[#9b5273] via-red-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient'>MonaZila</span> Register <br />Page..!</h1>
                <p className=" md:w-[400px] mx-auto lg:w-full">Welcome to MonaZila, where the eyes are calm and every painting is an unforgettable experience. Join our exclusive community today by signUp for create your personal account. By create a new member..</p>
            </div>
            <div className="card lg:mt-5 shrink-0 w-full md:w-[360px] max-w-full shadow-[60px] bg-[#E1D4DA]">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered bg-[#675E62]" />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered bg-[#675E62]" />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input {...register("photoURL",)} type="text" placeholder="Photo URL" className="input input-bordered bg-[#675E62]" />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered bg-[#675E62]" />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-2 cursor-pointer">
                            {
                                showPassword ? <FaEyeSlash className="text-white" /> : <FaEye className="text-white" />
                            }
                        </span>
                        {errors.password && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn font-bold text-white bg-[#9b5273]">Register</button>
                        <div className="text-center mt-4">
                            <p>Have an account? <Link to='/login' className="text-blue-500 font-semibold">Log In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;