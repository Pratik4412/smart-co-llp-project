import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { categories, servicesS, specializedServices } from "../data/text";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// const industries = [
//   "Banking",
//   "Manufacturing",
//   "Real Estate",
//   "IT & Tech",
//   "Healthcare",
//   "Retail",
//   "Education",
//   "Hospitality",
//   "Export",
//   "Infrastructure",
//   "MSME",
//   "Startups",
// ];
const industries = [
  {
    name: "Banking",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    name: "Manufacturing",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    name: "Real Estate",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    name: "IT & Tech",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    name: "Retail",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    name: "Education",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    name: "Hospitality",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
      />
    ),
  },
  {
    name: "Export",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    name: "Infrastructure",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    name: "MSME",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    name: "Startups",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 800,
    });
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

  const filteredServices =
    activeCategory === "all"
      ? servicesS
      : servicesS.filter((service) => service.category === activeCategory);

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      audit: (
        <svg
          className="w-8 h-8"
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
      ),
      tax: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      advisory: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      compliance: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    };
    return icons[category] || icons.audit;
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-32 pb-20">
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
              <span className="px-5 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Our Services
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-heading">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Professional Services
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} duration={1000}>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-para">
                From audit to advisory, we provide end-to-end financial
                solutions tailored to your business needs. Partner with experts
                who understand your industry.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600} duration={1000}>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-8 font-heading py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Consultation
                </Link>
                <a
                  href="tel:+919819082400"
                  className="px-8 py-4 bg-white text-primary-700 font-heading font-bold rounded-full border-2 border-primary-400 hover:bg-primary-50 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary-400 to-primary-600 text-white shadow-lg scale-105"
                    : "bg-primary-50 text-gray-700 hover:bg-primary-100 border-2 border-primary-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 lg:py-20  bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation="fade-up"
                delay={index * 50}
                duration={800}
              >
                <div className="group h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-primary-100 hover:border-primary-400 overflow-hidden flex flex-col">
                  {/* Card Header */}
                  <div className="p-8 bg-gradient-to-br from-primary-50 to-white flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-all duration-300 shadow-sm">
                        {getCategoryIcon(service.category)}
                      </div>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full uppercase">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-primary font-para leading-relaxed text-base lg:text-lg">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 bg-white border-t border-primary-100">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      View Details
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 z-10"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-primary-50 to-primary-50 border-b-2 border-primary-200">
                <div className="flex items-start gap-6">
                  <div className="hidden w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl md:flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    {getCategoryIcon(selectedService.category)}
                  </div>
                  <div className="flex-grow">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase mb-3">
                      {selectedService.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-3">
                      {selectedService.title}
                    </h2>
                    <p className="text-lg text-text-primary font-para">
                      {selectedService.shortDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-200 hover:border-primary-400 transition-all duration-300"
                      >
                        <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-para">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 hover:shadow-md transition-all duration-300"
                      >
                        <svg
                          className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <span className="text-gray-700 font-para">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-primary-200">
                  <Link
                    to="/contact"
                    className="flex-1 min-w-[200px] px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                  {/* <a
                    href="tel:+919819082400"
                    className="flex-1 min-w-[200px] px-8 py-4 bg-white text-primary-700 font-bold rounded-full border-2 border-primary-400 hover:bg-primary-50 transition-all duration-300 text-center"
                  >
                    Call Now
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specialized Services */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Specialized Services
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Advanced{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Expert Solutions
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 100}
                duration={1000}
              >
                <div className="group p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-text-primary font-para text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Our Approach
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                How We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Deliver Excellence
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Understanding",
                desc: "We analyze your unique business needs and challenges",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Develop customized strategies and action plans",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Implement solutions with precision and expertise",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing monitoring and continuous improvement",
              },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
                duration={1000}
              >
                <div className="relative text-center">
                  <div className="relative z-10 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 hover:border-primary-400">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-text-primary font-para text-base lg:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent -z-10"></div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      {/* <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">

          <div className="text-center mb-8 md:mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Industries We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Proudly Serve
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 2, 
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6, 
              },
            }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <AnimatedSection animation="flip-up">
                  <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-gray-900">
                      {industry}
                    </p>
                  </div>
                </AnimatedSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Industries We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Proudly Serve
                </span>
              </h2>
            </AnimatedSection>
          </div>

          {/* Slider */}
          <div className="pb-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              className="industries-swiper"
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={index}>
                  <AnimatedSection animation="flip-up">
                    <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {industry.icon}
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-gray-900">
                        {industry.name}
                      </p>
                    </div>
                  </AnimatedSection>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="zoom-in" duration={1000}>
            <div className="relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative z-10 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
                  Ready to Get Started?
                </h2>
                <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-para">
                  Let's discuss how our services can help your business grow.
                  Schedule a free consultation today.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Link
                    to="/contact"
                    className="group px-4 font-heading py-2 lg:px-10 lg:py-5 bg-white text-primary-700 font-bold text-lg rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Consultation
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <a
                    href="tel:+919819082400"
                    className="group px-4 py-2 lg:px-10 lg:py-5 font-heading bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now
                  </a>
                </div>

                {/* <div className="pt-8 flex flex-wrap justify-center gap-8 text-white/90">
                  <div className="flex items-center gap-2">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-para">pm.associates@hotmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-para">Mumbai • Delhi • Nagpur</span>
                  </div>
                </div> */}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
