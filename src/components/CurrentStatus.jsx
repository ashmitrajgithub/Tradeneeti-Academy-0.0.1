import useScrollAnimation from "../UseScrollAnimation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CurrentStatus() {
  useScrollAnimation();

  // Intersection observer to detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,  // Runs animation only once
    threshold: 0.3,     // Triggers when 30% of the section is visible
  });

  const formatNumber = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + " M+";
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1) + " Lakh+";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + " K+";
    }
    return value;
  };

  return (
    <>
      <section 
        ref={ref} 
        className="p-5 md:mt-24 mb-24 sticky top-20 z-100 fade-in bg-[#d9c4e9] "
      >
        <div className="">
          <div className="">
            <p className="text-center font-bold pb-7 text-ls md:text-2xl ">
              Overwhelming support from TNA family
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:grid-cols-3 md:p-8 ">
            
            {/* Certified GTF Traders */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-[#f7f3fa] ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/winner.webp" 
                    alt="Certified TNA Traders" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={100} 
                        end={3000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Certified TNA Traders</p>
                </div>
              </div>
            </li>

            {/* Followers */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-[#f7f3fa] ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/notification-bing.webp" 
                    alt="Followers" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={200} 
                        end={1000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Certified TNA Traders</p>
                </div>
              </div>
            </li>

            {/* Team */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-[#f7f3fa] ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/user-octagon.webp" 
                    alt="Team" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={35} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Team</p>
                </div>
              </div>
            </li>

            {/* GTF Trader Community */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-[#f7f3fa] ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/people.webp" 
                    alt="GTF Trader Community" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={500} 
                        end={2000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>TNA Trader Community</p>
                </div>
              </div>
            </li>

            {/* YouTube */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-[#f7f3fa] ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/video-square.webp" 
                    alt="YouTube" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={100} 
                        end={1000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Youtube</p>
                </div>
              </div>
            </li>

            {/* App Downloads */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-[#f7f3fa]0 hover:bg-[#f7f3fa]">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/arrow-down.webp" 
                    alt="App Downloads" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={10000} 
                        end={100000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>WebSite Visits</p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>
    </>
  );
}

export default CurrentStatus;
