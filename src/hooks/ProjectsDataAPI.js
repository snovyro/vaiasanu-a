import { useState, useEffect } from "react";
import Mockapi from "../lib/Mockapi";
import axios from "axios";

export const ProjectsDataAPI = () => {
  const [ProjectData, SetProjectData] = useState([]);
  const DataExport = ProjectData;
  useEffect(() => {
    const getProjectData = async () => {
      try {
        const response = await axios.get(`${Mockapi}/projects`);
        SetProjectData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjectData();
  }, []);

  return { DataExport };
};
