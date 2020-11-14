---

courseType: code
categories: Programming, Development, SPAs
published: true
public: true
showLabNumbers: false
showExerciseNumbers: false

---

# Course: Angular Architecture Workshop

In these workshop labs you'll learn about various Angular concepts that can be applied as you design and architect applications.

Topics covered include:

*   Tooling and setup
*   Working with View Models
*   Creating a shared library
*   Working with preload strategies and route guards
*   Use RxJS for communication
*   State management options


## Lab 1: Tooling and Setup

This lab will walk you through getting the required tools and code setup.





### Exercise 1: Installing the Tools and Labs

In this exercise you'll install the required tools and code to run the labs in the course.



#### Step 1

Install VS Code from [https://code.visualstudio.com](https://code.visualstudio.com) if it's not already installed on your machine.

#### Step 2

Install the Angular Language Service extension from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template).


<course-item
  type="Note"
  title="">
  This extension adds additional code help support into Angular templates.
  
</course-item>

#### Step 3

Check that you have Node.js installed by running the following command. If you don't have it on your machine install it from [https://nodejs.org](https://nodejs.org).


```command line
node --version
```


<course-item
  type="Note"
  title="">
  We recommend installing the latest **LTS version** of Node.js for this workshop.
  
</course-item>

#### Step 4

Clone the GitHub repository with the demos and labs. Or, download the repository in a zip file

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)


```command line
git clone https://github.com/DanWahlin/angular-architecture
cd angular-architecture
```

#### Step 5

If you already cloned the repo, be sure to get the latest changes by pulling the code again.


```command line
git pull
```

#### Step 6

Install the Angular CLI if you don't already have it by running the following command:


```command line
npm install -g @angular/cli
```

#### Step 7

Verify the **Angular CLI** installation by running the following command:


```command line
ng --version
```

#### Step 8

Run the following command to make sure the tools are working correctly. This will use the Angular CLI to create a new project which will verify everything is working correctly.


```command line
ng new my-project
```


<course-item
  type="Note"
  title="">
  You'll be prompted to choose routing (or not) and your preferred way to work with CSS. Select anything you'd like for those options.
  
</course-item>


## Lab 2: Working with View Models

In this lab you'll learn about how View Models can be used in your Angular applications to work with observables.





### Exercise 1: Working with View Models

In this exercise you'll extend a Customer ViewModel example by displaying two properties that are in the Customer data but not in the ViewModel: **pet** and **isDeleted**

The **isDeleted** flag is a reversible Customer "soft delete". You'll add a **showDeleted** flag to the container and use it to filter Customer ViewModels for display.



<course-item
  type="Note"
  title="">
  You can find the final code solution for this lab exercise [here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/view-models/end).
  
</course-item>


#### Step 1

Open the `angular-architecture/labs/view-models/begin` folder in your editor.

Open a terminal window at the root of the `begin` folder and run the following command to install the necessary packages:


```command line
npm install
```

#### Step 2

Open `src/app/customers/customer-vm.ts`. Locate the `Add "pet" and "isDeleted" properties` comment. Immediately below it add **pet** (as a string) and **isDeleted** (as a boolean) properties.

#### Step 3

Locate the `toCustomer()` function in the `customer-vm.ts` file. Include **pet** and **isDeleted** among the `const` values as well as in the returned object.


<course-item
  type="Note"
  title="">
  If you're new to the syntax, the `const` line of code uses [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to break apart the `customer` ﻿ object into individual values. Those values are then consolidated into an object (using shortcut property syntax) and returned from the function.
  
</course-item>

#### Step 4

Perform the following tasks within the **VmContainerComponent** class:

*   Add a **showDeleted** boolean property.
*   Locate the **createVm$** function and modify it to filter customers based on the **showDeleted** or **customer.isDeleted** status as shown below:


```typescript
customers
  .filter(customer => this.showDeleted || !customer.isDeleted)
  .map(customer => CustomerVm.create(customer))
```


<course-item
  type="Note"
  title="">
  The **createVm$** function is responsible for assigning an observable to the **vms$** property that you looked at earlier. This property is bound to the template using the async pipe.
  
</course-item>


<course-item
  type="Richtext">
  Now locate the **toggleShowDeleted()** function at the bottom of the class. Add the following code into the function to toggle **showDeleted** and call **createVm$**:
</course-item>


```typescript
this.showDeleted = !this.showDeleted;
this.createVm$();
```

#### Step 5

Open a terminal window at the root of the **begin** folder and run the following command to build and run the project. Fix any build errors if necessary before continuing.


```command line
ng serve -o
```

#### Step 6

Perform the following tasks:

*   Click on a customer to view their details.
*   Edit a customer and save the changes.
*   Delete a customer (while editing) using the checkbox and save the change.
*   Select the **Show Deleted** checkbox and notice that the deleted customer displays.

  

Because this lab uses a ViewModel ...

1.  Notice how the changes you made to the customer in the details component do not affect the customer list component or the container, until they are saved.
2.  Notice how the pet and isDeleted properties now exist on the customer?


## Lab 3: Working with RxJS Subjects

In this lab, you'll work with RxJS subjects to learn how they can be used to create observables and support subscriptions. Learn how to:

*   Work with different types of RxJS subjects
    
*   Learn about the behavior of various RxJS subjects
    
*   Subscribe to observables created by an RxJS subject





<course-item
  type="Note"
  title="">
  The solution for this lab can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/rxjs-subjects/end).
  
</course-item>


### Exercise 1: Add RxJS Subject Functionality into a Service

In this exercise, you'll work with the RxJS Subject type and use it in an Angular service.



#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open Angular Architecture project's **labs/rxjs-subjects/begin** folder in VS Code.

#### Step 3

Open **src/app/core/subject.service.ts** in the editor.

#### Step 4

Take a moment to look through the existing code in the class and note that it has an **init()** function defined.

#### Step 5

Add the following properties into the **SubjectsService** class. Ensure that you add the proper data type shown below when you define the property and that you do the proper import statement at the top of the file to import the type.


```typescript
subject$: Subject<string>;
observable$: Observable<string>;
```


<course-item
  type="Note"
  title="">
  Why is $ being used in the property names? This is a common convention to follow when working with “streams” in JavaScript applications and subjects/observables in Angular applications, but it isn’t a naming convention that you have to follow.
  
</course-item>

#### Step 6

Locate the **Create Subject and Observable Here** comment in the **init()** function.

#### Step 7

Perform the following tasks below the comment:

*   Create a new instance of a **Subject**. Assign the instance to the **subject$** property created earlier.
    
*   On a separate line, add code to call **subject$.asObservable()** and assign the result to the **observable$** property created earlier.

#### Step 8

Immediately after the code added in the previous step, add the following code to fire a timer every 3 seconds:


```typescript
setInterval(() => {

}, 3000)
```

#### Step 9

Add the following code inside of the **setInterval()** function to create a time value and send it out to any subscribers using the Subject type’s **next()** function:


```typescript
const date = new Date();

// Place the following code on a single line when adding it 
const time = `${date.getHours()}:${date.getMinutes()}:
                        ${date.getSeconds()}`;
this.subject$.next(time);
```


<course-item
  type="Note"
  title="">
  Note that tick marks are used around the time string rather than apostrophes or quotes. This is using the ES2015 string template functionality to embed variables in the string. It also supports multi-line strings (although in this case please remove the wrapping shown above in the time variable value).
  
</course-item>

#### Step 10

Save your work and continue to the next exercise.


### Exercise 2: Subscribing to an Observable

In this exercise, you'll subscribe to the observable exposed by SubjectsService.



#### Step 1

Open **src/app/app.component.ts** in the editor. Note the following about the component:

*   It defines three array properties (**subscription1Data**, etc.)
    
*   It defines three functions (**subscribe1()**, etc.)

#### Step 2

Inject SubjectsService into the component’s constructor. Give the parameter a name of subjectsService and make it private so that TypeScript automatically creates a property.

#### Step 3

Add code in the **subscribe1()** function to subscribe to **SubjectService’s** **observable$** property. Add the following code into the **subscribe()** function:


```typescript
data => this.subscription1Data.push(data)
```

#### Step 4

The call to **subscribe()** will return a **Subscription** object. Assign the result of the call to a new property named **sub1** of type **Subscription**. Note that you’ll need to create the property.

#### Step 5

Implement the **OnDestroy** interface on the component class and add an **ngOnDestroy()** function.

#### Step 6

Add the following into **ngOnDestroy()** to unsubscribe from the subscription.


```typescript
sub1.unsubscribe();
```


### Exercise 3: Adding Additional Subscriptions

In this exercise, you'll add additional subscriptions and run the project.



#### Step 1

Right-click on the **begin** folder in VS Code and select **Open in Terminal**. Run the following command to build the project, launch the browser, and watch for any code changes:


```command line
ng serve -o --watch
```

#### Step 2

Click on the button in the **Subscription 1** section of the page. Notice that after a few seconds values are displayed. These values are being returned using the **Subject** object you created in **SubjectService**.

#### Step 3

Leave the browser open. Go back to the editor and copy the existing code found in the **subscribe1()** function into **subscribe2()** and **subscribe3()**.

#### Step 4

Add two additional **Subscription** properties into the class named **sub2** and **sub3**.

#### Step 5

Assign the result of each **subscribe()** call to the appropriate **Subscription** property.

In other words, in **subscribe2()** assign the result of the **subscribe()** call to the **sub2** property. Do the same thing for **subscribe3()** (use **sub3** there).

#### Step 6

Change **subscription1Data** to **subscription2Data** in the **subscribe2()** function and **subscription1Data** to **subscription3Data** in **subscribe3()**.

#### Step 7

Unsubscribe from **sub2** and **sub3** in **ngOnDestroy()**.

#### Step 8

When you’re done, each of the **subscribeX()** functions should reference the appropriate **subX** property and **subscriptionXData** property.

#### Step 9

Make sure your code is compiling correctly by looking at the console that should still be running. If there’s a problem, fix it before continuing.

#### Step 10

Go back to the browser and perform the following steps:

*   Click on the **Subscription 1** button
    
*   Wait around 10 seconds and click on the **Subscription 2** button
    
*   Wait another 10 seconds and click on the **Subscription 3** button

#### Step 11

Did the **Subscription 2** and **Subscription 3** areas display all of the same data that was sent to Subscription 1? Why or why not?


<course-item
  type="Hint"
  title="Answer">
  Because you used a Subject in **SubjectsService**, only current subscribers get data. If a subscriber subscribes later they do not get any of the data that was previously sent.
  
</course-item>

#### Step 12

Go back to **SubjectsService** and refactor it to use a **BehaviorSubject** instead of **Subject**.


<course-item
  type="Note"
  title="">
  When you create an instance of BehaviorSubject you must pass a value to its constructor. You can pass null for this exercise. The value represents the initial value that should be sent to the first subscriber when they initially subscribe.
  
</course-item>

#### Step 13

Go back to the browser and click on the Subscription 1 button. What value was displayed first in the **Subscription 1** area?


<course-item
  type="Hint"
  title="Answer">
  The first value displayed should be empty (null). This is because we passed null into the BehaviorSubject constructor when it was created in SubjectsService.
  
</course-item>

#### Step 14

Now click on the **Subscription 2** button. Did the **Subscription 2** area display any of the data passed to **Subscription 1** (even though you subscribed later)?


<course-item
  type="Hint"
  title="Answer">
  Yes! It passed the last value that was went to Subscription 1 (as well as any new values). That’s the key benefit of using BehaviorSubject over Subject. New subscribers always get the last value that the subject emitted.
  
</course-item>

#### Step 15

Click on the **Subscription 3** button. You should see that it receives the last value sent from the subject as well as any new values.

#### Step 16

Close the browser.

#### Step 17

Stop the console in VS Code by highlighting it and pressing **Ctrl+C**.


## Lab 4: Creating an Observable Service

In this lab, you'll work with observable services and learn how subjects can be used to support component communication.





<course-item
  type="Note"
  title="">
  The solution for this lab can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/creating-an-observable-service).
  
</course-item>


### Exercise 1: Create an Angular Project

In this exercise, you'll create an Angular project using the CLI.



#### Step 1

Open a terminal window and run the following command to create a new Angular project.


```command line
ng new observable-service
```

#### Step 2

**cd** into the new project folder.


```command line
cd observable-service
```

#### Step 3

Open the project in VS Code by running the following command:


```command line
code .
```


<course-item
  type="Note"
  title="">
  If your system doesn’t recognize the **code .** command, open the project folder using the File menu.
  
</course-item>

#### Step 4

Run the application using **ng serve -o** in the **VS Code terminal**.


<course-item
  type="Note"
  title="">
  Feel free to use an external terminal window if that's what you prefer.
  
</course-item>


<course-item
  type="Hint"
  title="Getting to the VS Code Terminal">
  To start a new VS Code terminal window you can right-click anywhere in the root of the project and select **Open in Terminal** from the menu.
  
</course-item>


### Exercise 2: Creating and Using an Observable Service

In this exercise, you'll create an observable service and use it for component communication.



<course-item
  type="Note"
  title="">
  Subject is one of many "subject" objects provided by RxJS. Here's a list of the various "subject" objects:

*   **Subject** – Send data to subscribed observers (any previously emitted data is not sent)
    
*   **BehaviorSubject** – Send last data value to observers as they subscribe
    
*   **ReplaySubject** - All previously sent data is also sent to new observers (this behavior can be changed)
    
*   **AsyncSubject** - Emits the last value (and only the last value) to observers when the sequence is completed
  
</course-item>


#### Step 1

Create a new Angular service by running the following command in a terminal window.


```command line
ng g service shopping-cart
```

#### Step 2

Perform the following tasks in the service:

*   Create a **private** property named **itemsInCart** and assign it a value of **0**.
    
*   Create a private property named **shoppingCartSubject$**. Assign a new instance of **Subject** to the property.
    
*   Create a property named **shoppingCartChanged$**. Assign **shoppingCartSubject$.asObservable()** to the property.


<course-item
  type="Note"
  title="">
  If you need any help with the tasks in this step refer to the workshop slides or the hint below.
  
</course-item>


<course-item
  type="Hint"
  title="ShoppingCartService Code">
  Here's the final code for the shopping cart service:
  

```typescript
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemsInCart = 0;
  private shoppingCartSubject$ = new Subject<number>();
  shoppingCartChanged$ = this.shoppingCartSubject$.asObservable();


}
```

</course-item>

#### Step 3

Add a function named **addToCart()** into the service. It should do the following:

*   Increment **itemsInCart** by **1** each time the function is called.
    
*   Call the **shoppingCartSubject$’s** **next()** function and pass the value of **itemsInCart** to it.


<course-item
  type="Hint"
  title="addToCart() Function">
  Here's what the code should look like for the addToCart() function:
  

```typescript
addToCart() {
  this.itemsInCart++;
  this.shoppingCartSubject$.next(this.itemsInCart);
}
```

</course-item>

#### Step 4

Create a new component named **products** (using **ng g c products**) and perform the following tasks in it:

*   Remove the existing HTML from the template and add a button with the text **Add to Cart**.
    
*   Inject **ShoppingCartService** into the component constructor.
    
*   When the button is clicked call a function in the component that calls the shopping cart service’s **addToCart()** function. You can name the component function anything you'd like.


<course-item
  type="Hint"
  title="ProductsComponent Code">
  The code for ProductsComponent can be found below:
  

```typescript
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  addToCart() {
    this.shoppingCartService.addToCart();
  }

}
```

</course-item>

#### Step 5

Create a new component named **header** (using **ng g c header**) and perform the following tasks in it:

*   Inject **ShoppingCartService**.
    
*   Add a **cartItemsCount** property and assign a value of **0**.
    
*   In **ngOnInit()**, subscribe to the shopping cart service’s **shoppingCartChanged$** observable.
    
*   Assign the data received from the observable to the **cartItemsCount** property.
    
*   Assign the **Subscription** object returned from calling **subscribe()** to a property in the component named **shoppingCartSub** which is of type **Subscription**.
    
*   Implement the **OnDestroy** interface on the component class.
    
*   Add an **ngOnDestroy()** method that handles unsubscribing from the **Subscription** stored in **shoppingCartSub**.
    
*   Write the value of **cartItemsCount** out in the component’s template using the **{{ }}** interpolation binding.


<course-item
  type="Note"
  title="">
  If you prefer you can use SubSink to handle unsubscribing. Details about SubSink can be found at [https://github.com/wardbell/subsink#readme](https://github.com/wardbell/subsink#readme).
  
</course-item>


<course-item
  type="Hint"
  title="HeaderComponent Code">
  Here's the final code for the HeaderComponent.
  

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../core/shopping-cart.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsCount = 0;
  shoppingCartSub: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartSub = this.shoppingCartService.shoppingCartChanged$.subscribe(val => {
      this.cartItemsCount = val;
    });
  }

  ngOnDestroy() {
    this.shoppingCartSub.unsubscribe();
  }

}
```

</course-item>

#### Step 6

Open **app.component.html** and remove all of the HTML.

#### Step 7

Add the **header** component’s selector into the top of **app.component.html**.

#### Step 8

Add the **products** component’s selector into **app.component.html** under the header selector.

#### Step 9

Go to the browser and click the **Add to Cart** button. You should see that the cart item count displayed by the header component increments each time the button is clicked.


<course-item
  type="Note"
  title="">
  If you forgot to start the local development server earlier you can run the **ng serve -o** command in a terminal window (at the root of the project) to start it.
  
</course-item>

#### Step 10

Stop the **ng serve** process running in the terminal window by pressing **Ctrl+C**.


## Lab 5: Working with State Management

In this lab, you'll explore different state management options. Although in-depth coverage of state management solutions isn’t possible in a single lab, the lab will expose you to how some of the different options work and the code they use.

In this lab, you will:

*   Explore different state management options including:
    
*   NgRx
    
*   ngrx-data
    
*   Observable Store





### Exercise 1: Working with NgRx

In this exercise, you'll explore an Angular project that uses NgRx for state management.



<course-item
  type="Note"
  title="">
  You can find the final code solution for this lab exercise can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/state-management/ngrx).
  
</course-item>


#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open the **labs/state-management/ngrx/begin** folder in your editor.

#### Step 3

Right-click on the **begin** folder and select **Open in Terminal** from the menu.

#### Step 4

Launch the application in the browser by running the following Angular CLI command:


```javascript
ng serve -o
```


<course-item
  type="Note"
  title="">
  Don’t worry about any errors you see in the console. You’ll add code that will resolve the errors later in this exercise.
  
</course-item>

#### Step 5

Ngrx is based on the following concepts:

*   Actions
    
*   Reducers
    
*   Effects
    
*   Selectors
    
*   Store

#### Step 6

With Ngrx, a component creates an action that is then sent to reducers that interact with the store. Selectors allow data to be retrieved as it changes in the store. In cases where HTTP calls (or others) need to be made to retrieve data, effects can be used.

Let’s explore each of these options one by one and look at the code that’s required to make them work.


<course-item
  type="Note"
  title="">
  This explanation is very high level but provides a general overview of how the different parts of Ngrx interact. You can find more information about Ngrx at [https://github.com/ngrx/platform](https://github.com/ngrx/platform).
  
</course-item>

#### Step 7

Open **package.json** and take a moment to look at the dependencies. You’ll notice several NgRx packages defined.

#### Step 8

Open **src/app/core/model** and take a moment to explore the code in the **customer.ts** and **order.ts** files. These model classes will be used to pass data around the application.

#### Step 9

Open **src/app/app.module.ts**.

Notice that **StoreModule** and **EffectsModule** code is imported. These are provided by NgRx.

#### Step 10

Now let’s look at the **Actions** exposed by the application. Actions are used to send a payload to a reducer which will ultimately interact with the data store.

#### Step 11

Open **src/app/store/actions/customer.actions.ts** in the editor.

Note the following actions that are supported by the application. Each of them also includes error and success actions.

*   Get Customer
    
*   Get Customers
    
*   Add Customer
    
*   Update Customer
    
*   Delete Customer

#### Step 12

Locate the **GetCustomers** and **GetCustomersError** classes in the same file. Note how they reference the constants that you looked at previously.


<course-item
  type="Note"
  title="">
  Note that **GetCustomers** doesn’t define a payload (since it retrieves all customers and doesn’t require any additional data to be sent) whereas **GetCustomersError** includes a payload since information about the error would need to be passed.
  
</course-item>

#### Step 13

Locate the **Add GetCustomersSuccess Action Here** comment and add the following code immediately after it:


```typescript
export class GetCustomersSuccess implements Action {
  readonly type = GET_CUSTOMERS_SUCCESS;
  constructor(public readonly payload: Customer[]) {}
}
```


<course-item
  type="Note"
  title="">
  Note that the payload for this action is **Customer\[\]**.
  
</course-item>

#### Step 14

Scroll to the bottom of the file and notice that **GetCustomersSuccess** is already included in the **AllCustomerActions** type. This type uses the TypeScript “union types” feature.


<course-item
  type="Note"
  title="">
  You can learn more about Union Types and how they can be used in TypeScript here: [https://www.typescriptlang.org/docs/handbook/advanced-types.html](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
  
</course-item>

#### Step 15

Open **src/app/store/reducers/customer.reducer.ts** in the editor.

Locate the **reducer()** function in the file.

#### Step 16

Take a moment to explore the different switch cases that are defined. These handle the action payloads, interact with the store, and return the updated state.

#### Step 17

Locate the **Add the ADD\_CUSTOMERS\_SUCCESS Reducer Here** comment and add the following code after it:


```typescript
case CustomerActions.GET_CUSTOMERS_SUCCESS: {
   return {
      ...state,
      customers: action.payload,
      loading: false
    };
}
```


<course-item
  type="Note"
  title="">
  This returns the existing state properties, the customers from the action’s payload, and sets the loading property to false since the customers are now loaded when this reducer is executed.
  
</course-item>

#### Step 18

Open **src/app/store/services/customer-data.service.ts**.

Locate the **getCustomers()** function. Notice that it uses **HttpClient** to retrieve data from an API service. Although Ngrx has several different parts, it still relies on core Angular concepts such as services for some functionality.

#### Step 19

Open **src/app/store/effects/customer.effects.ts**.

Locate the **getCustomers$** effect. Notice that is uses **customerDataService** that you looked at a moment ago to retrieve data as well as the **GetCustomersSuccess** action. If an error occurs the **GetCustomersError** action is used.

#### Step 20

Open **src/app/store/services/customer.selectors.ts**.

Locate the **CustomerSelector** class at the bottom of the file and notice that it defines several properties including **customers$**, which accesses data from the store.

#### Step 21

Now that you’ve looked at actions, reducers, effects, and selectors, let’s see how a component can interact with a Ngrx store.

#### Step 22

Open **src/app/customers/customers.component.ts**.

Notice that a Store object as well as a **CustomerSelectors** object is injected into the constructor. The constructor then uses the **CustomerSelectors** value to bind a customers$ selector property to a local property in the component named **customers$**.

This is how customer data gets back into the component after an action is sent out to a reducer.


<course-item
  type="Note"
  title="">
  Any time the observable changes the component will automatically get the changes.
  
</course-item>

#### Step 23

To get customers into the component you’ll need to dispatch an action to the store. Add the following function into **CustomersComponent**:


```typescript
getCustomers() {
   this.store.dispatch(new CustomerAction.GetCustomers());
}
```

#### Step 24

Locate the **ngOnInit()** function and add code into it to call **getCustomers()**.

#### Step 25

Save all of your work up to this point and make sure you don’t have any errors in the console. If you have any errors review the code you entered in the previous steps and fix the errors before proceeding.

#### Step 26

Go to the browser and ensure that customers are loading correctly in the application.

#### Step 27

Stop the **ng serve** process in the console by highlighting it and pressing **Ctrl+C**.


### Exercise 2: Working with ngrx-data

In this exercise, you'll explore an Angular project that uses **ngrx-data** for state management.



<course-item
  type="Note"
  title="">
  You can find the final code solution for this lab exercise at [https://github.com/DanWahlin/angular-architecture/tree/master/state-management/ngrx-data](https://github.com/DanWahlin/angular-architecture/tree/master/state-management/ngrx-data).
  
</course-item>


#### Step 1

Open the **labs/state-management/ngrx-data/begin** folder in your editor.

#### Step 2

Right-click on the **begin** folder and select **Open in Terminal** from the menu.

#### Step 3

Launch the application in the browser by running the following Angular CLI command:


```typescript
ng serve -o
```


<course-item
  type="Note"
  title="">
  Don’t worry about any errors you see in the console. You’ll add code that will resolve the errors later in this exercise.
  
</course-item>

#### Step 4

Keep the browser open (even though there are errors to fix) and switch back to your editor.

#### Step 5

ngrx-data acts as a wrapper around NgRx. Actions, reducers, selectors, effects, and a store are still used behind the scenes. ngrx-data can simplify the overall process while providing the key benefits Ngrx offers. ngrx-data relies on entities and services for data retrieval and manipulation.


<course-item
  type="Note"
  title="">
  You can find more details about ngrx-data at [https://ngrx.io/guide/data](https://ngrx.io/guide/data).
  
</course-item>

#### Step 6

Open **package.json** and take a moment to look at the dependencies. You’ll notice several Ngrx packages as well as ngrx-data.

#### Step 7

Open the **src/app/core/model** folder and take a moment to explore the **Customer** and **Order** model classes (the “entities”) defined there. These will be used by ngrx-data to pass data around the application.

#### Step 8

Open **src/app/store/entity-metadata.ts** in the editor.

Add the following code into the file to import the **EntityMetadataMap** symbol from ngrx-data and define the names of the entities used in the application.


```typescript
import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Customer: {},
  Order: {}
};

const pluralNames = { };
```


<course-item
  type="Note"
  title="">
  This will let ngrx-data know that we’ll be working with Customer and Order entities throughout the application.
  
</course-item>

#### Step 9

Although you won’t be using the **pluralNames** variable in this exercise, it’s worth discussing. In cases where you have entities that have "tricky" plural versions of their names, you can define what the plural version would look like here.

For example, goose (singular) and geese (plural) rather than using gooses for the plural version. An example of overriding the plural version of a name is shown below (do NOT add this into the code as it’s for example only):


```typescript
const pluralNames = {
  Goose: 'Geese' // Would use Geese for the plural version
};
```

#### Step 10

Now you’ll map the **entityMetadata** and **pluralNames** constants into a constant named **entityConfig** that will be used in a moment. Add the following code immediately after the previous code you entered:


```typescript
export const entityConfig = {
  entityMetadata,
  pluralNames
};
```

#### Step 11

Open **src/app/store/app-store.module.ts**.

Notice that **StoreModule and** **EffectsModule** are imported from NgRx. The NgrxDataModule is also imported which is a module that’s provided by ngrx-data.


<course-item
  type="Note"
  title="">
  The process of importing StoreModule and EffectsModule is similar to what you saw with Ngrx. This is because ngrx-data relies on Ngrx behind the scenes.
  
</course-item>

#### Step 12

Import the **entityConfig** constant at the top of the file (you created this earlier in **store/entity-metadata.ts**) and pass it into the **NgrxDataModule** as shown next to register the entity metadata information with the module:


```typescript
NgrxDataModule.forRoot(entityConfig)
```

#### Step 13

ngrx-data automatically handles making HTTP calls to RESTful services based on naming conventions so you don’t have to write effects out of the box. This means that you don’t have to write **HttpClient** code in many cases. You only have to create a specific type of service which you’ll see in a moment. However, you can override these conventions any time you want.

At the top of the **app-store.module.ts** file you’ll notice a **defaultDataServiceConfig** definition which is passed into the **NgrxDataModule**. The custom definition is used to map the customer and order entities to a custom URL format so that “customers” and “orders” respectively is always used in the URL whether you’re selecting one customer or many.


<course-item
  type="Note"
  title="">
  By default, ngrx-data uses a singular version of the entity name in the URL (“customer”) when retrieving a single entity and a plural version of the entity name (“customers”) when retrieving a collection of entities.
  
</course-item>

#### Step 14

Open **src/app/customers/customers.service.ts** in the editor.

#### Step 15

This service class extends **EntityCollectionServiceBase** which is provided by ngrx-data. The service handles working with data for the Customer entity and making the necessary HTTP calls to retrieve and manipulate the data.

Notice that **EntityCollectionServiceElementsFactory** object is injected into the service’s constructor and passed into the base class’s constructor along with the name of the entity. The entity collection classes handle all of the heavy lifting such as HTTP calls and mapping data to defined entities.


<course-item
  type="Note"
  title="">
  You’ll find a similar class that is used to work with Order entities in the **src/app/orders/orders.service.ts** file.
  
</course-item>

#### Step 16

You have just configured your first ngrx-data store! You can see it’s not a lot of code to get started. Now let’s look at how to interact with the store.

#### Step 17

Open **src/app/customers/customers.component.ts** in the editor.

Add the following properties into the component (the necessary imports are already included at the top of the file for you):


```typescript
customers$: Observable<Customer[]>;
loading$: Observable<boolean>;
```

#### Step 18

Update the component’s constructor to look like the following code:


```typescript
constructor(private customersService: CustomersService) {
    this.loading$ = this.customersService.loading$;
}
```


<course-item
  type="Note"
  title="">
  This code handles associating the **loading$** property from the store (an observable) to the **loading$** property of the component. This could be used to show/hide a spinner of some type as data is being retrieved from a server.
  
</course-item>

#### Step 19

Add the following function into the component to handle getting customers from the customers service and then assigning them to the component:


```typescript
getCustomers() {
    this.customers$ = this.customersService.getAll();
}
```


<course-item
  type="Note"
  title="">
  Where did the **getAll()** function come from? It’s one of the built-in functions provided by ngrx-data. Additional functions such as getById(), add(), delete(), update(), etc. exist as well.
  
</course-item>

#### Step 20

Locate the **ngOnInit()** function. Add code in it to call the **getCustomers()** function.

#### Step 21

Open **src/app/customers/customers-edit/customers-edit.component.ts** in the editor.

#### Step 22

Locate the **add()**, **delete()**, and **update()** functions and notice how they call the appropriate service functions. The application currently only uses the **update()** function, but with a little additional code the other functions could be used as well.

#### Step 23

Save the files you’ve modified up to this point.

#### Step 24

Check your console and make sure that you don’t have any errors shown. If the build isn’t working double-check the code you entered in the previous steps.

#### Step 25

View the browser to make sure customers are showing correctly.


### Exercise 3: Working with Observable Store

In this exercise, you'll explore an Angular project that uses Observable Store for state management.



<course-item
  type="Note"
  title="">
  You can find the final code solution for this lab exercise [here](https://github.com/DanWahlin/angular-architecture/tree/master/state-management/observable-store).
  
</course-item>


#### Step 1

Open the **labs/state-management/observable-store/begin** folder in your editor.

#### Step 2

Right-click on the **begin** folder and select **Open in Terminal** from the menu.

#### Step 3

Launch the application in the browser by running the following Angular CLI command:


```typescript
ng serve -o
```


<course-item
  type="Note"
  title="">
  Don’t worry about any errors you see in the console. You’ll add code that will resolve the errors later in this exercise.
  
</course-item>

#### Step 4

Keep the browser open (even though there are errors to fix) and switch back to your editor.

#### Step 5

Observable Store provides a centralized store for your application by creating one or more services that derive from an **ObservableStore** base class. It provides a very simple API to add “state” (data) into the store and retrieve “state” out of the store. Components or other services can also subscribe to store changes so that they’re notified any time the store state is modified.


<course-item
  type="Note"
  title="">
  You can read more about Observable Store at [https://github.com/DanWahlin/Observable-Store](https://github.com/DanWahlin/Observable-Store).
  
</course-item>

#### Step 6

Open **package.json** and take a moment to look at the dependencies. One of the packages is observable-store.

#### Step 7

Open the **src/app/app.module.ts** and **src/app/core/core.module.ts** files.

Notice that there are no special modules that you have to import to use Observable Store. It’s an extremely light-weight solution and can even be used with other SPA projects such as React, Vue.js, or even general JavaScript/TypeScript projects.

#### Step 8

Open the **src/app/core/model** folder and take a moment to explore the customer and order interfaces that are defined. Classes or interfaces can be used with Observable Store. You aren’t forced to use one or the other.


<course-item
  type="Note"
  title="">
  A key benefit of interfaces is that they provide the “shape” for data and have all of the code help benefits in the editor, but don’t generate any code when TypeScript is compiled to JavaScript. There’s no overhead at runtime for using interfaces.
  
</course-item>

#### Step 9

Now open **src/app.shared/interfaces.ts** in the editor and notice the **StoreState** interface that is defined.

This is used to define the “shape” of the data for the application’s store. While this example stores a collection of customers, a single customer, and orders, any type of data can be stored.

#### Step 10

Open **src/app/customers/customers.service.ts** in the editor.

Add code to extend **CustomersService** from **ObservableStore<StoreState>**.


<course-item
  type="Hint"
  title="Need Help?">
  Use the **extends** keyword.
  

```typescript
export class CustomersService extends ObservableStore<StoreState> {

}
```

</course-item>

#### Step 11

Add the following code into the **constructor** to call the base class’s constructor and tell it to track state history:


```typescript
super({ trackStateHistory: true });
```

#### Step 12

Locate the **fetchCustomers()** function. It uses **HttpClient** (which was injected into the constructor) to call the server to retrieve customer data in this case.

#### Step 13

Add the following code below the **Set the Store State Here** comment in **fetchCustomers()** to add data to the store:


```typescript
this.setState({ customers }, 
     CustomersStoreActions.GetCustomers);
```


<course-item
  type="Note"
  title="">
  The **ObservableStore<T>** base class provides several functions that can be used to interact with the store including **setState()**. This example uses **setState()** to add the retrieved customers into the store (it will update the store’s customers property in this example). It also passes the action that occurred to the store so that you can view the store’s state history if desired.
  
</course-item>


<course-item
  type="Note"
  title="">
  The **CustomersStoreActions** value in the code is a simple **Enum** that defines string values. It can be found at the bottom of the **CustomersService** file.
  
</course-item>

#### Step 14

Locate the **getAll()** function and add the following code after the **Get Store State Here** comment:


```typescript
const state = this.getState();
```


<course-item
  type="Note"
  title="">
  This code uses the **ObservableStore** base class’s **getState()** function to retrieve the state from the store.
  
</course-item>

#### Step 15

Once the state is retrieved the code that follows checks to see if the state’s customers property has a value. If it does the code returns that value using **of()** to wrap it in an observable. If no value is found then **fetchCustomers()** is called to retrieve the data and add it to the store.

#### Step 16

Add the following code into **getAll()** after the **Log Store State Here** comment. This allows you to view all changes that have occurred in the store over time.


```typescript
console.log(this.stateHistory);
```

#### Step 17

Locate the **get()** function and notice how it filters the customers returned from **getAll()** by the customer ID and then adds the customer to the store using **setState()**.

#### Step 18

Now that a service and store have been defined, let’s see how to interact with the store from a component.

#### Step 19

Open **src/app/customers/customers.component.ts** in the editor.

Add the following property into the component:


```typescript
customers$: Observable<Customer[]>;
```

#### Step 20

Inject **CustomersService** into the component’s constructor. Make the parameter private and give it a name of **customersService**. Make sure that you add the proper imports statement at the top of the file for the service.

#### Step 21

Add the following function into the component to retrieve customers using the injected customersService object and assign the returned observable to the customers$ property:


```typescript
getCustomers() {
    this.customers$ = this.customersService.getAll();
}
```


<course-item
  type="Note"
  title="">
  This calls the **getAll()** service you worked with earlier. Data is either retrieved directly from the store if it exists, or from the server if it doesn’t exist.
  
</course-item>

#### Step 22

Locate the **ngOnInit()** function. Add code in it to call the **getCustomers()** function.

#### Step 23

Save the files you’ve modified up to this point. Check your console and make sure that you don’t have any errors shown. If the build isn’t working double-check the code you entered in the previous steps.

#### Step 24

View the browser to make sure customers are showing correctly.

#### Step 25

Other components that want to know about changes to the store can inject **CustomersService** and subscribe to its **stateChanged** observable. This is similar to using selectors in the Ngrx world to know when the store state changes.


<course-item
  type="Note"
  title="">
  You can find more details about using stateChanged and even selecting "slices" of the store's state at [https://github.com/DanWahlin/Observable-Store](https://github.com/DanWahlin/Observable-Store).
  
</course-item>


## Lab 6: Routing Guards

This lab will walk you through adding preload strategies to help load your javascript files before a user needs them. It will also walk you through how to run logic before a route changes to allow or prevent navigation to a route.





<course-item
  type="Note"
  title="">
  The final source code for this lab can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/routing-guards-and-preload-strategies/end).
  
</course-item>


### Exercise 1: Routing Guards

In this exercise you'll prevent users from navigating to one of your routes (and modules), based on custom logic.



#### Step 1

Open the **labs/routing-guards-and-preload-strategies/begin** folder and install the npm dependencies.

#### Step 2

Create a **CanActivate** routing guard in the **CoreModule** named **AuthGuard** using the CLI.


<course-item
  type="Hint"
  title="Need Help?">
  Run the following Angular CLI command. If you need more help with the guard the final source code can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/routing-guards-and-preload-strategies/end).
  

```command line
ng g g core/Auth
```

</course-item>

#### Step 3

Use **a-guard-can-activate** snippet to replace the code in the new file, and name the class **AuthGuard**.


<course-item
  type="Note"
  title="">
  Note that you'll need to install John Papa's [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2&wt.mc_id=angularworkshop-github-jopapa) in order for this snippet to appear in VS Code.
  
</course-item>

#### Step 4

Configure the function to return **false**.

#### Step 5

Apply the guard to the **/villains** route in the **AppRoutingModule**.

#### Step 6

Open a terminal window in the `begin` directory and run `ng serve -o` to start the application.

Open the dev tools in Chrome, go to the **network tab** and click on the **Villains** navigation in the app.

Notice the **villains** chunk loads but it does not get navigated to in the UI.

#### Step 7

**Bonus:** How could we make the **Villains** module not load at all?


<course-item
  type="Hint"
  title="Answer">
  Add the auth guard to the **CanLoad** property of the **villains** route in the **AppRoutingModule**.
  
</course-item>


## Lab 7: Preload Strategies

This lab will walk you through adding preload strategies to help load your javascript files before a user needs them. It will also walk you through how to run logic before a route changes to allow or prevent navigation to a route.





<course-item
  type="Note"
  title="">
  The final source code for this lab can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/routing-guards-and-preload-strategies/end).
  
</course-item>


### Exercise 1: Preload All Modules Strategy

In this exercise you'll change the behavior of your app from loading modules on demand to pre-loading all modules in advance.



#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open the **labs/routing-guards-and-preload-strategies/begin** folder in your editor and run `npm install`

#### Step 3

Run the app using `ng serve -o`

Now open the dev tools in **Chrome,** and go to the **network tab**. Notice the heroes bundle is loaded, but the **villains** bundle is not.

#### Step 4

Add the **PreloadAllModules** strategy to the **AppRoutingModule**.

#### Step 5

Go back to Chrome, and go to the **network tab**.

Notice the heroes and villains bundles both are loaded.


### Exercise 2: Opt In Preload Strategy

In this exercise you'll change the behavior of your app pre-loading modules to preload ones that you specifically select.



#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open the **labs/routing-guards-and-preload-strategies/begin** folder in your editor and run `npm install`

#### Step 3

Run the app using `ng serve -o`

Now open the dev tools in **Chrome,** and go to the **network tab**. Notice the heroes bundle is loaded, but the **villains** bundle is not.

#### Step 4

Add the **PreloadSelectedModulesList** strategy to the **AppRoutingModule**.

#### Step 5

Add `data: {preload: true}` to the villains route

#### Step 6

Go back to Chrome, and go to the **network tab**.

Notice the heroes and villains bundles both are loaded.

#### Step 7

Change `data: {preload: false}` on the villains route

#### Step 8

Go back to Chrome, and go to the **network tab**.

Notice the heroes bundles is loaded, but the villains bundle is not.


### Exercise 3: Network Aware Preload Strategy

In this exercise you'll change the behavior of your app pre-loading modules to preload ones that you specifically select.



#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open the **labs/routing-guards-and-preload-strategies/begin** folder in your editor and run `npm install`

#### Step 3

Run the app using `ng serve -o`

Now open the dev tools in **Chrome,** and go to the **network tab**. Notice the heroes bundle is loaded, but the **villains** bundle is not.

#### Step 4

Add the **NetworkAwarePreloadStrategy** strategy to the **AppRoutingModule**.

#### Step 5

Go back to Chrome, and go to the **network tab**.

Notice the heroes and villains bundles both are loaded, as long as your network is rated at least as fast as 3G or better.

#### Step 6

Open `core/network-aware-preload-strategy.ts` and uncomment the 3g and 4g speeds. This will cause the strategy not to preload if your speed is 3g or 4g, according to your browser.

#### Step 7

Go back to Chrome, and go to the **network tab**.

Notice the heroes is loaded but the villains is not loaded.


## Lab 8: Building an Angular Library

In this lab, you'll learn create an Angular library that can be shared across projects and even published to npm.





### Exercise 1: Creating an Angular Library

In this exercise you'll create an Angular library using the CLI.



#### Step 1

Create a new folder and then we'll create a new angular project and shared library in it.

Run the following command in your new folder to create a new Angular project.


```command line
ng new shared-project
```

#### Step 2

Now **cd** into the newly created **shared-project** folder.


```command line
cd shared-project
```

#### Step 3

Run the following command to create a new shared library:


```command line
ng g library shared-lib
```

#### Step 4

Open the project in VS Code by running the following command:


```command line
code .
```


<course-item
  type="Note"
  title="">
  If your system doesn't recognize the **code .** command, open the project folder using the VS Code **File** menu.
  
</course-item>

#### Step 5

Take a moment to look at the folder structure.


<course-item
  type="Note"
  title="">
  You'll see that in addition to the normal Angular project code, there's a folder named **projects**.
  
</course-item>


### Exercise 2: Using an Angular Library

In this exercise, you'll modify the shared library and then use it in an Angular project. You'll also learn how the shared library could be published to npm.



#### Step 1

Perform the following tasks:

*   Expand the **projects** folder and notice the code for the new shared library is in the **shared-lib** folder.
    
*   Expand **shared-lib/src/lib** folder and open the **shared-lib.component.ts** file.
    
*   Take a moment to look through the code and note that it’s a standard Angular component. This is where you could add your first shared component (a grid, calendar, header/footer, or whatever you need).

#### Step 2

Open a console in VS Code at the root of the **shared-project** folder. Run the following command to build the shared library:


```command line
ng build shared-lib
```

#### Step 3

In the **shared-project** folder locate the **src/app/app.module.ts** file. Add **SharedLibModule** to the imports.


<course-item
  type="Note"
  title="">
  If you're using Visual Studio Code you may see several options for importing **SharedLibModule** if you select the light bulb or use the auto-import functionality. However, you can type **shared-lib** for the path of the import.
  
</course-item>

#### Step 4

In the **shared-project** folder locate the **src/app/app.component.html** file. Add the shared library component selector into the bottom of the HTML template (above the footer).


```html
<lib-shared-lib></lib-shared-lib>
```


<course-item
  type="Note"
  title="">
  If you get a red line under the `lib-shared-lib` tag in VS Code you can ignore it.
  
</course-item>

#### Step 5

Go back to the command prompt and run the project using the following command:


```command line
ng serve -o
```


<course-item
  type="Note"
  title="">
  You should see the shared component rendered at the bottom of the page.
  
</course-item>

#### Step 6

Stop the server in the console by pressing **ctrl + c**.

#### Step 7

How does this work since the **shared-lib** project wasn’t copied to the **node\_modules** folder? Here a few details from the docs:


<course-item
  type="Note"
  title="">
  When you build your own libraries it doesn't go into **node\_modules** so we use the **tsconfig** paths to tell the build system where it is. Generating a library automatically adds its path to the **tsconfig** file.
  
</course-item>

#### Step 8

Open up **tsconfig.json** at the root of the project and notice that **shared-lib** has been added to the **paths** property.

#### Step 9

Once **shared-lib** is ready to publish to **npm** (the public npm or an internal one) you would run the following commands:


```command line
ng build shared-lib
cd dist/shared-lib
npm publish
```


<course-item
  type="Note"
  title="">
  There’s no need to run these commands now. If you do end up wanting to publish a library to npm you can create an account.
  
</course-item>


## Lab 9: HTTP Interceptors

In this lab you'll learn about how HTTP Interceptors can be used in your Angular applications to interact with your HTTP requests for purposes like security and logging.





<course-item
  type="Note"
  title="">
  The final source code for this lab can be [found here](https://github.com/DanWahlin/angular-architecture/tree/master/labs/http-interceptors/end).
  
</course-item>


### Exercise 1: CSRF/XSRF Interceptors

In this exercise you'll add a [CSRF/XSRF](https://developer.mozilla.org/docs/Glossary/CSRF) header to your HTTP requests.



#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open the **labs/http-interceptors/begin** folder in your editor and run `npm install`.

#### Step 3

Run the app using `npm run quick`

Now open the dev tools in **Chrome,** and go to the **console** in the **Developer Tools**. Notice the console messages logged that show the headers in the HTTP request.

#### Step 4

Open the **labs/http-interceptors/begin/src/app/interceptors/csrf.interceptor.ts**.

Find the comment `return next.handle(req.clone()); // Remove this` and replace it by creating a constant named `setHeaders` and set it to an object whose key is `x-csrf-token` and value is a string that represents your token. For now, type any value for your token. Your new line of code should look like the following:


```typescript
const setHeaders = { 'x-csrf-token': 'your-csrf-token-goes-here' };
```


<course-item
  type="Note"
  title="">
  Your CSRF token might be gathered from a cookie in your application.
  
</course-item>

#### Step 5

Create a constant named `clonedReq` to represent a clone of the HTTP request. Set the const to the `req.clone({ setHeaders })` as shown below.


```typescript
const clonedReq = req.clone({ setHeaders });
```

#### Step 6

Log a message to the console saying that you are creating the CSRF header.

#### Step 7

Now you must handle the cloned request. Pass the cloned request to the function `next.handle()` and return it from the `intercept` function.


```typescript
return next.handle(clonedReq);
```

#### Step 8

Open the file **labs/http-interceptors/begin/src/app/interceptors/index.ts** and add the `CSRFInterceptor` to the array of `interceptorProviders`. Use the same values for `provide` and `multi` as all of the other interceptors. Place it in the array before the `LogHeadersInterceptor`.

#### Step 9

Go back to Chrome, and go to the **console** in the **Developer Tools**.

Notice the log message for the CSRF token being created. Also notice that the CSRF token is logged by the `LogHeadersInterceptor`.


### Exercise 2: Log the Response Time

In this exercise you'll log the response times of HTTP requests using an HttpInterceptor.



#### Step 1

Download the Angular Architecture project (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/DanWahlin/angular-architecture](https://github.com/DanWahlin/angular-architecture)

#### Step 2

Open the **labs/http-interceptors/begin** folder in your editor and run `npm install`.

#### Step 3

Run the app using `npm run quick`

Now open the dev tools in **Chrome,** and go to the **console** in the **Developer Tools**. Notice the console messages logged that show the headers in the HTTP request.

#### Step 4

Open the **labs/http-interceptors/begin/src/app/interceptors/log-response.interceptor.ts**.

Find the comment `return next.handle(req);`. This statement returns an `Observable<HttpEvent<any>>`. You are going to pipe this Observable's stream so you can log the response time. Start by adding the pipe. Your code should now look like the following:


```typescript
const started = Date.now();
let ok: string;
return next.handle(req).pipe(

);
```

#### Step 5

Use the `tap` operator to set the `ok` variable based on whether the response succeeds or fails.

*   Add the `tap` operator to the pipe. The `tap` operator accepts two function paths: a success function and an error function
    
*   Pass an arrow function for the success path that sets the variable `ok` to the string `success` when the `event` is an `instanceof` `HttpResponse`.
    
*   Pass an arrow function for the the error path that sets the variable `ok` to the string `error`


<course-item
  type="Hint"
  title="Need Help?">
  Your `tap` code should look like the following code.
  

```typescript
tap(
    event => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
    error => (ok = 'failed')
 ),
```

</course-item>

#### Step 6

The code already captures the start time when the interceptor begins. Now add the `finalize` operator to the `pipe` to capture the end time.

*   Add the `finalize` operator to the pipe.
    
*   The `finalize` accepts an arrow function with no parameters. Add this now.
    
*   Capture the elapsed time between now and the `started` variable
    
*   Log a message to the console showing
    
*   the request method
    
*   the request parameters
    
*   the elapsed time
    
*   the success or failure


<course-item
  type="Hint"
  title="Need Help?">
  Your `tap` code should look like the following code.
  

```typescript
finalize(() => {
  const elapsed = Date.now() - started;
  console.log(
    `${req.method} "${req.urlWithParams}" \n\t ${ok} in ${elapsed} ms.`
  );
 })
```

</course-item>

#### Step 7

Open the file **labs/http-interceptors/begin/src/app/interceptors/index.ts** and add the `LogResponseTimeInterceptor` to the array of `interceptorProviders`. Use the same values for `provide` and `multi` as all of the other interceptors. Place it at the end of the array.

#### Step 8

Go back to Chrome, and go to the **console** in the **Developer Tools**.

Notice the log message for the HTTP Response time.

