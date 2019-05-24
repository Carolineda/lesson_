const Grid = require('./grid.js');

function GameManager(size,startTiles = 2)
{
    this.size = size;
    this.startTiles=startTiles
}

// 启动游戏
GameManager.prototype = {
    setup : function(){
        this.grid=new Grid(this.size);
        // 随机添加方块
        
        this.addStartTiles();

        return this.grid.cells;
    },
    addStartTiles:function(){
        // 方块有几块就调用够几次
        for(let i = 0;i<this.startTiles;i++)
        {
            this.addRandomTiles();
        }
    },
    addRandomTiles:function(){
        // 添加方块
        // 位置随机  数值随机
        const value = Math.random() < 0.9 ? 2 : 4;
        // grid 有数据知道哪些位置为空
        const position = this.grid.randomAvailableCell();
    }
}

module.exports = GameManager;
