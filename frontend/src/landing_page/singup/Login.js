import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/login", data);
      console.log(res.data);
      const { success, message, jwtToken } = res.data;

      localStorage.setItem("token", jwtToken);

      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error("Invalid email or password!");
      } else if (err.response?.status === 409) {
        toast.error("User already exists, please signup!");
      } else {
        toast.error("Something went wrong. Try again later!");
      }

      console.error("Signup Failed:", err.response?.data || err.message);
    }
  };

  return (
    <div class="container  p-4 d-flex align-items-center h-50 w-50 flex-column ">
      <h2 style={{ color: "black" }}>Login</h2>
      <form
        class="border border-primary w-50 p-3 rounded-3 text-white"
        style={{
          backgroundImage: "linear-gradient(135deg, #01187c, #0a3d91, #4a90e2)",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
