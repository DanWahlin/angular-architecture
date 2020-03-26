import { Customer } from '../model';
import { CustomerVm } from '../3-vm/customer-vm';

/** 
 * Customer ViewModel represents the Model to suit the Presenters.
 * Also encapsulates or delegates presenter logic.
 * formerly handled by pipes and Presenter emitters.
 */
export class CustomerVmPlus extends CustomerVm {

  /** Create CustomerVmPlus from a customer and callbacks. */
  static create(
    customer: Partial<Customer> = {},
    cancelCallback?: () => void,
    saveCallback?: (vm: CustomerVmPlus) => void,
    selectedCallback?: (vm: CustomerVmPlus) => void,
  ): CustomerVmPlus {
    const vmPlus = Object.assign(new CustomerVmPlus(), {
      ...CustomerVm.create(customer),

      // Replace emitters in presenters
      cancelCallback,
      saveCallback,
      selectedCallback
    });
    return vmPlus;
  }

  /** Clone self */
  clone() {
    return Object.assign(new CustomerVmPlus(), this);
  }

  /** Tell container that editing of this vm was canceled */
  cancel() { this.cancelCallback(); }
  private cancelCallback = () => {};

  /** Tell container that this vm should be saved */
  save() { this.saveCallback(this); }
  private saveCallback = (vm: CustomerVmPlus) => {};

  /** Tell container that this vm was selected */
  selected() { this.selectedCallback(this); }
  private selectedCallback = (vm: CustomerVmPlus) => {};
}
