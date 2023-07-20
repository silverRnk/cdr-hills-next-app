import React from "react";

const AccountIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M10.5,2C9.8,2,9.3,2.4,9.1,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V11
		c0-0.6-0.4-1-1-1h-2V5c0-1.1-0.9-2-2-2h-4.1C11.7,2.4,11.2,2,10.5,2z M10.5,3C10.8,3,11,3.2,11,3.5S10.8,4,10.5,4S10,3.8,10,3.5
		S10.2,3,10.5,3z M5.5,5H8v1h5V5h2.5C15.8,5,16,5.2,16,5.5V10h-3c-0.6,0-1,0.4-1,1v8H5.5C5.2,19,5,18.8,5,18.5v-13
		C5,5.2,5.2,5,5.5,5z M10.6,8.4h-4v2h4V8.4z M10.6,11.4h-4v2h4V11.4z M10.6,14.5h-4v2h4V14.5z M14,12h5v2h-5V12z M14,15h2v2h-2V15z
		 M17,15h2v2h-2V15z M14,18h2v2h-2V18z M17,18h2v2h-2V18z"
      />
    </svg>
  );
};

export default AccountIcon;
