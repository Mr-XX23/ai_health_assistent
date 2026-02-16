import React, { useState } from "react";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import { useNavigate } from "react-router";
import PatientList from "../../../PatientComponents/PatientList/PatientList";

const PatientPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <AdminLayout>
        <div className="mt-10 mx-4 w-[100%]">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Patient List
            </h2>
          </div>
          <PatientList />
        </div>
      </AdminLayout>
    </>
  );
};

export default PatientPage;
