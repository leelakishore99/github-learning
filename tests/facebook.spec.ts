

import {test, expect} from '@playwright/test'

test('Facebook Login', async({page})=>{
   await page.goto('https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F')

   await expect(page).toHaveTitle('Facebook')
 
   const title = await page.title()
   console.log("The title of the Page is: "+title)

   await page.locator('[name="email"]').fill('leelakishore62@gmail.com')
   await page.locator('[name="pass"]').fill('123@India')

   await page.getByRole('button',{name:'Log in'}).click({force:true})

   await page.waitForTimeout(5000)
})