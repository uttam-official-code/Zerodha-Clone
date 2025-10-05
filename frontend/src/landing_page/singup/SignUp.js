import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/signup", data);
      console.log(res.data.message);
      const { success, message } = res.data;

      if (success) {
        toast.success(message);
      }

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("User already exists, please Login!");
      } else {
        toast.error("Signup Failed. Try again later!");
      }
      console.error("Signup Failed:", err.response?.data || err.message);
    }
  };

  return (
    <div class="container  p-4 d-flex align-items-center h-50 w-50 flex-column ">
      <h2 style={{ color: "black" }}>Signup</h2>
      <form
        class="border border-primary w-50 p-3 rounded-3 text-white"
        style={{
          backgroundImage: "linear-gradient(135deg, #01187c, #0a3d91, #4a90e2)",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter name..."
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p class="text-danger">{errors.name.message}</p>}
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput2" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="email@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p class="text-danger">{errors.email.message}</p>}
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput3" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter password..."
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p class="text-danger">{errors.password.message}</p>
          )}
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
