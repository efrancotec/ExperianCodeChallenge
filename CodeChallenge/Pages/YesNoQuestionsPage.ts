import { Locator, Page, expect } from '@playwright/test';

export class YesNoQuestionPage{
 
    private readonly page: Page
    private readonly noButtonElements: Locator;
    private readonly nextButton: Locator

    constructor(page:Page){
        this.page = page
        this.noButtonElements = page.locator("xpath=//div[@class='ima-answer-item-container']//label")
        this.nextButton = page.locator("xpath=//input[@id='SurveyControl_SurveySubmit']")
    }

    async clickOnNoButtons(){
        
        await this.page.waitForTimeout(500)

        let elements = await this.noButtonElements.all()
        //expect(elements.length).toBeGreaterThan(4)

        for(let i=0; i<elements.length; i++){
            if(i%2 != 0) await elements[i].click()
        }

        await this.nextButton.click()
    }
}