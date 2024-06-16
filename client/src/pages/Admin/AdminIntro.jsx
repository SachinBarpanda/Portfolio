import { Form, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {ShowLoading , HideLoading} from "../../redux/rootSlice"

function AdminIntro() {
  const dispatch = useDispatch();
  const {portfolioData} = useSelector((state)=> state.root);
  const onFinish = async (values)=>{
    try{
      dispatch(ShowLoading())
      const response = await axios.post(VITE_APP_BASE_URL+"/api/portfolio/update-intro"
      ,{...values, 
      _id: portfolioData.intros._id
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
      initialValues={portfolioData.intros}>

        <Form.Item name='welcomeText' label='Welcome Text' initialValue={portfolioData.intro}>
          <input  type="text" placeholder='Welcome Text' />
        </Form.Item>
        
        <Form.Item name='firstName' label='First Name'>
          <input type="text" placeholder='First Name' />
        </Form.Item>
        
        <Form.Item name='lastName' label='Last Name'>
          <input type="text" placeholder='Last Name' />
        </Form.Item>

        <Form.Item name='caption' label='Caption'>
          <input type="text" placeholder='Caption' />
        </Form.Item>
        
        <Form.Item name='description' label='Description'>
          <textarea  placeholder='Description'/>
        </Form.Item>

        <div className="flex justify-start">
          <button type='submit' formMethod='POST' className='px-5 py-2 bg-secondary text-white'>Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro