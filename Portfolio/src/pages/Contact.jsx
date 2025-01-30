import React from 'react';
export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Alex Newcomer" required />
        <input type="email" placeholder="AlexMNewcomer@gmail.com" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
import './Contact.css';