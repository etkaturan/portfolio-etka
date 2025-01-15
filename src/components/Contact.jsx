import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send formData to a backend API here
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);  // Reset the form after 3 seconds
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-5xl font-bold mb-12">Contact Me</h2>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg font-bold"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-green-400 text-xl">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
