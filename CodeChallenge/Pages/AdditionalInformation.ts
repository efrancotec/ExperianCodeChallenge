import { Locator, Page, expect } from "@playwright/test";
import { TestData } from "../Data/TestData";


export class AdditionaInformationPage{

    private readonly confirmNameField: Locator
    private readonly submitButton: Locator
    private readonly page: Page

    constructor(page: Page){
        this.page = page
        this.confirmNameField = page.locator("xpath=//input[@class='form-control textbox-tcc']")
        this.submitButton = page.locator("xpath=//input[@id='SurveyControl_SurveySubmit']")
    }

    async verifyName(){
        const fullName = TestData.employee.firstName.concat(' ', TestData.employee.lastName)
        await this.page.waitForTimeout(500)

        const inputValue = await this.confirmNameField.inputValue()

        //Verify the name in the text field
        expect(await this.confirmNameField.inputValue()).toEqual(fullName)

        await this.submitButton.click()
    }
}