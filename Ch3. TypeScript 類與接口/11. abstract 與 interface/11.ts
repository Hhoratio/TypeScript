/* 抽象類 abstract class 與 接口 interface */

/* 抽象類不能實例化，但可以定義抽象屬性跟方法的規範，也可以定義具體代碼 */
/* 接口 只能定義規範，不能有具體的代碼 */


{
    interface AnimationInterface {
        name: string
        move(): void 
    }

    abstract class Animation {
        /* 將抽象規範放到 interface 裡 */
        // abstract name: string
        // abstract move(): void 
        protected getPos(): {x: number, y: number} {
            return {x: 100, y: 300};
        }
    }

    class Enemy extends Animation implements AnimationInterface {
        public name: string = '對手'

        public move(): void {
            console.log(`${this.name} 的坦克車`);     
        }
    }

    class Player extends Animation implements AnimationInterface {
        public name: string = '玩家'

        public move(): void{
            console.log(`${this.name} 的坦克車`);           
        }
    }

    const enemy = new Enemy();
    const player = new Player();

   enemy.move()
   player.move()
    
}

