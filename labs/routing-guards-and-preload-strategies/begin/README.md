# Routing Guards Lab

## Lab 3: Routing Guards and Preload Strategies

This lab will walk you through adding preload strategies to help load your javascript files before a user needs them. It will also walk you through how to run logic before a route changes to allow or prevent navigation to a route.

### Exercise 1: Preload Strategies

In this exercise you'll change the behavior of your app from loading modules on demand to pre-loading modules in advance.

#### Step 1

Run the app, open dev tools, and go to the network tab

Notice heroes bundle is loaded, but the villains bundle is not loaded

#### Step 2

Add the PreloadAllModules strategy to the AppRoutingModule

#### Step 3

Run the app, open dev tools, and go to the network tab

Notice heroes and villains bundles both loaded

### Exercise 2: Routing Guards

In this exercise you'll prevent users from navigating to one of your routes (and modules), based on custom logic.

#### Step 1

Create a CanActivate routing guard in the CoreModule named AuthGuard using the CLI. (hint: `ng g g core/Auth`)

#### Step 2

Use `a-guard-can-activate` snippet to replace the code in the new file, and name the class `AuthGuard`

#### Step 3

Configure the function to return false

#### Step 4

Apply the guard to the /villains route in the AppRoutingModule

#### Step 5

Run the app, open dev tools - network tab, and click on the Villains navigation

Notice the villains chunk loads but it does not get navigated in the UI.

#### Step 6

Bonus: How could we make the Villains module not load at all? Try it.

Hint: Add the AuthGuard to the canMatch property of the villains route in AppRoutingModule.
