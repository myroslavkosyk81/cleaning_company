import { Canvas } from "@react-three/fiber";
import "./home.css";
import Speech from "../components/home/Speech";
import { motion } from "motion/react";
// import Shape from "../components/hero/Shape";
import { Suspense } from "react";
import backgroundVideo from "/video.mp4"; // Імпортуйте відео
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: -0,
    opacity: 1,
    transition: {
      duration: 1.1,
      staggerChildren: 0.7,
    },
  },
};
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 1.1,
      staggerChildren: 0.7,
    },
  },
};

const Home = () => {
  return (
    <div className="hero">
      <Header className="header"></Header>
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I`m LILY</span>
        </motion.h1>
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>
            We are TOP rated cleaning company
          </motion.h2>
          <motion.p variants={awardVariants}>
            We clean all you need. And more...
          </motion.p>
          {/* <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/vite.svg" alt="" />
            <motion.img variants={awardVariants} src="/vite.svg" alt="" />
            <motion.img variants={awardVariants} src="/vite.svg" alt="" />
          </motion.div> */}
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 3 }}
            className="certificateSmall"
          >
            <img src="/certificate2.png" alt="" />
            Certificate
            <br />
            of Professional
            <br />
            Cleaning
          </motion.div>
        </motion.div>
        <motion.a
          animate={{ y: [0, 10], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <motion.div
        variants={followVariants}
        initial="initial"
        animate="animate"
        className="followSmall"
      >
        <motion.a variants={followVariants} href="/">
          <img src="/instagram.png" alt="" />
        </motion.a>
        <motion.a variants={followVariants} href="/">
          <img src="/facebook.png" alt="" />
        </motion.a>
        <motion.a variants={followVariants} href="/">
          <img src="/youtube.png" alt="" />
        </motion.a>
        <motion.div
          variants={followVariants}
          className="followSmallTextContainer"
        >
          <div className="followSmallText">Follow us</div>
        </motion.div>
      </motion.div>
      <div className="hSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.facebook.com/sasha.voytenko.1?locale=uk_UA"
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">Follow us</div>
          </motion.div>
        </motion.div>
        <Speech />
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="certificate"
        >
          <img src="/certificate2.png" alt="" />
          Certificate
          <br />
          of Professional
          <br />
          Cleaning
        </motion.div>
        <motion.a
          href="/contact"
          className="contactLink"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 3 }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            whileHover={{ rotate: 'none' }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="48%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* <Canvas>
          <Suspense fallback="Loading...">
            <Shape />
          </Suspense>
          
        </Canvas> */}
        {/* <div className="hImg">
            <img src="/hero.png" alt="" />
         </div> */}
        <div className="video-container">
          {/* Відео */}
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Ваш браузер не підтримує відео.
          </video>

          {/* Контент */}
          <div className="content">
            {/* <h1>Ваш текстxdscdscddcdc</h1>
        <p>Опис або будь-який інший контент.</p> */}
          </div>
        </div>
      </div>
      
        <Footer className="footer"></Footer>
      
      
    </div>
  );
};
export default Home;
