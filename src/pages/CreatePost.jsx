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

  const generateImage = async ()=>{
     if (forms.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch ('http://localhost:8080/api/v1/reko',{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({prompt: forms.prompt})
        })

        const data = await response.json();
        setForms ({ ...forms,photo:`data.image/jepeg; base64, $ {data.photo}`})
      } catch (error) {
        alert(error); 
        
      } finally{
        setGeneratingImg(false)
      }
     } else {
      alert('promt is emty bro ')
     }

  }

  const handleSubmit = () => {

  }
  const handleChange = (e) => {
    setForms ({...forms, [e.target.name] : e.target.value})
  } 

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

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
     
      </div>
    
 

      </div>
      </form>

      </section>
  
  );
}

export default CreatePost;
