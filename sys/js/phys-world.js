var Physics = window.Physics = function(element, scale, gravityStr, gravityDir) {
    var gravity = new b2Vec2(gravityDir || 0, gravityStr || 0)

    this.world = new b2World(gravity, true)
    this.element = element
    this.context = element.getContext("2d")
    this.scale = scale || 1
    this.dtRemaining = 50
    this.stepAmount = 1/(16 * 30)
}

Physics.prototype.step = function (dt) {
    this.dtRemaining += dt;
    while (this.dtRemaining > this.stepAmount) {
        this.dtRemaining -= this.stepAmount;
        this.world.Step(this.stepAmount,
        1, // velocity iterations
        1); // position iterations
    }

    if (this.debugDraw) {

        this.world.DrawDebugData();
    }
    else {
        this.context.clearRect(0, 0, this.element.width, this.element.height);

        var obj = this.world.GetBodyList();

        this.context.save();
        this.context.scale(this.scale, this.scale);
        while (obj) {
            var body = obj.GetUserData();
            if (body) {
                body.draw(this.context);
            }

            obj = obj.GetNext();
        }
        this.context.restore();
    }
}

Physics.prototype.debug = function() {
    this.debugDraw = new b2DebugDraw();
    this.debugDraw.SetSprite(this.context);
    this.debugDraw.SetDrawScale(this.scale);
    this.debugDraw.SetFillAlpha(0.3);
    this.debugDraw.SetLineThickness(1.0);
    this.debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    this.world.SetDebugDraw(this.debugDraw);
}

Physics.prototype.click = function(callback) {
    var self = this;

    function handleClick(e) {
    e.preventDefault();
    var point = {
    x: (e.offsetX || e.layerX) / self.scale,
    y: (e.offsetY || e.layerY) / self.scale
    };

    self.world.QueryPoint(function(fixture) {
        callback(fixture.GetBody(), fixture, point);
    }, point);
  }

    this.element.addEventListener("mousedown",handleClick);
    this.element.addEventListener("touchstart",handleClick);
};


