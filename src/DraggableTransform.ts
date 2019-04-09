
interface Options {
    handlebar: HTMLElement | boolean,

}

interface Coords {
    x : number,
    y : number
}

class DraggableTransform{
    private element: HTMLElement;
    private options: Options;
    private handlebar : HTMLElement;

    private mousedown : boolean = false;
    private dragging : boolean = false;

    private has_clicked : boolean = false;

    private start_pos : Coords = {
        x : 0,
        y : 0
    };

    private last_position : Coords = {
        x : 0,
        y : 0
    };

    private mod_x = 0;
    private mod_y = 0;

    constructor(element : HTMLElement, options : Options){
        let defaults : Options = {
            handlebar : false,
        };
        this.element = element;
        this.options = {...defaults, ...options};

        if(options.handlebar){
            this.handlebar = <HTMLElement>options.handlebar;
        } else {
            this.handlebar = element;
        }
        let self = this;
        this.handlebar.addEventListener("mousedown", (ev) => this.click(ev) );
        document.addEventListener("mousemove", (e) => { if(self.mousedown) { self.drag(e);  } });
        this.handlebar.addEventListener("mouseup", (e) => { this.dragging = false; this.mousedown = false; });

        document.body.addEventListener("mouseup", (e) => {
            if (this.mousedown) {
                this.mousedown = false;
                this.dragging = false;
            }
        });
    }

    click(ev : any){
        this.mousedown = true;
        if(!this.has_clicked){
            this.has_clicked = true;
            this.start_pos = {
                x : ev.x,
                y : ev.y
            };
        }

        if(this.last_position.x !== 0 && this.last_position.y !== 0){
            this.mod_x = ev.x - (this.start_pos.x + this.last_position.x);
            this.mod_y = ev.y - (this.start_pos.y + this.last_position.y);
        }
    }

    drag(ev : any){
        this.dragging = true;

        let positions = this.get_position_offsets(ev);

        this.last_position = positions;

        this.element.style.transform = `translate(${positions.x}px,${positions.y}px`;
    }

    get_position_offsets(ev : any) : any {

        let bounding_rect : ClientRect = this.handlebar.getBoundingClientRect();


        let x = (ev.x - this.start_pos.x) - this.mod_x;
        let y = (ev.y - this.start_pos.y) - this.mod_y;

        return {
            x,
            y
        };
    }
}