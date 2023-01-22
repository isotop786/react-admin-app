import React,{useState, useEffect} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { Order } from "../../models/Order.model";
import { OrderItem } from "../../models/OrderItem.models";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const OrderItems= () => {
  const [orderItems, setOrderItems] = useState([]);
  const {id} = useParams()

    useEffect(() => {
        const fetchItems = () => {
            axios.get(`/orders/${id}`)
                .then(res => {
                console.log(res.data)
                setOrderItems(res.data.data.order_items)
                  // setLastPage(res.data.meta?.last_page)
                })
                .catch(err => console.log(err))
            // console.log(users)
            // console.log(lastPage)
        }

        fetchItems();
        
    },[orderItems])


    return (
      <Wrapper>
      
            <h2>Order items details</h2>
        <div>
            <Link className="btn btn-dark my-4" to="/orders">Back</Link>
        </div>

        {orderItems.length == 0 ? (<div className="my-2"><h4>Order items data loading...</h4></div>) : (
     <div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
              
                {orderItems?.map((item: OrderItem) => {
                  return (<tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.product_title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    
                    
                  </tr>)
                })}
           
            
              </tbody>
            </table>
          </div>
       

          </div>
        )}
    
        

        </Wrapper>
    )
}

export default OrderItems;