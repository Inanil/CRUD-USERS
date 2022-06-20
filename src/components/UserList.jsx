import React from 'react'
import axios from 'axios'


const UserList = ({user, URL, getAllUsers,setObjectUpdate,setIsShowForm,reset}) => {

    //Eliminando usuario
    const deleteUser = id => {
        axios.delete(`${URL}${id}/`)
          .then(res => {
            console.log(res.data)
            getAllUsers()
          })
          .catch(err => console.log(err))
      }
      //Datos predeterminados para la actualización
      const updateUser = () => {
        setIsShowForm(true)
    
        const obj = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            birthday: user.birthday,
            password:user.password

           }
        
        reset(obj)
        setObjectUpdate(user)
      }
    

  return (
    <article className='card-user'>
      
       <h2 className='card-user_name'> {`${user.first_name} ${user.last_name}`}</h2>
       <div className='container-card_data'>
        <ul className='card-user_data'>
            <li className='card-user_email'><span className='card-user_span'> Email: </span>{user.email}</li>
            <li className='card-user_birth'><span className='card-user_span'>Birthday: </span>{user.birthday}</li>
        </ul>
        <div className='container-btn'>
        <button className='card-user_btn' onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button>
        <button className='card-user_btn' onClick={()=>updateUser(user.id)}> <i className="fa-solid fa-pen-clip"></i></button>
        </div>
        </div>
    </article>
  )
}

export default UserList