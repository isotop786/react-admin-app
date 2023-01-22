import React, {useState, useEffect, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Product } from '../../models/Product.model';

const ProductCreate = ()=> {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    useEffect(()=>{

    },[])

    const handleSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault()
        // console.log(firstName)
        // console.log(lastName)
        // console.log(email)
        console.log(image)
        axios.post('/products',{
            title,
            description,
            image,
            price
        })
        .then(()=>{
            alert('Product created Successfully')
            navigate('/products')
        })
    }

    const uploadHandler = async (files: FileList | null) =>{
        if(files === null) return;
        
        const data = new FormData();
        data.append('image',files[0])

        const response = await axios.post('/upload',data)
        console.log(response.data.data)
        const image = `https://django-rest-admin-production.up.railway.app${response.data.url}`
        console.log(image)
        // setImage(`https://django-rest-admin-production.up.railway.app+${response.data.url}`)
        setImage(image)
    }

    return(
        <Wrapper>
            <h2>Create New Product </h2>

            <div className="row">
                <div className="col-md-5">
                    <form className='my-3' onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="">Title</label>
                            <input onChange={e=>setTitle(e.target.value)} type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea onChange={e=>setDescription(e.target.value)} className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Price</label>
                            <input onChange={e=>setPrice(e.target.value)}  type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Image</label>
                            <input
                                defaultValue={image}
                                onChange={e => setImage(e.target.value)}
                                type="text" className='form-control' name="image" />
                            <div className='input-group-append'>
                                <label htmlFor="" className='btn btn-primary'>
                                    Upload<input  type="file" className='form-control-file' accept="image/png, image/gif, image/jpeg"  onChange={e => uploadHandler(e.target.files)} />
                                </label>
                            </div>    
                        </div>
                        

                        <div>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </Wrapper>
    )
}

export default ProductCreate;