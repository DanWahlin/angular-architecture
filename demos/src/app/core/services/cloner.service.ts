import { Injectable } from '@angular/core';

// https://github.com/codeandcats/fast-clone/blob/master/index.js

@Injectable()
export class ClonerService {

    deepClone(value) {
        const type = typeof value;
        switch (type) {
            case 'object':
                // null and undefined
                if (value == null) {
                    return value;
                }

                let result;

                if (value instanceof Date) {
                    result = new Date();
                    result.setTime(value.getTime());
                    return result;
                }
                else if (value instanceof RegExp) {
                    result = this.newRegExp(value);
                    return result;
                }

                result = JSON.parse(JSON.stringify(value));
                this.fixTypes(value, result);
                return result;

            default:
                return value;
        }
    }

    private fixPropertyValue(original, copy, key) {
        const originalValue = original[key];
        const originalType = typeof originalValue;

        switch (originalType) {
            case 'object':
                if (originalValue instanceof Date) {
                    const newValue = new Date();
                    newValue.setTime(originalValue.getTime());
                    copy[key] = newValue;
                }
                else if (originalValue instanceof RegExp) {
                    copy[key] = this.newRegExp(originalValue);
                }
                else if (originalValue == null) {
                    copy[key] = originalValue;
                }
                else {
                    this.fixTypes(originalValue, copy[key]);
                }
                break;

            case 'number':
                if (isNaN(originalValue)) {
                    copy[key] = NaN;
                }
                else if (originalValue === Infinity) {
                    copy[key] = Infinity;
                }
                break;

            default:
                break;
        }
    }

    private fixTypes(original, copy) {
        if (original instanceof Array) {
            for (let index = 0; index < original.length; index++) {
                this.fixPropertyValue(original, copy, index);
            }
        }
        else {
            const keys = Object.getOwnPropertyNames(original);
            keys.forEach((key) => {
                this.fixPropertyValue(original, copy, key);
            });
        }
    }

    private newRegExp(value) {
        const regexpText = String(value);
        const slashIndex = regexpText.lastIndexOf('/');
        return new RegExp(regexpText.slice(1, slashIndex), regexpText.slice(slashIndex + 1));
    }

}
