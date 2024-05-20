import React from 'react'
import { BsSearch } from 'react-icons/bs'
import AdminSide from '../components/adminSide'
import { FaRegBell } from 'react-icons/fa'
import userImg from "../assets/profile.png"
import { HiTrendingDown,HiTrendingUp } from 'react-icons/hi'

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
             <Widget heading="Revenue" 
            amount = {true}
            value={40000}
            percent={40}
            colour='rgb(0,115,255)'/>
             <Widget heading="Revenue" 
            amount = {true}
            value={40000}
            percent={40}
            colour='rgb(0,115,255)'/>
             <Widget heading="Revenue" 
            amount = {true}
            value={40000}
            percent={40}
            colour='rgb(0,115,255)'/>
                      </div>
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


export default Dashboard