# Routing Guards Lab

## Overview

- Add preload strategy for all lazy routes
- Create a CanActivate Guard
- Prevent navigating to Villains
- Prevent loading of the Villains code chunk

## Steps

1. Add the PreloadAllModules strategy to the AppRoutingModule

1. Run the app, open dev tools, and go to the network tab

1. Notice heroes and villains bundles both loaded

1. Create a CanActivate routing guard in the CoreModule named AuthGuard using the CLI 1. (hint: create a service)

1. Use a-guard-can-activate snippet to replace the code in the new file

1. Configure the function to return false

1. Apply the guard to the /heroes route in the AppRoutingModule

1. Provide the guard in the AppRoutingModule

1. Run the app, open dev tools - network tab, and click on the Villains navigation

1. Notice the villains chunk loads but it does not get navigated in the UI.

1. Bonus: How could we make it not load at all? Try it.
