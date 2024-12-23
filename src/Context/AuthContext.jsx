import { createContext, useEffect, useState } from "react";
import {auth} from "../Config/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile, 

} from "firebase/auth";
import { toast } from "sonner";
import axios from "axios";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [isLoading , setIsloading] = useState(true)
  const provider = new GoogleAuthProvider();

  const Registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
     
  };

  const UpdateProfile = ( name , photo)=>{
    if(!auth.currentUser){
        toast.error('You are not logged in')
        return;
    }
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo})
     
   }

  useEffect(()=>{

    const Unsubscribe =  onAuthStateChanged(auth,(user)=>{
        // if (user){
            setUser(user)
            if(user?.email){
              const email = user.email
              axios.post(`${import.meta.env.VITE_API}/jwt`,{email},{
                withCredentials: true
              }).then(({data})=>{
                console.log(data)
                setIsloading(false)
              })
            }else{
              axios.post(`${import.meta.env.VITE_API}/logOut`,{},{
                withCredentials: true
              }).then(({data})=>{
                console.log(data)
                setIsloading(false)
              })
            }
           
    })
    return ()=>{
       Unsubscribe; 
    } 

  },[user])



  const userinfo = {
    Registration,
    GoogleLogin,
    login,
    LogOut,
    setUser,
    user,
    isLoading,
    UpdateProfile,
    setIsloading
  };

  return (
    <UserContext.Provider value={userinfo}>{children}</UserContext.Provider>
  );
};

export default UserContext;
