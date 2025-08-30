"use client";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.location.href = "https://uidai.gov.in/en/contact-support/have-any-question/308-english-uk/faqs/direct-benefit-transfer-dbt.html";
  }, []);

  return <div>Redirecting...</div>;
};

export default Page;
