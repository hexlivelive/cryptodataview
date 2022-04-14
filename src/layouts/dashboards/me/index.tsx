// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { data } from "./data";

const rows: GridRowsProp = data;

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 400, editable: true },
  { field: "lastPrice", headerName: "Last Price", width: 200, editable: true },
  { field: "24hChange", headerName: "24h Change", width: 200, editable: true },
  { field: "marketCap", headerName: "Market Cap", width: 200, editable: true },
  { field: "24hVolume", headerName: "24h Volume", width: 200, editable: true }
];

function Me(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={rows}
          onCellEditStop={(grid) => console.log(grid.value)}
        />
      </div>

      <Footer />
    </DashboardLayout>
  );
}

export default Me;
