import React,{useEffect}from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';

const Dashboard: React.FC = () => {

  const [userCount,setUserCount] = React.useState(0)
  const [roleCount,setRoleCount] = React.useState(0)
  const [productCount,setProductCount] = React.useState(0)
  const [orderCount,setOrderCount] = React.useState(0)

  useEffect(()=>{
    axios.get('/counts')
    .then(res =>{
      console.log(res.data)
      setUserCount(res.data.users)
      setProductCount(res.data.products);
      setRoleCount(res.data.roles);
      setOrderCount(res.data.orders)
    })
  },[])

    return (
    <Wrapper>

      <div className="">
        <div className="row" style={{display:"flex", columnGap:"10px"}}>
          
            <div  
               style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#2B4865",
                borderRadius: "10px",
                zIndex:'11',
                width:"300px",
                height:"180px",
                color:"#fff"
              }}
            >
              <h3>Total Users</h3>
              <h2>{userCount?userCount:"..."}</h2>
            </div>

            <div  
               style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#54BAB9",
                borderRadius: "10px",
                zIndex:'11',
                width:"300px",
                height:"180px",
                color:"#fff"
              }}
            >
              <h3>Total Products</h3>
              <h2>{productCount?productCount:"..."}</h2>
            </div>
            <div  
               style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#7286D3",
                borderRadius: "10px",
                zIndex:'11',
                width:"300px",
                height:"180px",
                color:"#fff"
              }}
            >
              <h3>Total Order</h3>
              <h2>{orderCount ? orderCount : "..."}</h2>
            </div>
            <div  
               style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background:"#439A97",
                borderRadius: "10px",
                zIndex:'11',
                width:"300px",
                height:"180px",
                color:"#fff"
              }}
            >
              <h3>Total Role</h3>
              <h2>{roleCount ? roleCount : "..."}</h2>
            </div>
          
          
          
        
        </div>
      </div>
    </Wrapper>
    )
}

export default Dashboard;
