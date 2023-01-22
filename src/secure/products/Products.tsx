import React,{useState, useEffect} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { User } from '../../models/User'
import { Role } from "../../models/Role";
import { Link } from "react-router-dom";
import { Product } from "../../models/Product.model";
const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage,setLastPage] = useState(0)
    useEffect(() => {
        const fetchUsers = () => {
            axios.get(`/products`)
                .then(res => {
                console.log(res.data)
                setProducts(res.data.data)
                  // setLastPage(res.data.meta?.last_page)
                })
                .catch(err => console.log(err))
            // console.log(users)
            // console.log(lastPage)
        }

        fetchUsers();
        
    },[products])

    const deletProductHandler = async (id: any)=>{
      if(window.confirm('Are you sure to delete?'))
      {
        await axios.delete(`/products/${id}`)
        const newProduct = products.filter((u: Product) => u.id !== id)
        setProducts(newProduct)
      }
    }

    return (
      <Wrapper>
      
            <h2>All Products</h2>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/products/create" className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
        </div>
        {products.length == 0 ? (<div className="my-2"><h4>Products are loading...</h4></div>) : (
     <div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
            
                </tr>
              </thead>
              <tbody>
              
                {products?.map((product: Product) => {
                  return (<tr key={product.id}>
                    <td>{product.id}</td>
                    <td><img height="50px" width={100} src={product.image} className="img-thumbnail"/></td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><Link  to={`/products/${product.id}/edit`} className="btn btn-sm btn-warning">
                        Update
                      </Link></td>
                    <td><button  onClick={()=>deletProductHandler(product.id)} className="btn btn-sm btn-danger">Delete</button></td>
                  </tr>)
                })}
           
            
              </tbody>
            </table>
          </div>
        {/* {lastPage > 0 && (
          <nav >
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" onClick={()=>setPage(page+1)}>Next</a>
            </li>
          </ul>
        </nav>
      )} */}

          </div>
        )}
    
        

        </Wrapper>
    )
}

export default Products;