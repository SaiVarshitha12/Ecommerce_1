import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We're here to help! For any inquiries or assistance, please contact the appropriate team below:
      </p>

      <ul>
        <li>
          <strong>Sai Varshitha</strong> – Customer Support<br />
          📞 +91 8309122019<br />
          📧 <a href="mailto:saivarshitha95@gmail.com">saivarshitha95@gmail.com</a>
        </li>
        <li>
          <strong>Harsha Priya</strong> – Sales Inquiries<br />
          📞 +91 7386444760<br />
          📧 <a href="mailto:harshapriya0627@gmail.com">harshapriya0627@gmail.com</a>
        </li>
        <li>
          <strong>Kavya</strong> – Technical Support<br />
          📞 +91 9951631477<br />
          📧 <a href="mailto:rajeev@onthesole.com">rajeev@onthesole.com</a>
        </li>
      </ul>

      <p>
        Alternatively, you can reach us at our general support email:{" "}
        <a href="mailto:support@OnTheSole.com">support@OnTheSole.com</a>. We aim to respond within 24 hours.
      </p>

      <p>
        Follow us on social media for updates and announcements:<br />
        🌐 <a href="https://www.instagram.com/onthesole" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://www.facebook.com/onthesole" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
        <a href="https://www.twitter.com/onthesole" target="_blank" rel="noopener noreferrer"> Twitter</a>
      </p>
    </div>
  );
}

export default Contact;
