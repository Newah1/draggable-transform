# DraggableTransform.js

DraggableTransform.js is a small library intended to allow you to click and drag any element _completely using the css transform properties_.

###### Use:

```
let draggable = new DraggableTransform(
    document.querySelector(".draggable"), // Element you want to drag
    {
        "handlebar" : document.querySelector(".handlebar") // Optional handlebar - defaults to entire element.
    }
);
```

###### Demo:


[Link](https://newah1.github.io/draggable-transform/)

###### Why? 

Because dragging elements by absolute or fixed positioning is slow and resource heavy. The browser is forced to redraw the element on every animation frame, whereas the transform property is more likely to call on the end user's GPU, allowing the texture to be moved. Lightweight, easy to use - FUN!