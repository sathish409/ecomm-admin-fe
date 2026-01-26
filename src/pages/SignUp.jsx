import React from 'react'
import { CustomInput } from '../components/layouts/CustomInput'


const initialState =
   {
     fname: "",
    lname: "",
    email: "",
    phone:"",
    password:"",
    confirmPassword:""
}

const SignUp = () => {
    const inputs=[
        {
            name:"fname",
            label:"Name",
            Placeholder:"Sathish",
            type:"text",
            required:true,

        },
            {
            name:"lname",
            label:"Last Name",
            Placeholder:"Boga",
            type:"text",
             required:true,
            
        },
          {
            name:"email",
            label:"Email",
            Placeholder:"Boga@",
            type:"email",
             required:true,
            
        },
          {
            name:"phone",
            label:"Phone Number",
            Placeholder:"0452",
            type:"text",
            
        },
        {
                name:"dd",  
                 label:"Date of birth",          
               type:"text",
            placeholder:"DOB",
        
                  required:true,
           
        },
          {
            name:"password",
            label:"Password",
            Placeholder:"******",
            type:"password",
             required:true,
            
        },
          {
            name:"confirmPassword",
            label:"Confirm Password",
            Placeholder:"******",
            type:"password",
             required:true,
            
        },
    ]
  return (
    <div>
        <form>
 
   {inputs.map((item, i)=>( <CustomInput key={i} {...item} />))}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

     
       
    </div>
  )
}

export default SignUp