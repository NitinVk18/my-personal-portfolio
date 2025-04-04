import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("https://my-personal-portfolio-gamma-ten.vercel.app/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (result.success) {
            alert("Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Failed to send message.");
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-2xl w-full p-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl shadow-lg mt-32">
                <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect! 🚀</h2>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message"
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white py-3 rounded-lg font-bold transition"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300">Or reach me on</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://www.linkedin.com/in/nitin-chamoli-b35586315/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">LinkedIn</a>
                        <a href="https://github.com/NitinVk18" className="text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">GitHub</a>
                        <a href="https://www.youtube.com/@nitinchamoli9530" className="text-red-500 hover:text-red-700 dark:hover:text-red-400">YouTube</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
