import React from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Header';
function View() {
    const { id } = useParams();
    console.log(id);


  return (
    <div className="w-full h-screen border-2 border-black">
        <Header/>

        <div className="tickest w-full h-[500px] border-2 border-black flex justify-around items-center">


                <div className="tickets w-[200px] h-[300px] border-2 border-black flex justify-center items-center">
                    <p className="text-[100px]">0</p>
                </div>

        </div>


    </div>
  )
}

export default View