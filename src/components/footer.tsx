import React from "react";
import Logo from "./site-icon.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="mt-24 border-t border-secondary-500/30 text-center font-[400] text-neutral-75">
      <div className="mx-auto max-w-screen-xl px-4 py-10 pt-16 sm:px-20 xl:px-10">
        <div className="pb-4">
          <div className="mx-auto mb-6 flex h-10 items-center justify-center space-x-2 ">
            <Image src={Logo} width={100} alt="awesome morocco logo" />
          </div>
          <div className=" mx-auto max-w-[360px]">
            A list of awesome things in Morocco by developers for developers.
          </div>
        </div>
        <div className="">
          <nav aria-label="Guides Navigation" className="">
            <ul className="mx-auto my-4 flex flex-col justify-center gap-y-4 sm:flex-row sm:gap-x-10 ">
              <li>
                <a
                  className=" hover:underline"
                  href="https://geeksblabla.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  geeksblabla.io
                </a>
              </li>
              <li>
                <a
                  className=" hover:underline"
                  href="https://blablaconf.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  blablaconf.com
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://github.com/DevC-Casa/awesome-morocco"
                  target="_blank"
                  rel="noreferrer"
                >
                  stateofdev.ma
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://tally.so/r/meqj6E"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the team
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav aria-label="Social Media links">
          <div className="mx-auto mt-8 flex flex-row items-center  justify-center gap-x-5 gap-y-4">
            <a
              className=" hover:underline"
              href="https://www.youtube.com/c/GeeksBlaBla01"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="29"
                height="20"
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.8381 4.47059C28.8381 4.23529 28.4587 2.35294 27.5733 1.52941C26.4349 0.352941 25.1701 0.235294 24.5377 0.235294H24.4112C20.4902 5.25923e-08 14.672 0 14.5455 0C14.5455 0 8.60084 5.25923e-08 4.67987 0.235294H4.55338C3.92097 0.235294 2.65614 0.352941 1.51779 1.52941C0.632415 2.47059 0.252966 4.35294 0.252966 4.58824C0.252966 4.70588 0 6.82353 0 9.05882V11.0588C0 13.2941 0.252966 15.4118 0.252966 15.5294C0.252966 15.7647 0.632415 17.6471 1.51779 18.4706C2.52966 19.5294 3.79449 19.6471 4.55338 19.7647C4.67987 19.7647 4.80635 19.7647 4.93283 19.7647C7.20953 20 14.1661 20 14.4191 20C14.4191 20 20.3637 20 24.2847 19.7647H24.4112C25.0436 19.6471 26.3084 19.5294 27.4468 18.4706C28.3322 17.5294 28.7116 15.6471 28.7116 15.4118C28.7116 15.2941 28.9646 13.1765 28.9646 10.9412V8.94118C29.0911 6.82353 28.8381 4.58824 28.8381 4.47059ZM19.4784 10.2353L11.8894 14C11.7629 14 11.7629 14.1176 11.6364 14.1176C11.5099 14.1176 11.3835 14.1176 11.3835 14C11.257 13.8824 11.1305 13.7647 11.1305 13.5294V5.88235C11.1305 5.64706 11.257 5.52941 11.3835 5.41177C11.5099 5.29412 11.7629 5.29412 12.0159 5.41177L19.6049 9.17647C19.8578 9.29412 19.9843 9.41177 19.9843 9.64706C19.9843 9.88235 19.7313 10.1176 19.4784 10.2353Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className=" hover:underline"
              href="https://www.linkedin.com/company/geeksblabla/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9239 0H3.0761C1.3859 0 0 1.38605 0 3.07605V20.9239C0 22.6139 1.3859 24 3.0761 24H20.9238C22.6143 24 24 22.6139 24 20.924V3.07605C24 1.38605 22.6143 0 20.9239 0ZM8.25 11.5906V19H5V12.1434V9.65H8.25V11.5906ZM6.6185 8.2564C5.71435 8.2564 4.9807 7.5233 4.9807 6.6186C4.9807 5.71375 5.71435 4.98155 6.6185 4.98155C7.5239 4.98155 8.25685 5.7138 8.25685 6.6186C8.25685 7.5233 7.52395 8.2564 6.6185 8.2564ZM19 13.9V19H16.2V14.4584C16.2 13.3708 16.0823 11.9721 14.5918 11.9721C13.0787 11.9721 12.85 13.1561 12.85 14.38V19H10.15V11.456V9.65H12.75V10.9H12.7777C13.1655 10.2 14.1156 9.649 15.5303 9.649C17.9139 9.649 18.7239 10.7761 18.9455 12.5396C18.9981 12.9535 19.0184 13.4 19.0184 13.9H19Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className=" hover:underline"
              href="https://www.facebook.com/geeksblabla"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.6971 23.835C22.4955 23.835 23.1436 23.1869 23.1436 22.3885V2.13788C23.1436 1.33943 22.4955 0.691406 21.6971 0.691406H1.44647C0.64802 0.691406 0 1.33943 0 2.13788V22.3885C0 23.1869 0.64802 23.835 1.44647 23.835H21.6971ZM15.912 15.1558V23.8346H12.2958V15.1558H9.40287V11.5396H12.2958V9.3699C12.2958 6.39089 13.9773 4.30724 16.6352 4.30724H19.5282V7.92342H18.0817C16.6367 7.92342 15.912 8.64666 15.912 10.0931V11.5396H19.5282L18.8049 15.1558H15.912Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className=" hover:underline"
              href="https://twitter.com/geeksblabla"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0955 10.3165L22.2864 1H20.3456L13.2303 9.08768L7.55141 1H1L9.58949 13.2311L1 23H2.94072L10.4501 14.4571L16.4486 23H23L14.0955 10.3165ZM11.4365 13.3385L10.5649 12.1198L3.64059 2.43161H6.62193L12.2117 10.2532L13.0797 11.4719L20.3447 21.6381H17.3634L11.4365 13.3385Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className=" hover:underline"
              href="https://instagram.com/geeksblabla"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C15.2604 0 15.6672 0.0119999 16.9464 0.0719999C18.2244 0.132 19.0944 0.3324 19.86 0.63C20.652 0.9348 21.3192 1.3476 21.9864 2.0136C22.5966 2.61348 23.0687 3.33911 23.37 4.14C23.6664 4.9044 23.868 5.7756 23.928 7.0536C23.9844 8.3328 24 8.7396 24 12C24 15.2604 23.988 15.6672 23.928 16.9464C23.868 18.2244 23.6664 19.0944 23.37 19.86C23.0696 20.6613 22.5973 21.3871 21.9864 21.9864C21.3864 22.5964 20.6608 23.0685 19.86 23.37C19.0956 23.6664 18.2244 23.868 16.9464 23.928C15.6672 23.9844 15.2604 24 12 24C8.7396 24 8.3328 23.988 7.0536 23.928C5.7756 23.868 4.9056 23.6664 4.14 23.37C3.33879 23.0694 2.61303 22.5971 2.0136 21.9864C1.40329 21.3866 0.931118 20.661 0.63 19.86C0.3324 19.0956 0.132 18.2244 0.0719999 16.9464C0.0155999 15.6672 0 15.2604 0 12C0 8.7396 0.0119999 8.3328 0.0719999 7.0536C0.132 5.7744 0.3324 4.9056 0.63 4.14C0.930283 3.33862 1.40256 2.61279 2.0136 2.0136C2.61321 1.40308 3.33891 0.930875 4.14 0.63C4.9056 0.3324 5.7744 0.132 7.0536 0.0719999C8.3328 0.0155999 8.7396 0 12 0ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM19.8 5.7C19.8 5.30218 19.642 4.92064 19.3607 4.63934C19.0794 4.35804 18.6978 4.2 18.3 4.2C17.9022 4.2 17.5206 4.35804 17.2393 4.63934C16.958 4.92064 16.8 5.30218 16.8 5.7C16.8 6.09783 16.958 6.47936 17.2393 6.76066C17.5206 7.04197 17.9022 7.2 18.3 7.2C18.6978 7.2 19.0794 7.04197 19.3607 6.76066C19.642 6.47936 19.8 6.09783 19.8 5.7ZM12 8.4C12.9548 8.4 13.8705 8.77928 14.5456 9.45442C15.2207 10.1295 15.6 11.0452 15.6 12C15.6 12.9548 15.2207 13.8705 14.5456 14.5456C13.8705 15.2207 12.9548 15.6 12 15.6C11.0452 15.6 10.1295 15.2207 9.45442 14.5456C8.77928 13.8705 8.4 12.9548 8.4 12C8.4 11.0452 8.77928 10.1295 9.45442 9.45442C10.1295 8.77928 11.0452 8.4 12 8.4Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              className=" hover:underline"
              href="https://github.com/devc-casa"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0C5.82125 0 0 5.73784 0 12.8164C0 18.479 3.72494 23.2831 8.89022 24.9779C9.53985 25.0965 9.77845 24.6997 9.77845 24.3613C9.77845 24.0558 9.76651 23.046 9.76086 21.9751C6.14424 22.7505 5.38109 20.4629 5.38109 20.4629C4.78967 18.9816 3.93772 18.5876 3.93772 18.5876C2.75811 17.7921 4.02663 17.8085 4.02663 17.8085C5.33192 17.8989 6.0194 19.1295 6.0194 19.1295C7.17884 21.0887 9.06054 20.5222 9.80249 20.1947C9.91919 19.3665 10.2559 18.8009 10.6278 18.4809C7.74033 18.1569 4.70483 17.0578 4.70483 12.1469C4.70483 10.7478 5.21272 9.60444 6.0444 8.70687C5.90944 8.38393 5.46441 7.08048 6.17036 5.31501C6.17036 5.31501 7.26206 4.97075 9.74611 6.62893C10.7832 6.34491 11.8953 6.2025 13.0001 6.19756C14.1048 6.2025 15.2178 6.34491 16.2567 6.62893C18.738 4.97075 19.8282 5.31501 19.8282 5.31501C20.5357 7.08048 20.0907 8.38393 19.9557 8.70687C20.7893 9.60444 21.2936 10.7478 21.2936 12.1469C21.2936 17.0696 18.2524 18.1534 15.3575 18.4707C15.8238 18.8685 16.2392 19.6484 16.2392 20.8441C16.2392 22.5589 16.2243 23.9391 16.2243 24.3613C16.2243 24.7024 16.4583 25.1021 17.1171 24.9763C22.2798 23.2797 26 18.4772 26 12.8164C26 5.73784 20.1796 0 13 0Z"
                  fill="white"
                />
                <path
                  d="M4.92383 18.4015C4.89522 18.4653 4.79349 18.4844 4.70096 18.4407C4.60659 18.3988 4.55382 18.312 4.58428 18.2481C4.61225 18.1826 4.71396 18.1643 4.80817 18.2081C4.9026 18.25 4.95644 18.3376 4.92383 18.4015Z"
                  fill="white"
                />
                <path
                  d="M5.45044 18.9806C5.38848 19.0371 5.26709 19.0108 5.18486 18.9213C5.09972 18.8319 5.08399 18.7123 5.14691 18.655C5.21083 18.5984 5.32837 18.6249 5.41346 18.7142C5.49865 18.8046 5.5152 18.9232 5.45044 18.9806Z"
                  fill="white"
                />
                <path
                  d="M5.96302 19.7187C5.88332 19.7733 5.75299 19.7221 5.67244 19.6081C5.59274 19.4941 5.59276 19.3574 5.67431 19.3026C5.75486 19.2479 5.88334 19.2972 5.96489 19.4102C6.04438 19.5261 6.04436 19.6629 5.96302 19.7187Z"
                  fill="white"
                />
                <path
                  d="M6.66518 20.4318C6.59387 20.5093 6.44206 20.4884 6.33111 20.3827C6.21737 20.2794 6.18583 20.1328 6.25708 20.0552C6.32944 19.9777 6.48207 19.9994 6.59386 20.1043C6.70676 20.2075 6.74103 20.3551 6.66518 20.4318Z"
                  fill="white"
                />
                <path
                  d="M7.63391 20.8459C7.6024 20.9462 7.45632 20.9918 7.30911 20.9491C7.16196 20.9052 7.06592 20.7877 7.09553 20.6863C7.12598 20.5852 7.27288 20.5377 7.42109 20.5833C7.56809 20.627 7.66436 20.7437 7.63391 20.8459Z"
                  fill="white"
                />
                <path
                  d="M8.69789 20.9226C8.70143 21.0283 8.57656 21.116 8.42207 21.1179C8.26668 21.1214 8.14073 21.0358 8.13909 20.9318C8.13909 20.825 8.26115 20.7383 8.41659 20.7357C8.57108 20.7328 8.69789 20.8177 8.69789 20.9226Z"
                  fill="white"
                />
                <path
                  d="M9.68788 20.7566C9.70636 20.8596 9.59886 20.9655 9.44537 20.9937C9.29447 21.0211 9.15491 20.9572 9.13559 20.855C9.1169 20.7494 9.22615 20.6434 9.37694 20.6161C9.53064 20.5897 9.6683 20.6517 9.68788 20.7566Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="border-t border-secondary-500/50">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center  sm:px-20 lg:flex-row lg:justify-center lg:text-left xl:px-10">
          <p className="mr-1">Made with ❤️ by Geeksblabla Team </p>{" "}
          <p className="">
            | © {new Date().getFullYear()} Geeksblabla | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
