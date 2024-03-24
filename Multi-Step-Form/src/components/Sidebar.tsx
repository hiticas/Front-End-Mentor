import React from "react";
import backgroundSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import backgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

interface SidebarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep, onStepClick }) => {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat">
      <div className="sidebar w-full absolute">
        <div className="steps p-10 flex justify-center items-center gap-[20px]">
          <div
            onClick={() => onStepClick(1)}
            className={`${
              currentStep === 1 ? "active bg-blue-200 border-blue-200" : ""
            } flex w-[45px] h-[45px] justify-center items-center rounded-full cursor-pointer border-2 font-bold`}
          >
            <div
              className={`${currentStep === 1 ? "text-black" : "text-white"}`}
            >
              1
            </div>
            <div className="hidden sm:block">
              <div>STEP 1</div>
              <div>YOUR INFO</div>
            </div>
          </div>
          <div
            onClick={() => onStepClick(2)}
            className={`${
              currentStep === 2 ? "active bg-blue-200 border-blue-200" : ""
            } flex w-[45px] h-[45px] justify-center items-center  rounded-full cursor-pointer border-2 font-bold`}
          >
            <div
              className={`${currentStep === 2 ? "text-black" : "text-white"}`}
            >
              2
            </div>
            <div className="hidden sm:block">
              <div>STEP 2</div>
              <div>YOUR INFO</div>
            </div>
          </div>
          <div
            onClick={() => onStepClick(3)}
            className={`${
              currentStep === 3 ? "active bg-blue-200 border-blue-200" : ""
            } flex w-[45px] h-[45px] justify-center items-center  rounded-full cursor-pointer border-2 font-bold`}
          >
            <div
              className={`${currentStep === 3 ? "text-black" : "text-white"}`}
            >
              3
            </div>
            <div className="hidden sm:block">
              <div>STEP 3</div>
              <div>YOUR INFO</div>
            </div>
          </div>
          <div
            onClick={() => onStepClick(4)}
            className={`${
              currentStep === 4 ? "active bg-blue-200 border-blue-200" : ""
            } flex w-[45px] h-[45px] justify-center items-center rounded-full cursor-pointer border-2 font-bold`}
          >
            <div
              className={`${currentStep === 4 ? "text-black" : "text-white"}`}
            >
              4
            </div>
            <div className="hidden sm:block">
              <div>STEP 4</div>
              <div>YOUR INFO</div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={backgroundSidebarMobile}
        alt=""
        className="sm:hidden w-full h-[210px] object-cover"
      />
      <img
        src={backgroundSidebarDesktop}
        alt=""
        className="hidden sm:block w-full h-[200px] object-cover"
      />
    </div>
  );
};

export default Sidebar;
