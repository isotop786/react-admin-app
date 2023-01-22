import React,{useState, useEffect} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { Order } from "../../models/Order.model";
import { OrderItem } from "../../models/OrderItem.models";
import { Link } from "react-router-dom";

const Orders= () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage,setLastPage] = useState(0)
    useEffect(() => {
        const fetchOrders = () => {
            axios.get(`/orders`)
                .then(res => {
                console.log(res.data)
                  setOrders(res.data.data)
                  // setLastPage(res.data.meta?.last_page)
                })
                .catch(err => console.log(err))
            // console.log(users)
            // console.log(lastPage)
        }

        fetchOrders();
        
    },[orders])

    const deletHandler = async (id: any)=>{
      if(window.confirm('Are you sure to delete?'))
      {
        await axios.delete(`/orders/${id}`)
        const newOrder = orders.filter((order: Order) => order.id !== id)
        setOrders(newOrder)
      }
    }

    return (
      <Wrapper>
      
            <h2>All Orders</h2>

        {orders.length == 0 ? (<div className="my-2"><h4>Order data loading...</h4></div>) : (
     <div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Total</th>
                  <th>Actions</th>
            
                </tr>
              </thead>
              <tbody>
              
                {orders?.map((order: Order) => {
                  return (<tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.first_name}</td>
                    <td>{order.last_name}</td>
                    <td>{order.email}</td>
                    <td>{order.total}</td>
                    <td><Link  to={`/orders/${order.id}/edit`} className="btn btn-sm btn-warning">
                        View
                      </Link>
                    </td>
                    
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

export default Orders;