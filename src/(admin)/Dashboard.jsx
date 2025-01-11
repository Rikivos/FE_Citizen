import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/admin/Table";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get("https://be-citizen.vercel.app/thems");
        if (response.status === 200) {
          setTableData(response.data);
        }
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };
    fetchTableData();
  }, []);

  return (
    <div>
      <Table data={tableData} />
    </div>
  );
};

export default Dashboard;
