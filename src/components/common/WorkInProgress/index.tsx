// import Lottie from "lottie-react";
import Hero from "../Hero";
import styles from "./styles.module.scss";
import blockAnimation from "@/animations/blocks.json";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const WorkInProgress = () => {
  return (
    <div className={styles.wip}>
      <Hero
        span="Coming Soon"
        paragraphs={["We are launching this page very soon."]}
      />
      <Lottie
        animationData={blockAnimation}
        loop={true}
        className="absolute bottom-[140px]"
      />
    </div>
  );
};

export default WorkInProgress;
