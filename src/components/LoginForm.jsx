import React from 'react';
import Image from '../assest/chef'; // Make sure the path to the image is correct
import { LiaTimesSolid } from "react-icons/lia";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginForm = (props) => {
  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Email: yup.string().email("Invalid Email").required("Email is required"),
    Password: yup.string().min(4, "password is less than 4").max(15, "passowrd is too long").required("Please input password")
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    props.setUserName(data.Name); // Update userName state with the submitted Name
    props.setEmail(data.Email)
    props.setForm(false); // Close the form after successful submission
    props.setMessage(true)
    reset(); // Reset form fields
  };

  return (
    props.form ? (
      <div className="">
        {/* Overlay */}
        <div className="fixed top-0 left-0 flex items-center justify-center z-10 w-full h-[100vh] bg-black opacity-50" />

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/55 text-white border-white border-2 flex flex-col justify-center lg:w-[300px] lg:h-[550px] gap-3 p-5 rounded-lg shadow-lg z-50"
        >
          <div className='text-white absolute top-2 left-2 cursor-pointer' onClick={() => props.setForm(false)}>
            <LiaTimesSolid size={30} />
          </div>

          {/* Image */}
          <img src={Image} alt="Chef" className="mx-auto" />

          {/* Inputs */}
          <input type="text" placeholder="Name" className="border-2 p-2 rounded-md bg-transparent border-white" {...register("Name")}
          />
          <p className='text-red-600'>{errors.Name?.message}</p>
          <input type="text" placeholder="Email" className="border-2 p-2 rounded-md bg-transparent border-white" {...register("Email")} />
          <p className='text-red-600'>{errors.Email?.message}</p>
          <input type="password" placeholder="Password" className="border-2 p-2 rounded-md bg-transparent border-white" {...register("Password")} />
          <p className='text-red-600'>{errors.Password?.message}</p>
          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    ) : null
  );
};

export default LoginForm;
