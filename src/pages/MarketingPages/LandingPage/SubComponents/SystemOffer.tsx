import Testimonial from "./Testimonial";

const SystemOffer = () => {
  return (
    <>
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
        id="telemedicine"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary">
              Connect with Care, Intelligently
            </h2>
            <p className="text-subtext-light dark:text-subtext-dark text-lg">
              Our platform offers more than just video calls. Experience secure,
              AI-enhanced telemedicine with intelligent symptom checkers,
              real-time transcription, and seamless integration with patient
              records for a more efficient and effective virtual consultation.
            </p>
            <div className="flex min-w-[84px] max-w-[480px] w-fit">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Learn About Telemedicine</span>
              </button>
            </div>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl md:order-1 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAx39kcpBpeiRWCFK2_cCXHCvp9VzSpCowAtZqUPh28oRsr5LkbYrpBiBYuRa4iQGZAvHVtWWtfTDZW9RwbvDHSuxApPyjcHBSCgN2PsU02UMmdjjCqDXBKHTfLKr1bO4gnDN13raKc8Bt7ey91Zy3_69YJLop_nxxY_-ikmLeQfHqKM12TElXDWLpBCJxEEssT9Q_vw-bvMuVaorTGyvY-3zvFRDDoIBgzrOx5duV_FVk6aaNWnipLOF7a_kyGJKCHAa8pu0h76eul)]"
            data-alt="A doctor consulting with a patient via a tablet, showcasing telemedicine."
          ></div>
        </div>
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                The Patient Journey: Appointment Booking
              </h3>
              <p className="text-subtext-light dark:text-subtext-dark mt-2">
                A streamlined, user-friendly booking process from start to
                finish.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span>Patient logs in to the secure portal.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span>Selects specialty and preferred provider.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span>Chooses an available date and time slot.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span>
                    Confirms appointment and receives email/SMS reminder.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                Secure Video Features
              </h3>
              <p className="text-subtext-light dark:text-subtext-dark mt-2">
                Features designed for a productive and secure consultation.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    encrypted
                  </span>
                  <span>End-to-End Encrypted Video &amp; Audio</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    screen_share
                  </span>
                  <span>Secure Screen Sharing for Results</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    chat
                  </span>
                  <span>In-call Private Text Chat</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    transcribe
                  </span>
                  <span>AI-Powered Live Transcription</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Testimonial />
      </section>
    </>
  );
};
export default SystemOffer;
