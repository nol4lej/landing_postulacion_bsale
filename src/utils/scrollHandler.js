export class ScrollHandler{

    constructor(){
        this._scrollY = window.scrollY;
        this.onScroll = () => {};
        this.event();
    }

    event(){
        window.addEventListener("scroll", () => {
            this._scrollY = window.scrollY;
            this.onScroll();
        })
    }

    get scrollY(){
        return this._scrollY;
    }


}