import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>+ 
        <h1 style={styles.heading}>Contact Us</h1>
      </header>
          
      <section style={styles.section}>
        <p style={styles.paragraph}>
            
          Have questions, suggestions, or need assistance? 
          <p>We're here to help!</p>
        </p>

        <p style={styles.paragraph}>
          Contact our customer support team at{' '}
          <a href="mailto:info@foodorderingportal.com" style={styles.link}>
            info@bookorderingportal.com
          </a>
        </p>

        <p style={styles.paragraph}>
          You can also reach us by phone at <strong style={styles.strong}>123-456-7890</strong>.
        </p>
      </section>

      <footer style={styles.footer}>
        &copy; 2023 Book Ordering . All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f2f2f2', // Set the background color
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#343a40',
    color: '#ffffff',
    padding: '1rem',
    textAlign: 'center',
  },
  section: {
    flex: 1, // Allow the section to grow and fill available space
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  heading: {
    color: 'white',
  },
  paragraph: {
    color: '#555',
    marginBottom: '15px',
  },
  link: {
    color: '#e44d26',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  strong: {
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#343a40',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem',
  },
};

export default ContactPage;