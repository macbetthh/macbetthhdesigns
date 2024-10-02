import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
            <form className="mt-4 max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="border rounded w-full p-2" />
                <input type="email" placeholder="Your Email" className="border rounded w-full p-2 mt-4" />
                <textarea placeholder="Your Message" className="border rounded w-full p-2 mt-4" rows="4"></textarea>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
