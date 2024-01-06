import React from 'react'
import { useContext } from 'react'
import { contextNavigate } from '../Context/ContextProvider'

const AddData = () => {

          const {userData}=useContext(contextNavigate);

          if(!userData){
                    return <>
                              <h1>Please Login to add data</h1>
                    </>
          }else{
                    return (
    <>
          sdk
    </>
  )
          }


}

export default AddData