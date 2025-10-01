import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import InfoCard from "../../components/InfoCard/InfoCard";
import Footer from "../../components/Footer/Footer";
import { FaBrain, FaBook, FaChartLine } from "react-icons/fa";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Navbar />

      <div className={styles.contentWrapper}>
        <header className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Apprends le Lingala en <br /> t’amusant
              </h1>
              <Button label="commencer" size="lg" variant="primary" />
            </div>
            <div className={styles.heroMascot}>
              <img
                src="/images/okapi/okapi.webp"
                alt="Okapi Mayele Mascot"
                className={styles.okapi}
              />
            </div>
          </div>
        </header>

        <section className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <InfoCard
                icon={<FaBrain />}
                title="Mini-jeux"
                description="Apprends des mots et expressions en lingala de manière ludique."
                variant="primary"
              />
              <InfoCard
                icon={<FaBook />}
                title="Livre de mots"
                description="Explore et révise les mots que tu as débloqués."
                variant="secondary"
              />
              <InfoCard
                icon={<FaChartLine />}
                title="Suivi des progrès"
                description="Suis ton apprentissage, niveau après niveau."
                variant="accent"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
