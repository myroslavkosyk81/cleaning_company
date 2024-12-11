import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/c1.jpg",
    title: "Apartment Cleaning Services",
    desc: "Our house cleaning services aren’t only for houses! Every living space deserves a thorough cleaning that you can see and feel. Merry Maids® is proud to offer a program designed to serve residents of apartments, condominiums, and other small spaces. Our Merry Maids® for Small Spaces service offers customized pricing to groups of residents in the same apartment complex who register for weekly or bi-weekly service. In addition, customers who start apartment cleaning services through this program will receive a discount applied to their first-time-in service fee.",
    link: "/",
  },
  {
    id: 2,
    img: "/c2.jpg",
    title: "Holiday Cleaning Services to Cheer About",
    desc: "When the holidays approach, will your home be ready for guests? Amid all the joy and celebration, holiday cleaning can add stress and put a serious damper on the festivities. Who wants to scrub floors and toilets when there are parties to plan? Don't let the burden of seasonal cleaning cast a shadow over the holidays. Get your home cleaned top-to-bottom by our team of professionals before loved ones arrive.",
    link: "/",
  },
  {
    id: 3,
    img: "/c3.jpg",
    title: "Enjoy an Organized Home",
    desc: "When your home feels too cluttered, it can impact your ability to rest and recharge with each new day. Whether you’ve got an overloaded pantry or a closet filled with boxes from your recent move, let the skilled house cleaners at Merry Maids® take on the challenge of organizing your rooms! We’re minimalists at heart, and we’re proud to offer organizational services and solutions that will declutter your life from top-to-bottom.",
    link: "/",
  },
  {
    id: 4,
    img: "/c4.jpg",
    title: "Deep Cleaning",
    desc: "When you hire our team for deep cleaning services, you can expect a level of precision and care that will transform your home. We understand that requesting deep cleaning means the task will not be completely quickly. Our professionals will take the time to meticulously find where dirt, dust, cobwebs and clutter are hiding. They will happily accommodate any special requests you may have so that your home looks and feels exactly the way you want.",
    link: "/",
  },
  {
    id: 5,
    img: "/c5.jpg",
    title: "House Cleaning Services",
    desc: "Imagine coming home to a completely clean, fresh-smelling home after a long day of work. You didn't have to lift a finger, dust a surface, or plug in a single vacuum to get it that way. It gives us all a wonderful feeling. Merry Maids® is a trusted name in home cleaning services that has been cleaning and energizing homes for 40 years.",
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

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        {/* <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        /> */}
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;