import React, { useState } from 'react'
import './AddUser.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const navigate=useNavigate()
  let [error,setError]=useState("")
  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let addNewUser = (userObj) => {
    // console.log(userObj);
    axios.post("http://localhost:4000/users",userObj)
    .then(response=>{
      if(response.status===201){
        navigate("/users")
      }
    })
    .catch(err=>{
      if(err.response){
        setError(err.message)
      }
      else if(err.response){
        setError(err.message)
      }
      else{
        setError(err.message)
      }
    })
  };
  const [imageUrl, setImageUrl] = useState('');

  function handleImageUrlChange(event) {
    setImageUrl(event.target.value);
  }


  return (
    <div className="w-50 mx-auto add-user">
      <p className="display-3 text-center">Add New User</p>
      {
        error.length!==0 && <p className="display-3 text-danger text-center">{error}</p>
      }
    <form action="" className="mx-auto" onSubmit={handleSubmit(addNewUser)}>
      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          {...register("username",{required: true})}
        />
         {errors.username?.type==="required" && (
          <p className="text-danger fw-bold fs-5">Username is Required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          {...register("email",{required: true})}
        />
        {errors.email?.type==="required" && (
          <p className="text-danger fw-bold fs-5">Email is Required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="dob">Date Of Birth</label>
        <input
          type="date"
          id="dob"
          className="form-control"
          {...register("dob",{required: true})}
        />
         {errors.dob?.type==="required" && (
          <p className="text-danger fw-bold fs-5">DOB is Required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="image">User-Image</label>
        <input
          type="url"
          id="image"
          className="form-control"
          {...register("image",{required: true})}
        />
         {errors.image?.type==="required" && (
          <p className="text-danger fw-bold fs-5">Image is Required</p>
        )}
      </div>
      <button type="submit" className="btn btn-success add-user-btn">
            Create-New-User
          </button>
      </form>
      </div>
  )
}

export default AddUser