import React, { useEffect, useState } from 'react'
import auth from "@react-native-firebase/auth";
import {WithAuthNavigation,WithoutAuthNavigation} from './Navigation';

const AuthNavigation = () => {
    const [isLogined, setIsLogined] = useState(null);

    const handleUser = user => user ? setIsLogined(user) : setIsLogined(null)

    useEffect(() => {
        auth().onAuthStateChanged((user) =>handleUser(user))
    },[])
  return (
 <>
  {isLogined ? <WithAuthNavigation/> : <WithoutAuthNavigation/>}
 </>
  )
}

export default AuthNavigation;