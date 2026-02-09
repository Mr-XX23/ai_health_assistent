import React from "react";
import { NavLink, useNavigate } from "react-router";

const PatientSidebar = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="sticky top-0 flex h-screen w-64 flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDIkDB6Asbi6diKCT0QuUF19fMezHAZ1CHpEBhoOui7EePp9ZfO1W1BnDvlC3jvNT0z44tBiYvuHfsWaJLiYR5ut_FZ5ojo44EpGa2MTzu920RGkfdkK1cxOPGyi-sfa-7UtfEy5n5aSwELmTrq6W8XylnQS2KO6_VO3A6ue3Jg3NerHaTGfLTE-jjV5VX6lNb8hGVQfaHgU4_YVq0POeZNBknGL2HHd8wXKr1EcsltJUtYWutOYBUN7-a53HI8b52UBq_JWYGyZQLm)]"
              data-alt="Profile picture of Isabella Rossi"
            ></div>
            <div className="flex flex-col">
              <h1 className="text-charcoal dark:text-gray-100 text-base font-semibold leading-normal">
                Isabella Rossi
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                ID: 738-49-104
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT bg-primary/10 text-primary dark:bg-primary/20"
            >
              <span className="material-symbols-outlined fill">person</span>
              <p className="text-sm font-medium leading-normal">Overview</p>
            </NavLink>

            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">history</span>
              <p className="text-sm font-medium leading-normal">
                Medical History
              </p>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">monitoring</span>
              <p className="text-sm font-medium leading-normal">
                Health Metrics
              </p>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">pill</span>
              <p className="text-sm font-medium leading-normal">Medications</p>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">vaccines</span>
              <p className="text-sm font-medium leading-normal">Vaccinations</p>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className=" material-symbols-outlined">directions_run</span>
              <p className="text-sm font-medium leading-normal">Lifestyle</p>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={handleGoBack}
            >
              <span className=" material-symbols-outlined">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
                </svg>
              </span>
              <p className="text-sm font-medium leading-normal">Return</p>
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Download Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientSidebar;
