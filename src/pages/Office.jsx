import React, { useState, useEffect } from "react";
import "./office.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Header from "../components/header/Header";

const items = [
  {
    id: 1,
    img: "/office1.webp",
    title: "General Cleaning",
    desc: "General cleaning is the routine maintenance of office spaces, encompassing tasks like vacuuming, dusting, sanitizing, and trash removal. It fosters a clean, healthy environment, enhances employee well-being, and creates a professional atmosphere that leaves a lasting impression on clients.",
    link: "/",
  },
  {
    id: 2,
    img: "/office2.jpeg",
    title: "Approaches to Office Cleaning",
    desc: "Office cleaning approaches are tailored to specific needs, incorporating daily schedules, advanced tools, and eco-friendly products. These strategies focus on thoroughness, efficiency, and sustainability, ensuring spaces are consistently clean, hygienic, and conducive to a productive and welcoming work environment.",
    link: "/",
  },
  {
    id: 3,
    img: "/office3.jpg",
    title: "Cleaning After Large Events",
    desc: "Cleaning after large events involves meticulous trash disposal, stain removal, and sanitizing high-touch areas. Professionals focus on restoring the office to its original state quickly and efficiently, minimizing downtime and preserving a clean, organized, and professional workspace for employees and visitors.",
    link: "/",
  },
  {
    id: 4,
    img: "/office4.webp",
    title: "Green Cleaning Services",
    desc: "Over the past five decades, consumers and businesses have become much more thoughtful about how cleaning chemicals can affect the environment and personal health. Thanks to growing awareness of how important safe chemicals are, green cleaning products are now a multi-billion dollar industry.",
    link: "/",
  },
  {
    id: 5,
    img: "/office5.jpg",
    title: "Detailing",
    desc: "Detailing targets overlooked areas like baseboards, window sills, keyboards, and vents for deep cleaning. This process eliminates hidden dirt and germs, significantly enhancing cleanliness while creating a healthier, more visually appealing environment that promotes comfort and productivity for office occupants.",
    link: "/",
  },
];

const Office = () => {
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
    <div className="office" style={{ height: `${items.length * 100}vh` }}>
      <Header className="header"></Header>
      {items.map((item, index) => (
        <div className="pContainer">
          <div
            className="backgroundImg"
            id={`item-${index}`}
            key={item.id}
            style={{
              background: `url(${item.img}) no-repeat center center/cover`,
            }}
          ></div>
          <div className="textContainer">
            <div className="textBackground">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
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
export default Office;

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
