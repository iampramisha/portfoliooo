import React from 'react'
import './Testimonials.scss'

const Testimonials = () => {
  
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/twitter.png?raw=true",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/youtube.png?raw=true",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/linkedin.png?raw=true",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
 
  return (
    <div className='testimonials' id="Testimonials">
      <h1 className='title'>Testimonials</h1>
      <div className="container">
        {data.map((d)=> (
        <div className= {d.featured ? "card featured" : "card"}>
          <div className="top">
<img className='
leftt' src="https://th.bing.com/th/id/OIP.glLCx3_n1NuNC6LxrzjQMAHaHa?pid=ImgDet&rs=1" alt="" />
<img className='user'    src={d.img} alt="" />
<img className='rightt' src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials