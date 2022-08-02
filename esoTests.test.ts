import {ESO} from './esoPO'
import { Driver } from 'selenium-webdriver/chrome'
import { Actions } from 'selenium-webdriver'
const fs = require('fs')
const eso = new ESO()



describe("ESO Tests", () => {

test('test hospital category link', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000)
    await eso.click(eso.hospitalMenu)
    await eso.driver.sleep(3000);   
})

test('search the website', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.click(eso.magnifyingGlassHome)
    await eso.driver.sleep(3000);
    await eso.search('hospital')
    await eso.driver.sleep(5000);
})



test('test request demo form', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.click(eso.reqDemoButton)
    await eso.driver.sleep(5000);
    await eso.setInput(eso.reqDemoFName, '111')
    await eso.setInput(eso.reqDemoLName, '222')
    await eso.setInput(eso.reqDemoCompany, 'Testers, Inc.')
    await eso.setInput(eso.reqDemoEmail, 'testersinc@test.com')
    await eso.setInput(eso.reqDemoPhone, 1112223333)
    await eso.click(eso.reqDemoUS)
    await eso.click(eso.reqDemoAZ)
    await eso.driver.sleep(5000)
    // have to manually enter the how did you hear about us?
    await eso.click(eso.reqDemoSubmit)
    await eso.driver.sleep(5000)
})



test('test address link', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.click(eso.contactUsLink)
    await eso.driver.sleep(3000);
    await eso.click(eso.addressLink)
    await eso.driver.sleep(5000);
})



test('test social media icon(s)', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.click(eso.facebookIcon)
    await eso.driver.sleep(5000);
})



afterAll(async () => {
    await eso.driver.quit()
})


/*
test('test for filtering search by drop down selection', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.click(eso.aboutMenu)
    await eso.driver.sleep(5000);
   // await eso.click(eso.openPosLink)
   // await eso.driver.sleep(5000);
    //await eso.click(eso.deptSelect)
    //await eso.driver.sleep(5000);
})
*/

/*
test('test video player', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.click(eso.facebookIcon)
    await eso.driver.sleep(10000);
})
*/

/*
test('toggle FAQ answer', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.clickHospitalMenu()
    await eso.driver.sleep(3000);
    await eso.click(eso.faqLink)
    //await eso.click(eso.hospitalDropDown)
    await eso.driver.sleep(3000);
    await eso.click(eso.faqLink)
    await eso.driver.sleep(3000);
})
*/

/*
test('test subscribe to email form', async () => {
    await eso.driver.manage().window().maximize();
    await eso.navigate()
    await eso.driver.sleep(3000);
    await eso.emailSubscribe('test@obviouslyinvalid.com')
    await eso.driver.sleep(5000);
})
*/


});
