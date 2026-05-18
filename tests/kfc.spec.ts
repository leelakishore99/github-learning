//KFC site login functionality Testing
import {test,expect} from '@playwright/test';

test('KFC', async({page})=>{

    await page.goto('https://online.kfc.co.in/'),{timeout:6000};

    await page.locator("//span[text()='Sign In']").click();

    await page.locator("//input[@id='phoneNumberId']").fill('9444739713');

    await page.locator("//button[@id='btnSendCode']").click();

    await expect(page).toHaveTitle('KFC OTP VERIFICATION')

    await console.log("The Title of the Page is: "+ await page.title());
    await expect(page.getByText('We Just Texted You')).toBeVisible({timeout:5000});

    /*
    await page.goto('https://online.kfc.co.in/');

    await page.locator('.sign-in-text.not-cart-icon').click();

    await page.locator('#phoneNumberId').fill('6374118248');

    await page.locator('.btnSendCode').click();

    await page.waitForTimeout(5000);

    */

    /*git branch -M main
PS D:\Playwright\tests> git remote add origin https://github.com/leelakishore99/Playwright-login-test.git
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 683 bytes | 25.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/leelakishore99/Playwright-login-test.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
status : The term 'status' is not recognized as the name of a cmdlet, function, script file, 
or operable program. Check the spelling of the name, or if a path was included, verify that 
the path is correct and try again.
At line:1 char:1
+ status
+ ~~~~~~
    + CategoryInfo          : ObjectNotFound: (status:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS D:\Playwright\tests> git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.github/
        ../.gitignore
        ../one.ts
        ../package-lock.json
        ../package.json
        ../playwright.config.ts
        ajio.spec.ts
        facebook.spec.ts
        licious.spec.ts
        parabank.spec.ts
        pizzahut.spec.ts
        practiceTest.spec.ts
        sshyderabad.spec.ts
        starbucks.spec.ts

nothing added to commit but untracked files present (use "git add" to track)
PS D:\Playwright\tests> git pull
remote: Enumerating objects: 7, done.
Unpacking objects: 100% (4/4), 1.03 KiB | 6.00 KiB/s, done.
From https://github.com/leelakishore99/Playwright-login-test
   f4ecb27..17fa274  main       -> origin/main
Fast-forward
 tests/kfc.spec.ts | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
PS D:\Playwright\tests> git diff
PS D:\Playwright\tests> git add licious.spec.ts
PS D:\Playwright\tests> git commit -m "Feat: Licious login functionality"
[main e339a01] Feat: Licious login functionality
 1 file changed, 13 insertions(+)
 create mode 100644 tests/licious.spec.ts
PS D:\Playwright\tests> git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.github/
        ../.gitignore
        ../one.ts
        ../package-lock.json
        ../package.json
        ../playwright.config.ts
        amazon.spec.ts
        facebook.spec.ts
        parabank.spec.ts
        pizzahut.spec.ts
        practiceTest.spec.ts
        sshyderabad.spec.ts
        starbucks.spec.ts


  */ 
})
