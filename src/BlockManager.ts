export default class BlockManager {
    private container: HTMLElement;
    private visibleBlocks: HTMLElement[] = [];
    private hiddenBlocks: string[] = [];
    private blockCounter: number = 0;
    private readonly MAX_VISIBLE = 5;

    constructor(containerName: string, initialBlocks: number = 0) {
        const container = document.getElementById(containerName);
        this.container = container as HTMLElement;

        for (let i = 0; i < initialBlocks; i += 1) {
            this.addBlock();
        }
    }

    public addBlock(): void {
        this.blockCounter += 1;
        const blockNumber = this.blockCounter.toString();

        if (this.visibleBlocks.length >= this.MAX_VISIBLE) {
            const firstBlock = this.visibleBlocks.shift();
            if (firstBlock) {
                this.hiddenBlocks.unshift(firstBlock.innerText);
                this.container.removeChild(firstBlock);
            }
        }

        const newBlock = this.createBlockElement(blockNumber);
        this.visibleBlocks.push(newBlock);
        this.container.appendChild(newBlock);
    }

    public removeBlock(): void {
        if (this.visibleBlocks.length === 0) {
            return;
        }
        this.blockCounter -= 1;
        const lastBlock = this.visibleBlocks.pop();
        if (lastBlock) {
            this.container.removeChild(lastBlock);
        }
        if (this.hiddenBlocks.length > 0) {
            const data = this.hiddenBlocks.shift() as string;
            const restoredBlock = this.createBlockElement(data);
            this.visibleBlocks.unshift(restoredBlock);
            this.container.prepend(restoredBlock);
        }
    }

    private createBlockElement(content: string): HTMLElement {
        const div = document.createElement('div');
        div.classList.add('block');
        div.textContent = content.toString();
        return div;
    }
}
