// console.log('hello')
var Drawer = /** @class */ (function () {
    function Drawer(options) {
        this._duration = 2; //_ 下划线私有
        this._ease = "ease";
        this.enterDom = options.enterDom;
        this.leaveDom = options.leaveDom;
        this.initDomStyle(); //初始化样式
        this.updateTransition();
    }
    Drawer.prototype.initDomStyle = function () {
        if (this.enterDom && this.leaveDom) {
            this.enterDom.setAttribute('style', "transition:left " + this._duration + " " + this._ease);
            this.leaveDom.setAttribute('style', "transition:margin-left " + this.duration + "s " + this.ease);
        }
    };
    Drawer.prototype.updateTransition = function () {
        this.enterTransition = "left: 0px transition:left " + this.duration + "s " + this.ease + ";";
        this.leaveTransition = "transition:margin-left " + this.duration + "s " + this.ease + ";margin-left:200px;";
    };
    Object.defineProperty(Drawer.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (duration) {
            this._duration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "ease", {
        get: function () {
            return this._ease;
        },
        set: function (ease) {
            this._ease = ease;
        },
        enumerable: true,
        configurable: true
    });
    Drawer.prototype.enter = function () {
        this.enterDom.setAttribute('style', this.enterTransition);
        this.leaveDom.setAttribute('style', this.leaveTransition);
    };
    Drawer.prototype.leave = function () {
        this.initDomStyle();
    };
    return Drawer;
}());
