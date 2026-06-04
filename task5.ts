class Computer {
    brand: string;
    model: string;
    hd: number;

    constructor(brand: string, model: string, hd: number) {
        this.brand = brand;
        this.model = model;
        this.hd = hd;
    }

    setHd(size: number) {
        this.hd = size;
    }

    getHd() {
        return this.hd;
    }

    show() {
        console.log(this.brand, this.model, this.hd, "GB");
    }
}

const comp = new Computer("Kraftway", "IC220", 512);
comp.show();
comp.setHd(1024);
comp.show();