/* eslint-disable no-unused-vars */
import React from 'react';
import Table from '../components/admin/Table';    

const Home = () => {
  const tableData = [
    {
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      accessories: 'Yes',
      available: 'Yes',
      price: '$2999',
      weight: '3.0 lb.'
    },
    // Add more data objects as needed
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <Table data={tableData} />
    </div>
  );
};

export default Home;
