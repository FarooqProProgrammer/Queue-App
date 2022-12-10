import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input ,Button, Space} from 'antd';
import { getFirestore,addDoc,collection } from 'firebase/firestore';
import app from '../config/app'
import { useState } from 'react';

function Hero() {

    // =================== USe States ==================================
    const [Category,setCategory] = useState();
    const [title,setTitle] = useState();



    const db = getFirestore(app);

    const AddQueue =async ()=>{
        const docRef = await addDoc(collection(db, "Queues"), {
            Title: title,
            Category: Category
          });
          console.log("Document written with ID: ", docRef.id);
          console.log("Success");
    }
  return (
    <div className='w-full h-[500px] border-2 border-black grid lg:grid-cols-2 grid-rows-1 mg:grid-cols-1 sm:grid-cols-1 place-items-center '>

        <div className="box w-[300px] h-[300px] border-2 border-black">
            <img className='w-full h-full' src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_712/https://www.wavetec.com/wp-content/uploads/2021/06/Group-4-1.png' />
        </div>


        {/* ================== Queue Tickets =================================== */}
        <div className="queue w-[500px] h-[400px] border-2 border-black flex flex-col justify-around items-center">
                <Input className='w-[80%]' onChange={(e) => setTitle(e.target.value)} size="large" placeholder="Queue Title" prefix={<UserOutlined />} />
                <Input className='w-[80%]' onChange={(e) => setCategory(e.target.value)} size="large" placeholder="Queue Category" prefix={<UserOutlined />} />
                <Space wrap>
                    <Button type="primary" onClick={AddQueue} className='w-[200px] bg-[#3498db] h-[70px]'>Add Queue </Button>
              </Space>
        </div>
    </div>
  )
}

export default Hero