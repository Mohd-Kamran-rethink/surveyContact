import React from 'react';
import Layout from './Layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import NotFound from './Pages/NotFound';
import { ContactList } from './Pages/ContactList';
import  AddContact  from './Pages/AddContact';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="contacts/add" element={<AddContact />} />
        <Route path="contacts/edit/:id" element={<AddContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
