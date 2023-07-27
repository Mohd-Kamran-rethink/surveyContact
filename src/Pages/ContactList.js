import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../Redux/contactSlice";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const location = useLocation(); // Use the useLocation hook to access the location object
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDelete = (id) => {
    // Filter out the contact with the provided id and update the Redux store
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    dispatch(setContacts(updatedContacts));
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex justify-between items-end mb-4 mr-2">
        <h2 className="text-2xl font-bold mb-4">Contact Listing</h2>
        <Link
          to={"/contacts/add"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b">
                <td className="py-2 px-4 text-center">{contact.name}</td>{" "}
                <td className="py-2 px-4 text-center">{contact.email}</td>{" "}
                <td className="py-2 px-4 text-center">{contact.phone}</td>{" "}
                <td className="py-2 px-4 text-center">
                  <Link
                    to={`/contacts/edit/${contact.id}`} // Pass the contact's id to the Edit Contact page
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(contact.id)} // Pass the contact's id to the handleDelete function
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
