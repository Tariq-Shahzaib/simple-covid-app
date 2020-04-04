import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name of petient", field: "name" },
      { title: "Date of Birth", field: "dob" },
      {
        title: "Birth Place",
        field: "birthCity",
      },
      { title: "Petient Condition", field: "condition" },
      { title: "Hospital Name", field: "hospital" },
      { title: "Admited On", field: "admitDate" },
    ],
    data: [
      {
        name: "Petey Cruiser",
        birthCity: "Torino (Italy)",
        dob: "17-12-1982",
        condition: "mild",
        hospital: " San Giovanni Bosco",
        admitDate: "10-feb-2020",
      },
      {
        name: "Anna Sthesia",
        dob: "03-10-1985",
        birthCity: "Torino (Italy)",
        condition: "mild",
        hospital: "San Giovanni Bosco",
        admitDate: "15-feb-2020",
      },
      {
        name: "Paul Molive",

        dob: "28-05-1977",
        birthCity: "Torino (Italy)",
        condition: "mild",
        hospital: "San Giovanni Bosco",
        admitDate: "20-feb-2020",
      },
      {
        name: "Anna Mull",

        dob: "16-07-1962",
        birthCity: "Torino (Italy)",
        condition: "mild",
        hospital: "San Giovanni Bosco",
        admitDate: "27-feb-2020",
      },
      {
        name: "Paige Turner",

        dob: "23-11-1979",
        birthCity: "Torino (Italy)",
        condition: "mild",
        hospital: "San Giovanni Bosco",
        admitDate: "03-mar-2020",
      },
      {
        name: "Alex Stiner",

        dob: "12-08-1968",
        birthCity: "Torino (Italy)",
        condition: "mild",
        hospital: "San Giovanni Bosco",
        admitDate: "10-mar-2020",
      },
    ],
  });

  return (
    <MaterialTable
      title="Pateints List"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
