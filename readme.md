What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 

Differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll are stated below:
getElementById: Returns the only one element with the given ID.
getElementsByClassName: Returns a collection of elements or HTML Collection with the given class name.
querySelector: Returns the first element that matches the given selector.
querySelectorAll(): return a nodelist containing a collection of multiple HTML element that matches the given selector. 



How do you create and insert a new element into the DOM?
Ans:
To create and insert a new element into DOM,
1. Firstly use document.getElementbyID() to the element for which a new element will be created. 
2. Then use addEventListener() to it. 
3. Then get the target container or parent in which the new element will be added.
4. After that, create the new element using document.createElement()
5. Insert the necessary classes and innerHTML,
6. Finally, use appendChild() to add the newly created element to the main file. 

What is Event Bubbling and how does it work?
Ans:
When some element is clicked on a HTML content inside the browser, the target element is not clicked instantly. Rather when clicked, the signal starts from the top of the elements and keeps going to the root until the target is found. When found it triggers the target and then keep bubbling or toggling back to all the upper elements. This process is called event bubbling. 

For example: If we want to press a list item in a webpage, First the click signal travels like this: Window -> Document -> <html> -> body -> section -> ol -> li (target). 
Then it bubbles back to  all these element in reverse and come to the top. 
li -> ol -> section -> body -> html -> document -> window.
As a result when "li" is clicked, all the other outer elements are also being clicked on indirectly. 


What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event delegation is a process in which the eventListener() is added to the parent of the target instead of the target element itself. Event Bubbling enables event delegation because when a target is found inside the DOM, the click signal propagates back to the parent and ancestors. 

This technique is useful because,
1. Instead of adding eventListener() to all the similar children, it can only be added to the parent. Which requires calling the method less times as a result the memory and process efficiency of the system increases. 
2. Code can be kept simpler and shorter. 
3. If new elements are added after DOM is loaded, they can automatically inherit the eventListener()s of their parent, which increases dynamic stability. 

What is the difference between preventDefault() and stopPropagation() methods?
Ans: 
preventDefault(): This method is used to prevent the browser from performing the default behavior of a element when it is pressed. 
For example: Normally clicking the submit button automatically reloads the webpage. Using preventDefault() inside the eventListener() function, prevent the browser from reloading. 

stopPropagation(): Used to stop event bubbling. When an element is clicked on a webpage the click signal goes to the root and find the target element and triggers it. Then the click signal keep bubbling up to all the upper elements. This way all outer elements are also indirectly triggered. 

To stop these unwanted chain of trigger, e.stopPropagation() is used to block the signal right after the target element is triggered. 