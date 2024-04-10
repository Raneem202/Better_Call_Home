import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllNotificationAction } from '../../redux/actions/owner_action'

const GetAllNotificationHock = () => {
  const [loading , setLoading] = useState(true)
  const [Notifications , setNotifications] = useState([])
  const dispatch = useDispatch()

  const id = JSON.parse(localStorage.getItem("data-user")).userId
console.log(id)


  useEffect(()=>{
    const get = async ()=>{
        setLoading(true)
        await dispatch(GetAllNotificationAction("b9592d67-dd75-4c26-a692-536325062ca2"))
        setLoading(false)
    }
    get();
  } , [])



  const res = useSelector((item) => item.Owner.getnotifi)
  console.log(res)
  useEffect(()=>{
    if(loading === false){
        if(res && res.data && res.data.data){
            setNotifications(res.data.data.notifies)
        }
    }
  } , [loading])

  return [Notifications]

}

export default GetAllNotificationHock
