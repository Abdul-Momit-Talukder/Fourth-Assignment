1. The Selectors: getElementById vs. Others
Think of these as different ways to hunt for elements on your page:
getElementById: This is like having a person's exact social security number. It's the fastest and most specific way to find one single element.
getElementsByClassName: This grabs a whole "live" group of elements based on their class. It’s "live" because if you add a new element with that class later, the collection updates automatically.
querySelector: This is the modern, flexible "Swiss Army Knife." You can use any CSS selector here (like #myId, .myClass, or even div > p:first-child). It just grabs the first match it finds.
querySelectorAll: Same as above, but it grabs everything that matches and puts it into a static list (NodeList). It’s great because you can use methods like .forEach() on it.

2. Creating and Inserting Elements
It’s a two-step dance. First, you "build" it in memory, then you "attach" it to the page:
Build: Use document.createElement('div') to create the tag. Then, add content to it with .textContent or add classes with .classList.add().
Attach: Find the parent element already on your page, then use .appendChild(yourNewElement). Boom—it’s now visible on the site.

3. Event Bubbling
Imagine your page as a set of nested boxes. If you click a button (the innermost box), that click event doesn't just stay there. It "bubbles up" to the button's parent, then the container, all the way up to the document. It’s like a sound wave traveling outward from the center.

4. Event Delegation
Instead of putting a click listener on every single "Delete" button in your Job Tracker (which is a waste of memory), you put one listener on the parent container. Because of that "bubbling" we just talked about, when you click a button, the click bubbles up to the parent, and the parent "handles" it. It's useful because it’s much faster, and it works perfectly even if you dynamically add new job cards later.

5. preventDefault() vs. stopPropagation()
These sound similar, but they do very different things:
preventDefault(): This tells the browser, "Don't do your normal job." For example, if you click a submit button on a form, the browser usually refreshes the page. preventDefault() stops that refresh so you can handle it with JavaScript instead.
stopPropagation(): This tells the event, "Don't bubble up any further." It stops the event from reaching parent elements. Use this if you have a click handler on a button, but you don't want the container's click handler to trigger at the same time.
