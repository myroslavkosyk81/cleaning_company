import React, { useState, useEffect } from "react";
import "./apartment.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Header from "../components/header/Header";

const items = [
  {
    id: 1,
    img: "/apart1.jpg",
    title: "Apartment Cleaning Services",
    desc: "Our house cleaning services aren’t only for houses! Every living space deserves a thorough cleaning that you can see and feel. We are proud to offer a program designed to serve residents of apartments, condominiums, and other small spaces.",
    link: "/",
  },
  {
    id: 2,
    img: "/apart2.png",
    title: "What we clean?",
    desc: "We’ll carefully clean your apartment space from top to bottom, including: Ceiling fans, Baseboards, Under furniture, Mirrors and windows Pictures and other wall art",
    link: "/",
  },
  {
    id: 3,
    img: "/apart3.jpg",
    title: "Enjoy an Organized Home",
    desc: "A Big Clean for Tight Spaces Contrary to what you might think, a small apartment space doesn’t mean an easy clean. Our seasoned apartment cleaning professionals know where to look and have the processes and techniques that will bring the shine and sparkle to every inch of your apartment or condo.",
    link: "/",
  },
  {
    id: 4,
    img: "/apart4.jpg",
    title: "A Happy Family Begins with a Clean Space",
    desc: "When most people think of deep cleaning, they think of sweeping, mopping, vacuuming, and dusting. Though these tasks make up most of the everyday chores, oftentimes your home requires a bit more. Sometimes, you need a detailed clean that will help you lead a healthy life.",
    link: "/",
  },
  {
    id: 5,
    img: "/apart5.png",
    title: "Sanitary Solutions for the Toughest Rooms in Your Home",
    desc: "Over the past five decades, consumers and businesses have become much more thoughtful about how cleaning chemicals can affect the environment and personal health. Thanks to growing awareness of how important safe chemicals are, green cleaning products are now a multi-billion dollar industry.",
    link: "/",
  },
];

const Apartment = () => {
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
    <div className="apartment" style={{ height: `${items.length * 100}vh` }}>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Apartment;
