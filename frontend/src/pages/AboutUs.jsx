import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  achievements,
  coreValuesA,
  credentials,
  partnersAbout,
  timeline,
  whyChoose,
} from "../data/text";
import mittal from "../assets/teamMembers/CA. Prashant Mittal.jpeg";

const AboutUs = () => {
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 800,
    });
  }, []);

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
                About S M A R T S & Co. LLP
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-heading">
                Building Trust Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Excellence & Integrity
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} duration={1000}>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-para">
                For over two decades, we've been the trusted partner for
                businesses seeking comprehensive financial solutions, audit
                excellence, and strategic advisory services.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600} duration={1000}>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-primary-700 font-bold rounded-full border-2 border-primary-400 hover:bg-primary-50 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            {credentials.map((cred, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 100}
                duration={800}
              >
                <div className="text-center">
                  <p className="text-xs uppercase tracking-wider mb-1 opacity-90">
                    {cred.label}
                  </p>
                  <p className="text-sm md:text-base font-bold">{cred.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right" duration={1000}>
              <div className="space-y-6">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                  Two Decades of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                    Professional Excellence
                  </span>
                </h2>
                <div className="space-y-4 text-text-primary font-para text-base lg:text-lg leading-relaxed">
                  <p>
                    Founded in 2005 by CA Prashant Mittal , S M A R T S & Co.
                    LLP (previously known as Prashant Mittal and Associates) has
                    grown from a single-partner firm to a multi-disciplinary
                    Chartered Accountancy practice with a strong presence across
                    India.
                  </p>
                  <p>
                    Headquartered in Mumbai with branch offices in Mumbai,
                    Delhi, Nagpur, Ahmedabad, we serve a diverse clientele
                    ranging from startups to large corporations, offering a full
                    suite of professional services.
                  </p>
                  <p>
                    Our journey has been marked by unwavering commitment to
                    quality, integrity, and client satisfaction. Today, we stand
                    proud as an ISO certified and peer-reviewed firm , trusted
                    by over 500 clients nationwide.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" duration={1000}>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                    data-aos="flip-left"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-4xl mb-3 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-2">
                      {achievement.number}
                    </h3>
                    <p className="text-base lg:text-lg text-text-primary font-para">
                      {achievement.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Vision & Mission
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Guided by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Purpose & Values
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection animation="fade-right" duration={1000}>
              <div className="p-10 bg-white rounded-3xl shadow-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-black w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
                  Our Vision
                </h3>
                <p className="text-base lg:text-lg text-text-primary font-para leading-relaxed">
                  To be a trusted partner in our clients' growth journey by
                  providing innovative, ethical, and result-oriented
                  professional services that drive sustainable business success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" duration={1000}>
              <div className="p-10 bg-white rounded-3xl shadow-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-black w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
                  Our Mission
                </h3>
                <p className="text-base lg:text-lg text-text-primary font-para leading-relaxed">
                  To deliver excellence in audit, advisory, and assurance
                  through integrity, precision, and professional commitment
                  while empowering businesses with strategic financial insights.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Core Values
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                The Principles That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Define Us
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValuesA.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <div className="group p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                  <div
                    className={`w-16 h-16 text-white bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-text-primary font-para leading-relaxed text-base lg:text-lg">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Our Journey
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Milestones of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Excellence
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 to-primary-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                  delay={index * 100}
                  duration={1000}
                >
                  <div
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 transform hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-4">
                          {/* <div className="text-4xl">{item.icon}</div> */}
                          <div className={index % 2 === 0 ? "md:ml-auto" : ""}>
                            <h3 className="text-3xl font-bold text-primary-600 font-heading">
                              {item.year}
                            </h3>
                            <p className="text-xl font-bold text-gray-900 font-heading">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-text-primary font-para text-base lg:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:block relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-4 border-white shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Why Choose Us
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                What Makes Us{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Different
                </span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 100}
                duration={1000}
              >
                <div className="group p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 text-center flex flex-col gap-2 justify-center items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-text-primary font-para leading-relaxed text-base lg:text-lg">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row gap-10 py-10 lg:py-20">
        <div className="w-full flex items-center justify-center">
          <img
            src={mittal}
            alt="mittal image"
            className="rounded-full w-[200px] lg:w-[400px] h-full "
          />
        </div>
        <div className="w-full flex flex-col gap-3 px-5 md:px-10 ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-heading">
            Chairman Emeritus –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              CA. Prashant Mittal
            </span>
          </h2>
          <p className="text-text-primary font-para leading-relaxed text-base lg:text-lg">
            CA. Prashant Mittal is the guiding force and institutional backbone
            of SMARTS & Co. LLP. Qualifying as a Chartered Accountant at the age
            of 19, he laid the foundation for a career defined by discipline,
            foresight, and ethical leadership.
          </p>
          <p className="text-text-primary font-para leading-relaxed text-base lg:text-lg">
            With over two decades of experience, he has advised businesses
            across audit, taxation, corporate advisory, regulatory matters, and
            project finance. His approach emphasizes strong governance,
            practical solutions, and long-term sustainability over short-term
            fixes.
          </p>
          <p className="text-text-primary font-para leading-relaxed text-base lg:text-lg">
            As Chairman Emeritus, he continues to guide the firm’s leadership,
            ensuring continuity of values, professional rigor, and
            relationship-driven advisory—principles that define SMARTS’ role as
            a trusted long-term business partner.
          </p>
        </div>
      </section>
      {/* Meet Our Partners */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-16 space-y-4">
            <AnimatedSection animation="fade-up" duration={1000}>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-lg lg:text-2xl font-bold uppercase tracking-wider rounded-full">
                Our Leadership
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={1000}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Expert Partners
                </span>
              </h2>
              <p className="text-xl text-text-primary mt-4 max-w-3xl mx-auto font-para">
                Our team of qualified Chartered Accountants brings decades of
                combined experience and industry expertise
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersAbout.map((partner, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={1000}
              >
                <div className="group h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-primary-200 hover:border-primary-400">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24  mb-6">
                      <img
                        src={partner.image}
                        alt=""
                        className="rounded-full w-full h-full object-cover object-left-top"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 font-heading">
                      {partner.name}
                    </h3>
                    <p className="text-primary-600 font-bold mb-2 flex items-center gap-2">
                      {partner.designation} (
                      <span className="text-sm font-semibold text-gray-900  flex items-center justify-center gap-2">
                        {partner.experience}
                      </span>
                      )
                    </p>
                    <p className="text-text-primary font-para mb-4 text-base lg:text-lg">
                      {partner.expertise}
                    </p>
                    <div className="w-full border-t border-primary-200 pt-4 mt-4 text-base lg:text-lg">
                      <p>{partner.specialization.join(", ")}</p>
                      {/* <ul className="space-y-2">
                        {partner.specialization.map((spec, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-center gap-2 text-sm text-text-primary font-para"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                            {spec}
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="zoom-in" duration={1000}>
            <div className="relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative z-10 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
                  Ready to Experience Excellence?
                </h2>
                <p className="text-white text-lg lg:text-xl  max-w-3xl mx-auto font-para">
                  Join 500+ satisfied clients who trust S M A R T S & Co. LLP
                  for their financial success
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Link
                    to="/contact"
                    className="group px-10 py-5 bg-white font-heading text-primary-700 font-bold text-lg rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
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
                    className="px-10 py-5 bg-white/10 backdrop-blur-sm font-heading text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
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
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
