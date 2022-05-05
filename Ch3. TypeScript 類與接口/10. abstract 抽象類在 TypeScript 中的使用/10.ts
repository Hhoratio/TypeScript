/* 抽象類 absreact */
/* 抽象類有點類似一種模板的規範，當子類繼承抽象類時，就必須符合抽象類內部定義的規範(抽象屬性、抽象方法等) */

/* 利用坦克遊戲描述 */

{
    abstract class Animation {
        abstract name: string
        abstract move(): void 
        protected getPos(): {x: number, y: number} {
            return {x: 100, y: 300};
        }
    }

    class Enemy extends Animation{
        public name: string = '對手'

        public move(): void {
            console.log(`${this.name} 的坦克車`);     
        }
    }

    class Player extends Animation{
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

