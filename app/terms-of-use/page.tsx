import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use | Udharo</title>
        <meta
          name="description"
          content="Terms of Use for Udharo bookkeeping app"
        />
      </Head>
      <div style={styles.container}>
        <h1 style={styles.heading}>Terms of Use</h1>

        <p style={styles.paragraph}>
          This app is provided for personal and business bookkeeping. You are
          responsible for the accuracy and management of the data you enter.
        </p>

        <p style={styles.paragraph}>
          The app is provided "as-is". We do not guarantee the accuracy of
          calculations or completeness of features. Use at your own risk.
        </p>

        <p style={styles.paragraph}>
          We reserve the right to update, modify, or discontinue the app at any
          time. Mandatory updates may be required to continue using the app.
        </p>

        <p style={styles.paragraph}>
          Misuse of the app, including entering false information or violating
          laws, may result in suspension or termination of your access.
        </p>

        <p style={styles.paragraph}>
          By using this app, you agree to these terms.
        </p>

        <p style={styles.footer}>
          <Link href="/privacy-policy">Read Privacy Policy</Link>
        </p>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  paragraph: {
    marginBottom: "1rem",
  },
  footer: {
    marginTop: "2rem",
    fontStyle: "italic",
  },
};
