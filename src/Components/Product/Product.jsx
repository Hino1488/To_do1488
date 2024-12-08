import React, { useEffect, useState } from 'react'
import {
    useParams
} from 'react-router-dom';
import { db } from '../../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import "./Product.css"
export const Product = () => {
    const [simga, setSimga] = useState()
    const { name } = useParams();
    console.log(name?.replace("/sigma/", ''));
    async function getData() {
        const snap = await getDoc(doc(db, 'Sigm', name))
        setSimga(snap.data())

    }


    useEffect(() => { getData() }, [])
    return (
        <div className='product'>


      <img src={simga?.img} alt="" width="100px" height="100px" />
      <div className='flex flex-col'>
        <div> {simga?.name} </div>
        <div>{simga?.age} Ages</div>
        <div>{simga?.price}$</div>
        <div>{simga?.color}</div>
        <div>{simga?.description}</div>
        <div>{simga?.height}</div>
        <div>{simga?.manufacturer}</div>
        <div>{simga?.model}</div>
        <div>{simga?.weight}</div>
        <div>{simga?.favorite_games?.map((el)=> el)}</div>
      </div>
    </div>


        
    )
}
