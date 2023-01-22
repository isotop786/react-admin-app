import React, {useState, useEffect, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Product } from '../../models/Product.model';

const ProductEdit = ()=> {
    const {id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct = ()=>{
        axios.get('/products/'+id)
        .then(res=>{
            // setTitle(res.data.)
            console.log(res.data.data)
            setTitle(res.data.data.title)
            setDescription(res.data.data.description)
            setPrice(res.data.data.price)
            setImage(res.data.data.image)
        })
    }

    const handleSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault()
        // console.log(firstName)
        // console.log(lastName)
        // console.log(email)
        console.log(image)
        axios.put('/products/'+id,{
            title,
            description,
            image,
            price
        })
        .then(()=>{
            alert('Product updated Successfully')
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
            <h2>Edit Product </h2>
            {title ? (
                <div className="row">
                <div className="col-md-5">
                    <form className='my-3' onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="">Title</label>
                            <input 
                                defaultValue={title}
                                onChange={e=>setTitle(e.target.value)} type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea 
                                defaultValue={description}
                                onChange={e=>setDescription(e.target.value)} className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Price</label>
                            <input 
                                defaultValue={price}
                                onChange={e=>setPrice(e.target.value)}  type="text" className="form-control" id="" />
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
                            <button className='btn btn-warning' type='submit'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            ): (<div>Product data loading.....</div>)}
            
            
        </Wrapper>
    )
}

export default ProductEdit;