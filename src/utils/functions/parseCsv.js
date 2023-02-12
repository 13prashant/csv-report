import Papa from "papaparse";

export const parseCsv = (csvFile, setter) => {
  Papa.parse(csvFile, {
    header: true,
    complete: (result) => {
      setter(result.data);
    },
  });
};
