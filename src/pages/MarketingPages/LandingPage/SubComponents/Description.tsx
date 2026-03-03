const Description = () => {
  return (
    <>
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
        id="diagnostics"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuD-VBo40A-gG5sNvmxiD_Jk6RjN4lndJ7gfIwCgeX5CmJIGHEYM7InM8o3p-cI_EydjZJnRtyfnTVdbUQBzdO0lWHP5EYuPL2gCRgvsGXMKYm-U8FmK3Db2-PVjxmC60EnE5AcanB2IBN7rGS8SWuMcgtI3YmYtbcvhG38J-SQKsZPHXhCv_J34CGDdk3lYzPWDMzVdVEV1oROI5z6HxR71ftqPUCJSWcIeh_HOvdWR1CvFjWAebzaq3RPSHrL5EBcyS9s-GnXdTVT6)]"
            data-alt="Abstract image representing AI neural networks in a medical context."
          ></div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary dark:text-secondary">
              Precision Diagnostics, Powered by AI
            </h2>
            <p className="text-subtext-light dark:text-subtext-dark text-lg">
              Our AI analyzes medical images and data with superhuman accuracy,
              enabling faster and more reliable diagnoses for better patient
              outcomes. This technology assists in radiology, pathology, and
              more, helping clinicians detect conditions earlier and with
              greater confidence.
            </p>
            <div className="flex min-w-[84px] max-w-[480px] w-fit">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Explore AI Diagnostics</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col gap-3">
            <span className="material-symbols-outlined text-4xl text-accent">
              verified
            </span>
            <h3 className="text-xl font-bold">Increased Accuracy</h3>
            <p className="text-subtext-light dark:text-subtext-dark">
              Reduce diagnostic errors with algorithms trained on vast datasets
              of medical imagery, minimizing false negatives and positives.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="material-symbols-outlined text-4xl text-accent">
              rocket_launch
            </span>
            <h3 className="text-xl font-bold">Accelerated Workflow</h3>
            <p className="text-subtext-light dark:text-subtext-dark">
              Significantly cut down the time required for image analysis and
              reporting, freeing up clinicians to focus on patient care.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="material-symbols-outlined text-4xl text-accent">
              visibility
            </span>
            <h3 className="text-xl font-bold">Early Detection</h3>
            <p className="text-subtext-light dark:text-subtext-dark">
              Identify subtle anomalies that may be missed by the human eye,
              enabling earlier intervention and improving prognosis.
            </p>
          </div>
        </div>
        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold tracking-tight">
              How It Works: Diagnostic Workflow
            </h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold">Image &amp; Data Upload</h4>
                  <p className="text-subtext-light dark:text-subtext-dark mt-1">
                    Securely upload medical images (X-rays, CT scans, etc.) and
                    patient data directly or via EHR integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold">AI Analysis &amp; Scoring</h4>
                  <p className="text-subtext-light dark:text-subtext-dark mt-1">
                    Our proprietary algorithms analyze the data in seconds,
                    highlighting areas of interest and providing a confidence
                    score for potential findings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold">Clinician Review</h4>
                  <p className="text-subtext-light dark:text-subtext-dark mt-1">
                    Results are presented in an intuitive dashboard for the
                    clinician to review, confirm, and incorporate into their
                    final diagnosis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold tracking-tight">
              Confidence Scores Explained
            </h3>
            <p className="text-subtext-light dark:text-subtext-dark mt-2">
              Our AI provides a score from 0% to 100% indicating its confidence
              in a finding, empowering clinicians with transparent, data-driven
              insights.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2/5 text-sm font-medium">
                  Potential Finding A
                </div>
                <div className="w-3/5 bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                  <div className="bg-secondary h-4 rounded-full text-white text-xs flex items-center justify-center w-[92%]">
                    92%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2/5 text-sm font-medium">
                  Potential Finding B
                </div>
                <div className="w-3/5 bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                  <div className="bg-secondary h-4 rounded-full text-white text-xs flex items-center justify-center w-[78%]">
                    78%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2/5 text-sm font-medium">
                  Potential Finding C
                </div>
                <div className="w-3/5 bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                  <div className="bg-secondary/60 h-4 rounded-full text-white text-xs flex items-center justify-center w-[45%]">
                    45%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div
              className="w-full md:w-1/3 bg-center bg-no-repeat aspect-square md:aspect-[3/4] bg-cover rounded-lg bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDSUuou9htaM9r4D9iOOxbuqLKzfrFn_aviGutGQKMdQYDKGudfjJszTb0XZFMogZnHzNLBGfyKhPrj6sAN07Q-vMTZd0lhhTVDufeGsKDdrTt62fZp9XvwMLmeiLA8ddy78D62cIYP0qMOvgCDt9XAwJLzW1031t1wWigFUh01jjzLMLlxYnfG2QojklxdYwifahtAG6po79G6FSnTXIY3FIPBazB72EKLLQOdQ5sHYZrsnpQHmoa5gnNgP0OC6NK4hSxHGsRxdxqs)]"
              data-alt="Professional headshot of Dr. Evelyn Reed."
            ></div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-secondary text-sm font-bold uppercase tracking-wider">
                Success Story
              </p>
              <blockquote className="text-xl font-medium italic">
                "MediSecure's AI has revolutionized our radiology department.
                We're catching critical issues faster and with greater
                confidence than ever before. It's an indispensable tool."
              </blockquote>
              <p className="mt-2 text-subtext-light dark:text-subtext-dark font-medium">
                Dr. Evelyn Reed, Head of Radiology, St. Jude's Medical Center
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Description;
