**DraggableTransform**

_WHY? :_

Because dragging elements by absolute or fixed positioning is slow and resource heavy. The browser is forced to redraw the element on every animation frame, whereas the transform property is more likely to call on the end user's GPU, allowing the texture to be moved. Lightweight, easy to use - FUN!

Still a major WIP. Have to do calculation to take into consideration a differing mouse position on the handlebar, whatever that may be.