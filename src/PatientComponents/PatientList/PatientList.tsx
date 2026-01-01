import React from "react";
import { useNavigate } from "react-router";

const PatientList = () => {
  const navigate = useNavigate();
  return (
    <div>
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
                <td
                  className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                  onClick={() => navigate("/admin-patient-profile")}
                >
                  <a className="text-primary hover:underline">View Details</a>
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
  );
};

export default PatientList;
