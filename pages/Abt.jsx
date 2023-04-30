import Link from "next/link";
import styles from "@/styles/Abt.module.css";

const Abt = () => (
  <main className={styles.mobile}>
    <div className={styles.text}>
      <p>
        My name is Emmanuel Abiodun, I am Software Engineer (web) I am vast with
        Javascript, Node, TypeScript, React.JS, Next.JS. I also deals with
        Project Management. I current live in lagos, Nigeria and I love to work
        remotely. You can always connect with me via my socials{" "}
      </p>
      <ul>
        <li>
          <Link href="https://github.com/Iamdonemmy">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/emmanuel-seun-abiodun-32829920b">
            <i className="fa-brands fa-linkedin" />
            <span>LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/iamDONEMMy01?t=0QtxTwuro3BE_gwm2ZWaFg&s=09">
            <i className="fa-brands fa-twitter" />
            <span>Twitter</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.link}>
      <Link href="https://docs.google.com/document/d/1guLVGmMHdhOEwZAVogeYqqd24TH_Ub-bFpnwpJIYpJY/edit?usp=sharing">
        Checkout my resume
      </Link>
      <Link href="/projects">See my project</Link>
    </div>
  </main>
);

export default Abt;
