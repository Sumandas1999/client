import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { FormFilled, Loader } from "../components";
import { getRandomPrompts } from "../utils";

function CreatePost() {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage =()=>{
setForms ({...forms, [e.target.name] : e.target.value})
  }

  const handleSubmit = () => {

  }
  const handleChange = (e) => {} 

  const handleSurpriseMe = ()=> {
   const randomPrompts = getRandomPrompts(forms.prompt)
   setForms ({ ...forms,  prompt : randomPrompts})
  }

    
  



  return (
    
      <section className=" max-w-7xl mx-auto ">
      <div>
        <h1 className=" text-5xl font-serif">Create</h1>
        <p>LETS CREATE AI GENERATED IMAGES </p>
      </div>

      <form className=" mt-16 max-w-3xl " onSubmit={handleSubmit}>
      <div>
      <FormFilled
      lableName='your name'
      type ='text'
      name = 'name'
      value = {forms.name}
      placeHolder = 'suman das'
      handleChange = {handleChange}
      
      />
      <FormFilled 
      lableName='prompt'
      type ='text'
      name = 'prompt'
      placeHolder = 'A 3D render of a rainbow colored hot air balloon flying above a reflective lake'
      value = {forms.prompt}
      handleChange = {handleChange}
      isSurpriseMe 
      handleSurpriseMe = {handleSurpriseMe}
      
      />
      <div className=" relative  w-64 h-64 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 ">
        {forms.photo ? (
          <img
          src={forms.photo}
          alt={forms.prompt}
          className=" h-full w-full object-contain"
          />

        ):(<img
        src={preview}
        alt='preview'
        className=" h-9/12 w-9/12 object-contain opacity-40"
        />) }

       {generatingImg && (
       <div className=" absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
        <Loader/>
         </div>

       )}

      </div>
      <div className=" mt-5 flex gap-5 ">
      <button 
      type="button"
      onClick={generateImage} 
      className=" text-white px-52 py-2 bg-green-800 rounded-md"
      > 
      {generatingImg ? "Generating....." : "Generate"}

      </button>
      </div>
       
      </div>
      </form>

      </section>
  
  );
}

export default CreatePost;
