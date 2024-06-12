import { Form, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {ShowLoading , HideLoading} from "../../redux/rootSlice"

function AdminContact() {
  const dispatch = useDispatch();
  const {portfolioData} = useSelector((state)=> state.root);
  const onFinish = async (values)=>{
    try{
      dispatch(ShowLoading())
      const response = await axios.post("/api/portfolio/update-contact"
      ,{...values, 
      _id: portfolioData.contact._id
    })
    dispatch(HideLoading());
    if(response.data.success){
      message.success(response.data.message);
    }else{
      message.error(response.data.message);

    }

    }catch(error){
      message.error(error.message);
      console.log(error)
      dispatch(HideLoading());
    }
  }

  return (
    <div >
      <Form 
      onFinish={onFinish}
      layout='vertical'
      initialValues={portfolioData.contact}>

      
        
        <Form.Item name='name' label='Name'>
          <input type="text" placeholder='Name' />
        </Form.Item>
        
        <Form.Item name='country' label='Country'>
          <input type="text" placeholder='Country' />
        </Form.Item>

        <Form.Item name='email' label='Email'>
          <input type="text" placeholder='Email' />
        </Form.Item>
 
        <Form.Item name='mobile' label='Mobile'>
          <input type="text" placeholder='Mobile' />
        </Form.Item>
 
        <Form.Item name='state' label='State'>
          <input type="text" placeholder='State' />
        </Form.Item>

        <div className="flex justify-start">
          <button type='submit' formMethod='POST' className='px-5 py-2 bg-secondary text-white'>Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminContact