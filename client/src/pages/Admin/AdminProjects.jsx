import { Form, Modal, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading, ReloadData } from '../../redux/rootSlice';

function AdminProjects() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [type, setType] = useState("add");
    const [form] = Form.useForm();

    useEffect(()=>{
        form.resetFields();
    },[setShowEditModal,setSelectedItemForEdit, Modal])

    const onFinish = async (values) => {

        try {
            const tempTechnologies = values.technologies?.split(" , ");
            values.technologies = tempTechnologies;
            console.log(values)
            dispatch(ShowLoading())
            let response;
            if (selectedItemForEdit) {
                response = await axios.post(VITE_APP_BASE_URL+"/api/portfolio/update-project"
                    , {
                        ...values,
                        _id: selectedItemForEdit._id,
                    })
            } else {
                response = await axios.post(VITE_APP_BASE_URL+"/api/portfolio/add-project"
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
            const response = await axios.post(VITE_APP_BASE_URL+"/api/portfolio/delete-project", {
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
                    Add Project
                </button>
            </div>

            <div className='flex flex-row flex-wrap '>

                {projects.map((project) => (

                    <div className='shadow border border-gray-400 p-5 flex flex-col gap-4 flex-wrap w-96'>
                        <h1 className='text-secondary text-xl font-bold'>{project.title}</h1>
                        <img src={project.image} alt={project.image} className='h-60 w-80 ' />
                        <h1 className=''>Description : {project.description}</h1>
                        <div className='flex justify-between'>
                        <a href={project.demo} className='border w-fit px-6 py-2 bg-secondary'>Demo </a>
                        <a  href={project.code} className='border w-fit px-6 py-2 bg-secondary'>Code </a>
                        </div>
                        <h1 className=''>Technologies : {project.technologies}</h1>

                        <div>
                            <button className='bg-primary text-white px-5 py-2 rounded-md'
                                onClick={() => {
                                    setSelectedItemForEdit(null);
                                    setSelectedItemForEdit(project);
                                    setShowEditModal(true);

                                }}
                            >Edit</button>
                            <button className='bg-secondary text-white px-5 py-2 rounded-md'
                                onClick={() => {
                                    onDelete(project);
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

                        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                        footer=""
                       
                        
                        onCancel={() => {
                            setSelectedItemForEdit(null)
                            setShowEditModal(false)
                            form.resetFields();
                        }}
                    >
                        <Form layout='vertical' initialValues={{
                            ...selectedItemForEdit,
                            technologies: selectedItemForEdit?.technologies?.join(" , "),
                        } || {}}
                            onFinish={onFinish}>
                            <Form.Item name="title" label='Title'>
                                <input placeholder='Title' />
                            </Form.Item>
                            <Form.Item name="description" label='Description'>
                                <input placeholder='Description' />
                            </Form.Item>
                            <Form.Item name="image" label='Image'>
                                <input placeholder='Image' />
                            </Form.Item>
                            <Form.Item name="demo" label='Demo'>
                                <input placeholder='Demo' />
                            </Form.Item>
                            <Form.Item name="code" label='Code'>
                                <input placeholder='Code' />
                            </Form.Item>
                            <Form.Item name="technologies" label='Technologies'>
                                <textarea placeholder='Technologies' />
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

export default AdminProjects