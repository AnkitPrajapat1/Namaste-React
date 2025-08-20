
import React, { useEffect, useState } from 'react'

function useOnlineStatus() {
  const [onlineSatus,setOnlineStatus]=useState(true);
  useEffect(()=>{
    window.addEventListener("online",()=>{
        setOnlineStatus(true)
    })
    window.addEventListener("offline",()=>{
        setOnlineStatus(false)
    })
  },[])
  return onlineSatus
}

export default useOnlineStatus