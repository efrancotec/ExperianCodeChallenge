import { test, expect } from '@playwright/test';
import { EmployeeInfoPage } from '../Pages/EmployeeInfo';;
import { YesNoQuestionPage } from '../Pages/YesNoQuestionsPage';
import { AdditionaInformationPage } from '../Pages/AdditionalInformation';
import { EmployeeServicesPage } from '../Pages/EmployeeServicesPage';
import { Utilities } from '../Utilities/Utilities';
import { TestData } from '../Data/TestData';

test.beforeAll(() =>{
    Utilities.setTestData(process.env.data_path)
});

test('enter employee information', async ({ page }) => {

    //Step1
    await page.goto(TestData.initialURL)

    //Step2
    const employeeInfoPage = new EmployeeInfoPage(page)
    await employeeInfoPage.fillEmployeeInformation(TestData.employee)

    //Step3
    const yesNoQuestionsPage = new YesNoQuestionPage(page)
    await yesNoQuestionsPage.clickOnNoButtons()
    //await page.pause()

    //Step4
    const additionalInformationPage = new AdditionaInformationPage(page)
    await additionalInformationPage.verifyName()

    //Step5
    const employeeServicePage = new EmployeeServicesPage(page)
    employeeServicePage.verifyPageUrl()
  });
