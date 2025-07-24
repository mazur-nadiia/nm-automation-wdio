import { browser } from "@wdio/globals";
import { $ } from '@wdio/globals'

export class BasePage {
   protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async open(): Promise<WebdriverIO.Request | void>{
        await browser.url(this.endpoint);
        await this.waitForOpen();
    }

    get title() {
        return $('h1');
    }

    async waitForOpen(timeout = 5000, interval= 500): Promise<void> {
        await browser.waitUntil(
            () => this.isOpen(),
            {
                timeout: timeout,
                interval: interval,
                timeoutMsg: `The page was not loaded. ${timeout / 1000} seconds passed`
            }
        )
    }

    async isOpen(): Promise<boolean> {
        throw Error('Not implemented');
    }

    async getUrl(): Promise<string> {
        return browser.getUrl();
    }
}
