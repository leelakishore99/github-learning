import * as XLSX from 'xlsx';

export function getExcelData(Excelname:string,Sheetname:string){
    // Load the binary Excel workbook from the specified folder path
    const workbook = XLSX.readFile("testData/"+Excelname);
    // Retrieve the target worksheet data structure using the tab's string name
    const worksheet = workbook.Sheets[Sheetname];
    // Parse the worksheet grid into a clean JavaScript array of objects (rows)
    const data = XLSX.utils.sheet_to_json(worksheet);
    // Return the formatted array to the caller
    return data;
}