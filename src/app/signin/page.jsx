"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { toast } from 'react-toastify';


export default function SignInPage() {
 
    
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();

     const router = useRouter();

  const handleSignInFn = async (data) => {
   const { name, imageURL, email, password } = data;
    console.log(data);
    
     const { data: res, error } = await authClient.signIn.email(
          {
    
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/"
          },
        );
        console.log(res, error);
        if (error) {
          toast.error(error.message);
        }
    
        if (res) {
          toast.success("Sign In Successful");
        }

  }
  console.log(errors, "Errors");
//   console.log(watch ("email"));

  const handleGoogleLogin = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
    });
  console.log(data,"Google Login");
    }

  return (
    <div className="card bg-base-100 shadow-lg border max-w-md mx-auto mt-8 p-6">
      <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSignInFn)}>


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
            Submit
          </button>

          <button type="reset" className="btn btn-outline flex-1">
            Reset
          </button>
        </div>
     {/* Google Login Section */}
             <div className="mx-auto">
            <p className="text-center text-black font-bold">OR</p> <br />
            <button className='btn border-blue-500 text-blue-500'onClick={handleGoogleLogin}><FaGoogle /> Continue with Google</button>
        </div>
      </form>
    </div>
  );
} 

