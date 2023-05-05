import Head from "next/head";
import Abt from "./Abt";
import styles from "@/styles/contact.module.css";

export default function Home() {
  return (
    <>
      <Head></Head>
      <header className="header">
        <h3>
          {" "}
          <span className="hello">Hello! </span>
          My name is Emmanuel, and I&apos;m a <br /> <span className="duty" />
        </h3>
        <div className="desk">{/* <Abt /> */}</div>
      </header>
      <div className="main">
        <Abt />
      </div>

      <div className={styles.contact}>
        <form>
          <h1 className={styles.Getintouch}>Get in Touch</h1>
          <div>
            <div className={styles.col1}>
              <input
                className={styles.text1}
                type="text"
                id="fname"
                placeholder="Firstname"
                required={true}
              ></input>
              <input
                className={styles.text1}
                type="text"
                id="lname"
                placeholder="Lastname"
                required={true}
              ></input>
            </div>
          </div>

          <div className={styles.col2}>
            <div className={styles.col1}>
              <input
                type="text"
                placeholder="Email"
                className={styles.text1}
                required={true}
              ></input>
              <input
                type="number"
                placeholder="Phone No"
                className={styles.phoneno}
                required={true}
              ></input>
            </div>
          </div>
          <input
            type="textarea"
            placeholder="Message"
            className={styles.textarea}
            required={true}
          ></input>
          <div>
            <input
              type="submit"
              placeholder="Submit"
              className={styles.submit}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}
