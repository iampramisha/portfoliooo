import { useState,useEffect} from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'
import React from 'react'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,

} from "../../Data";

const Portfolio = () => {
    const [selected,setSelected]=useState("");
    const[data,setData]=useState([]);
    const list=[

        {
            id: "featured",
            title:"Featured",  
          },
        
        {
            id: "web",
            title:"Web App"
        },
        
        {
            id: "mobile",
            title:"Mobile App"
        },
        
        {
            id: "design",
            title:"Design"
        },
        
        {
            id: "content",
            title:"Content"
        },

    ]
    useEffect(()=>{
switch(selected){
    case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
            setData(webPortfolio);
            break;
            case "mobile":
                setData(mobilePortfolio);
                break;
                case "design":
        setData(designPortfolio);
        break;
        case "content":
            setData(contentPortfolio);
            break;
            default:
                setData(featuredPortfolio)
        
                 
}
    },[selected]
    
    )
  return (
    <>
    <div className="portfolio" id='Portfolio'>
        <h11>Portfolio</h11>
    <ul>
        {list.map(item=>(
            <PortfolioList   key={item.id} title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}  />
        ))}
    </ul>
    <div className="container">
        {data.map( (d)=>(

        
        
        <div className="item">
            <img src={d.img}alt="" />
            <h9>{d.title}</h9>
        </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Portfolio