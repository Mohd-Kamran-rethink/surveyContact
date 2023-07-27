import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Constants/Menu"; // Import the Menu array

const Sidebar = () => {
  return (
    <aside className="fixed bg-gray-800 text-white w-15% h-full p-4">
      <div className="text-center mb-6">
        <p className="font-bold text-xl mt-2">Contact Management</p>
      </div>
      <nav className="flex-1">
        <ul className="p-4">
          {Menu.map((item, index) => (
            <li key={index} className="mb-4">
              {/* Check if the link has subItems */}
              {item.subItems ? (
                <div>
                  <span>{item.title}</span>
                  <ul>
                    {/* Render subItems */}
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.link}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={item.link} className="flex items-center gap-2">
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
