import { useRef, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "@emailjs/browser";

function ContactUs({ contactRef }) {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    emailjs
      .sendForm(
        "service_ur73r7o",
        "template_hz92rng",
        form.current,
        "yPnXcwA8oPcbpAn7f"
      )
      .then(
        (result) => {
          setFormStatus("success");
          form.current.reset();
          setFormData({ name: "", email: "", mobile: "", message: "" });
          setTimeout(() => setFormStatus(null), 5000);
        },
        (error) => {
          setFormStatus("error");
          setTimeout(() => setFormStatus(null), 5000);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section 
      ref={contactRef} 
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 to-slate-900 isolate overflow-hidden"
      id="contact-us"
    >
      {/* Fixed Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-transparent opacity-90"></div>

      {/* Animated Orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,#3b82f6_0%,#1e40af_35%,transparent_70%)] mix-blend-screen opacity-[0.15] animate-float"></div>
        <div className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,#8b5cf6_0%,#6d28d9_35%,transparent_70%)] mix-blend-screen opacity-[0.15] animate-float-delay"></div>
        <div className="absolute -bottom-[20%] left-[30%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#ec4899_0%,#be185d_35%,transparent_70%)] mix-blend-screen opacity-[0.15] animate-float-long"></div>
      </div>

      <div className={`relative container mx-auto px-4 py-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 inline-block mb-6 tracking-tight">
            Transform Your Future
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards mastering new skills with our personalized demo class.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Animation */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[32px] blur-3xl transform rotate-[-10deg] scale-95"></div>
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900/50 rounded-[32px] p-8 backdrop-blur-xl border border-slate-800">
              <DotLottieReact 
                src="./assets/lottieimage.lottie" 
                loop 
                autoplay 
                className="w-full h-[400px]"
              />
              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Students", value: "5000+" },
                  { label: "Courses", value: "50+" },
                  { label: "Rating", value: "4.9/5" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[32px] blur-3xl transform rotate-[10deg] scale-95"></div>
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900/50 rounded-[32px] backdrop-blur-xl border border-slate-800 overflow-hidden">
              {/* Form Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Book Your Demo</h3>
                  <div className="flex space-x-2">
                    {['#ef4444', '#f59e0b', '#22c55e'].map((color, index) => (
                      <div key={index} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {formStatus === "success" && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm z-10 animate-fade-in">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 p-1 mx-auto mb-6">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Success!</h4>
                    <p className="text-slate-300 mb-6">We'll contact you shortly to schedule your demo class.</p>
                    <button
                      onClick={() => setFormStatus(null)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formStatus === "error" && (
                <div className="mx-8 mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center text-red-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Failed to send message. Please try again.</span>
                  </div>
                </div>
              )}

              {/* Form */}
              <form ref={form} onSubmit={sendEmail} className="p-8 pt-4 space-y-6">
                {/* Form Fields */}
                {[
                  { name: 'name', label: 'Full Name', type: 'text', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                  { name: 'email', label: 'Email Address', type: 'email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                  { name: 'mobile', label: 'Mobile Number', type: 'tel', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' }
                ].map((field) => (
                  <div
                    key={field.name}
                    className={`relative transition-transform duration-300 ${activeField === field.name ? 'scale-[1.02]' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md"></div>
                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field.name)}
                        onBlur={handleBlur}
                        className="w-full bg-transparent pt-6 pb-2 px-4 text-white focus:outline-none"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor={field.name}
                        className={`absolute left-4 top-4 text-slate-400 transition-all duration-300 ${
                          formData[field.name] ? 'text-xs -translate-y-3 text-blue-400' : ''
                        }`}
                      >
                        {field.label}
                      </label>
                      <div className="absolute right-4 top-4 text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={field.icon}></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Message Field */}
                <div className={`relative transition-transform duration-300 ${activeField === 'message' ? 'scale-[1.02]' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows="4"
                      className="w-full bg-transparent pt-6 pb-2 px-4 text-white focus:outline-none resize-none"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className={`absolute left-4 top-4 text-slate-400 transition-all duration-300 ${
                        formData.message ? 'text-xs -translate-y-3 text-blue-400' : ''
                      }`}
                    >
                      Your Message
                    </label>
                    <div className="absolute right-4 top-4 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium transform transition-all duration-300 hover:scale-[1.02] focus:scale-[0.98] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Book Your Demo Class"
                    )}
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-center text-sm text-slate-400">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.05); }
        }
        @keyframes float-long {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }
        .animate-float-delay {
          animation: float-delay 12s infinite ease-in-out;
        }
        .animate-float-long {
          animation: float-long 15s infinite ease-in-out;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
}

export default ContactUs;