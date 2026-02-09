import React from "react";

const NextAppointment = () => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold dark:text-secondary">
          Next Appointment
        </h3>
        <a
          className="text-sm font-medium text-primary hover:underline"
          href="#"
        >
          View all
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark">
          <div className="flex flex-col items-center justify-center bg-primary/10 text-primary p-3 rounded-lg w-16 flex-shrink-0">
            <span className="text-sm font-bold">OCT</span>
            <span className="text-2xl font-black">28</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold dark:text-secondary">
              Telemedicine Follow-up
            </p>
            <p className="text-sm text-text-light-secondary dark:text-secondary">
              Dr. Evelyn Reed - 09:30 AM
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold w-full md:w-auto hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-base">
              video_call
            </span>
            <span>Join Call</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark">
          <div className="flex flex-col items-center justify-center bg-secondary/10 text-secondary p-3 rounded-lg w-16 flex-shrink-0">
            <span className="text-sm font-bold uppercase">Nov</span>
            <span className="text-2xl font-black">12</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold dark:text-secondary">
              Routine Physical Exam
            </p>
            <p className="text-sm text-text-light-secondary dark:text-secondary">
              Dr. Marcus Thorne - 10:45 AM
            </p>
          </div>
          <div className="text-sm font-medium text-text-light-secondary dark:text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            Patan Hospital
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextAppointment;
