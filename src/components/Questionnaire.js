import React, { useState } from "react";
import "./Questionnaire.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Questionnaire = () => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const [q7, setQ7] = useState("");
  const [q8, setQ8] = useState("");
  const [q9, setQ9] = useState("");
  const [q10, setQ10] = useState("");
  const [score, setScore] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [check, setCheck] = useState(true);



  const submitAnswers = () => {
    let totalScore = 0;
    if (q1 === "a few times a month") totalScore++;
    if (q2 === "less than 10 minutes") totalScore++;
    if (q3 === "outdoors") totalScore++;
    if (q4 === "yes") totalScore++;
    if (q5 === "very important") totalScore++;
    if (q6 === "somewhat likely") totalScore++;
    if (q7 === "not at all likely") totalScore++;
    if (q8 === "monthly") totalScore++;
    if (q9 === "very important") totalScore++;
    if (q10 === "once a week") totalScore++;

    

    let discountPercent = 0;
    if (totalScore >= 8) discountPercent = 50;
    else if (totalScore >= 6) discountPercent = 25;
    else if (totalScore >= 4) discountPercent = 20;

    localStorage.setItem('discountPercent',JSON.stringify(discountPercent));

    setScore(totalScore);
    setDiscount(discountPercent);
    setSubmitted(true);
    setCheck(false);
  };

  return (
    <div className="questionnaire-container p-5">
      <h1 className="questionnaire-title text-2xl">Restaurant Questionnaire</h1>

      <div className="bg-gray-100 w-full p-3 flex flex-col items-center justify-center mt-5 rounded-xl">
        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question p-4">
          1. How often do you eat out at restaurants?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="rarely"
              checked={q1 === "rarely"}
              onChange={() => setQ1("rarely")}
              className="questionnaire-radio"
            />
            Rarely
          </label>

          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="a few times a month"
              checked={q1 === "a few times a month"}
              onChange={() => setQ1("a few times a month")}
              className="questionnaire-radio"
            />
            A few times a month
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="once a week"
              checked={q1 === "once a week"}
              onChange={() => setQ1("once a week")}
              className="questionnaire-radio"
            />
            Once a week
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="2-3 times a week"
              checked={q1 === "2-3 times a week"}
              onChange={() => setQ1("2-3 times a week")}
              className="questionnaire-radio"
            />
            2-3 times a week
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="almost every day"
              checked={q1 === "almost every day"}
              onChange={() => setQ1("almost every day")}
              className="questionnaire-radio"
            />
            Almost every day
          </label>
        </div>
        </div>

        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          2. How long are you willing to wait for a table?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="less than 10 minutes"
              checked={q2 === "less than 10 minutes"}
              onChange={() => setQ2("less than 10 minutes")}
              className="questionnaire-radio"
            />
            Less than 10 minutes
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="less than 30 minutes"
              checked={q2 === "less than 30 minutes"}
              onChange={() => setQ2("less than 30 minutes")}
              className="questionnaire-radio"
            />
            Less than 30 minutes
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="less than 1 hour"
              checked={q2 === "less than 1 hour"}
              onChange={() => setQ2("less than 1 hour")}
              className="questionnaire-radio"
            />
            Less than 1 hour
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="more than 1 hour"
              checked={q2 === "more than 1 hour"}
              onChange={() => setQ2("more than 1 hour")}
              className="questionnaire-radio"
            />
            More than 1 hour
          </label>
        </div>
        </div>

        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2" >
        <div className="questionnaire-question">
          3. Do you prefer to sit indoors or outdoors?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="indoors"
              checked={q3 === "indoors"}
              onChange={() => setQ3("indoors")}
              className="questionnaire-radio"
            />
            Indoors
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="outdoors"
              checked={q3 === "outdoors"}
              onChange={() => setQ3("outdoors")}
              className="questionnaire-radio"
            />
            Outdoors
          </label>
        </div>
        </div>

        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          4. Do you have any food allergies or dietary restrictions?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="yes"
              checked={q4 === "yes"}
              onChange={() => setQ4("yes")}
              className="questionnaire-radio"
            />
            Yes
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="no"
              checked={q4 === "no"}
              onChange={() => setQ4("no")}
              className="questionnaire-radio"
            />
            No
          </label>
        </div>
        </div>
        
        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2" >
        <div className="questionnaire-question">
          5. How important is the quality of service to you?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="very important"
              checked={q5 === "very important"}
              onChange={() => setQ5("very important")}
              className="questionnaire-radio"
            />
            Very important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="somewhat important"
              checked={q5 === "somewhat important"}
              onChange={() => setQ5("somewhat important")}
              className="questionnaire-radio"
            />
            Somewhat important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="not very important"
              checked={q5 === "not very important"}
              onChange={() => setQ5("not very important")}
              className="questionnaire-radio"
            />
            Not very important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="not at all important"
              checked={q5 === "not at all important"}
              onChange={() => setQ5("not at all important")}
              className="questionnaire-radio"
            />
            Not at all important
          </label>
        </div>
        </div>
        
        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          6. How likely are you to recommend our restaurant to a friend?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="very likely"
              checked={q6 === "very likely"}
              onChange={() => setQ6("very likely")}
              className="questionnaire-radio"
            />
            Very likely
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="somewhat likely"
              checked={q6 === "somewhat likely"}
              onChange={() => setQ6("somewhat likely")}
              className="questionnaire-radio"
            />
            Somewhat likely
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="not very likely"
              checked={q6 === "not very likely"}
              onChange={() => setQ6("not very likely")}
              className="questionnaire-radio"
            />
            Not very likely
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="not at all likely"
              checked={q6 === "not at all likely"}
              onChange={() => setQ6("not at all likely")}
              className="questionnaire-radio"
            />
            Not at all likely
          </label>
        </div>
        </div>
        

        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          7. How important is the ambiance of the restaurant to you?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="very important"
              checked={q7 === "very important"}
              onChange={() => setQ7("very important")}
              className="questionnaire-radio"
            />
            Very important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="very important"
              checked={q7 === "not at all likely"}
              onChange={() => setQ7("not at all likely")}
              className="questionnaire-radio"
            />
            No
          </label>
        </div>

        </div>
        
        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          8. How frequently do you dine out?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="daily"
              checked={q8 === "daily"}
              onChange={() => setQ8("daily")}
              className="questionnaire-radio"
            />
            Daily
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="weekly"
              checked={q8 === "weekly"}
              onChange={() => setQ8("weekly")}
              className="questionnaire-radio"
            />
            Weekly
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="monthly"
              checked={q8 === "monthly"}
              onChange={() => setQ8("monthly")}
              className="questionnaire-radio"
            />
            Monthly
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="rarely"
              checked={q8 === "rarely"}
              onChange={() => setQ8("rarely")}
              className="questionnaire-radio"
            />
            Rarely
          </label>
        </div>

        </div>
        
        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          9. How important is the price of the menu items to you?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="very important"
              checked={q9 === "very important"}
              onChange={() => setQ9("very important")}
              className="questionnaire-radio"
            />
            Very important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="somewhat important"
              checked={q9 === "somewhat important"}
              onChange={() => setQ9("somewhat important")}
              className="questionnaire-radio"
            />
            Somewhat important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="not very important"
              checked={q9 === "not very important"}
              onChange={() => setQ9("not very important")}
              className="questionnaire-radio"
            />
            Not very important
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="not at all important"
              checked={q9 === "not at all important"}
              onChange={() => setQ9("not at all important")}
              className="questionnaire-radio"
            />
            Not at all important
          </label>
        </div>
        </div>
        

        <div className="bg-orange-200 w-full p-5 flex flex-col items-start justify-start mt-2">
        <div className="questionnaire-question">
          10. How often do you eat out?
        </div>
        <div className="questionnaire-radio-container">
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="rarely"
              checked={q10 === "rarely"}
              onChange={() => setQ10("rarely")}
              className="questionnaire-radio"
            />
            Rarely
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="once a week"
              checked={q10 === "once a week"}
              onChange={() => setQ10("once a week")}
              className="questionnaire-radio"
            />
            Once a week
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="2-3 times a week"
              checked={q10 === "2-3 times a week"}
              onChange={() => setQ10("2-3 times a week")}
              className="questionnaire-radio"
            />
            2-3 times a week
          </label>
          <label className="questionnaire-radio-label">
            <input
              type="radio"
              value="4 or more times a week"
              checked={q10 === "4 or more times a week"}
              onChange={() => setQ10("4 or more times a week")}
              className="questionnaire-radio"
            />
            4 or more times a week
          </label>
        </div>
        </div>
        
      </div>

      {check ? (
        <div className="questionnaire-submit-container">
          <motion.button
            whileHover={{ sacle: 0.75 }}
            className="w-[150px] p-2 rounded-full bg-gradient-to-tr from-orange-400
          to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
            onClick={submitAnswers}
          >
            Finish
          </motion.button>
        </div>
      ) : (
        <div className="questionnaire-submit-container">
          <Link to={"/pay"}>
            <motion.button
              whileHover={{ sacle: 0.75 }}
              className="w-[150px] p-2 rounded-full bg-gradient-to-tr from-orange-400
      to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
            >
              PAYMENT GATEWAY
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
