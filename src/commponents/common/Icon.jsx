import React from "react";

export const DropdownIcon = ({ isHovered }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300"
    stroke={isHovered ? "#01499A" : "#828282"} // Change stroke color based on hover state
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8.13464L10 13.1346L15 8.13464" />
  </svg>
);

export const UserIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21.1346V19.1346C20 18.0738 19.5786 17.0564 18.8284 16.3062C18.0783 15.5561 17.0609 15.1346 16 15.1346H8C6.93913 15.1346 5.92172 15.5561 5.17157 16.3062C4.42143 17.0564 4 18.0738 4 19.1346V21.1346"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.1346C14.2091 11.1346 16 9.34378 16 7.13464C16 4.9255 14.2091 3.13464 12 3.13464C9.79086 3.13464 8 4.9255 8 7.13464C8 9.34378 9.79086 11.1346 12 11.1346Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HambergerCancel = () => (
  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
    <path
      d="M6 18L18 6M6 6l12 12"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Hamberger = () => (
  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PrevIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 27C6.8203 27 1 21.1797 1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 21.1797 21.1797 27 14 27Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.0879 14H9.47899"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.3047 16.8252L9.47904 13.999L12.3047 11.1729"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NextIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.91211 14H18.521"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6953 16.8252L18.521 13.999L15.6953 11.1729"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MassageIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.07115 28.9553L16.1144 23.9283H26.5711C28.0308 23.9283 29.214 22.745 29.214 21.2854V5.42829C29.214 3.96868 28.0308 2.78543 26.5711 2.78543H5.42829C3.96868 2.78543 2.78543 3.96868 2.78543 5.42829V21.2854C2.78543 22.745 3.96868 23.9283 5.42829 23.9283H8.07115V28.9553ZM15.3565 21.2854L10.714 24.187V21.2854H5.42829V5.42829H26.5711V21.2854H15.3565Z"
      fill="#01499A"
    />
  </svg>
);

export const GraphIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="31.7143"
      height="31.7143"
      transform="translate(0.142578 0.142578)"
      fill="#E1E8FF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.2497 4.10686H6.74973C5.29616 4.10686 4.10687 5.29615 4.10687 6.74972V25.2497C4.10687 26.7033 5.29616 27.8926 6.74973 27.8926H25.2497C26.7033 27.8926 27.8926 26.7033 27.8926 25.2497V6.74972C27.8926 5.29615 26.7033 4.10686 25.2497 4.10686ZM25.2497 25.2497H6.74973V6.74972H25.2497V25.2497ZM9.39259 13.3569H12.0354V22.6069H9.39259V13.3569ZM14.6783 9.39258H17.3212V22.6069H14.6783V9.39258ZM19.964 17.3212H22.6069V22.6069H19.964V17.3212Z"
      fill="#01499A"
    />
  </svg>
);
