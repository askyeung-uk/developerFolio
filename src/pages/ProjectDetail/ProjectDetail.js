import React from "react";
import "./ProjectDetail.scss";

import phase0 from "../../assets/images/projects/email-validation/phase0.png";
import phase1 from "../../assets/images/projects/email-validation/phase1.png";
import phase2 from "../../assets/images/projects/email-validation/phase2.png";

import { Link } from "react-router-dom";

import {useLocalStorage} from "../../hooks/useLocalStorage";


export default function ProjectDetail() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark] = useLocalStorage("isDark", darkPref.matches);


  return (
    <div className={isDark ? "dark-mode page-project-detail" : "page-project-detail"}>

      <h1 className="page-project-detail-title">Automated Customer Invoice Delivery with Email Validation</h1>

      <h2 className="page-project-detail-subtitle">Problem</h2>
      <p>
        Customer email addresses stored in a legacy ERP system were often
        incomplete or incorrectly formatted, causing automated invoice delivery failures
        and billing delays.
      </p>

      <h2 className="page-project-detail-subtitle">Solution</h2>
      <p>
        Initially the customer invoices were followed up manually by account managers. Management
        was looking up ways to free account managers from this kind of administrative work and 
        put more time and effort in bringing more values to customers and the company.
        <img src={phase0} alt="Phase 0 workflow" />
      </p>

      <p>
        Next an automated customer invoice delivery workflow was setup. Customer email addresses are
        retrieved from legacy ERP using scheduled export. When a customer invoice was ready for delivery,
        it was sent to the respective customer email address. It was running smoothly most of the time,
        except a small set of invoices were failed to be delivered. The culprit was the customer email address(es)
        were not properly maintained.
        <img src={phase1} alt="Phase 1 workflow" />
      </p>

      <p>
        To combat this situation, management agreed to extend the project scope to ensure the quality of the 
        customer email address. Thus a scheduled Power Automate workflow was built to validate customer email
        data daily before invoice processing. Invalid records trigger alerted to
        account managers for correction. Repeated alerts would be escalated to IT administrator.
        <img src={phase2} alt="Phase 2 workflow" />
      </p>

      <h2 className="page-project-detail-subtitle">Impact</h2>
      <ul>
        <li>Prevented invoice delivery failures caused by invalid email address, thus improving billing reliability</li>
        <li>Reduced issue detection from weeks to within 1 day</li>
        <li>Automated validation of ~200 email addresses daily</li>
      </ul>

      <h2 className="page-project-detail-subtitle">Tools Used</h2>
      <ul>
        <li>Excel with Office Script</li>
        <li>Outlook</li>
        <li>Power Automate</li>
      </ul>

      <div className="page-back-button">
        <Link to="/">← Back to Portfolio</Link>
      </div>
    </div>
  );
}