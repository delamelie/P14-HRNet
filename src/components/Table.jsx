//import employees from "../data/employees.json";
import { fetchEmployees } from "../services/api";
import { useEffect, useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

export default function Table() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEmployeesData = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployees();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getEmployeesData();
  }, []);

  ///TEst fetch json
  // useEffect(() => {
  //   async function getEmployees() {
  //     try {
  //       const data = await fetchEmployees();
  //       console.log(data);
  //       setEmployees(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getEmployees();
  // }, []);

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

  if (error) {
    return <div>A server error occurred. Please try again later</div>;
  }

  return (
    <section className="flex flex-col justify-center items-center mt-12">
      <h2 className="font-bold text-lg text-lime-700">Current employees</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
          muiTopToolbarProps={{
            sx: {
              //backgroundColor: "#ecfccb",
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
      )}
    </section>
  );
}
