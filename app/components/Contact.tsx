'use client'
import React, { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setLoading(true);
  
    const data = new FormData(event.target);
  
    try {
      const response = await fetch("https://formspree.io/f/mzblvzrz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        console.log("Message sent successfully");
        setMessageSent(true);
        setLoading(false);
        event.target.reset();
      } else {
        console.error("Error sending message");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  }
  
  return (
    <div>
      {messageSent ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          Message sent successfully!
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col my-4">
          <label className="font-bold text-gray-800" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            className="p-4 bg-gray-50 border border-gray-100"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="w-full flex flex-col my-4">
          <label className="font-bold text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            type="email" 
			name="email"
            minLength={5}
            maxLength={150}
            required
            className="p-4 bg-gray-50 border border-gray-100"
            autoComplete="off"
            id="email"
          />
        </div>
        <div>
          <label className="font-bold text-gray-800" htmlFor="message">
            Message
          </label>
          <textarea
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="w-full p-4 bg-gray-50 border border-gray-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-white-500 font-bold py-3 px-4 whitespace-nowrap transition">
          Send Message
        </button>
      </form>
    </div>
  );
}


