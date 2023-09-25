import React from "react";
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";

const MainContent = () => {
  return (
    <>
      <div className="w-[60%] top-[30%] absolute left-[25%] m-auto text-center">
        <div className="grid grid-flow-col grid-cols-2 gap-3">
          <div>
            <p className="text-white text-5xl text-left font-extralight tracking-wide leading-normal">
              Searching for <p className="font-bold">Argmented Development</p>
              Teams to steer your product towards triumph?"
            </p>
            <div className="flex justify-between gap-2">
              <div className="m-4">
                <p className="text-white text-4xl font-bold">50+</p>
                <p className="text-white text-sm mt-2">Claims</p>
              </div>
              <div className="m-4">
                <p className="text-white text-4xl font-bold">80+</p>
                <p className="text-white text-sm mt-2">
                  Projects successfully completed{" "}
                </p>
              </div>
              <div className="m-4">
                <p className="text-white text-4xl font-bold">60%</p>
                <p className="text-white text-sm mt-2">
                  of the clients coverted into long term engagement partners
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b via-white from-white to-gray-900 rounded-lg p-6">
            <form action="" className="rounded-md">
              <p className="">Fill out the form.</p>
              <p>Our team will touch base with you within 24 hours</p>
              <div className="grid grid-cols-2 grid-rows-2">
                <input
                  className="border-b-[1px] border-gray-500 ml-0 m-4 bg-transparent placeholder:text-gray-800"
                  type="text"
                  placeholder="Full Name*"
                  required
                />
                <input
                  className="border-b-[1px] border-gray-500 ml-0 mt-9 m-4 bg-transparent placeholder:text-gray-800"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <input
                  className="border-b-[1px] border-gray-500 ml-0 m-4 bg-transparent placeholder:text-gray-800"
                  type="text"
                  placeholder="Country"
                />
                <input
                  className="border-b-[1px] border-gray-500 ml-0 m-4 bg-transparent placeholder:text-gray-800"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <input
                className="border-b-[1px] border-gray-500 w-[100%] ml-0 mt-9 m-4 bg-transparent placeholder:text-gray-800"
                type="text"
                placeholder="Tells us your requirements*"
                required
              />

              <div className="mt-3 flex gap-1 items-center">
                <button className="rounded-[40px] bg-[#181818] p-3 w-24 text-white">
                  Submit
                </button>
                <button className="rounded-[50%] bg-[#181818] w-fit p-3 text-white">
                  <ArrowForwardOutlined />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute m-auto left-[30%] mt-6">
          <p className="text-gray-500 text-center">Leading the charge for industries!</p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
