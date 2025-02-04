import { useRef, useEffect } from "react"
import QuestionsItems from "./QuestionsItems"

const Questions = () => {
  const containerRef = useRef(null)

  const questions = [
    {
      quest: "Classes will conduct offline or online ?",
      ans: "- It will be both in offline and online mode.",
    },
    {
      quest: "Will you providing recording if I missed the class?",
      ans: "- You will attend revision classes for the same topic on the same day or next day.",
    },
    {
      quest: "I am a trader and I only need strategies. Will it be useful for me?",
      ans: "- yes our courses have trading plans which is useful for those who are doing trading and want to restart trading to recover losses and become profitable.",
    },
    {
      quest: "What is stock market? How do I make career in it?",
      ans: "- It is a market where you trade in instruments like shares and it has many components like equity and derivatives, commodity and currency.",
    },
    {
      quest: "What kind of job I'll get?",
      ans: "- In this industry, if you are having minimum 2 certificates of NSE then you are readily taken by the industry. You not only get a stable, payable, office seating job but on top of it, you also earn incentives too. You can become dealer investment advisory, relationship manager. You are also readily imbibed in risk and compliance terms.",
    },
    {
      quest: "What is the importance of NSE certificates?",
      ans: "- NSE certificates are the license to work in stock market financial markets and banks. The corporate and banks get ID's only if they have authorized NSE certificate person and it is mandatory by govt of india (SEBI- RBI)",
    },
    {
      quest: "Can I do my own business after this course?",
      ans: "- Oh yes, definitely you can open your own business by taking franchisee of any broker, but for this NSE qualification is the most. You can also upgrade to research modules and give tips and advisory to your clients.",
    },
    {
      quest: "What can I do in stock market instead of doing job after this course?",
      ans: "- You can start your own trading and manage your own portfolio in this market, you can become a broker or sub-broker and do business, or you can open you research advisory company and give research tips to your clients.",
    },
    {
      quest: "Will you provide tips for trading or any advice for investment purpose?",
      ans: "- We are not involved in such practice and we advice you to not expect this from us, you do not have to depend on others learn with us and become independent to make your financial decisions.",
    },
    {
      quest: "In which language teacher teach us?",
      ans: "- Our trainer will used both English and hindi languages.",
    },
  ]

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const itemHeight = container.children[0].offsetHeight
      container.style.maxHeight = `${itemHeight * 9}px`
    }
  }, [])

    return (
        <>
            <div className="relative h-36 z-30 " id="knowledge-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#795d8f] via-[#e0d0ed] to-transparent z-30"></div>
            </div>

            <section
                className=" flex flex-col items-center justify-center p-8 relative bg-gradient-to-b from-[#795d8f] to-[#f7f3fa] overflow-visible z-30"
            >
                <h2 className="mb-8 text-black md:mb-12 text-2xl font-bold text-center md:text-4xl">Frequently asked questions</h2>

                <div ref={containerRef} className="w-full md:w-3/4 overflow-y-auto">
          {questions.map((question, index) => (
            <QuestionsItems key={index} quest={question.quest} ans={question.ans} />
          ))}
        </div>
            </section>


        </>
    );
};

export default Questions;