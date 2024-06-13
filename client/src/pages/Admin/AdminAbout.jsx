import { Form, message } from 'antd'
import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {ShowLoading , HideLoading} from "../../redux/rootSlice"

function AdminAbout() {
  const dispatch = useDispatch();
  const {portfolioData} = useSelector((state)=> state.root);
  const [form] = Form.useForm();
   
  const onFinish = async(values)=>{
    form.resetFields();
    const tempSkills = values.skills.split(" , ");
    values.skills = tempSkills;
    try{
      dispatch(ShowLoading())
      const response = await axios.post(`http://localhost:5000/api/portfolio/update-about`
      ,{...values,
      _id: portfolioData.about._id
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
      initialValues={{...portfolioData.about,
        skills : portfolioData.about.skills.join(" , ")
      }}>

       
        <Form.Item name='imageURL' label='Image URL '>
          <input type="text" placeholder='Image URL' />
        </Form.Item>

        <Form.Item name='descriptionTop' label='Description Top'>
          <input type="text" placeholder='Description Top' />
        </Form.Item>
        
        <Form.Item name='descriptionBottom' label='Description Bottom'>
          <textarea  placeholder='Description Bottom'/>
        </Form.Item>
        
        <Form.Item name='skills' label='skills '>
          <textarea  placeholder='Skills'/>
        </Form.Item>

        <div className="flex justify-start">
          <button formMethod='POST' type='submit' className='px-5 py-2 bg-secondary text-white'>Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout