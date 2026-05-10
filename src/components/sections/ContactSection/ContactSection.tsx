import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import styles from "./ContactSection.module.css";

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

interface ContactSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  contact?: ContactInfo;
  showMap?: boolean;
}

export default function ContactSection({
  eyebrow = "Contact us",
  title = "Get in touch",
  subtitle = "Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.",
  contact = {
    email: "apielago.va@gmail.com",
    phone: "+(63) 993 841 2412",
    address: "Goa, Camarines Sur - No Specific Business Location yet",
  },
}: ContactSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API call, email service)
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id='ContactID'>
      <div className={styles.container}>
        <div className={styles.header}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.layout}>
          <div className={styles.info}>
            {contact.email && (
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FiMail /></div>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a href={`mailto:${contact.email}`} className={styles.infoValue}>{contact.email}</a>
                </div>
              </div>
            )}
            {contact.phone && (
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FiPhone /></div>
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <a href={`tel:${contact.phone}`} className={styles.infoValue}>{contact.phone}</a>
                </div>
              </div>
            )}
            {contact.address && (
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FiMapPin /></div>
                <div>
                  <span className={styles.infoLabel}>Address</span>
                  <span className={styles.infoValue}>{contact.address}</span>
                </div>
              </div>
            )}
          </div>

          {/*
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className={styles.input}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    className={styles.input}
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    className={styles.textarea}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message</button>
              </form>
            )}


            

          </div>

          */}
        </div>
      </div>
    </section>
  );
}
