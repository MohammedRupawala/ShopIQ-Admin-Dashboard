import React from 'react'
import { BsSearch } from 'react-icons/bs'
import AdminSide from '../components/adminSide'
import { FaRegBell } from 'react-icons/fa'
import userImg from "../assets/profile.png"
import { HiTrendingDown,HiTrendingUp } from 'react-icons/hi'
import data from "../assets/data.json"
const Dashboard = () => {
  return (
    <div className='adminContainer'>
        <AdminSide/>
        <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type ="text" placeholder='Search'/>
          <FaRegBell/>
          <img src={userImg}/>
          </div>
          <div className="widget-maker">
            <Widget heading="Revenue" 
            amount = {true}
            value={40000}
            percent={40}
            colour='rgb(0,115,255)'/>
             <Widget heading="User" 
            amount = {false}
            value={500}
            percent={20}
            colour='rgb(255,255,0)'/>
             <Widget heading="Transaction" 
            amount = {true}
            value={20000}
            percent={100}
            colour='rgb(0,115,255)'/>
             <Widget heading="Product" 
            amount = {false}
            value={10}
            percent={96}
            colour='cyan'/>
                      </div>
                      <section className = "graphContainer">
                        <div className="revenue"> 
                          <h2>
                            Revenue & Transaction
                          </h2>
                        </div>
                        <div className="inventory">
                          <h2> 
                            Inventory 
                          </h2>
                          <div>
                         {
                          data.categories.map((i)=>(
                            <Item
                            key={i.heading}
                            heading={i.heading}
                            value={i.value}
                            color = {`hsl(${i.value * 4},${i.value}%,50%)`}/>
                          ))
                         }
                          </div>
                          
                        </div>

                      </section>
          </main>
    </div>
  )
}

interface WidgetType {
  heading: string,
  value : number,
  amount : boolean,
  colour : string,
  percent : number
}
const Widget = ({heading,value,colour,amount,percent}:WidgetType)=>{
return <article className='widget'>
  <div className='widgetinfo'>
    <p>{heading}</p>
    <h3>{amount?`$${value}`:value}</h3>
    {
    percent>0?<span className='green'>
      <HiTrendingUp/> + {percent}%{" "}
    </span>
    :<span className='red'>
      <HiTrendingDown/> {percent}%{" "}
    </span>
    }
  </div>
  <div className="widgetCircle" style={{
    background: `conic-gradient(
    ${colour} ${Math.abs(percent)/100 * 360}deg,
    rgb(255,255,255) 0
    )`,
  }}>
    <span style={{
      color:colour
    }}>{percent}%</span>
  </div>
</article>
}
interface itemProps{
  color : string;
  value : number;
  heading : string;
}
const Item  = ({color,heading,value} : itemProps)=>{
  return<div className="items">
   <h5>
   {heading}
    </h5> 
    <div >
      <div  style = {{
        backgroundColor : color,
        width : `${value}%`,
      }}></div>
      </div>
      <span>{value}%</span>
    
    
  </div>

}


export default Dashboard