import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Login from './Login';
function Contact() {
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

              <h3 className="font-bold text-3xl ">Contact Us</h3>

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
                <span>Message</span>
                <input
                  type="text"
                  placeholder="Enter your message"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Submit and Login */}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-700 duration-200"
                >
                  Submit
                </button>

                
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
  )
}

export default Contact
