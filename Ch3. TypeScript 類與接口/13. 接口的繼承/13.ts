/* 接口的繼承 */


{
    /* 遊戲結束 有很多種，過關的結束、被電腦打到的 Game over 或是 過關後一段音樂結束後結束等等 */
    /* 所以將它獨立出來，再讓其他類去繼承這個接口。類可以一次繼承多個接口，使用 implements 再用逗號隔開 */
    interface PlayEndInterface {
        end(): void
    }

    interface AnimationInterface {
        name: string
        move(): void 
    }
    abstract class Animation {
        protected getPos(): {x: number, y: number} {
            return {x: 100, y:300}
        }
    }

    class Enemy extends Animation implements AnimationInterface, PlayEndInterface {
        public name = '電腦'
        public move() {
            console.log(`${this.name} 的坦克車`);
            
        }
        public end() {
            console.log(`遊戲結束`);
            
        }
    }

    class Player extends Animation implements AnimationInterface, PlayEndInterface {
        public name = '玩家'
        public move() {
            console.log(`${this.name} 的坦克車`);
            
        }
        public end() {
            console.log(`遊戲結束`);
            
        }
    }

    let en = new Enemy();
    let p = new Player();

    en.move();
    p.move()

    en.end();
    p.end();
}