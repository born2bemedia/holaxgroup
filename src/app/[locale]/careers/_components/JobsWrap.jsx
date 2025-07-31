"use client";
import React, { useEffect, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import useJobsStore from "@/stores/jobsStore";
import JobPlusIcon from "@/icons/JobPlusIcon";
import ReactMarkdown from "react-markdown";
import JobButton from "@/components/JobButton";
import JobMinusIcon from "@/icons/JobMinusIcon";

const JobsWrap = () => {
  const [jobsArray, setJobsArray] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const jobs = useJobsStore((state) => state.jobs);
  const fetchJobs = useJobsStore((state) => state.fetchJobs);

  useEffect(() => {
    fetchJobs()
      .then(() => console.log("Articles loaded:", jobs))
      .catch((error) => console.error("Error loading articles:", error));
  }, [fetchJobs]);

  const toggleAccordion = (index) => {
    console.log("click");
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="jobs-wrap" id="jobs">
      <div className="_container">
        <h2>Job Offers</h2>
        <div className="jobs-wrap__body">
          {jobs.map((job, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`job-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="job-title">
                <h3>{job.title}</h3>
                <div className={index}>
                  {activeIndex === index ? (
                    <button onClick={() => toggleAccordion(index)}>
                      <JobMinusIcon />
                    </button>
                  ) : (
                    <button onClick={() => toggleAccordion(index)}>
                      <JobPlusIcon />
                    </button>
                  )}

                  <JobButton job={job.title} />
                </div>
              </div>
              {activeIndex === index && (
                <div className="job-content">
                  <h4>Responsibilities:</h4>
                  <ReactMarkdown>{job.requirements}</ReactMarkdown>
                  <h4>Requirements:</h4>
                  <ReactMarkdown>{job.responsibilities}</ReactMarkdown>
                  <JobButton job={job.title} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsWrap;
