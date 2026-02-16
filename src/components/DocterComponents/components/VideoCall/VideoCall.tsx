import React from "react";

const VideoCall = () => {
  return (
    <div className="col-span-8 h-screen overflow-y-auto bg-background-light dark:bg-background-dark p-8 flex flex-col">
      <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Consultation with John Doe
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Today, October 5, 2023 at 10:30 AM
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Starts in
            </p>
            <p className="text-3xl font-bold text-primary">04:22</p>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-slate-900 dark:bg-black rounded-xl flex flex-col justify-between items-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuC1jUoo-dgfiGt-gt-CyED2_IeNeBR2l7p3Sj7HoFRj2GeuNCvDFU9NszHxcYm2i8Jk_eqTVZtjySEO_8B3n99VPYD47pHrUa2ufLaVwVIrRabW0WeFl0stDylnK7o66fmMeb0-wPoLZVKOzJdkAc8D4vFSIbpqebmad97flVBUE7w2QLboWFS3c5vb-KFOfkEKsp9yjqkMcpaCWVafYdBPSIo8Sf-dquUA3qkSJHvgXmFAqSYKkKBQrORMNygfdPsuqdRxAvuCKx5a)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
        <div className="z-10 flex-grow flex flex-col items-center justify-center p-8 text-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-4 border-white/50 mb-4 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDLz50JNgahW2iXj1-RO0KdQEay1eAxnSXQmBVu2k-6qavDPngbr3CdCykRbK2f-cf8ZgqjC8wHg5-eXJpJz-24ZsSfN7CRB0m-f8YRD_OMQpVDz3Q6rLYK4u40rhdh7sK1SNxDr_JxRUgEVQs8alJMC7L3GI2-2MV2KMfZ1dvr3zotC2pcbA8B2C8eXMigbKusVzmTvqO6IS8d1lqzlQG93f4-_CM8Oi7ndqmhIqu4xKfByZCofvfGsyV7Q6BJxfExrxmadxl3Yorq)]"
            data-alt="Portrait of John Doe"
          ></div>
          <h2 className="text-2xl font-bold">Waiting for patient to join...</h2>
          <p className="text-slate-300 mt-2 max-w-md">
            The consultation is scheduled to begin shortly. You can use this
            time to review the patient's chart and prepare your notes.
          </p>
          <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-12 px-6 mt-8 bg-primary text-white text-base font-medium shadow-lg hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined !text-2xl">
              videocam
            </span>
            <span>Start Consultation</span>
          </button>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <div className="w-48 h-28 bg-black rounded-lg border-2 border-slate-700 overflow-hidden">
            <img
              alt="Self-view of Dr. Emily Carter"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ji1igJAUfaH0pcGWCK5APQv4B4d6CythckKDK2ogFEk4wDLSphcMU9QYub-bCRmrJnPEWH-eiqkMYO9I_uJN9qTNNkEZEg1qO7NNkzuL5O-2E9RjZ5tERYzes11STM25WYlRlN1bHzOGc_Ff8vPb16d7Cab-NN5zQU7ipoJppxROvL4C7yxdVBOJq7Gg_hhe3oisTui_3p2z13IyDfqVUJh22L_SvOWQlN_NIFe8P6iy1ztbD3DTLYiOzofXKF0WN7z021yKcQQI"
            />
          </div>
        </div>
        <div className="w-full p-4 z-10">
          <div className="max-w-md mx-auto bg-black/40 backdrop-blur-sm rounded-full p-2 flex justify-center items-center gap-2">
            <button className="flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button className="flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <span className="material-symbols-outlined">screen_share</span>
            </button>
            <button className="flex items-center justify-center size-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors">
              <span className="material-symbols-outlined">call_end</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav aria-label="Tabs" className="-mb-px flex space-x-6">
            <a
              className="whitespace-nowrap border-b-2 py-3 px-1 border-primary text-primary font-semibold text-sm"
              href="#"
            >
              Patient Chart
            </a>
            <a
              className="whitespace-nowrap border-b-2 py-3 px-1 border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-500 font-medium text-sm"
              href="#"
            >
              Live Chat
            </a>
            <a
              className="whitespace-nowrap border-b-2 py-3 px-1 border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-500 font-medium text-sm"
              href="#"
            >
              Add Notes
            </a>
          </nav>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 bg-white dark:bg-slate-900/50 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-slate-800 dark:text-slate-100">
                Patient Summary
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <strong>DOB:</strong> Jan 15, 1985 (38y)
                </li>
                <li>
                  <strong>Allergies:</strong> Penicillin
                </li>
                <li>
                  <strong>Recent Visit:</strong> Sep 20, 2023
                </li>
                <li>
                  <strong>Reason:</strong> Annual Physical
                </li>
              </ul>
            </div>
            <div className="col-span-2 bg-white dark:bg-slate-900/50 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-slate-800 dark:text-slate-100">
                Prepare for Call
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 !text-xl">
                    check_circle
                  </span>{" "}
                  Review patient's medication list.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 !text-xl">
                    check_circle
                  </span>{" "}
                  Check recent lab results.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 !text-xl">
                    radio_button_unchecked
                  </span>{" "}
                  Prepare follow-up questions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
