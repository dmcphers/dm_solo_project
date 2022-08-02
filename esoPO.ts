import {Actions, By, WebDriver, WebElement} from "selenium-webdriver"
import { Driver } from "selenium-webdriver/chrome"
import {BasePage} from "./basePage"

export class ESO extends BasePage {
    
    hospitalMenu: By = By.xpath('//li[@id="menu-item-10586"]')
    patientRegistry: By = By.xpath('//span[text()="Patient Registry"]')
    aboutMenu: By = By.xpath('//li[@id="menu-item-17625"]')
    openPosLink: By = By.xpath('//a[@href="/careers/#jobs-container"]')
    depDropDownList: By = By.xpath('(//span[@class="select2-arrow"])[1]')
    faqLink: By = By.xpath('//div[@id="what-is-hde"]')
    magnifyingGlassHome: By = By.xpath('//li[@id="menu-item-search"]')
    searchField: By = By.xpath('//input[@id="s"]')
    contactUsLink: By = By.xpath('//a[@href="/contact-us/"]')
    addressLink: By = By.xpath('//a[text()="11500 Alterra Parkway"]')
    facebookIcon: By = By.xpath('//i[@class="fa fa-facebook"]')
    emailSubscribeField: By = By.xpath('(//input[@type="email"])[2]')
    reqDemoButton: By = By.xpath('//li[@id="menu-item-380"]')
    reqDemoFName: By = By.xpath('//input[@id="FirstName"]')
    reqDemoLName: By = By.xpath('//input[@id="LastName"]')
    reqDemoCompany: By = By.xpath('//input[@id="Company"]')
    reqDemoEmail: By = By.xpath('(//input[@id="Email"])[1]')
    reqDemoPhone: By = By.xpath('//input[@id="Phone"]')
    reqDemoCountry: By = By.xpath('//select[@class="mktoField mktoHasWidth mktoRequired"]')
    reqDemoUS: By = By.xpath('//option[text()="United States"]')
    reqDemoState: By = By.xpath('//select[@id="State"]')
    reqDemoAZ: By = By.xpath('//option[@value="AZ"]')
    reqDemoHowHear: By = By.xpath('//div[@class="mktoFieldWrap mktoRequiredField"]')
    reqDemoSubmit: By = By.xpath('//button[text()="SUBMIT"]')
    reqDemoPopup: By = By.xpath('//div[@style="position: absolute; display: none; top: -5px; right: -5px; width: 16px; line-height: 16px; text-align: center; cursor: pointer; text-decoration: none; color: rgb(0, 0, 0); font-size: 20px; font-family: Arial, sans-serif; border-radius: 50%; background-color: rgba(255, 255, 255, 0.5);"]')
    deptSelect: By = By.xpath('//li[@class="select2-results-dept-0 select2-result select2-result-selectable"][4]')



    
    constructor() {
        super({url: "https://www.eso.com/"});
    }

    async clickPatientRegistry() {
        return this.click(this.patientRegistry)
    }

    async clickHospitalMenu() {
        return this.click(this.hospitalMenu)
    }

    async search(searchTerm: string) {
        return this.setInput(this.searchField, `${searchTerm}\n`)
    }

    async emailSubscribe(email: string) {
        return this.setInput(this.emailSubscribeField, `${email}\n`)
    }
    
}
