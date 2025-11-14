const FAQ = () => {
  return (
    <div>
      <section className="bg-slate-100 dark:bg-slate-800 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark">
              Answers to common questions about our platform and solutions.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="font-bold">
                  How does MediSecure ensure data security and HIPAA compliance?
                </h3>
                <span className="relative size-5 shrink-0">
                  <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">
                    add
                  </span>
                  <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">
                    remove
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">
                We employ end-to-end encryption for all data in transit and at
                rest, adhere to strict access controls, and undergo regular
                third-party audits to ensure we meet and exceed all HIPAA
                requirements.
              </p>
            </details>
            <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="font-bold">
                  Can MediSecure integrate with our existing EHR system?
                </h3>
                <span className="relative size-5 shrink-0">
                  <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">
                    add
                  </span>
                  <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">
                    remove
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">
                Yes, our platform is built for interoperability. We use standard
                protocols like HL7 and FHIR to integrate seamlessly with most
                major EHR systems, ensuring a smooth data flow.
              </p>
            </details>
            <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="font-bold">
                  What kind of support and training do you offer?
                </h3>
                <span className="relative size-5 shrink-0">
                  <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">
                    add
                  </span>
                  <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">
                    remove
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">
                We provide comprehensive onboarding, training for all staff, and
                24/7 technical support to ensure your team feels confident and
                gets the most value from our platform.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
