const Testimonial = () => {
  return (
    <>
      <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div
            className="w-full md:w-1/3 bg-center bg-no-repeat aspect-square md:aspect-[3/4] bg-cover rounded-lg bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDCrTZ32VsZpo3ewSjs5v8mwZzVa6vZAGkYJ4mkDdGlnHRJJhR7prW3Bp09bfXunaModjZ78R3JhirG9G-310gamP6hiyOsIfHOQPzwROb_G94-ZeAPB3LqD1S6-v_EDsE77HqyLfLyf45hCy8wPzwdg0Mkq-gow60ONo6PvY3yLKa61fuBu-wopq-5f6ptAx_4xxNlZ3jON-aplfr_Oxz8Xa4Pz6IN87fTruTT_kamYVEOQPwfbWkNwqOu9SqoVNiyrBI0EkFXKU0A)]"
            data-alt="A patient smiling while using a laptop for a video call."
          ></div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-secondary text-sm font-bold uppercase tracking-wider">
              Patient Testimonial
            </p>
            <blockquote className="text-xl font-medium italic">
              "As someone with mobility issues, MediSecure's telemedicine
              service has been a lifeline. The platform is easy to use, and I
              feel just as cared for as an in-person visit. The booking process
              was a breeze!"
            </blockquote>
            <p className="mt-2 text-subtext-light dark:text-subtext-dark font-medium">
              James P., Patient
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
