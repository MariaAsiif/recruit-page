import React, { useState } from 'react';

function SidebarLinkGroup({
  children,
  activecondition,
  level
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }



  //bg-gray-100
  return (
    <li className={`${level === 1 ? "px-3" : ""} py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-[#E5E4E2]'}`}>
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;