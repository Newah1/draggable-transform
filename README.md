# DraggableTransform.js

DraggableTransform.js is a small library intended to allow you to click and drag any element.

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

It's been done before, but I wanted to understand the logic behind a drag and drop JS call. It also helped me to better understand the potential performance benefits one can achieve by using transform vs absolute or fixed positioning. The transform property is more likely to call on the end user's GPU, allowing the texture to be moved. Lightweight, easy to use - FUN!
