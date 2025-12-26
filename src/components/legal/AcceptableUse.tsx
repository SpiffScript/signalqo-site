import React from "react";

const AcceptableUse: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Acceptable Use Policy
        </h1>
        <p className="text-sm text-slate-500 mb-10">
          Effective Date: June 1, 2025
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-800">
          <p>
            This Acceptable Use Policy (“Policy”) governs access to and use of
            the signalqo.com website (the “Site”), as well as any portals,
            dashboards, communication tools, file-sharing systems, or related
            platforms that may be made available by SignalQo in connection with
            advisory or consulting Services.
          </p>

          <p>
            SignalQo is a business operated by QoLogic LLC (“SignalQo,”
            “QoLogic,” “we,” “us,” or “our”). By accessing or using the Site or
            any related systems, you agree to comply with this Policy in
            addition to our Terms of Service and Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            1. Permitted Use
          </h2>
          <p>
            You may access and use the Site and related systems solely for
            lawful, internal business purposes and only in connection with
            services provided or authorized by SignalQo.
          </p>

          <p>
            Use of the Site does not grant any ownership interest in SignalQo’s
            intellectual property, frameworks, methodologies, or content.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            2. Prohibited Activities
          </h2>
          <p>
            You may not, directly or indirectly:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Copy, scrape, harvest, or extract Site content or data</li>
            <li>
              Reverse engineer, deconstruct, or analyze systems, frameworks,
              or methodologies
            </li>
            <li>
              Create derivative works based on SignalQo materials or structure
            </li>
            <li>
              Share Site access, materials, or credentials with unauthorized
              parties
            </li>
            <li>
              Use Site content for competitive, commercial, or advisory
              purposes outside your own internal business
            </li>
            <li>
              Circumvent access controls, security features, or technical
              safeguards
            </li>
            <li>
              Upload malicious code, scripts, or automated tools
            </li>
            <li>
              Interfere with the availability or performance of the Site or
              related systems
            </li>
            <li>
              Use the Site to violate laws, regulations, or third-party rights
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-10">
            3. User Submissions
          </h2>
          <p>
            Where SignalQo allows the submission or upload of documents,
            communications, or other materials, you represent that:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>You have the legal right to submit such materials</li>
            <li>
              Submission does not violate confidentiality, employment,
              intellectual property, or privacy obligations
            </li>
            <li>
              Materials do not contain malicious code or harmful content
            </li>
          </ul>

          <p>
            SignalQo reserves the right to remove or restrict access to any
            submitted content that violates this Policy.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            4. Security and Access Controls
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of any
            access credentials. You may not attempt to access areas of the Site
            or systems for which you are not authorized.
          </p>

          <p>
            SignalQo may suspend or terminate access where misuse, attempted
            misuse, or security concerns are identified.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            5. Monitoring and Enforcement
          </h2>
          <p>
            SignalQo may monitor usage of the Site and related systems for
            compliance with this Policy. Violations may result in suspension,
            termination of access, or additional legal remedies as permitted
            by law.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            6. Relationship to Other Policies
          </h2>
          <p>
            This Policy is supplemental to SignalQo’s Terms of Service and
            Privacy Policy. In the event of conflict, the Terms of Service
            control.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            7. Changes to This Policy
          </h2>
          <p>
            SignalQo may update this Policy from time to time. Continued use of
            the Site or related systems constitutes acceptance of any updates.
          </p>

          <h2 className="text-xl font-semibold mt-10">
            8. Contact Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Email: support@signalqo.com</li>
            <li>Phone: 720-515-4810</li>
            <li>
              Mailing Address: 411 W Platte Ave Ste A142, Fort Morgan, CO 80701
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AcceptableUse;
