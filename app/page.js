// import Image from "next/image";
"use client"


import axios from "axios";
import { useState } from "react";
export default function Home() {

const [first, setfirst] = useState("")
const handle= async()=>{

  const responce = await axios.post('/api/lol',{name:"Aryan"});
// setfirst(responce.data.message)

setfirst(responce.data.message);
}
  return (
   <>
   <div>  {first } </div>
   <button onClick={handle}>adsfadsklfjdskl;j lorem </button>
   </>
  );
}
