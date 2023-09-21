import employees from "../../data/employees.json";
//import { getEmployees } from "../../services/api";
import { useEffect, useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import Loader from "./Loader";

export default function EmployeesTable() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Employees";

    const getEmployeesData = async () => {
      try {
        //const data = await getEmployees();
        //setEmployees(data);
        setError(null);
      } catch (error) {
        setError("A server error occurred. Please try again later...");
      } finally {
        setLoading(false);
      }
    };
    getEmployeesData();
  }, []);

  const columns = useMemo(
    () => [
      {
        header: "First name",
        accessorKey: "firstName",
        size: 50,
      },
      {
        header: "Last name",
        accessorKey: "lastName",
        size: 50,
      },

      {
        header: "Birth date",
        accessorKey: "birthDate",
        size: 50,
      },
      {
        header: "Street",
        accessorKey: "street",
        size: 50,
      },
      {
        header: "City",
        accessorKey: "city",
        size: 50,
      },
      {
        header: "Zip code",
        accessorKey: "zipCode",
        size: 50,
      },
      {
        header: "State",
        accessorKey: "state",
        size: 50,
      },
      {
        header: "Department",
        accessorKey: "department",
        size: 50,
      },
      {
        header: "Start date",
        accessorKey: "startDate",
        size: 50,
      },
    ],
    []
  );

  return (
    <section className="flex flex-col justify-center items-center mt-12">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-lg">{error}</div>
      ) : (
        <div className="responsive-table w-11/12">
          <h2 className="text-center font-bold text-xl text-lime-600">
            Current employees
          </h2>
          <MaterialReactTable
            columns={columns}
            data={employees}
            muiTableContainerProps={{
              sx: {
                border: "1px solid #ecfccb",
                borderRadius: "10px",
                marginBottom: "30px",
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                backgroundColor: "#ecfccb",
                borderBottom: "#ecfccb",
                fontSize: "0.8em",
              },
            }}
            muiTableBodyCellProps={{
              sx: {
                fontSize: "0.7em",
                borderBottom: "1px solid #ecfccb",
              },
            }}
            muiTablePaginationProps={{
              sx: {
                backgroundColor: "#ecfccb",
              },
            }}
            enableDensityToggle={false}
            enableFullScreenToggle={false}
            positionPagination={"bottom"}
            enableHiding={false}
          />
        </div>
      )}
    </section>
  );
}
