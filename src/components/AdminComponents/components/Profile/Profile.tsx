import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  // PERFORMANCE FIX: No need to map over single-item array
  // This is a static profile, render directly
  const profileData = {
    photo: "Profile picture of Dr. Evelyn Reed",
    username: "Saliv Maharjan",
    post: "Administrator",
  };
  
  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-4 flex gap-3 p-3">
          <div className="flex gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDDi-WFrolJwGt76zO7hwmkC_m_2ynYZO9tAXF3b4CI27WNZ75mLfWkwBlPTwn39tri6IhNSHkUohZdKoyMXq-B7El_s_KSucyYeD74jb9ECLUipo6kUfUb6F-QJy4uS4O_-gXciqSMfAibajoyyr9TzP-9UWRajm6IndxwLlZcGDpcPWxRIreG9jF9SN4mvxiP8kGMME1--7OSu0GBGflw2GcSiM6RUKBaFAcoEyaykplOiW_T98N3BXF2g6bpRujKf0yRtkiKF4B5)]"
              data-alt={profileData.photo}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-base font-medium">{profileData.username}</h1>
              <p className="text-sm font-normal text-text-secondary-light dark:text-text-secondary-dark">
                {profileData.post}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-2">
          <NavLink
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
            to={"#"}
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Log Out</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
