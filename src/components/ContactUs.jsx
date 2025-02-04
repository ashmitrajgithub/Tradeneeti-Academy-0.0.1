import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "@emailjs/browser";

function ContactUs({ contactRef }) {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ur73r7o", 
                "template_hz92rng",
                form.current,
                "yPnXcwA8oPcbpAn7f"
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    console.log(result.text);
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.log(error.text);
                }
            );
    };

    return (
        <div ref={contactRef} className="px-4 mx-auto relative bg-white overflow-hidden z-10" id="contact-us">
            <div className="mx-auto flex flex-col lg:flex-row justify-around items-center">
                <div className="hidden lg:block z-20" style={{ width: "500px", height: "500px" }}>
                    <DotLottieReact src="./assets/lottieimage.lottie" loop autoplay />
                </div>

                <div className="w-full md:w-4/5 lg:max-w-lg px-8 py-6 my-6 rounded-lg shadow-2xl z-20">
                    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Book Demo Class</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label className="block text-gray-900 mb-1" htmlFor="name">Your Name</label>
                            <input className="w-full px-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)] transition duration-300" placeholder="Enter your name" type="text" name="name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                            <input className="w-full px-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)] transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="mobile">Your Mobile Number</label>
                            <input className="w-full px-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)] transition duration-300" placeholder="Enter your mobile number" name="mobile" id="mobile" type="tel" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                            <textarea className="w-full  px-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)] transition duration-300" rows="4" placeholder="Enter your message" name="message" id="message" required></textarea>
                        </div>
                        <button className="w-full text-gray-900 py-2 px-4 rounded-lg hover:bg-[rgb(101,99,176)] transition duration-300" type="submit" style={{backgroundColor:'#35283F', color:'white'}}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
