import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';
import { addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { HochuIgrat } from '../HochuIgrat/HochuIgrat';
export const TretiySt = () => {
  const [sigm, setSigm] = useState([])
  async function getData() {
    let arr = []
    const querySnapshot = await getDocs(collection(db, "Sigm"));
    querySnapshot.forEach((doc) => {
      const el = doc.data()
      arr.push({...el, id:doc.id})

    });
    setSigm(arr);
  }
  console.log(sigm)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
     Handler(data);
     reset();
     getData();
  };

  async function Handler(data) {
    const docRef = await addDoc(collection(db, "Sigm"), {
      name: data.name,
      ages: data.ages,
      price: data.price,
      img: data.img
    });
    
  }
  useEffect(() => {
    const res = getData()
  }, [])

  return (
    <div className='h-full flex justify-between flex-col'>
   <HochuIgrat sigm={sigm}/> 
      <form onSubmit={handleSubmit(onSubmit)} >

        <input type="text" placeholder='name'  {...register("name", { required: true })} className='mb-1' />
        {errors.name && <span className='text-red-900 mb-1.5'>This field is required</span>}
        <input type="text" placeholder='ages'  {...register("ages", { required: true })} className='mb-1' />
        {errors.ages && <span className='text-red-900 mb-1.5' >This field is required</span>}
        <input type="text" placeholder='price'  {...register("price", { required: true })} className='mb-1' />
        {errors.price && <span className='text-red-900 mb-1.5' >This field is required</span>}
        <input type="text" placeholder='img'  {...register("img", { required: true })} className='mb-1' />
        {errors.img && <span className='text-red-900 mb-1.5' >This field is required</span>}
        <input type="submit" value={"send"} />
      </form>
    </div>
  )
}
