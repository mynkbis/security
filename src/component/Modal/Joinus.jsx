import { useState } from "react";
import emailjs from "emailjs-com";

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Define email parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_3cg9h18",   // Replace with your EmailJS Service ID
        "template_hsca93c",  // Replace with your EmailJS Template ID
        templateParams,
        "G0RhYgLZo7Ox57odW"    // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent!");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
          onClose();
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send your message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000d6] bg-opacity-10 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl relative common-shadow">
        <button onClick={onClose} className="absolute right-4 top-4 cursor-pointer text-blue-900 hover:text-blue-700 text-3xl font-bold">
          ×
        </button>

        <h2 className="text-3xl font-bold mb-6 text-blue-900">Request A Quote</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
            <div>
              <label className="block mb-1">First Name <span className="text-red-600">*</span></label>
              <input type="text" required className="w-full p-2 border border-gray-400 rounded"
                placeholder="Your first name" value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input type="text" className="w-full p-2 border border-gray-400 rounded"
                placeholder="Your last name" value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
            <div>
              <label className="block mb-1">Email <span className="text-red-600">*</span></label>
              <input type="email" required className="w-full p-2 border border-gray-400 rounded"
                placeholder="Your email" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label className="block mb-1">Phone <span className="text-red-600">*</span></label>
              <input type="tel" required className="w-full p-2 border border-gray-400 rounded"
                placeholder="Your phone number" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full p-2 border border-gray-400 rounded h-32"
              placeholder="Your message" value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </div>

          <button type="submit" className="bg-blue-900 text-white px-8 py-2 rounded hover:bg-blue-800 transition-colors"
            disabled={isSending}>
            {isSending ? "SENDING..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
