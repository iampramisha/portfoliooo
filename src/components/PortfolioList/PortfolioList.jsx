
import "./PortfolioList.scss"
import React from 'react'

const PortfolioList = ({title, active,setSelected,id}) => {
  return (
        <li className={active ? "PortfolioList active": "PortfolioList"} onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}

export default PortfolioList