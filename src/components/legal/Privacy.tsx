import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Privacy: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#cookie-policy") {
      const el = document.getElementById("cookie-policy");
      if (el) {
        const rect = el.getBoundingClientRect();
        const currentScroll = window.scrollY || window.pageYOffset;
        const headerOffset = 96;

        window.scrollTo({
          top: rect.top + currentScroll - headerOffset,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-10">
          Effective date: June 1, 2025
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-800">
          <p>
            SignalQo is a business operated by QoLogic LLC (“SignalQo,” “QoLogic,”
            “we,” “us,” or “our”). This Privacy Policy explains how information is
            collected, used, stored, and handled when you access the
            signalqo.com website (the “Site”) or engage SignalQo for advisory,
            consulting, coaching, assessment, auditing, or related professional
            services (the “Services”).
          </p>

          <p>
            By accessing or using the Site, submitting information through the
            Site, or engaging SignalQo, you acknowledge and agree to the
            practices described in this Privacy Policy. If you do not agree,
            you should not use the Site or provide information to SignalQo.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            1. Scope and Responsibility Allocation
          </h2>

          <p>
            SignalQo provides advisory, consulting, coaching, and assessment
            services intended to support clarity, structure, leadership
            alignment, and operational decision-making. SignalQo does not act
            as a data custodian, auditor, regulator, fiduciary, compliance
            authority, or record keeper for client businesses.
          </p>

          <p>
            All information provided to SignalQo is furnished at the sole
            discretion of the client. SignalQo does not independently verify,
            validate, certify, audit, or guarantee the accuracy, completeness,
            legality, or compliance of any information received.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            2. Categories of Information
          </h2>

          <p>
            SignalQo may receive or process the following categories of
            information in the course of operating the Site or delivering
            Services:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Business Contact Information</strong> (e.g. name, title,
              role, business email address, phone number)
            </li>
            <li>
              <strong>Business and Operational Information</strong> (e.g.
              organizational structure, policies, workflows, performance
              context, internal documentation, financial summaries, or
              operational records)
            </li>
            <li>
              <strong>Assessment and Advisory Outputs</strong> (e.g. audit
              notes, scorecards, diagnostic themes, recommendations, coaching
              observations, or action plans)
            </li>
            <li>
              <strong>Site Usage Data</strong> (e.g. IP address, browser type,
              pages visited, timestamps, referral sources)
            </li>
          </ul>

          <p>
            SignalQo does not collect or require personal information unrelated
            to a business context.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            3. Employee and Personnel Data Disclaimer
          </h2>

          <p>
            In the course of Services, SignalQo may receive information relating
            to a client’s employees, managers, contractors, or agents. This
            information is provided by the client solely in a business context
            and may include names, roles, responsibilities, professional
            observations, or performance-related context.
          </p>

          <p>
            SignalQo does not:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Employ, supervise, or manage client personnel</li>
            <li>
              Act as a joint employer, co-employer, or agent of the client
            </li>
            <li>
              Make or control hiring, termination, compensation, discipline, or
              promotion decisions
            </li>
            <li>
              Assume responsibility for employment law compliance or workforce
              outcomes
            </li>
          </ul>

          <p>
            All personnel decisions and employment-related obligations remain
            solely with the client.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            4. Prohibited Sensitive Information
          </h2>

          <p>
            Clients and users should not provide SignalQo with sensitive
            personal information, including but not limited to:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Medical or health information</li>
            <li>Protected class data</li>
            <li>Social Security numbers or government identifiers</li>
            <li>Background checks or investigative reports</li>
            <li>Legal dispute or litigation materials</li>
          </ul>

          <p>
            Unless explicitly requested by SignalQo in writing and governed by a
            separate agreement, any sensitive information voluntarily provided
            is submitted at the client’s own risk.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            5. Recording, Transcription, and Tools
          </h2>

          <p>
            Coaching sessions, workshops, or meetings may be recorded or
            transcribed only with advance notice and consent, where permitted
            by law. Recordings or transcripts are used solely for internal
            documentation, service delivery, or engagement continuity and are
            not distributed externally.
          </p>

          <p>
            SignalQo may use third-party tools for scheduling, analytics,
            transcription, or internal documentation. These providers process
            information only as necessary to perform their services on
            SignalQo’s behalf.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            6. Use of Information
          </h2>

          <p>
            Information collected or received by SignalQo is used solely to:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Provide and administer the Site and Services</li>
            <li>Evaluate engagements and deliver advisory outcomes</li>
            <li>Communicate with clients and respond to inquiries</li>
            <li>Improve internal processes and service quality</li>
            <li>Comply with legal obligations and protect business interests</li>
          </ul>

          <p>
            SignalQo may use anonymized or aggregated insights derived from
            engagements for internal learning or general market understanding,
            provided no client or individual is identifiable.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            7. Confidentiality Posture
          </h2>

          <p>
            SignalQo treats Business Data and Assessment Data as confidential and
            uses such information solely to deliver Services. This Privacy
            Policy does not create an NDA or supersede any executed
            confidentiality agreement.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            8. No Reliance or Outcome Responsibility
          </h2>

          <p>
            SignalQo provides advisory input only. All decisions, actions,
            implementations, and outcomes remain solely the responsibility of
            the client, even where such decisions rely on recommendations,
            assessments, or guidance provided by SignalQo.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            9. Data Security and Retention
          </h2>

          <p>
            SignalQo implements commercially reasonable safeguards to protect
            information. However, no system is entirely secure, and SignalQo
            cannot guarantee absolute security.
          </p>

          <p>
            Information is retained only for as long as reasonably necessary to
            deliver Services, meet legal obligations, and protect business
            interests, unless otherwise specified in a written agreement.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            10. Cookies and Tracking
          </h2>

          <p id="cookie-policy">
            SignalQo uses cookies and similar technologies to operate the Site,
            understand usage patterns, and improve performance. You may disable
            cookies via browser settings, though some Site functionality may be
            affected.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            11. Children’s Privacy
          </h2>

          <p>
            The Site and Services are intended for individuals 18 years of age
            or older. SignalQo does not knowingly collect information from
            minors.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            12. Changes to This Policy
          </h2>

          <p>
            This Privacy Policy may be updated from time to time. Continued use
            of the Site or Services constitutes acceptance of any updated
            policy.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            13. Contact Information
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>
              Email: support@signalqo.com
            </li>
            <li>
              Phone: 720-515-4810
            </li>
            <li>
              Mailing Address: 411 W Platte Ave Ste A142, Fort Morgan, CO 80701
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
