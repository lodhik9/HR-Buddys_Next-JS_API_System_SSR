import React from "react";
import Link from 'next/link';

const SideBtn = ({ title, icon , path}) => {
  return (
   
    <div className="flex gap-3" >
      {icon}
      <p className="">{title}</p>
    </div>
    
  );
};

export default SideBtn;
