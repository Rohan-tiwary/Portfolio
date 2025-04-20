import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white py-16 px-4 flex justify-center items-center"
    >
      <div className="max-w-3xl w-full">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="mt-12 bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-700 hover:bg-gray-600 transition rounded-md font-semibold text-white shadow-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
