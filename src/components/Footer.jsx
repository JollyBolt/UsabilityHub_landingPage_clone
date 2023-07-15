import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <section className=" mt-9 m-auto">
      <div className="bg-[#ebf2fa]">
        <div className="max-w-[1186px] xl:mx-auto mx-[3%] flex flex-col items-center md:items-start  md:flex-row  py-[80px] px-[20px]">
          <div className="md:w-3/12 mb-7">
            <img
              src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5dc9062fc19d430f6909ced7_UHLogo_standard.png"
              className="h-8"
              alt="UsabilityHub logo"
            />
          </div>
          <div className="md:w-3/12">
            <ul className="text-center md:text-left mb-4">
                <li className="mb-3 font-semibold text-xl tracking-wide">Product</li>
                <li className="mb-1 tracking-wide text-gray-500">Overview</li>
                <li className="mb-1 tracking-wide text-gray-500">Pricing</li>
                <li className="mb-1 tracking-wide text-gray-500">Research panel</li>
                <li className="mb-1 tracking-wide text-gray-500">Customers</li>
                <li className="mb-1 tracking-wide text-gray-500">Status page</li>
                <li className="mb-1 tracking-wide text-gray-500">Sign up</li>
                <li className="mb-1 tracking-wide text-gray-500">Book a demo</li>
            </ul>
          </div>
          <div className="md:w-3/12">
            <ul className="text-center md:text-left mb-4">
                <li className="mb-2 font-semibold text-xl tracking-wide">Methodologies</li>
                <li className="mb-1 tracking-wide text-gray-500">Card Sorting</li>
                <li className="mb-1 tracking-wide text-gray-500">Prototype testing</li>
                <li className="mb-1 tracking-wide text-gray-500">First click tests</li>
                <li className="mb-1 tracking-wide text-gray-500">Preference tests</li>
                <li className="mb-1 tracking-wide text-gray-500">Five second tests</li>
                <li className="mb-1 tracking-wide text-gray-500">Design surveys</li>
            </ul>
          </div>
          <div className="md:w-3/12 ">
            <ul className="text-center md:text-left mb-5">
                <li className="mb-2 font-semibold text-xl tracking-wide">Resources</li>
                <li className="mb-1 tracking-wide text-gray-500">Blog</li>
                <li className="mb-1 tracking-wide text-gray-500">Examples</li>
                <li className="mb-1 tracking-wide text-gray-500">Testing guides</li>
                <li className="mb-1 tracking-wide text-gray-500">Research panel calculator</li>
                <li className="mb-1 tracking-wide text-gray-500">Help center</li>
                <li className="mb-1 tracking-wide text-gray-500">Contact</li>
                <li className="mb-1 tracking-wide text-gray-500">Careers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#b9cde4]">
        <div className="flex flex-col md:flex-row justify-between max-w-[767px] md:m-auto mx-[3%] py-5 text-gray-600">
          <div className="flex justify-center ">
            <ul className="flex flex-col  sm:flex-row text-center items-center justify-center">
              <li className="mb-3 sm:mb-0 sm:mr-5">Privacy policy</li>
              <li className="mb-3 sm:mb-0 sm:mr-5">Terms & conditions</li>
              <li className="mb-3 sm:mb-0 sm:mr-5">Security Information</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className="flex">
              <li className="mr-3 ">
                <FacebookIcon fontSize="large" />
              </li>
              <li className="mr-3">
                <TwitterIcon fontSize="large"/>
              </li>
              <li className="mr-3">
                <LinkedInIcon fontSize="large"/>
              </li>
              <li className="mr-3">
                <YouTubeIcon fontSize="large"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
