import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="border-[2px] shadow-md p-5 rounded-md relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Submit and Login */}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>

                <p className="text-base">
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Login />
        </div>
      </dialog>
    </>
  );
}

export default Signup;
