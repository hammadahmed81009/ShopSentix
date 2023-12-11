import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import image from '../Resources/Register-Background.png';
import { Link as RouterLink } from 'react-router-dom';

const RegisterPage = () => {
  const history=useNavigate();

  const [firstname,setFirstName]=useState('')
  const [surname,setSurname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/signup",{
              firstname,surname,email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/home",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }

  return (
    <div
      className="h-screen py-20"
      style={{ backgroundImage: 'linear-gradient(115deg, #3498db, #8e44ad)' }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{' '}
                <a href="#" className="text-blue-600 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 font-bold">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute
            </p>
            <form action="POST">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  onChange={(e) => { setFirstName(e.target.value) }}
                  className="border rounded-md border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  onChange={(e) => { setSurname(e.target.value) }}
                  className="border rounded-md border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  onChange={(e) => { setEmail(e.target.value) }}
                  placeholder="Email"
                  className="border rounded-md border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder="Password"
                  className="border rounded-md border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded-md border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the{' '}
                  <a href="#" className="text-blue-600 font-semibold">
                    Terms of Use
                  </a>{' '}
                  &amp;{' '}
                  <a href="#" className="text-blue-600 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button onClick={ submit } className="w-full bg-blue-600 py-3 text-center text-white">
                  Register Now
                </button>
                <span>
                  Already have an Account?{' '}
                  <RouterLink to="/login" className="text-blue-600 font-semibold">
                    Login
                  </RouterLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
