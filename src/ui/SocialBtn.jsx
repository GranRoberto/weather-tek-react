import React from "react";

function SocialBtn({ social, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 border-[#797979] w-11 p-1 rounded hover:bg-[#3c3f2285]"
    >
      <img width={40} src={`${social}.svg`} alt={`${social} logo`} />
    </a>
  );
}

export default SocialBtn;
