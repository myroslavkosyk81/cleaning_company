import React, { useState, useEffect } from "react";
import "./portfolioThird.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Header from "../components/header/Header";

const items = [
  {
    id: 1,
    img: "/c1.jpg",
    title: "Apartment Cleaning Services",
    desc: "Our house cleaning services aren’t only for houses! Every living space deserves a thorough cleaning that you can see and feel. We are proud to offer a program designed to serve residents of apartments, condominiums, and other small spaces.",
    link: "/",
  },
  {
    id: 2,
    img: "/c2.jpg",
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
    img: "/c5.jpg",
    title: "House Cleaning Services",
    desc: "Imagine coming home to a completely clean, fresh-smelling home after a long day of work. You didn't have to lift a finger, dust a surface, or plug in a single vacuum to get it that way. It gives us all a wonderful feeling. We has been cleaning and energizing homes for 10 years.",
    link: "/",
  },
  {
    id: 6,
    img: "/c6.jpg",
    title: "Office Cleaning Services",
    desc: "Our office cleaning services offer comprehensive solutions, including daily cleaning, dusting, vacuuming, restroom sanitation, window washing, and waste management. We provide customized plans to maintain a clean, healthy, and professional environment, boosting productivity and ensuring employee satisfaction.",
    link: "/",
  },
];

const Portfolio2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обробка скролу з плавним переходом
  const handleWheel = (event) => {
    event.preventDefault(); // Забороняє стандартну прокрутку

    if (event.deltaY > 0) {
      // Скрол вниз
      setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
    } else if (event.deltaY < 0) {
      // Скрол вгору
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  // Додаємо подію колеса миші
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Скрол до потрібного елементу
  useEffect(() => {
    const element = document.getElementById(`item-${currentIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <div className="portfolio" style={{ height: `${items.length * 100}vh` }}>
      <Header className="header"></Header>
      {items.map((item, index) => (
        <div className="mainContainer">
          <div className="card-container">
          <div className="image-block">
            <div
              className="profile-image"
              id={`item-${index}`}
              key={item.id}
              style={{
                background: `url(${item.img}) no-repeat center center/cover`,
              }}
            ></div>
          </div>
            <div className="info-block">
              <h1 className="name">{item.title}</h1>
              <p className="description">{item.desc}</p>
              {/* <a href={item.link} style={{ color: "#f2f2f2" }}>
              Read More
            </a> */}
            </div>
          </div>
        </div>
        
        
      ))}
    </div>
  );
};
export default Portfolio2;

// import React, { useState, useEffect } from "react";

// const items = [
//   {
//     id: 1,
//     img: "/c1.jpg",
//     title: "Apartment Cleaning Services",
//     desc: "Our house cleaning services aren’t only for houses! Every living space deserves a thorough cleaning that you can see and feel. We are proud to offer a program designed to serve residents of apartments, condominiums, and other small spaces.",
//     link: "/",
//   },
//   {
//     id: 2,
//     img: "/c2.jpg",
//     title: "Holiday Cleaning Services to Cheer About",
//     desc: "When the holidays approach, will your home be ready for guests? Amid all the joy and celebration, holiday cleaning can add stress and put a serious damper on the festivities. Who wants to scrub floors and toilets when there are parties to plan? Don't let the burden of seasonal cleaning cast a shadow over the holidays.",
//     link: "/",
//   },
//   {
//     id: 3,
//     img: "/c3.jpg",
//     title: "Enjoy an Organized Home",
//     desc: "When your home feels too cluttered, it can impact your ability to rest and recharge with each new day. Whether you’ve got an overloaded pantry or a closet filled with boxes from your recent move, let the skilled house cleaners at Lily take on the challenge of organizing your rooms!",
//     link: "/",
//   },
//   {
//     id: 4,
//     img: "/c4.jpg",
//     title: "Deep Cleaning",
//     desc: "When you hire our team for deep cleaning services, you can expect a level of precision and care that will transform your home. We understand that requesting deep cleaning means the task will not be completely quickly. Our professionals will take the time to meticulously find where dirt, dust, cobwebs and clutter are hiding.",
//     link: "/",
//   },
//   {
//     id: 5,
//     img: "/c5.jpg",
//     title: "House Cleaning Services",
//     desc: "Imagine coming home to a completely clean, fresh-smelling home after a long day of work. You didn't have to lift a finger, dust a surface, or plug in a single vacuum to get it that way. It gives us all a wonderful feeling. We has been cleaning and energizing homes for 10 years.",
//     link: "/",
//   },
// ];

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Обробка скролу з плавним переходом
//   const handleWheel = (event) => {
//     event.preventDefault(); // Забороняє стандартну прокрутку

//     if (event.deltaY > 0) {
//       // Скрол вниз
//       setCurrentIndex((prev) =>
//         prev < items.length - 1 ? prev + 1 : prev
//       );
//     } else if (event.deltaY < 0) {
//       // Скрол вгору
//       setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
//     }
//   };

//   // Додаємо подію колеса миші
//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   // Скрол до потрібного елементу
//   useEffect(() => {
//     const element = document.getElementById(`item-${currentIndex}`);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [currentIndex]);

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div
//           id={`item-${index}`}
//           key={item.id}
//           style={{
//             height: "100vh",
//             background: `url(${item.img}) no-repeat center center/cover`,
//             color: "white",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             padding: "20px",
//           }}
//         >
//           <h1>{item.title}</h1>
//           <p>{item.desc}</p>
//           <a href={item.link} style={{ color: "#f2f2f2" }}>
//             Read More
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
