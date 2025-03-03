import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({}); // For storing validation errors

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    // Phone validation: only numbers and an optional '+' at the start
    const phonePattern = /^[+]?[0-9]{1,12}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric and may include a '+' at the start.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // If validation fails, do not proceed

    setIsSending(true);

    // Define email parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send( "service_uossrjm","template_pwoph4b", templateParams,
      "FonFzKs79oqkXpYuy")  
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          toast.success("Message sent successfully!", { position: "top-left" });
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
          onClose();
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.warn("Failed to send your message. Please try again later.", { position: "top-left" });
        }
      )
      .finally(() => setIsSending(false));
  };

  // Handle the phone input change and ensure that it only contains numbers and an optional '+'
  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    // Allow only numbers and '+' at the beginning
    const cleanedPhone = phone.replace(/[^0-9+]/g, "");
    setFormData({ ...formData, phone: cleanedPhone });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000d6] bg-opacity-10 flex items-center justify-center sm:pt-40 sm:p-10 p-6 overflow-scroll z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl relative common-shadow">
        <button onClick={onClose} className="absolute right-4 top-4 cursor-pointer text-blue-900 hover:text-blue-700 text-3xl font-bold">
          ×
        </button>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Share Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First and Last Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
            <div>
              <label className="block mb-1">First Name <span className="text-red-600">*</span></label>
              <input
                type="text"
                required
                className="w-full text-black p-2 border border-gray-400 rounded"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                className="w-full p-2 text-black border border-gray-400 rounded"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
            <div>
              <label className="block mb-1">Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                required
                className="w-full text-black p-2 border border-gray-400 rounded focus:ring-1 focus-ring-[#002B4E]"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block mb-1">Phone <span className="text-red-600">*</span></label>
              <input
                type="tel"
                required
                length={10}
                maxLength={10}
                className="w-full text-black p-2 border border-gray-400 rounded"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handlePhoneChange} // Use the custom handlePhoneChange function
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-1 text-blue-900">Message</label>
            <textarea
              className="w-full p-2 border border-gray-400 text-black rounded h-32"
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="bg-[#002B4E] text-white px-8 py-2 cursor-pointer rounded hover:bg-blue-800 transition-colors"
            disabled={isSending}
          >
            {isSending ? "SENDING..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
