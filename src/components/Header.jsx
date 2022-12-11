import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Button, Input ,Space , Modal  } from 'antd';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc ,getFirestore} from "firebase/firestore"; 
import Box from '@mui/material/Box';
import Buttons from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modals from '@mui/material/Modal';
import app from '../config/app'
// import Swal from 'sweetalert';
function Header() {
    const db = getAuth(app);
    const firestore = getFirestore(app)
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // ================= Use States =======================
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email,setEmail] = useState();
    const [Profile,setProfile] = useState();
    const [password,setPassword] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const name = (e)=>{
      setProfile(e.target.value)
    }

    const Username = (e)=>{
      setEmail(e.target.value)
    }

    const pass = (e)=>{
      setPassword(e.target.value)
    }
    



  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // ====================== Sign In =================================
    const Register = ()=>{
      createUserWithEmailAndPassword(db, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Success");
        AddItem(Profile)
        alert("Success")
                // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    // ===============================================================

    function generatePassword() {
      var length = 8,
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
  }


    // =========================== Add Info ==============================
   async function AddItem(Profile){
      await setDoc(doc(firestore, "User", Profile+":"+generatePassword()), {
        name: Profile,
        email:email
      });
      
    
    }
    // ==================================================================

    // ================== Register ============================
    function SignIn (){
      signInWithPopup(db, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }


    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
    <div className='w-full h-[80px]  flex justify-around items-center'>
        <span>
         <img decoding="async" src="https://qlessnew.wpenginepowered.com/wp-content/uploads/2021/03/qless-logo200.png" alt="QLess Queue Management System" data-lazy-src="https://qlessnew.wpenginepowered.com/wp-content/uploads/2021/03/qless-logo200.png" data-ll-status="loaded" class="entered lazyloaded" width="160" height="44"/>
        </span>

        <div className="list w-[450px] h-[80px]  flex justify-around items-center">
            <p>
                <Link className='text-xl  hover:text-[#2980b9]'>Why Qless</Link>
            </p>
            <p>
                <Link className='text-xl  hover:text-[#2980b9]'> Industries</Link>
            </p>
            <p>
                <Link className='text-xl  hover:text-[#2980b9]'>About us</Link>
            </p>
        </div>

        <Space wrap>
            <Button onClick={SignIn} type="primary" className='w-[100px] h-[40px] bg-[#7f8c8d]'>Login</Button>
            <Button onClick={handleOpen} type="primary" className='w-[100px] h-[40px] bg-[#7f8c8d]'>Register</Button>
           

        </Space>


        {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='w-[full] h-[400px] border-2 border-black flex flex-col justify-around items-center'>
            <Input className='w-[80%]' onChange={Username} placeholder="Enter Email" />
            <Input className='w-[80%]' onChange={pass} type='password' placeholder="Enter Password" />
            <Space wrap>
              <Button  type="primary" onClick={SignIn} className='w-[100px] h-[40px] bg-[#7f8c8d]'>Sign In</Button>
            </Space>
            </div>
        </Modal> */}






        <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='w-[full] h-[400px] border-2 border-black flex flex-col justify-around items-center'>
            <Input className='w-[80%]' onChange={name} placeholder="Enter Name" />
            <Input className='w-[80%]' onChange={Username} placeholder="Enter Email" />
            <Input className='w-[80%]' onChange={pass} type='password' placeholder="Enter Password" />
            <Space wrap>
              <Button  type="primary" onClick={Register} className='w-[100px] h-[40px] bg-[#7f8c8d]'>Register</Button>
            </Space>
          </div>
        </Box>
      </Modals>

    </div>
  )
}

export default Header