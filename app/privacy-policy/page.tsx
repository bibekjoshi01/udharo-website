import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Udharo</title>
        <meta
          name="description"
          content="Privacy Policy for Udharo bookkeeping app"
        />
      </Head>
      <div style={styles.container}>
        <h1 style={styles.heading}>Privacy Policy</h1>

        <p style={styles.paragraph}>
          Your data stays securely on your device. We do not share your personal
          information with third parties. If cloud backup is added in the
          future, your data will never be uploaded without your consent.
        </p>

        <p style={styles.paragraph}>
          We may collect anonymized analytics and crash reports to improve the
          app experience.
        </p>

        <p style={styles.paragraph}>
          By using this app, you consent to this Privacy Policy.
        </p>

        <p style={styles.paragraph}>
          For questions about privacy, please contact us at{" "}
          <a href="mailto:support@udharo.cloud">support@udharo.cloud</a>.
        </p>

        <p style={styles.footer}>
          <Link href="/terms-of-use">Read Terms of Use</Link>
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
