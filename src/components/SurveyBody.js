import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  console.log(searchNumber);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const [q11, setQ11] = useState(null);
  const [q12, setQ12] = useState(null);
  const [q13, setQ13] = useState(null);
  const [q14, setQ14] = useState(null);
  const [q15, setQ15] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://192.168.200.10:5020/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    console.log(e.target.value);
    setQ7(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10value = (e) => {
    setQ10(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const q12value = (e) => {
    setQ12(e.target.value);
  };
  const q13value = (e) => {
    setQ13(e.target.value);
  };
  const q14value = (e) => {
    setQ14(e.target.value);
  };
  const q15value = (e) => {
    setQ15(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans8: q8,
      ans9: q9,
      ans10: q10,
      ans11: q11,
      ans12: q12,
      ans13: q13,
      ans14: q14,
      ans15: q15,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://192.168.200.10:5020/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h6>
          ১.আসসালামুআলাইকুম, আমি <b>{agent}</b> বলছি একটি সিগারেট জরীপ কোম্পানি
          থেকে।আপনি কি <b>{consumer?.r_name}</b> স্যার বলছেন?
        </h6>
        <p className="text-secondary">
          (যদি না হয়, তাহলে বলবো ভাই/স্যার/মেম এই নামে কি কেউ আছেন উত্তর হ্যাঁ
          হলে পরবর্তি প্রশ্নে চলে যাব। না হলে ধন্যবাদ দিয়ে সংযোগ বিচ্ছিন্ন করবো)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ০২. আমি একটি জরিপ কোম্পানি থেকে ফোন করেছি, আমি কি আপনার সাথে একটু কথা
          বলতে পারি?
        </h6>
        <p className="text-secondary">
          (উত্তর হ্যাঁ হলে পরবর্তি প্রশ্নে চলে যাব। না/ব্যস্ত হলে ধন্যবাদ দিয়ে
          সংযোগ বিচ্ছিন্ন করবো)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৩. আপনি কি ধূমপান করেন?</h6>
        <p className="text-secondary">
          (উত্তর হ্যাঁ হলে পরবর্তি প্রশ্নে চলে যাব। না হলে ধন্যবাদ দিয়ে সংযোগ
          বিচ্ছিন্ন করবো)
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q3 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>৪. আপনি সাধারণত কোন ব্র্যান্ডের সিগারেট খান?</h6>
        <p className="text-secondary">
          (উত্তর হ্যাঁ হলে পরবর্তি প্রশ্নে চলে যাব। না হলে ধন্যবাদ দিয়ে সংযোগ
          বিচ্ছিন্ন করবো)
        </p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="rally">র‌্যালী</option>
            <option value="star">স্টার</option>
            <option value="navy">নেভি</option>
            <option value="luckyStrike">লাকিস্ট্রাইক</option>
            <option value="goldLeaf">গোল্ড লিফ/JPGL</option>
            <option value="marise">মেরিস</option>
            <option value="sheikh">সেখ</option>
            <option value="derby">ডার্বি</option>
            <option value="royals">রয়েল</option>
            <option value="benson">বেনসন</option>
            <option value="marlboro">মার্লবরো</option>
            <option value="hollywood">হলিউড</option>
            <option value="pilot">পাইলট</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === null ? "none" : "block",
        }}
        className="mt-2"
      >
        <h6>
          ০৫. গত দুই/এক দিনের মধ্যে আপনার সাথে কি কোন সিগারেট কোম্পানির লোক দেখা
          করেছিল?
        </h6>
        <p className="text-secondary">
          (উত্তর হ্যাঁ হলে পরবর্তি প্রশ্নে চলে যাব। না হলে ধন্যবাদ দিয়ে সংযোগ
          বিচ্ছিন্ন করবো)
        </p>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q5 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ০৬. কোন কোম্পানি থেকে এসেছিল? <b>({consumer?.data_date})</b>
        </h6>
        <p className="text-secondary">
          (উত্তর ‘ক’ হলে পরবর্তি প্রশেড়ব চলে যাব, উত্তর ‘খ’ হলে ধন্যবাদ দিয়ে
          সংযোগ বিচ্ছিনড়ব করবো)
        </p>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="rally/abul_khair/marise">
              ক. র‌্যালী/আবুল খায়ের/মেরিস
            </option>
            <option value="others">খ. অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "rally/abul_khair/marise" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৭. উনি আপনাকে র‍্যালী সিগারেট এর কয়টি ভেরিয়েন্ট/ধরণ/ফ্লেভার/স্বাদ এর
          কথা বলেছেন?
        </h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="type0">০ ধরণ</option>
            <option value="type1">১ ধরণ</option>
            <option value="type2">২ ধরণ</option>
            <option value="type3">৩ ধরণ</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div style={{ display: q7 === null ? "none" : "block" }} className="mt-2">
        <h6>০৮. উনি কি আপনাকে কোন সিগারেট টেস্ট করিয়েছিল?</h6>
        <p className="text-secondary">
          (উত্তর হ্যাঁ হলে পরবর্তি প্রশেড়ব চলে যাব। না হলে ধন্যবাদ দিয়ে সংযোগ
          বিচ্ছিনড়ব করবো)
        </p>
        <Form.Group onChange={q8value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div>
        <div
          style={{
            display: q8 === "yes" ? "block" : "none",
          }}
          className="mt-2"
        >
          <h6>
            ৯. উনি আপনাকে কোন ভেরিয়েন্ট/ধরণ/ ফ্লেভার/ স্বাদ এর র‍্যালী সিগারেট
            টেস্ট করিয়েছিল?
          </h6>
          <Form.Group onChange={q9value} as={Row}>
            <Form.Control as="select" className="w-50 ml-3">
              <option>...</option>
              <option value="rallyVerve">র‍্যালী ভার্ব/ফুল ফ্লেভার</option>
              <option value="rallyIce">র‍্যালী আইস/লবঙ্গ স্বাদ</option>
              <option value="rallyBolt">
                র‍্যালী বোল্ট/দারচিনি স্বাদ/মসলা স্বাদ
              </option>
              <option value="aboveAll">উপরের সবগুলো</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div
        style={{
          display: q9 === null ? "none" : "block",
        }}
        className="mt-2"
      >
        <h6>১০. সিগারেট টি আপনার কেমন লেগেছে?</h6>
        <Form.Group onChange={q10value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="good">ভাল</option>
            <option value="bad">খারাপ</option>
            <option value="likeCloves">লবঙ্গের মত</option>
            <option value="likeCinnamon">দারুচিনির মত</option>
            <option value="light">হালকা</option>
            <option value="smooth">স্মুদ</option>
            <option value="hard">কড়া</option>
            <option value="cold">ঠান্ডা</option>
            <option value="likeSpices">মসলার মত</option>
            <option value="average">মোটামুটি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q10 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>১১. আপনি কি সিগারেটটি পছন্দ করেছেন?</h6>
        <Form.Group onChange={q11value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="average">মোটামুটি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q11 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          ১২. এক শলাকা র‌্যালী খাওয়ানোর পর আপনাকে পরবর্তীতে কত শলাকা খাওয়ার জন্য
          দিয়েছে?
        </h6>
        <Form.Group onChange={q12value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="0stick">০ শলাকা</option>
            <option value="1stick">১ শলাকা</option>
            <option value="2stick">২ শলাকা</option>
            <option value="3stick">৩ শলাকা</option>
            <option value="4stick">৪ শলাকা</option>
            <option value="5stick">৫ শলাকা</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* <div
        style={{ display: q12 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>১৩. উনি কি আপনাকে চা অথবা নাস্তা করিয়েছে?</h6>
        <Form.Group onChange={q13value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div> */}
      <div
        style={{ display: q12 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>
          ১৪. আপনি কি পরবর্তিতে কোন দোকান থেকে সিগারেট (শলাকা/প্যাকেট) টি কিনে
          ছিলেন?
        </h6>
        <Form.Group onChange={q14value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q14 === null ? "none" : "block" }}
        className="mt-2"
      >
        <h6>১৫. উনি আসার পর থেকে কি আপনি র‍্যালী সিগারেট টি খাচ্ছেন?</h6>
        <Form.Group onChange={q15value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q1 === "no" || q2 === "no" || q2 === "busy" || q3 === "no"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>আপনার দিনটি শুভ হোক।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
      <div
        style={{
          display:
            q5 === "no" ||
            q6 === "others" ||
            q8 === "no" ||
            q15 === "yes" ||
            q15 === "no"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>
          র‌্যালী’র অগ্রযাত্রায় অংশগ্রহণের জন্য আপনাকে ধন্যবাদ, ৭ টাকার
          মূল্যস্তরে এই প্রথম তিনটি ভিনড়ব স্বাদে র‌্যালী পাওয়া যাচ্ছে, র‌্যালী
          ভার্ব - সবচাইতে স্মুদ টেষ্ট এবং আন্তর্জাতিক মানের টিপিং পেপার যাতে কোন
          গন্ধ নেই, র‌্যালী আইছ- ৭ টাকা মূল্যে স্পেশাল কেপসুল যা ধূমপানে দেবে
          অসাধারণ লবঙ্গ স্বাদের তৃপ্তি। র‌্যালী বোল্ট- ৭ টাকা মূল্যে স্পেশাল
          কেপসুল যা দেবে অসাধারণ দারুচিনি স্বাদের তৃপ্তি। <br /> আপনার দিনটি শুভ
          হোক।
        </h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
