import React from "react";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";

const AdminDashboard = () => {
  return (
    <div>
      <AdminLayout>
        <main className="flex flex-1 flex-col">
          {/* <!-- TopNavBar --> */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-10 py-3 bg-card-light dark:bg-card-dark sticky top-0 z-10">
            <div className="flex flex-1 items-center gap-8">
              <label className="relative flex-grow max-w-lg">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
                  search
                </span>
                <input
                  className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Search for patients, reports..."
                  type="search"
                />
              </label>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-primary/10">
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
                  notifications
                </span>
              </button>
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-primary/10">
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
                  chat_bubble
                </span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDk8tm0iGYUr71baoegMaaZV_zC0ytEVtv22uv7CD0Cs_Ovh3biGxFpMjnm9jFz3ldjK_8fUzZH8D6JKTy9S_2Y44w0SniXpp--s4d90ymr4eXjs8mqhuKSEKJFrYrzEDBBBY6kFim1GJbXt273Q0xJlCIs5YBdqnFfBSwsi1XoR9ifoDnu2qeUpXfU4By0lLxIJuDLfWhrRP0f4pPLMkpgdSZwQ0lLA_jeDoPfLLFcHITIAoBZjc7t9PKpvjfEdm-LO6hioKpITiPw)]"
                data-alt="Profile picture of Dr. Evelyn Reed"
              ></div>
            </div>
          </header>
          <div className="flex-1 p-8">
            {/* <!-- PageHeading --> */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
                  Dashboard
                </p>
                <p className="text-base font-normal text-text-secondary-light dark:text-text-secondary-dark">
                  Welcome back, Dr. Reed! Here's a summary of today's
                  activities.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
                <span className="material-symbols-outlined">add</span>
                <span>Add New Patient</span>
              </button>
            </div>
            {/* <!-- Stats --> */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <p className="text-base font-medium">Active Patients</p>
                <p className="tracking-light text-3xl font-bold">2,453</p>
                <p className="text-sm font-medium text-success">
                  +1.2% this month
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <p className="text-base font-medium">Upcoming Consultations</p>
                <p className="tracking-light text-3xl font-bold">18</p>
                <p className="text-sm font-medium text-warning">3 urgent</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <p className="text-base font-medium">System Status</p>
                <p className="tracking-light text-3xl font-bold text-success">
                  Operational
                </p>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                  All systems normal
                </p>
              </div>
            </div>
            {/* <!-- Patient Data Table Section --> */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Recent Patient Activity
                </h2>
                <a
                  className="text-sm font-medium text-primary hover:underline"
                  href="#"
                >
                  View All Patients
                </a>
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
                    <thead className="bg-background-light dark:bg-background-dark">
                      <tr>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark"
                          scope="col"
                        >
                          Patient Name
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark"
                          scope="col"
                        >
                          Patient ID
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark"
                          scope="col"
                        >
                          Last Consultation
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark"
                          scope="col"
                        >
                          Status
                        </th>
                        <th className="relative px-6 py-3" scope="col">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBp9gG0zEXwj8Jfq4FCNrX5AOXmacXNtWl1RxPtYTFzroEO5VvsBBoRQ-qSlmwEA-zIHrhvaL_rS1UaEQBxNLjoVklzWNvHGOxvDcvpaa8BBcvLKvLmh18_xslO_4kLWK3PbjrR2dPuPNT-CZTh9IuMJNqd_tI2VWm8PIkouJdWHvu8Ah3rc97U3E-5w6aWC7SVksHFElDJW9jtkXFD5r3Pa5OSha9ZI29pBpUKT39xQQoEmVOXenEU6skOXYx95ebmwPElhRb39IOj)]"
                              data-alt="Patient avatar"
                            ></div>
                            <span className="font-medium">Liam Johnson</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          PID-84321
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          2024-05-20
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex rounded-full bg-success/20 px-2 text-xs font-semibold leading-5 text-success">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a className="text-primary hover:underline" href="#">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDERZQGYitj_VKaOLigm5M_tnKSgVAzmuH1k3lqyJ6sQq3fX9Te6T9fV1KiB81BMia6ojCAW9JO6MkLoyT5AQYIyXMg8pvA1kWcct_ng83yQI4ypym7FAsZDpGr6mB_kOEDqHZQxzKb1ZeNGw6nAYjj8pzBuL-6tvr3ryVqFMddu7w_SxX8M6nxV-CtHgP9mWXK1X_afoOtflVTSkN3C3FgNQH_yAKrK5ppPnGKQgS0_HbslMGH2SuTey_zGEj3dqOZ5nSboUvSjPur)]"
                              data-alt="Patient avatar"
                            ></div>
                            <span className="font-medium">Olivia Smith</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          PID-84322
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          2024-05-18
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex rounded-full bg-warning/20 px-2 text-xs font-semibold leading-5 text-warning">
                            Pending Review
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a className="text-primary hover:underline" href="#">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCoMaU8vUar0F6d2TjDG9g-2Z_-TgYKYSMKk1mOuOE8BjTyqDjRNJWS9BplzoBsfTl33OrZp3APE67_DWTemAZKTkP5zXajE-lc3u-Eof7bNZAPJX7fVizeChSlylvdc7CWvArantSVJuVwL4c1XXwNyykfvDDMTe6NBJVyRxK85WYUEJ0jkW0t2SL716G6A4UucK_2Ee7u4zDHme25N7dthDf4ksalHmFv15Qiuopan-0TefKhjc9jkBpzDVp52YdLOPctXfN0Fji5)]"
                              data-alt="Patient avatar"
                            ></div>
                            <span className="font-medium">Noah Williams</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          PID-84323
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          2024-05-15
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex rounded-full bg-success/20 px-2 text-xs font-semibold leading-5 text-success">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a className="text-primary hover:underline" href="#">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAmkmoZjbpLvx09e0UMDAg-w6uqAqyIEQ0HUEmLOh2TyOywoRZtmPV9AeS4Rdw9k6xCAqZu-782gohWZI51ajNPX02FZCtB9cr0aBGObExKZsqhSSorq47PGMKjfuU_DG9gFBQO4f6LzhkkTflihymBsIdJeAaft1CAuT1aM7TbUMYKzEmYOJx6wpDTySQYKrCHG0LEY7N0vG1ZRumpkXw5yBhjlqC711ecTPaDXFwBsBL8kKaxCkZi2OVFIZDORwc8NHQgRS9CQiMp)]"
                              data-alt="Patient avatar"
                            ></div>
                            <span className="font-medium">Emma Brown</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          PID-84324
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          2024-05-12
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex rounded-full bg-danger/20 px-2 text-xs font-semibold leading-5 text-danger">
                            Inactive
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a className="text-primary hover:underline" href="#">
                            View Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
