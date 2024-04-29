import { Locator, Page } from '@playwright/test';
import { Employee } from '../Entities/Employee';

export class EmployeeInfoPage{

    private readonly page: Page
    private readonly firstNameField: Locator
    private readonly lastNameField: Locator
    private readonly emailField: Locator
    private readonly streetAddressField: Locator
    private readonly cityField: Locator
    private readonly zipCodeField: Locator
    private readonly nextButton: Locator


    constructor(page: Page){
        this.firstNameField = page.locator("xpath=//span[@id='SurveyControl']//div[1]//div[2]//div//div//input")
        this.lastNameField = page.locator("xpath=//span[@id='SurveyControl']//div[1]//div[3]//div//div//input")
        this.emailField = page.locator("xpath=//span[@id='SurveyControl']//div[1]//div[4]//div//div//input")
        this.streetAddressField = page.locator("xpath=//span[@id='SurveyControl']//div[1]//div[5]//div//div//input")
        this.cityField = page.locator("xpath=//span[@id='SurveyControl']//div[1]//div[6]//div//div//input")
        this.zipCodeField = page.locator("xpath=//span[@id='SurveyControl']//div[1]//div[7]//div//div//input")
        this.nextButton = page.locator("xpath=//input[@id='SurveyControl_SurveySubmit']")
    }

    async fillEmployeeInformation(employee:Employee){
        await this.firstNameField.fill(employee.firstName)
        await this.lastNameField.fill(employee.lastName)
        await this.emailField.fill(employee.email)
        await this.streetAddressField.fill(employee.streetAddress)
        await this.cityField.fill(employee.city)
        await this.zipCodeField.fill(employee.zipCode)
        
        await this.nextButton.click()
    }
}