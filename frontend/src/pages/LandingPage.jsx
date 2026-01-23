import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import manImg from "../assets/landingpage/Frame 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  coreValues,
  industries,
  partners,
  processSteps,
  services,
  whyChooseUs,
} from "../data/text";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [counter, setCounter] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    locations: 0,
  });

  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 800,
    });
  }, []);

  // Animated Counter Effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 20,
      clients: 500,
      projects: 1000,
      locations: 3,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounter({
        years: Math.min(
          Math.floor((targets.years / steps) * step),
          targets.years,
        ),
        clients: Math.min(
          Math.floor((targets.clients / steps) * step),
          targets.clients,
        ),
        projects: Math.min(
          Math.floor((targets.projects / steps) * step),
          targets.projects,
        ),
        locations: Math.min(
          Math.floor((targets.locations / steps) * step),
          targets.locations,
        ),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content */}
            <div className="space-y-8">
              <AnimatedSection animation="fade-right" duration={1000}>
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-primary-200">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  <span className="text-primary-700 text-sm font-semibold">
                    Trusted Since 2005 • ISO Certified
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200} duration={1000}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-heading">
                  Your Partner in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 animate-gradient">
                    Financial Excellence
                  </span>
                </h1>
              </AnimatedSection>

              {/* <AnimatedSection animation="fade-up" delay={400} duration={1000}>
                <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-para">
                  S M A R T S & Co. delivers comprehensive CA services—from
                  audit to taxation, ensuring your business stays compliant and
                  profitable.
                </p>
              </AnimatedSection> */}

              <AnimatedSection animation="fade-up" delay={600} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-2"
                  >
                    Get Free Consultation
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
                  <Link
                    to="/services"
                    className="px-8 py-4 bg-white text-primary-700 font-bold rounded-full border-2 border-primary-400 hover:bg-primary-50 hover:border-primary-600 transition-all duration-300 shadow-md"
                  >
                    Explore Services
                  </Link>
                </div>
              </AnimatedSection>

              {/* Quick Stats */}
              <AnimatedSection animation="fade-up" delay={800} duration={1000}>
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary-600 font-heading">
                      {counter.years}+
                    </h3>
                    <p className="text-sm text-text-primary font-para mt-2">
                      Years Experience
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary-600 font-heading">
                      {counter.clients}+
                    </h3>
                    <p className="text-sm text-text-primary font-para mt-2">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Image with Interactive Elements */}
            <AnimatedSection
              animation="fade-left"
              delay={400}
              duration={1200}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl opacity-20 animate-spin-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl opacity-20 animate-bounce-slow"></div>

                <div className="relative z-10 flex items-center justify-end">
                  <img src={manImg} alt="" className="hero-img " />
                  <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-110 transition-transform duration-300 border-2 border-primary-200 animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl">✓</span>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-900 font-heading">
                          ISO Certified
                        </p>
                        <p className="text-sm text-text-primary font-para">
                          Peer Reviewed Firm
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -top-8 -right-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl p-5 text-white transform hover:scale-110 transition-transform duration-300 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <p className="text-3xl font-bold font-heading">
                      {counter.projects}+
                    </p>
                    <p className="text-sm opacity-90 font-para">
                      Projects Done
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-8 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white/90">
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider mb-1">
                Registered with
              </p>
              <p className="text-lg font-bold">ICAI</p>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider mb-1">
                FRN Number
              </p>
              <p className="text-lg font-bold">126763W</p>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider mb-1">PAN</p>
              <p className="text-lg font-bold">ABGFP5145E</p>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider mb-1">GST</p>
              <p className="text-lg font-bold">27ABGFP5145E1Z9</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right" duration={1000}>
              <div className="space-y-6">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                  Your Trusted Partner in{" "}
                  <span className="text-primary-600">
                    Unlocking Business Potential
                  </span>
                </h2>
                <AnimatedSection
                  animation="fade-up"
                  delay={400}
                  duration={1000}
                >
                  <p className="text-lg md:text-xl text-text-primary leading-relaxed font-para">
                    S M A R T S & Co. delivers comprehensive CA services from
                    audit to taxation, ensuring your business stays compliant
                    and profitable.
                  </p>
                </AnimatedSection>
                <p className="text-gray-600 leading-relaxed font-para">
                  We believe in building long-term client relationships based on
                  trust and performance. Our approach is proactive,
                  technology-driven, and deeply focused on client satisfaction.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Learn More About Us
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
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" duration={1000}>
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                    data-aos="flip-left"
                    data-aos-delay={index * 100}
                  >
                    <p className="text-gray-800 font-semibold text-center">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                Why Choose Us
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Your Success is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Our Mission
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 100}
                duration={1000}
              >
                <div className="group p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col gap-2 justify-center items-center ">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-text-primary font-para">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Interactive Tabs */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                Our Services
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Professional Services
                </span>
              </h2>
              <p className="text-xl text-text-primary mt-4 max-w-3xl mx-auto font-para">
                From audit to advisory, we provide end-to-end financial
                solutions tailored to your business needs
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <div className="group h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-primary-100 hover:border-primary-400 flex flex-col gap-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-text-primary font-para mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-text-primary font-para"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Learn More
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
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                Industries
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Serving Diverse{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Industries
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection
                key={index}
                animation="flip-up"
                delay={index * 50}
                duration={1000}
              >
                <div className="group p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col gap-4 justify-center items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {industry.icon}
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1 font-heading">
                    {industry.name}
                  </p>
                  <p className="text-xs text-primary-600 font-semibold">
                    {industry.count} Clients
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                Our Process
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                How We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Work With You
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
                duration={1000}
              >
                <div className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
                  )}
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 hover:border-primary-400">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-text-primary font-para">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                Our Team
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Expert Partners
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <div className="group p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {partner.name.split(" ")[1].charAt(0)}
                    {partner.name.split(" ")[2].charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-1 font-heading">
                    {partner.name}
                  </h3>
                  <p className="text-primary-600 font-semibold text-center mb-2">
                    {partner.designation}
                  </p>
                  <p className="text-text-primary text-center text-sm font-para">
                    {partner.expertise}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider rounded-full">
                Testimonials
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Clients Say
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
                duration={1000}
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-100 hover:border-primary-400">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary-500 text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-text-primary font-para mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-primary-200 pt-4">
                    <p className="font-bold text-gray-900 font-heading">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-primary font-para">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Counter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="zoom-in" duration={1000}>
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border-2 border-white/20">
                <h3 className="text-5xl md:text-6xl font-bold text-primary-400 font-heading">
                  {counter.years}+
                </h3>
                <p className="text-white/90 font-para text-lg">
                  Years of Excellence
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={150} duration={1000}>
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border-2 border-white/20">
                <h3 className="text-5xl md:text-6xl font-bold text-primary-400 font-heading">
                  {counter.clients}+
                </h3>
                <p className="text-white/90 font-para text-lg">Happy Clients</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={300} duration={1000}>
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border-2 border-white/20">
                <h3 className="text-5xl md:text-6xl font-bold text-primary-400 font-heading">
                  {counter.projects}+
                </h3>
                <p className="text-white/90 font-para text-lg">
                  Projects Completed
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={450} duration={1000}>
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border-2 border-white/20">
                <h3 className="text-5xl md:text-6xl font-bold text-primary-400 font-heading">
                  {counter.locations}
                </h3>
                <p className="text-white/90 font-para text-lg">
                  Office Locations
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="zoom-in" duration={1000}>
            <div className="relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative z-10 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto font-para">
                  Partner with S M A R T S & Co. for innovative, ethical, and
                  result-oriented professional services
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Link
                    to="/contact"
                    className="group px-10 py-5 bg-white text-primary-700 font-bold text-lg rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    Schedule a Consultation
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
                    className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
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
                    +91 98190 82400
                  </a>
                </div>

                <div className="pt-8 flex flex-wrap justify-center gap-8 text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📧</span>
                    <span className="font-para">pm.associates@hotmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span className="font-para">Mumbai • Delhi • Nagpur</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
