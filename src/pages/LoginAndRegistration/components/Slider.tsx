import { useLocation, useNavigate } from "react-router";

const Slider = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { tag: "Login", path: "/login" },
    { tag: "Sign Up", path: "/signup" },
  ];

  return (
    <div>
      <div className="flex px-4 py-3">
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-200/80 p-1.5 dark:bg-slate-800">
          {sidebarItems.map((item) => (
            <label
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-background-light has-[:checked]:shadow-md text-[#101c22] dark:has-[:checked]:bg-slate-700 dark:has-[:checked]:text-slate-50 text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal transition-all"
            >
              <span>{item.tag}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
