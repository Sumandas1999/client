import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { FormFilled, Loader } from '../components';
import { getRandomPrompts } from '../utils';

function CreatePost() {
  const navigate = useNavigate();
  const [forms, setForms] = useState(
    {
      name : "",
      prompt : "",
      photo : "",
    }
  );
  const [generatingImg, setGeneratingImg] =useState (false);
  const [loading  , setLoading] =useState (false);
  return (
    <div>
      <section className=' max-w-7xl mx-auto '>
        <h1>hii therw</h1>
      </section>
  
    </div>
  )
}

export default CreatePost;