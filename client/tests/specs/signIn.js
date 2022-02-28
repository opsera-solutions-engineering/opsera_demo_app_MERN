describe("Sign-In Flows -- ", () => {
    it("should load login page", async () => {
      await browser.url('http://localhost:3000/')
      await browser.takeScreenshot()
      const loginBtn = $('#root > section > div > div > div > a.btn.btn-light')
      await loginBtn.click()
      await browser.takeScreenshot()
      const heading = await $('#root > section > h1')
      await expect(heading).toHaveText('Sign In')
      const email = await $('#root > section > form > div:nth-child(1) > input[type=email]')
      const password = await $('#root > section > form > div:nth-child(2) > input[type=password]')
      const login = await $('#root > section > form > input')
      await email.setValue('derek.ross@opsera.io')
      await password.setValue('Password1')
      await login.click()
      await browser.takeScreenshot()
    });
});