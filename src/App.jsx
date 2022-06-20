import { useState, useEffect  } from 'react'
import axios from 'axios'
import './App.css'
import UserList from './components/UserList'
import { useForm } from 'react-hook-form'
import FormUsers from './components/FormUsers'
import Header from './components/Header'
import work from './assets/img/work.png'
import Footer from './components/Footer'




 const URL='https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm()

  //estado para petición 
  const [users, setUsers] = useState()
   //estados para  mostrar y ocultar 
  const [isShowForm, setIsShowForm] = useState(false)
   //estado para pasar el objeto de  componente a  componente 
   const [objectUpdate,setObjectUpdate] = useState()


// Leyendo o accediendo 
   const getAllUsers= ()=>{
    axios.get(URL)
    .then(({data})=>setUsers(data))
    .catch(err=> console.log(err))
   }

    useEffect(() => {
    getAllUsers()
    }, [ ])
    

    //Creando un nuevo usuario
     const createUser = newUser=> {
      axios.post(URL, newUser)
        .then(res => {
          console.log(res.data)
          getAllUsers()
        })
        .catch(err => console.log(err))

    }

  
    //Actualizando datos de un usuario 
    const updateUserById = (id, updateUser) => {

      axios.patch(`${URL}${id}/`, updateUser)
        .then(res => {
          console.log(res.data)
          getAllUsers()
          setObjectUpdate()
          setIsShowForm(false)
        })
        .catch(err => console.log(err))
    }

   //Función para que el formulario se muestre en un inicio 


   const showFormInitial = ()=>{
     const obj={
      first_name:"",
      last_name:"",
      email:"",
      birthday:"",
      password:""
     }

     reset (obj)
     setIsShowForm(!isShowForm)

   }

  return (
    <div > 
 
    <header className= 'header-users'>
      <Header/>
    </header> 

     <main className='container-content' >
     <section className='container-form' >
            
    { 
     isShowForm && 
    <FormUsers 
    createUser={createUser}
    updateUserById={updateUserById}
    objectUpdate={objectUpdate}
    handleSubmit={handleSubmit}
    reset={reset}
    register={register}
    />
    
    } 
     <button className='form-btn_submit btn-create' onClick={showFormInitial}>{isShowForm ? 'Hide Form' :'Create an user'}</button>
       </section>

       <section className='container-cards'>
      {
        users?.map(user=>
        <UserList
        key={user.id}
        user={user} 
        URL={URL} 
        getAllUsers={getAllUsers}  
        setObjectUpdate={setObjectUpdate}   
        setIsShowForm={setIsShowForm}
        reset={reset}
         />
          
          )
      }
      </section>
      </main>

      <Footer/>
  
    </div>
  )
}

export default App
