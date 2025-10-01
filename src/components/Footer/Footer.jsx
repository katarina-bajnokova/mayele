import styles from "./Footer.module.scss";

export default function Footer({
  showExplore = true,
  showCompany = true,
  showSupport = true,
  showSocial = true,
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links}>
          {showExplore && (
            <div>
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#play">Play</a>
                </li>
                <li>
                  <a href="#learn">Learn</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>
          )}

          {showCompany && (
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#press">Press</a>
                </li>
                <li>
                  <a href="#partners">Collaborations</a>
                </li>
              </ul>
            </div>
          )}

          {showSupport && (
            <div>
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms of Use</a>
                </li>
              </ul>
            </div>
          )}

          {showSocial && (
            <div>
              <h4>Follow Us</h4>
              <ul className={styles.socials}>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Mayele. All rights reserved.</p>
      </div>
    </footer>
  );
}
