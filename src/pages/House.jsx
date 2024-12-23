import React, { useState, useEffect } from "react";
import "./house.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Header from "../components/header/Header";

const items = [
  {
    id: 1,
    img: "/house1.jpg",
    title: "Spend Time with Your Family & Leave the Chores to Us",
    desc: "Our house cleaning services aren’t only for houses! Every living space deserves a thorough cleaning that you can see and feel. We are proud to offer a program designed to serve residents of apartments, condominiums, and other small spaces.",
    link: "/",
  },
  {
    id: 2,
    img: "/house2.webp",
    title: "Holiday Cleaning Services to Cheer About",
    desc: "When the holidays approach, will your home be ready for guests? Amid all the joy and celebration, holiday cleaning can add stress and put a serious damper on the festivities. Who wants to scrub floors and toilets when there are parties to plan? Don't let the burden of seasonal cleaning cast a shadow over the holidays.",
    link: "/",
  },
  {
    id: 3,
    img: "/c3.jpg",
    title: "Enjoy an Organized Home",
    desc: "When your home feels too cluttered, it can impact your ability to rest and recharge with each new day. Whether you’ve got an overloaded pantry or a closet filled with boxes from your recent move, let the skilled house cleaners at Lily take on the challenge of organizing your rooms!",
    link: "/",
  },
  {
    id: 4,
    img: "/c4.jpg",
    title: "Deep Cleaning",
    desc: "When you hire our team for deep cleaning services, you can expect a level of precision and care that will transform your home. We understand that requesting deep cleaning means the task will not be completely quickly. Our professionals will take the time to meticulously find where dirt, dust, cobwebs and clutter are hiding.",
    link: "/",
  },
  {
    id: 5,
    img: "/house3.png",
    title: "House Cleaning Services",
    desc: "Imagine coming home to a completely clean, fresh-smelling home after a long day of work. You didn't have to lift a finger, dust a surface, or plug in a single vacuum to get it that way. It gives us all a wonderful feeling. We has been cleaning and energizing homes for 10 years.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const House = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обробка прокрутки
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const nextIndex = Math.floor(scrollTop / viewportHeight);
    setCurrentIndex(nextIndex);
  };

  // Додати подію прокрутки
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const ListItem = ({ item }) => {
  return (
  <div className="pItem" >
    <div className="pImg">
      <img src={item.img} alt="" />
    </div>
    <div className="pText">
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
      {/* <a href={item.link}>
        <button>View Project</button>
      </a> */}
    </div>
  </div>
  )
};


  return (
    <div className="house" style={{ height: `${items.length * 100}vh` }}>
      <Header className='header'></Header>
      {items.map((item, index) => (
        <div className="pList" 
          key={item.id}
          style={{
            display: index === currentIndex ? "block" : "none",
            height: "100vh",
            // background: `url(${item.img}) no-repeat center center/cover`,
            // color: "white",
            padding: "20px",
          }}
        >
          {items.map((item)=>(
          <ListItem item={item} key={item.id} />
        ))}
        </div>
      ))}
    </div>
  );
};

export default House;

// const ListItem = ({ item }) => {
//   return (
//   <div className="pItem">
//     <div className="pImg">
//       <img src={item.img} alt="" />
//     </div>
//     <div className="pText">
//       <h1>{item.title}</h1>
//       <p>{item.desc}</p>
//       <a href={item.link}>
//         <button>View Project</button>
//       </a>
//     </div>
//   </div>
//   )
// };

// const Portfolio = () => {
  

//   return (
//     <div className="portfolio" >
//       <Header className='header'></Header>
//       <div className="pList" >
        
//         {items.map((item)=>(
//           <ListItem item={item} key={item.id} />
//         ))}
//       </div>
      
//   </div>
//   )
 
// };

// export default Portfolio;