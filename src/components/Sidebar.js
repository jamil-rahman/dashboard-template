import React from "react";

export default function Sidebar() {
  return (
    // <div className="lg:w-48 md:w-20 bg-background border-r-border border-r ">
      <>
      <a
        href="#home"
        className="lg:flex lg:items-center lg:p-4 lg:mb-2 lg:mt-4 md:block md:mt-4 md:ml-6 sm:block sm:mt-4 sm:ml-6 sm:items-center text-neutral-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 md:visible sm:visible"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="md:invisible lg:visible sm:invisible">Dashboard</span>
      </a>

      <a
        href="#home"
        className="lg:flex lg:items-center lg:p-4 lg:mb-2 lg:mt-4 md:block md:mt-4 md:ml-6 sm:block sm:mt-4 sm:ml-6 sm:items-center text-primary bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span className="md:invisible lg:visible sm:invisible">Inventory</span>
      </a>

      <a
        href="#home"
        className="lg:flex lg:items-center lg:p-4 lg:mb-2 lg:mt-4 md:block md:mt-4 md:ml-6 sm:block sm:mt-4 sm:ml-6 sm:items-center text-neutral-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
       <span className="md:invisible lg:visible sm:invisible"> Documents</span>
      </a>

      <a
        href="#home"
        className="lg:flex lg:items-center lg:p-4 lg:mb-2 lg:mt-4 md:block md:mt-4 md:ml-6 md:items-center sm:block sm:mt-4 sm:ml-6 sm:items-center text-neutral-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="md:invisible lg:visible sm:invisible">Settings</span>
      </a>
      </>
    // </div>
  );
}
