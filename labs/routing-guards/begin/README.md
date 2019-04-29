# Routing Guards Lab

## Overview

- Add preload strategy for all lazy routes
- Create a CanActivate Guard
- Prevent navigating to Villains
- Prevent loading of the Villains code chunk

## Steps

1. Run the app, open dev tools, and go to the network tab

1. Notice heroes bundle is loaded, but the villains bundle is not loaded

1. Add the PreloadAllModules strategy to the AppRoutingModule

1. Run the app, open dev tools, and go to the network tab

1. Notice heroes and villains bundles both loaded

1. Create a CanActivate routing guard in the CoreModule named AuthGuard using the CLI. (hint: `ng g g core/Auth `)

1. Use a-guard-can-activate snippet to replace the code in the new file, and name the class `AuthGuard`

1. Configure the function to return false

1. Apply the guard to the /villains route in the AppRoutingModule

1. Run the app, open dev tools - network tab, and click on the Villains navigation

1. Notice the villains chunk loads but it does not get navigated in the UI.

1. Bonus: How could we make it not load at all? Try it.
