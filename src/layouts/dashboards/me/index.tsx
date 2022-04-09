
// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react'


const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function Me(): JSX.Element {


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ height: 350, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Me;
