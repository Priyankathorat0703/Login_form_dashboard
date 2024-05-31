import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <>
            <p className="title">Login Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>

               <input type="email" placeholder="Enter email " 
                {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                    <input type="password" placeholder="Enter Passsword" 
                {...register("password",{required: true})} />
                {errors.password && <span style={{ color: "red" }}>
                    *Password* is mandatory </span>}  
                    <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
              
            </form>
            
        </>
    );
}
export default Login;