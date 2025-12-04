# Lab 7.1 Component Creation and Props  

## Overview

In this lab we used React to create an app.  The purpose of the lab was to practice passing props to create components and then rendering those components in the app.  The lab simulated product display, user profile, and an alert box.  To access the app, the user needs to use npm run dev to access the app.  The example displays one alert box, a product display card, and a user profile card.  Each has a clickable button that displays an alert.

## Features

Activity Tasks

Component Implementation:

- Implement each component according to its interface requirements.
- Use proper TypeScript types and interfaces.
- Implement prop validation where appropriate.
- Handle optional props and children correctly.

Component Testing:

- Test different prop combinations.
- Verify that components render correctly with various props.

Component Composition:

- Create example usage of components working together.
- Demonstrate prop passing between components.
- Show how to handle component nesting.

Documentation:

- Add comments to describe component props.
- Create example usage documentation.
- Document any special prop handling or requirements.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React

## Reflection Questions

1. How did you handle optional props in your components?

For the optional children, I added a p element to the alert box component.  For the product display I used to optional booleans to display the p elements only if the boolean was true.  I also chose to use the optional button to post an alert when clicked.  For the user profile, I used the optional booleans to display the role and email when true.  I also chose to display the optional image element.

2. What considerations did you make when designing the component interfaces?

I considered how to code the elements for the optional props.  I was able to use conditionals that displayed the elements only when the booleans were true.

3. How did you ensure type safety across your components?

I ensured type safety by declaring the types when declaring variables.  This ensured errors were caught at compile time rather than run time.

4. What challenges did you face when implementing component composition?

I found it difficult to deal with the components that were based on two interfaces.  Thankfully, Amanada helped me to understand that I could use dot notation to create the component for the product and user portion of those props and pass the interface type as a prop.  I also experienced some errors because I wasn't passing the argument for the functions in the component.  I was able to clear those up in office hours.
