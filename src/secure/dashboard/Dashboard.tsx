import React,{useState,useEffect} from 'react';
import Wrapper from '../Wrapper';
import { Rnd } from 'react-rnd';
import axios from 'axios';


const Dashboard: React.FC = () => {
  const [userCount,setUserCount] = useState(null)
  const [productCount,setProductCount] = useState(null)
  const [orderCount,setOrderCount] = useState(null)
  const [roleCount,setRoleCount] = useState(null)

  useEffect(()=>{
    axios.get('/counts')
    .then(res=>{
      console.log(res.data)
      setUserCount(res.data.users)
      setProductCount(res.data.products)
      setOrderCount(res.data.orders)
      setRoleCount(res.data.roles)
    })
  },[])

    return (
    <Wrapper>
      <div className="">
        <div className="row">

            <Rnd
              style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"rgba(53,163,77,0.7)",
                borderRadius: "10px",
                zIndex:'11'
              }}
              default={{
              x: 10,
              y: 10, 
              width: 300,
              height: 200,
            
            }}
          >
            <h5 style={{color:"#fff",fontWeight:"700"}}>Total User</h5>
            <h1 style={{color:"#fff",fontWeight:"400"}}>{userCount? userCount : "..."}</h1>
          </Rnd>
          
          <Rnd
              style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"rgba(66, 135, 245,0.7)",
                borderRadius: "10px",
                zIndex:'11'
              }}
              default={{
              x: 320,
              y: 10, 
              width: 300,
              height: 200,
            
            }}
          >
            <h5 style={{color:"#fff",fontWeight:"700"}}>Total Product</h5>
            <h1 style={{color:"#fff",fontWeight:"400"}}>{productCount? productCount : "..."}</h1>
          </Rnd>

          <Rnd
              style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#f04770",
                borderRadius: "10px",
                zIndex:'11'
              }}
              default={{
              x: 625,
              y: 10, 
              width: 300,
              height: 200,
            
            }}
          >
            <h5 style={{color:"#fff",fontWeight:"700"}}>Total Order</h5>
            <h1 style={{color:"#fff",fontWeight:"400"}}>{orderCount? orderCount : "..."}</h1>
          </Rnd>
          <Rnd
              style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#FF7B54",
                borderRadius: "10px",
                zIndex:'11'
              }}
              default={{
              x: 935,
              y: 10, 
              width: 300,
              height: 200,
            
            }}
          >
            <h5 style={{color:"#fff",fontWeight:"700"}}>Total Role</h5>
            <h1 style={{color:"#fff",fontWeight:"400"}}>{roleCount? roleCount : "..."}</h1>
          </Rnd>

          <Rnd
              style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#f9f9f9",
                borderRadius: "10px",
                zIndex:'11'
              }}
              default={{
              x: 10,
              y: 220, 
              width: 500,
              height: 300,
            
            }}
          >
            
          </Rnd>
          
        </div>
      </div>
      
        </Wrapper>
    )
}

export default Dashboard;
