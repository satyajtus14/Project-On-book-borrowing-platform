"use client";


import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { toast } from 'react-toastify';


export default function RegisterPage() {
  
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();

     const router = useRouter();

  const handleSignUpFn = async (data) => {
   const { name, imageURL, email, password } = data;
    console.log(data);
    
     const { data: res, error } = await authClient.signUp.email(
          {
            name: name, // required
            image: imageURL,
            email: email, // required
            password: password, // required
          },
          {
            /* Call back function for form after clicking "submit" button */
            onSuccess: () => {
              router.push("/");
            },
          },
        );
        console.log(res, error);
        if (error) {
          toast.error(error.message);
        }
    
        if (res) {
          toast.success("Sign up Successful");
        }

  }
  console.log(errors, "Errors");
  console.log(watch ("email"));
  
  const handleGoogleLogin = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
    });
  console.log(data,"Google Login");
    }


  return (
    <div className="card bg-base-100 shadow-lg border max-w-md mx-auto mt-8 p-6">
      <h1 className="text-center text-2xl font-bold mb-6">User Registration</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSignUpFn)}>
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name field is required" })}
            className="input input-bordered w-full"
          />
           {errors.name && (
              <p className="text-red-500 font-semibold">
                {errors.name.message}
              </p>
            )}
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            {...register("imageURL", { required: "Image URL field is required" })}
            className="input input-bordered w-full"
            
          />
          {errors.imageURL && (
              <p className="text-red-500 font-semibold">
                {errors.imageURL.message}
              </p>
            )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            {...register("email", { required: "Email field is required" })}
            className="input input-bordered w-full"
          />
          {errors.email && (
              <p className="text-red-500 font-semibold">
                {errors.email.message}
              </p>
            )}
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
          
            minLength={8}
            placeholder="Enter your password"
            {...register("password", {
                required: "Password field is required",
              })}
            className="input input-bordered w-full"
          />
            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors.password.message}
              </p>
            )}

          <label className="label ">
            <span className="label-text-alt text-sm text-blue-500 mt-2">
              Must be at least 8 characters with 1 uppercase and 1 number
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button type="submit" className="btn btn-primary flex-1">
            <Check />
            Register
          </button>

          <button type="reset" className="btn btn-outline flex-1">
            Reset
          </button>
        </div>
       {/* Google Login section  */}
        <div className="mx-auto">
            <p className="text-center text-black font-bold">OR</p> <br />
            <button className='btn border-blue-500 text-blue-500'onClick={handleGoogleLogin}><FaGoogle /> Continue with Google</button>
        </div>
      </form>
    </div>
  );
} 

