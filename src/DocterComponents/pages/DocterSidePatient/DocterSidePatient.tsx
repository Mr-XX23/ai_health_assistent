import DocterLayout from "../../../layout/DocterLayout/DocterLayout";
import PatientList from "../../../PatientComponents/PatientList/PatientList";

const DocterSidePatient = () => {
  return (
    <>
      <DocterLayout>
        <div className="mt-10 mx-4 w-[100%]">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Patient List
            </h2>
          </div>
          <PatientList />
        </div>
      </DocterLayout>
    </>
  );
};
export default DocterSidePatient;
