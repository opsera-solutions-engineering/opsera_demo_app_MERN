describe("Sign-In Flows -- ", () => {
    it("should load login page", async () => {
        //Declare vars
        const loginBtn = $('#root > section > div > div > div > a.btn.btn-light')
        const email = await $('#root > section > form > div:nth-child(1) > input[type=email]')
        const password = await $('#root > section > form > div:nth-child(2) > input[type=password]')
        const login = await $('#root > section > form > input')
        const heading = await $('#root > section > h1')
        
        //Access Home page and take screenshot
        //TODO: Set an environment variable to provide the base URL based on the deployment environment
        await browser.url('http://localhost:3000/')
        await browser.takeScreenshot()
        
        //Access Sign-In screen
        await loginBtn.click()
        await browser.takeScreenshot()
        await expect(heading).toHaveText('Sign In')
        
        //Input invalid credentials
        await email.setValue('derek.ross@opsera.io')
        await password.setValue('Password1')
        await login.click()
        await browser.takeScreenshot()
    });

    it("should register new user", async () => {
        const signUp = await $('#root > section > p.my-1 > a');
        const name = await $('#root > section > form > div:nth-child(1) > input[type=text]');
        const email = await $('#root > section > form > div:nth-child(2) > input[type=email]');
        const password = await $('#root > section > form > div:nth-child(3) > input[type=password]');
        const passwordConf = await $('[name="password2"]');
        const registerBtn = await $('#root > section > form > input');

        //navigate to signup page
        await signUp.click();
        await browser.takeScreenshot();
        
        //fill out signup form
        await name.setValue('Test User');
        await email.setValue('email@email.com');
        await password.setValue('Password1');
        await passwordConf.setValue('Password1');
        await registerBtn.click();
        await browser.takeScreenshot();
        console.log('end of test suite');
    });
    it("should create profile", async () => {
        const createProfileBtn = await $('//*[@id="root"]/section/a');
        const professionalStatus = await $('#root > section > form > div:nth-child(1) > select');
        const company = await $('#root > section > form > div:nth-child(2) > input[type=text]');
        const website = await $('#root > section > form > div:nth-child(3) > input[type=text]');
        const location = await $('#root > section > form > div:nth-child(4) > input[type=text]');
        const skills = await $('#root > section > form > div:nth-child(5) > input[type=text]');
        const githubUser = await $('#root > section > form > div:nth-child(6) > input[type=text]');
        const shortBio = await $('#root > section > form > div:nth-child(7) > textarea');
        const submitBtn = await $('#root > section > form > input');

        //fill out create profile form
        await createProfileBtn.click();
        await browser.takeScreenshot();
        await professionalStatus.selectByVisibleText('Solutions Engineer');
        await company.setValue('Opsera - Local Development');
        await website.setValue('my-website.com');
        await location.setValue('Test City');
        await skills.setValue('Testing EVERTHANG');
        await githubUser.setValue('redmed86');
        await shortBio.setValue('Testing is all I do');
        await submitBtn.click();
        
        //Take Screenshot
        await browser.pause(2000);
        await browser.takeScreenshot();
    });
    it("should delete profile", async () => {
        const deleteAccountBtn = await $('#root > section > div.my-2 > button');
        const signInPageText = await $('#root > section > h1');

        //Click Delete Profile Button
        await deleteAccountBtn.click();
        await browser.pause(1000);
        await browser.acceptAlert()
        await browser.pause(1000);
        await expect(signInPageText).toHaveText('Sign In');
        
        //Take Screenshot
        await browser.takeScreenshot();
    });
});