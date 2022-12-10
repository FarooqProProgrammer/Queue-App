import React, { useEffect } from 'react'
import app from '../config/app'
import { collection, query, getDocs ,getFirestore} from "firebase/firestore";
import { useState } from 'react';
import { Button, Space } from 'antd';
import { useNavigate,Link} from "react-router-dom";

function ViewAll() {

    const db = getFirestore(app)

    // =============== Use State =====================================
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        const q = query(collection(db, "Queues"));
        const list = [...data]
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log({id:doc.id,...doc.data()});

       
        list.push({id:doc.id,...doc.data()})
        setData(list)
       
        });
    }


    const navigate = useNavigate();


  return (
    <div className='w-full h-[500px] border-2 border-black mt-[100px]'>
            <p className='text-3xl font-black text-center'>View All Queues</p>

            <div className="queue w-full h-[465px] border-2 border-black flex flex-col justify-center items-center">
                
                { data.map((item)=>{
                    return (
                    <div className='w-[80%] h-[70px] border-2 border-black flex  justify-around items-center'>
                        <p className='text-2xl font-black'>{item.Category}</p>
                        <p className='text-2xl font-black'>{item.Title}</p>
                        <Space wrap>
                            <Button type="primary" className='bg-[#34495e] w-[100px] h-[50px] '>Delete</Button>
                            <Link  to={'/view/'+item.id} type="primary" className='btn btn-primary bg-[#34495e] w-[100px] h-[50px]'>View</Link>
                            
                        </Space>
                    </div>

                    )
                })  }
            </div>
    </div>
  )
}

export default ViewAll