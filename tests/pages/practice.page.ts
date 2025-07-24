import { BasePage } from './base.page'
import { $, $$ } from '@wdio/globals'

export class PracticePage extends BasePage {
    constructor() {
        super( 'automation-practice-form');
    }

    get usernameInput() {
        return $('#firstName');
    }

    get lastnameInput() {
        return $('#lastName');
    }

    get genderInputs() {
        return $$('.custom-radio');
    }

    get userNumberInput() {
        return $('#userNumber');
    }

    get submitButton() {
        return $('#submit');
    }

    get userForm() {
        return $('form');
    }

    async isOpen(): Promise<boolean> {
        return await this.title.isDisplayed() &&
            await this.userForm.isDisplayed() &&
            (await this.getUrl()).includes('automation-practice-form');
    }
}
