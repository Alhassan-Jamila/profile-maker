import React from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
import { useState } from 'react'
function App() {
const[allprofiles, setAllprofile]=useState([
  {
    firstname:"Alhassan",
    lastname:"jamila",
    email:"jamilaal865@gmail.com",
    phone:"0203311616"
  }
])

const updateProfiles = (profile)=>{
  let arr =allprofiles;
  arr.push(profile);
  setAllprofile([...arr]);
};


  return (
    <div className='app'>
    <h1>Profile Maker</h1>
     <div>
     <ProfileForm submit={updateProfiles}/>

    <hr/>
    <div className='list'>
    {allprofiles.map((person,index)=>(
      <ProfileCard key={index} card={person}/>
    ))}
    </div>
    </div>
    </div>
  )
}

export default App