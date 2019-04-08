var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DraggableTransform = /** @class */ (function () {
    function DraggableTransform(element, options) {
        var _this = this;
        this.mousedown = false;
        this.dragging = false;
        this.has_clicked = false;
        this.start_pos = {
            x: 0,
            y: 0
        };
        var defaults = {
            handlebar: false
        };
        this.element = element;
        this.options = __assign({}, defaults, options);
        if (options.handlebar) {
            this.handlebar = options.handlebar;
        }
        else {
            this.handlebar = element;
        }
        var self = this;
        this.handlebar.addEventListener("mousedown", function (ev) { return _this.click(ev); });
        document.addEventListener("mousemove", function (e) { if (self.mousedown) {
            self.drag(e);
        } });
        this.handlebar.addEventListener("mouseup", function (e) { _this.dragging = false; _this.mousedown = false; });
        document.body.addEventListener("mouseup", function () {
            if (_this.mousedown) {
                _this.mousedown = false;
                _this.dragging = false;
            }
        });
    }
    DraggableTransform.prototype.click = function (ev) {
        this.mousedown = true;
        console.log(ev, this.start_pos, this.mousedown, "mouse down?");
        if (!this.has_clicked) {
            this.has_clicked = true;
            this.start_pos = {
                x: ev.x,
                y: ev.y
            };
        }
    };
    DraggableTransform.prototype.drag = function (ev) {
        this.dragging = true;
        var positions = this.get_position_offsets(ev);
        this.element.style.transform = "translate(" + positions.x + "px," + positions.y + "px";
    };
    DraggableTransform.prototype.get_position_offsets = function (ev) {
        var bounding_rect = this.handlebar.getBoundingClientRect();
        window.requestAnimationFrame(function () {
            console.log(bounding_rect, (ev.x - bounding_rect.left));
        });
        var x = (ev.x - this.start_pos.x);
        var y = (ev.y - this.start_pos.y);
        return {
            x: x,
            y: y
        };
    };
    return DraggableTransform;
}());
