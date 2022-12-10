import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import { doc, updateDoc, getFirestore, onSnapshot ,collection,query,addDoc} from "firebase/firestore";
import app from '../config/app';



function View() {


    const [ticket,setTicket] = useState();
    const [ticketHandle,setticketHandle] = useState(true);
    const db = getFirestore(app);

   useEffect(()=>{
    ticketing()

   },[])
    function ticketing(){
      const q = query(collection(db, "/Queues/gJLKMhujVVQzmUEFBPEY/Tickets/"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
            setTicket(doc.data().Number);
        });
        // console.log(cities);
        
      });
    }


    useEffect(()=>{

      GenerateTicket()
    },[ticketHandle])

    const addInfo = async()=>{
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "/Queues/gJLKMhujVVQzmUEFBPEY/sdfvsdf"), {
        Your_Ticket: "Tokyo"
      });
      console.log("Document written with ID: ", docRef.id);

    }
    const GenerateTicket = async()=>{
     
      setTicket(ticket + 1)
      
      const washingtonRef = doc(db, "/Queues/gJLKMhujVVQzmUEFBPEY/Tickets/Tickets");

      // Set the "capital" field of the city 'DC'

      await updateDoc(washingtonRef, {
        Number: ticket
      });
      addInfo()
      
     
    } 

    const { id } = useParams();
    console.log(id);


  return (
    <div className="w-full h-screen border-2 border-black">
        <Header/>

        <div className="tickest w-full h-[500px] border-2 border-black flex justify-around items-center">


                <div className="tickets w-[200px] h-[300px] border-2 border-black flex justify-center items-center">
                    <p className="text-[100px]">{ticket}</p>
                </div>

                <div className="generateTickets w-[200px] h-[60px] ">
                <button onClick={ ()=> ticketHandle && setticketHandle(false)} type="button" class="w-full h-full  bg-[#27ae60] btn btn-success">Generate Tickets</button>
                
                </div>

        </div>


    </div>
  )
}

export default View