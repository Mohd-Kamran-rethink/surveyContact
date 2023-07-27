// src/components/AddContact.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../Redux/contactSlice";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const contacts = useSelector((state) => state.contacts.contacts); // Retrieve contacts from the Redux store
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const findContactById = (id) => {
    return contacts.find((contact) => contact.id.toString() === id);
  };
  useEffect(() => {
    if (id) {
      const contact = findContactById(id);
      if (contact) {
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
      }
    }
  }, [id, contacts]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // If the id parameter is present in the URL, we are editing an existing contact
    if (id) {
      const updatedContact = {
        id: Number(id), // Make sure to convert the id to a number if needed
        name,
        email,
        phone,
      };

      // Find the index of the contact in the contacts array
      const contactIndex = contacts.findIndex(
        (contact) => contact.id === updatedContact.id
      );

      // If the contact is found, update it in the array
      if (contactIndex !== -1) {
        const updatedContacts = [...contacts];
        updatedContacts[contactIndex] = updatedContact;

        // Dispatch the action to update the Redux store with the edited contact list
        dispatch(setContacts(updatedContacts));

        // Navigate back to the contact list page
        navigate("/contacts", { state: { successMessage: "Contact updated successfully!" } });

      }
    } else {
      // If no id parameter is present, we are adding a new contact
      const newContact = {
        id: Date.now(), // You can use a library like uuid for generating unique IDs
        name,
        email,
        phone,
      };

      // Dispatch the action to update the Redux store with the new contact
      dispatch(setContacts([...contacts, newContact]));

      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      navigate("/contacts", { state: { successMessage: "Contact added successfully!" } });

    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-96">
        <h2 className="text-2xl font-bold mb-4">Add New Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
