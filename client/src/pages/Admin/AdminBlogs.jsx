import { Form, Modal, message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading, ReloadData } from '../../redux/rootSlice';

function AdminBlogs() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { blogs } = portfolioData;

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [type, setType] = useState("add");
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            form.resetFields();
            const tempTechnologies = values.technologies?.split(" , ");
            values.technologies = tempTechnologies;
         
            dispatch(ShowLoading())
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-blog"
                    , {
                        ...values,
                        _id: selectedItemForEdit._id,
                    })
            } else {
                response = await axios.post("/api/portfolio/add-blog"
                    , values)
            }


            dispatch(HideLoading());
            if (response.data.success) {
              
                message.success(response.data.message);
                setShowEditModal(false);
                dispatch(HideLoading());
                dispatch(ReloadData(true))
            } else {
                message.error(response.data.message);
            }
            
        } catch (error) {
            message.error(error);
            dispatch(HideLoading());
        }
    }

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/delete-blog", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    }

    return (
        <div>
            <div className="flex">
                <button className='bg-secondary px-5 py-2 '
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setShowEditModal(true)
                    }}
                >
                    Add Blog
                </button>
            </div>

            <div className='flex flex-row flex-wrap '>

                {blogs.map((blog) => (

                    <div className='shadow border border-gray-400 p-5 flex flex-col gap-4 flex-wrap w-96'>
                        <h1 className='text-secondary text-xl font-bold'>{blog.title}</h1>
                        <img src={blog.image} alt={blog.image} className='h-60 w-80 ' />
                        <h1 className=''>Intro : {blog.intro}</h1>
                        <a href={blog.read} className='border w-fit px-6 py-2 bg-secondary'>Read </a>

                        <div>
                            <button className='bg-primary text-white px-5 py-2 rounded-md'
                                onClick={() => {
                                    setSelectedItemForEdit(null);
                                    setSelectedItemForEdit(blog);
                                    setShowEditModal(true);
                                    form.resetFields();

                                }}
                            >Edit</button>
                            <button className='bg-secondary text-white px-5 py-2 rounded-md'
                                onClick={() => {
                                    onDelete(blog);
                                }}
                            >Delete</button>
                        </div>
                    </div>
                )
                )}
            </div>
            {
                (type === "add" || setSelectedItemForEdit) && (
                    <Modal open={showEditModal}
                        title={selectedItemForEdit ? "Edit Blog" : "Add Blog"}
                        footer=""
                        onCancel={() => {
                            setSelectedItemForEdit(null)
                            setShowEditModal(false)
                        }}
                    >
                        <Form layout='vertical' initialValues={selectedItemForEdit}
                            form = {form}
                            
                            onFinish={onFinish}>
                            <Form.Item name="title" label='Title'>
                                <input placeholder='Title' />
                            </Form.Item>
                            <Form.Item name="intro" label='Intro'>
                                <input placeholder='Intro' />
                            </Form.Item>
                            <Form.Item name="image" label='Image'>
                                <input placeholder='Image' />
                            </Form.Item>
                         
                            <Form.Item name="read" label='Read'>
                                <input placeholder='Read' />
                            </Form.Item>
                       
                            <div className='flex'>
                                <button className='bg-primary text-white px-5 py-2'
                                    onClick={() => {
                                        setShowEditModal(false);
                                        setSelectedItemForEdit(null)
                                    }}>
                                    Cancel
                                </button>
                                <button className='bg-primary text-white px-5 py-2'>{selectedItemForEdit ? "Update" : "Add"}
                                </button>
                            </div>
                        </Form>
                    </Modal>
                )}
        </div>
    )
}

export default AdminBlogs