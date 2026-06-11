import { useState } from "react"
function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  //send the credential to backened to endpoint auth/login on submitting

   let sendetails= async (event)=>{
    event.preventDefault();
    try{
     let token=localStorage.getItem("token")
     let response= await fetch('http://localhost:3500/auth/login',{
       method:'POST',
         headers:{
            "Content-Type": "application/json"
           },
             body:JSON.stringify({username,password})
         })
          let data=await response.json()
          alert(data.msg);
   }
  catch(error){
    console.log(error);
    alert("something went wrong ")
  }}


  return (
    <>
    <form  onSubmit={sendetails}>
     <h2>Login</h2>
     <p>Welcome back!!</p>
     <div>
      <label>Username</label>  
         <input onChange={(e)=>{
            setusername(e.target.value)
        }}  type="text"   placeholder="username"   />
     </div>
     <div>
          <label>Password</label>
          <input onChange={(e)=>{
            setpassword(e.target.value)
        }}  type="text"   placeholder="password"   />
     </div>
       <button type="submit" >login</button>
    
    </form>
    </>
  )
}

export default Login