import React from "react";
import styles from "./App.module.css";
import {
  Closing,
  Footer,
  Header,
  Navigation,
  Services,
  Team,
  VideoSection,
} from "./components";
import { motion, useScroll, useSpring } from "framer-motion";
import Login from "./Pages/Login";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div
        className={`app ${styles.heroBg} ${styles.navBar} lg:px-[123px] px-[20px] pb-[200px]`}
      >
        <motion.div
          className={`${styles.progressBar}`}
          style={{ scaleX, zIndex: 200 }}
        />
        <Navigation />
        <Header />
        <VideoSection />
        <Team />
        <Services />
      </div>
      <Closing />
      <Footer />
      {/* <Login /> */}
    </>
  );
}

export default App;
