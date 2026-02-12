import React, { useEffect, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { contactMethods, offices, servicesC } from "../data/text";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 800,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedSection animation="fade-down" duration={1000}>
              <span className="px-5 py-2 bg-secondary-100 text-secondary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Get in Touch
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-heading">
                Let's Start a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Conversation
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} duration={1000}>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-para">
                Have questions? Need professional advice? We're here to help.
                Reach out to us and let's discuss how we can support your
                business growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <a
                  href={method.link}
                  className="block group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 hover:border-primary-400"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-primary-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-lg text-text-primary font-para mb-2">
                    {method.info}
                  </p>
                  <p className="text-sm text-text-tertiary font-para">
                    {method.subInfo}
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10 lg:py-20  bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection animation="fade-right" duration={1000}>
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-primary-100">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading">
                      Send Us a Message
                    </h2>
                    <p className="text-text-primary font-para">
                      Fill out the form below and we'll get back to you within
                      24 hours
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="py-16 text-center space-y-6 animate-fade-in">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                          className="w-10 h-10 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 font-heading">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-text-primary font-para">
                        Thank you for reaching out. We'll respond to your
                        inquiry shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 font-para"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 font-para"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 font-para"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 font-para"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 font-para"
                        >
                          <option value="">Select a service</option>
                          {servicesC.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 resize-none font-para"
                          placeholder="Tell us about your requirements..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold text-lg rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Send Message
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>

                      <p className="text-sm text-text-tertiary text-center font-para">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <AnimatedSection animation="fade-left" duration={1000}>
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 font-heading">
                    Quick Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Business Hours</p>
                        <p className="text-sm text-white/90 font-para">
                          Monday - Saturday
                          <br />
                          9:30 AM to 7 PM IST
                        </p>
                      </div>
                    </div>

                    {/* <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Response Time</p>
                        <p className="text-sm text-white/90 font-para">
                          Within 24 hours on business days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Free Consultation</p>
                        <p className="text-sm text-white/90 font-para">
                          First consultation is always free
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </AnimatedSection>

              {/* Company Details */}
              <AnimatedSection
                animation="fade-left"
                delay={200}
                duration={1000}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-primary-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                    Company Details
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between py-3 border-b border-primary-100">
                      <span className="font-semibold text-gray-700">
                        ICAI Registration
                      </span>
                      <span className="text-primary-600 font-bold">
                        FRN 126763W
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-primary-100">
                      <span className="font-semibold text-gray-700">
                        PAN Number
                      </span>
                      <span className="text-primary-600 font-bold">
                        ABGFP5145E
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-primary-100">
                      <span className="font-semibold text-gray-700">
                        GST Number
                      </span>
                      <span className="text-primary-600 font-bold">
                        27ABGFP5145E1Z9
                      </span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-semibold text-gray-700">
                        Established
                      </span>
                      <span className="text-primary-600 font-bold">2005</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="locations" className="py-10 lg:py-20  bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-secondary-100 text-secondary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Our Offices
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Visit Us at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Our Locations
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <div className="h-full p-8 bg-gradient-to-br from-primary-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 hover:border-primary-400">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-md">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-heading">
                        {office.city}
                      </h3>
                      <span className="text-sm text-primary-600 font-semibold">
                        {office.type}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-text-primary font-para text-sm lg:text-base">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-text-primary hover:text-primary-600 transition-colors font-para  text-sm lg:text-base"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-text-primary font-para  text-sm lg:text-base">
                        {office.timings}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {/* <section className="py-10 lg:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                FAQs
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Questions
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-primary-100 hover:border-primary-400 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading flex items-start gap-3">
                    <span className="text-primary-600 flex-shrink-0">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-text-primary font-para leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Map Section (Placeholder) */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" duration={1000}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8522567890743!2d72.83823631490208!3d19.186470987029974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f0e3a5c5c5%3A0x1234567890abcdef!2sMalad%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
