import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";
import event from "../assets/images/event.jpeg";
import Footer from "../component/Footer";

const ContactPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        {
          to_name: "Admin",
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
          import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Hero Section */}
      <div className="relative bg-[#02278a]">
        <div className="absolute inset-0">
          <img src={event} alt="Security Team" className="w-full h-full sm:h-[32vh] object-cover" />
          <div className="absolute inset-0 bg-[#02278a]/50"></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-white sm:leading-relaxed">
            We're here to help you with all your security needs. Whether you have a question, need more
            information about our services, or are ready to partner with us, the N-Force Security team is ready
            to assist.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white flex-grow">
        <div className=" max-w-7xl mx-auto py-12">
          {/* Contact Info */}
          <div className="mb-12 space-y-6 px-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#02278a] p-2 rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-blue-900 text-sm md:text-lg">+61 422 446 444</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#02278a] p-2 rounded-full">
                <Mail size={20} className="text-white" />
              </div>
              <span className="text-blue-900 text-sm md:text-lg">Operations@nforcesecurity.net</span>
            </div>
            {/* <div className="flex items-center gap-4">
              <div className="bg-[#02278a] p-2 rounded-full">
                <MapPin size={20} className="text-white" />
              </div>
              <span className="text-blue-900 text-sm md:text-lg">4 Guell Lane, Clyde North, VIC 3978</span>
            </div> */}
          </div>

          {/* Form Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Write to us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex gap-1">
                  <label className="block text-blue-900 font-medium mb-2">First Name</label>
                  <span className="text-red-600 text-lg font-bold">*</span>
                 </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full text-black p-3 border border-gray-300 rounded"
                    placeholder="Your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                <div className="flex gap-1">
                  <label className="block text-blue-900 font-medium mb-2">last Name</label>
                  <span className="text-red-600 text-lg font-bold">*</span>
                 </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full text-black p-3 border border-gray-300 rounded"
                    placeholder="Your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <div className="flex gap-1">
                  <label className="block text-blue-900 font-medium mb-2">Email</label>
                  <span className="text-red-600 text-lg font-bold">*</span>
                 </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-black p-3 border border-gray-300 rounded"
                    placeholder="Your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                 <div className="flex gap-1">
                  <label className="block text-blue-900 font-medium mb-2">Phone</label>
                  <span className="text-red-600 text-lg font-bold">*</span>
                 </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 text-black border border-gray-300 rounded"
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <div className="flex gap-1">
                  <label className="block text-blue-900 font-medium mb-2">Message</label>
                  <span className="text-red-600 text-lg font-bold">*</span>
                 </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full text-black p-3 border border-gray-300 rounded"
                  placeholder="Your message"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button type="submit" className="bg-[#02278a] cursor-pointer text-white px-8 py-3 rounded font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
