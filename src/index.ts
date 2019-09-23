export class C {
    private x = 10

    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}

console.log('11111111111111111');

console.log('11111111111111111');

export let x = new C();
export let y = { ...{ some: "value" } }
