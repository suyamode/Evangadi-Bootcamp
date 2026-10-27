import React from "react";
import bannerLogo from "../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "../styles/banner.module.css";

function Banner() {
  return (
    <div className={`container-fluid ${styles.banner} text-white`}>
      <div className={styles.content}>
        {/* image */}
        <img src={bannerLogo} alt="Netflix Logo" className={styles.logo} />
        {/* title */}
        <h1 className={styles.title}>Bridgerton</h1>
        {/* description */}
        <h1 className={styles.desc}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as weight siblings seek their perfect match amid London's scandals and
          soirees.
        </h1>

        {/* buttons */}
        <div className={styles.btns}>
          <button>
            <Play size={20} />
            Play
          </button>
          <button>
            <Info size={20} />
            My List
          </button>
        </div>
        {/*fading */}
        <div className={styles.fadeBox}></div>
      </div>
    </div>
  );
}

export default Banner;
