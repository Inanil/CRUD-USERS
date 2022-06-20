import React from 'react'


const FormUsers = ({createUser,updateUserById,objectUpdate,handleSubmit,register,reset}) => {
  
    const defaultValues= {
        first_name:"",
        last_name:"",
        email:"",
        birthday: "",
        password:""
      }

      //Despliegue de datos de acuerdo a la acción(actualizar o crear)
    
      const submit = data => {
        
        if(objectUpdate !== undefined){

          updateUserById(objectUpdate.id, data)
          
          reset(defaultValues)
        } else {
          createUser(data)
        }
        reset(defaultValues)
      }
    


  return (
    <form   className='form-users'onSubmit={handleSubmit(submit)}>
    <div>
      <label className='form-first' htmlFor="first_name">First Name: </label>
      <input className='form-first_input' type="text" id='name' {...register('first_name')} />
    </div>
    <div>
      <label  className='form-first' htmlFor="last_name">Last Name: </label>
      <input  className='form-first_input'type="text" id='name2' {...register('last_name')} />
    </div>
    
    <div>
      <label className='form-first' htmlFor="email">Email: </label>
      <input className='form-first_input' type="text" id='email' {...register('email')} />
    </div>
    <div>
      <label  className='form-first' htmlFor="birthday">Birthday: </label>
      <input  className='form-first_input form-text_birt'type="date" id='birthday' {...register('birthday')} />
    </div>
    <div>
      <label  className='form-first'htmlFor="password">PassWord: </label>
      <input  className='form-first_input'type="password" id='password' {...register('password')} />
    </div>
    <button className='form-btn_submit'>Submit</button>
  </form>

  )
}

export default FormUsers