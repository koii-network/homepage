import React from "react";
import styles from "styles/career.module.css";
import { JobBtn } from "./components/Button";
import { JobList } from "./components/List";
import { BPD, CCM, FDL, FED, UXUID, UXW, MGS } from "./components/jobdetail";

export const JobsList = () => {
  return (
    <div id="list" className={`${styles.careerlist} py-[5rem]`}>
      <span
        className="anchor absolute translate-y-[26rem] md:translate-y-[20rem] xl:translate-y-[-6rem]"
        id="jobanchor"
      ></span>
      <div className="container">
        <div className="flex flex-col xl:flex-row relative z-10 place-content-evenly ">
          <div className="btn-list flex flex-col bg-white h-fit">
            <div className="list-title uppercase text-[14px] p-[1rem]">
              Search By category
            </div>
            <div className="btns flex flex-col px-[1rem] py-[0.5rem]">
              <JobBtn
                onClick={FDL}
                id="fdl"
                label="Front-End Development Lead"
              />
              <JobBtn onClick={FED} id="fed" label="Front-End Developer" />
              <JobBtn onClick={UXW} id="uxw" label="UX Writer" />
              <JobBtn onClick={UXUID} id="uxuid" label="UX/UI Designer" />
              <JobBtn
                onClick={BPD}
                id="bpd"
                label="Blockchain Protocol Developer"
              />
              <JobBtn
                onClick={MGS}
                id="mgs"
                label="Marketing & Growth Specialist"
              />
              <JobBtn onClick={CCM} id="ccm" label="Content & Copy Manager" />
            </div>
          </div>
          <div
            className="job-list flex flex-col bg-white md:w-[664px] xl:w-[836px] detail"
            id="detail"
          >
            <JobList onClick={FDL} title="Front-End Web Development Lead" />
            <JobList onClick={FED} title="Front-End Developer" />
            <JobList onClick={UXW} title="UX Writer" />
            <JobList onClick={UXUID} title="UX/UI Designer" />
            <JobList onClick={BPD} title="Blockchain Protocol Developer" />
            <JobList onClick={MGS} title="Marketing & Growth Specialist" />
            <JobList onClick={CCM} title="Content & Copy Manager" />
          </div>
        </div>
      </div>
    </div>
  );
};
