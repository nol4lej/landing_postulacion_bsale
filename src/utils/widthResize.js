export class WidthResize {

    constructor(){
        this._width = window.innerWidth;
        this.onResize = () => {};
        this.event();
    }

    event(){
        window.addEventListener("resize", () => {
            this._width = window.innerWidth;
            this.onResize();
        });
    };

    get width(){
        return this._width;
    };

};

