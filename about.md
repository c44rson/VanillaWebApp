# Standalone Compound Interest Calculator by Carson Cabrera #

## Base Functionality ##
* Uses the formula for [compound interest](https://en.wikipedia.org/wiki/Compound_interest) to accurately compute in USD how much interest will be obtained over a designated period of time.
* Takes user input for this formula via text input (for all fields), selection menu (for times per year compounded), and scroll arrows (for years).
* Images are interactive and vary in scale whether or not the user hovers over them.
* The link in the footer goes to the live version of the application on [Code Sandbox](https://x4pnyv.csb.app/).

## HTML Specifics ##
* Uses the (p) tag in order to group the input box and adjacent text together.
* Uses the (section) tag to make each input element individual from one another.
* The (header), (main) elements, and (footer) all have (div) tags in order to allow for easier implementation of the grid layout structure.
* The main font of choice [Comic Neue](https://fonts.google.com/specimen/Comic+Neue) is referenced in the (head).
* (select) used to create predetermined choices for the user.

## JavaScript Specifics ##
* Four input boxes for each of the available input fields.
* Four event listeners for each of the input fields.
* One answer span for the answer after input is recorded.
* Once variables for the formula are sufficient, the report function is called.

## CSS Specifics ##
* Nested Flex layout for the form. Flex-direction: Row in p to keep the input boxes, adjacent text, and picture in line with each other and centered. Flex-direction: Column in section to keep p variables in line with one another in the center of the screen.
* Grid layout for the overall structure of the page. 	grid-template-columns: repeat(minmax(1, 2), 1fr); grid-template-rows: repeat(minmax(1, 3), 1fr); grid-row-gap: 40px; to allow for various sized screens to view content adequately. **.header** grid-column: 1/2 and grid-row: 1 in order to fill the top margin of the screen and **.footer** grid-column: 1/2 and grid-row: 9 in order to fill the bottom margin of the screen at all times.
* Transition and Transform used for img.
* Border and Text Shadow used for h1.
* Use of gradient in h1 and background image in body.
* Margin and padding are used intermittently throughout the file.
* Link to Code Sandbox in the footer.
* Yes I did the color scheme, yes I got rejected from art school.
