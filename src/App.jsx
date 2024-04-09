import React, {useState, useRef, useEffect } from 'react'
import './App.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"





const schema = yup
  .object({
    filiere: yup.string().required("Veuillez remplir convenablement ce champ"),
    objet: yup.string().required("Veuillez remplir convenablement ce champ"),
    age: yup.number().positive().integer().required(),
    proposition: yup.string().required("Veuillez remplir convenablement ce champ")
                              .min(25, "Votre proposition doit contenir au moins 25 mots"),
  })
  .required()


  

export default function App() {





  const main = useRef(null)
  const form = useRef(null)

  const sous_main = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)


  
  


  return (
  <>

  <div className="container">
  <main ref={main}>
    {
      
    }
  <header>
    <div className="header_logo"><img src="/images/logo.png" alt="Agora's logo" /></div>
    <div className="header_title">AGORATECH ACADEMY</div>
  </header>
<form action="" ref={form} onSubmit={handleSubmit(onSubmit)}>
    <div className="filiere">
      {/*
      <input type="text" id='filiere' placeholder='Write your sector here'/> */}
       <label htmlFor="filiere">Filiere/Sector</label> <br />
      <select name="filiere" id="filiere" {...register("filiere")}>
        <option value="">Write your sector here</option>
        <option value="Developpement">Developpement web fullstack & Mobile</option>
        <option value="Reseaux">Reseaux, Administration systeme, securite et Cloud computing</option>
        <option value="Marketing">Marketing digital & E-commerce</option>
        <option value="Infographie">Infographie 2d/3d & motion design</option>

      </select>
      

    </div>
    <p className='text-rouge'>{errors.filiere?.message}</p>

    <div className="objet">
      <label htmlFor="objet">Titre/Title</label> <br />
      <input type="text" id='objet' placeholder='Write your title here' {...register("objet")}/>
    </div>
    <p className='text-rouge'>{errors.objet?.message}</p>


    <div className="proposition">
      <label htmlFor="proposition">Votre proposition/Your proposition</label> <br />
      <textarea name="proposition" id="proposition" cols="30" rows="10" placeholder='Write your text here' {...register("proposition")}></textarea>
    </div>
    <p className='text-rouge'>{errors.proposition?.message}  </p>



<div className="buttons">

<button className='clear' onClick={()=>{form.current.reset()}}>Clear</button>

<button type='submit' className='submit'>SUBMIT</button>

</div>


</form>



<footer>

  <p>Copyright Agoratech academy 2024.</p>
</footer>




  </main>
  <div className="try"></div>
  </div>
  </>
  )
}
