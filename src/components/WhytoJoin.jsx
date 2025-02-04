import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhytoJoin() {
  const features = [
    {
      icon: "/assets/gif1.webp", // Corrected the path
      title: "Expert Guidance",
      description:
        "Gain insights from seasoned traders and mental health professionals who understand the emotional aspects of trading.",
    },
    {
      icon: "/assets/gif2.webp", // Corrected the path
      title: "Strong Foundation",
      description:
        "Build a strong trading foundation through ongoing education, weekly webinars, and resources designed to enhance your skills.",
    },
    {
      icon: "/assets/gif2.webp", // Corrected the path
      title: "Supportive Community",
      description:
        "Participate in regular meetups to connect with fellow traders, share experiences, and foster a supportive trading network.",
    },
  ];

  useEffect(() => {
    // Initialize AOS with options
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Trigger animations only once
      offset: 200, // Trigger a little before the element enters the viewport
    });

    // Refresh AOS to re-check animations after the page is loaded or refreshed
    AOS.refresh();

    // Ensure AOS refresh when the page is fully loaded
    window.addEventListener("load", () => {
      AOS.refresh();
    });

    // Cleanup AOS refresh event listener
    return () => {
      window.removeEventListener("load", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Scroll-triggered Heading Animation */}
        <h2
          className="text-2xl lg:text-4xl lg:mb-16 font-bold text-center mb-10"
          data-aos="fade-up" // Animation for the heading
        >
          Why Join Tradeneeti Academy?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-sm md:max-w-xs lg:max-w-sm"
              data-aos="fade-up" // Animation for the feature section
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
