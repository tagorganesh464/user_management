import React, { useEffect, useState } from 'react'
import './User.css'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function User() {
  let [error,setError]=useState("")
  const getUsers=()=>{
    axios.get("http://localhost:4000/users")
    .then(response=>{
      if(response.status===200){
setUsers(response.data)
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
  }
  let {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm();
  let [show, setShow] = useState(false);
  let [userToEdit,setUserToEdit]=useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let [users,setUsers]=useState([])
  const editUser = (userObj) =>{
    handleShow()
    setUserToEdit(userObj)
    setValue("username",userObj.username)
    setValue("email",userObj.email)
    setValue("dob",userObj.dob)
    setValue("image",userObj.image)
  }
  const saveModifiedUser = () =>{

    handleClose()
    let modifiedUser=getValues() 
    modifiedUser.id=userToEdit.id
    console.log(modifiedUser)
    axios.put(`http://localhost:4000/users/${modifiedUser.id}`,modifiedUser)
    .then(response=>{
      if(response.status===200){
        getUsers()
      }})
    .catch(err=>{if(err.response){
      setError(err.message)
    }
    else if(err.response){
      setError(err.message)
    }
    else{
      setError(err.message)
    }})
    
  }
  const deleteUser = (userObj) =>{

  
    
    // console.log(modifiedUser)
    console.log(userObj)
    axios.delete(`http://localhost:4000/users/${userObj.id}`,userObj)
    .then(response=>{
      if(response.status===200){
        getUsers()
      }})
    .catch(err=>{if(err.response){
      setError(err.message)
    }
    else if(err.response){
      setError(err.message)
    }
    else{
      setError(err.message)
    }})
    
  }











  useEffect(()=>{
   getUsers()
  },[])
  return (
    <div className='users-data'><p className="display-3 text-center">Users</p>
    {/* <p className="display-2 text-center">{users.username}</p>
    {
      console.log("Inside Reutrn")
    }
    {
      // console.log("Inside return")
      console.log(users)
    } */}
    
    {
        error.length!==0 && <p className="display-3 text-danger text-center">{error}</p>
      }
    
    <div className="row reow-cols-1 row-cols-sm-2 row-cols-md-3">
     
      
      {
        users.map(userObj=><div className="col text-center mx-auto" key={userObj.id}>

<div className="card">
<img src={userObj.image} alt="User-Image" className='mx-auto p-3 profile-image' />        
<div className="card-body">
<p className="display-3 name">{userObj.username}</p>
     <p className="lead fs-4">{userObj.email}</p>
     <p className="lead dob">{userObj.dob}</p>
     <button className="btn btn-primary float-start" onClick={ ()=>editUser(userObj)}> Edit </button>
     <button className="btn btn-warning float-end" onClick={ ()=>deleteUser(userObj)}>Delete</button>
</div>

</div>
        </div>
        )
      }
    </div>
  

      <Modal show={show} onHide={handleClose} backdrop="static" className='Modal'>
        <Modal.Header closeButton>
          <Modal.Title>Edit-Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className='edit-form'>
        <form action="" className="mx-auto" onSubmit={handleSubmit(saveModifiedUser)}>
      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          {...register("username")}
        />
         
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          {...register("email")}
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor="dob">Date Of Birth</label>
        <input
          type="date"
          id="dob"
          className="form-control"
          {...register("dob")}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="image">User-Image</label>
        <input
          type="text"
          id="image"
          className="form-control"
          {...register("image")}
          disabled
        />
        
      </div>
     
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick ={saveModifiedUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    </div>
  )
}

export default User