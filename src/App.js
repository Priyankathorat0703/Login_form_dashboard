import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Login from "./Login";


function App() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) =>console.log(data);

    return (
        <>
        
            
            <p className="title">Registration Form</p>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter Name" 
                {...register("username",{required:true})} />
                {errors.username && <span style={{ color: "red" }}>
                    *Name* is mandatory </span>}
                <input type="email" placeholder="Enter email " 
                {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="number" placeholder="Enter Mobile number" 
                {...register("number",{required: true})} />
                {errors.number && <span style={{ color: "red" }}>
                    *Moblie number* is mandatory </span>}
                <input type="password" placeholder="Enter Passsword" 
                {...register("password",{required: true})} />
                {errors.password && <span style={{ color: "red" }}>
                    *Password* is mandatory </span>}    
                <input type="gender" placeholder="Enter Gender" 
                {...register("gender",{required: true})} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
                <input type={"reset"} value="Reset"
                 style={{backgroundColor: "orange", color: "black"} }/>

               
            </form>
            <Login/>
            </>
            
               
           
         
            
        
    );
}
export default App;