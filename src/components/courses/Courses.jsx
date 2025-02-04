import CoursesItems from "./CoursesItems";
import useScrollAnimation from "../../UseScrollAnimation";


const Courses = () => {
  useScrollAnimation();
  const promise = [
    {
      image: "./assets/Courses/course1.jpg",
      name: "Complete Traders Program (Offline)",
      detail: "Become the God of Trading with Trading Gods, join us at our Offline Centre. Learn, trade and make money live with us .",
    },
    {
      image: "./assets/Courses/course1hybrid.jpg",
      name: "Complete Traders Program (Hybrid)",
      detail: "Learn the art of trading while you are at your home attending live online classes with Trading Tigers .",
    },
    {
      image: "./assets/Courses/course2offline.jpg",
      name: "Job Assured Program",
      detail: "Risk management is key in trading. Successful traders set stop-loss limits, diversify portfolios, analyze trends, and stay disciplined to minimize losses.",
    },
    {
      image: "./assets/Courses/course3.jpg",
      name: "NISM Certification",
      detail: "It conducts capacity building and advanced training programs for securities market participants, including regulators .",
    },
    
   

  ];

  return (
    <section
    className="flex flex-col items-center justify-center w-full py-3 md:py-8 md:pt-8 pb-10 md:pb-36 faculty" id="courses"
>
    <h2 className="fade-in scroll-animate slide-left text-center lg:mt-20 text-2xl  m-5 xl:m-7 md:pb-3 md:text-4xl font-bold">Current Courses</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto max-w-screen-xl w-5/6">
        {promise.map((pro, index) => (
            <CoursesItems
                key={index}
                image={pro.image}
                name={pro.name}
                detail={pro.detail}
            />
        ))}
    </div>
</section>

  );
};

export default Courses;
