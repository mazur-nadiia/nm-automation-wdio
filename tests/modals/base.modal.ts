import { browser } from '@wdio/globals'
import {ChainablePromiseElement} from "webdriverio";

export class BaseModal {
    protected selector = '.modal-dialog'

    get modalContainer(): ChainablePromiseElement {
        return browser.$(this.selector)
    }

    get title(): ChainablePromiseElement {
        return this.modalContainer.$('#example-modal-sizes-title-lg')
    }

}
