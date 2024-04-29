import * as fs from 'fs'
import { TestData } from '../Data/TestData'
import { Employee } from '../Entities/Employee';

export class Utilities{
    
    public static readFile(path:string):string[]{

        return fs.readFileSync(path, 'utf-8').split('\n')
    }

    public static setTestData(dataFilePath:string){

        const rows = Utilities.readFile(dataFilePath)
        for(let row of rows){
            let splitRow:string[] = []

            if(row.includes('Initial URL')){
                splitRow = row.split(':=')
                TestData.initialURL = splitRow[1].replace('\r', '')  
            }
            if(row.includes('Expected URL')){
                splitRow = row.split(':=')
                TestData.expectedURL = splitRow[1].replace('\r', '') 
            }
            if(row.includes('Employee Information')){
                this.defineEmployeeInformation(rows)
            }
        }
    }

    
    private static defineEmployeeInformation(rows:string[]){

        let data: string[] = []

        for(let row of rows){

            let splitRow = row.split(':=')

            if(row.includes('FirsName')){
                data[0] = splitRow[1].replace('\r', '') 
            }else if(row.includes('LastName')){
                data[1] = splitRow[1].replace('\r', '')
            }else if(row.includes('Email')){
                data[2] = splitRow[1].replace('\r', '')
            }else if(row.includes('StreetAddress')){
                data[3] = splitRow[1].replace('\r', '')
            }else if(row.includes('City')){
                data[4] = splitRow[1].replace('\r', '')
            }else if(row.includes('ZipCode')){
                data[5] = splitRow[1].replace('\r', '')
            }
        }

        const employee: Employee = {
            firstName: data[0],
            lastName: data[1],
            email: data[2],
            streetAddress: data[3],
            city: data[4],
            zipCode: data[5]
        }

        TestData.employee = employee
    }
} 