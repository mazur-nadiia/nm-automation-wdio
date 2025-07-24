import { PracticePage } from '../pages'
import { BaseModal } from '../modals'
import { expect } from '@wdio/globals';

const testData = [
    {
        testName: 'all valid input',
        firstName: 'some first name',
        lastName: 'some last name',
        genderIndex: 0,
        userNumber: '2344322344',
        expectSuccess: true
    },
    {
        testName: 'short mobile phone number',
        firstName: 'some first name',
        lastName: 'some last name',
        genderIndex: 1,
        userNumber: '123',
        expectSuccess: false
    }
]

describe('E2E - practice form',  () => {
    testData.forEach(testData =>
        it(`Form submission with "${testData.testName}" `, async () => {
            const practicePage = new PracticePage();
            await practicePage.open();

            await practicePage.usernameInput.setValue(testData.firstName);
            await practicePage.lastnameInput.setValue(testData.lastName);
            await practicePage.genderInputs[testData.genderIndex].click();

            await practicePage.userNumberInput.setValue(testData.userNumber);
            await practicePage.submitButton.scrollIntoView();
            await practicePage.submitButton.click();

            const submitModal = new BaseModal();
            if (testData.expectSuccess) {
                await expect(submitModal.modalContainer).toBeDisplayed();
                await expect(submitModal.title).toHaveText('Thanks for submitting the form');
            } else {
                await expect(submitModal.modalContainer).not.toBeDisplayed();
            }
        }));
});
