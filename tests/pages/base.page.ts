import { browser } from "@wdio/globals";

export class BasePage {
   protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async open() {
        await browser.url(this.endpoint);
    }
}
