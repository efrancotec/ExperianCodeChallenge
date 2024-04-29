import { Page, expect } from "@playwright/test";
import { TestData } from "../Data/TestData";


export class EmployeeServicesPage{

    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    verifyPageUrl(){

        let actualUrl = this.page.url()
        let splitUrl = actualUrl.split('?')
        actualUrl = splitUrl[0]

        //Verify the expected URL
        expect(actualUrl).toEqual(TestData.expectedURL)
    }
}