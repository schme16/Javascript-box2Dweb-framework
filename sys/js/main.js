phys = { 
     
    "player": [
        {
            "shape": [ 60,63, 4,63, 1,60, 60,1, 63,4, 64,60 ]
        },
        {
            "shape": [ 4,1, 60,1, 1,60, 1,4 ]
        }
    ],
    "cup1": [
        {
            "shape": [ 320.5,64, 295,39.5, 305.5,34, 317,39.5, 326.5,53 ]
        },
        {
            "shape": [ 59.5,317, 20.5,267, -0.5,198, 4.5,134, 342.5,266, 252,348.5, 190,363.5, 119,352.5 ]
        },
        {
            "shape": [ 167,-0.5, 168,-0.5, 295,39.5, 320.5,64, 342.5,266, 18.5,98, 42.5,63, 95,20.5 ]
        },
        {
            "shape": [ 363.5,168, 356.5,232, 342.5,266, 320.5,64, 353.5,120 ]
        },
        {
            "shape": [ 287,329.5, 252,348.5, 342.5,266, 318.5,301 ]
        },
        {
            "shape": [ 295,39.5, 168,-0.5, 200,-0.5, 240,8.5 ]
        },
        {
            "shape": [ 18.5,98, 342.5,266, 4.5,134 ]
        }
    ]
    , 
    "cup2": [
        {
            "shape": [ 381.5,178, 379.5,194, 366.5,202, 365.5,163, 377,166.5 ]
        },
        {
            "shape": [ 13.5,114, 47,60.5, 75,34.5, 108,15.5, 175,-0.5, 176,-0.5, 13.5,252, -0.5,185 ]
        },
        {
            "shape": [ 304.5,45, 340.5,87, 358.5,127, 365.5,163, 282,338.5, 256,351.5, 176,-0.5, 244,9.5 ]
        },
        {
            "shape": [ 130,358.5, 93,342.5, 62,320.5, 26.5,278, 13.5,252, 176,-0.5, 256,351.5, 194,366.5 ]
        },
        {
            "shape": [ 318,308.5, 282,338.5, 365.5,163, 366.5,202, 349.5,263 ]
        }
    ]
    , 
    "cup3": [
        {
            "shape": [ 328,41.5, 338,54.5, 333.5,69, 307,42.5, 317,35.5 ]
        },
        {
            "shape": [ 307,42.5, 375.5,170, 375.5,202, 203,375.5, 171,375.5, 181,-0.5, 182,-0.5, 246,8.5 ]
        },
        {
            "shape": [ 7.5,130, 46.5,63, 78,34.5, 112,15.5, 181,-0.5, 23,279.5, 9.5,250, -0.5,202 ]
        },
        {
            "shape": [ 375.5,170, 307,42.5, 333.5,69, 364.5,123 ]
        },
        {
            "shape": [ 243,367.5, 203,375.5, 375.5,202, 350.5,282, 330.5,310, 285,348.5 ]
        },
        {
            "shape": [ 46.5,63, 7.5,130, 23.5,94 ]
        },
        {
            "shape": [ 90,349.5, 62.5,329, 23,279.5, 181,-0.5, 171,375.5, 127,366.5 ]
        },
        {
            "shape": [ 350.5,282, 375.5,202, 366.5,246 ]
        }
    ]
    , 
    "pickle": [
        {
            "shape": [ 16.5,12, 23,10.5, 42,12.5, 54,18.5, 13.5,65, 4.5,38, 6.5,23 ]
        },
        {
            "shape": [ 33,142.5, 0.5,123, 54,18.5, 68.5,37, 77.5,66, 75.5,100, 66,119.5, 54.5,134 ]
        },
        {
            "shape": [ 0.5,123, 33,142.5, 18,142.5, 9,138.5 ]
        },
        {
            "shape": [ 12,0.5, 23,10.5, 16.5,12, 9.5,1, 11,0.5 ]
        },
        {
            "shape": [ 54,18.5, 14.5,82, 13.5,65 ]
        },
        {
            "shape": [ 14.5,82, 54,18.5, 0.5,123, 0.5,113 ]
        }
    ]
    , 
    "cup4": [
        {
            "shape": [ 346,286.5, 335,289.5, 352.5,259, 357.5,265 ]
        },
        {
            "shape": [ 368.5,172, 366.5,212, 352.5,259, 335,289.5, 245,10.5, 277,25.5, 315,53.5, 354.5,113 ]
        },
        {
            "shape": [ 97,21.5, 137,5.5, 173,-0.5, 174,-0.5, 2.5,149, 11.5,118, 50,57.5 ]
        },
        {
            "shape": [ -0.5,193, 2.5,149, 174,-0.5, 63.5,325, 40,300.5, 13.5,256 ]
        },
        {
            "shape": [ 63.5,325, 174,-0.5, 245,10.5, 335,289.5, 313.5,316, 203,368.5, 167,368.5, 127,360.5 ]
        },
        {
            "shape": [ 203,368.5, 313.5,316, 280,342.5, 247,358.5 ]
        },
        {
            "shape": [ 245,10.5, 174,-0.5, 206,0.5 ]
        }
    ]
}

physTemp = JSON.parse(JSON.stringify(phys))
debug = (location.href.indexOf('debug=true') > -1)

//Gets it ready for a point in polygon raycast
physAlt = {}
for (var i in physTemp) {
    physAlt[i] = []
        var p = []
    for (var k in physTemp[i]) {
        while (physTemp[i][k].shape.length > 0) {
       		if (i.indexOf('cup') > -1) {
            	r = 0.25
            }
            else if (i.indexOf('pickle') > -1) {
                r = 0.75
            }
            else if (i.indexOf('player') > -1) {
                r = 0.55
            }
            
            p.push([physTemp[i][k].shape.shift() * r, physTemp[i][k].shape.shift() * r])
        }
    }
    physAlt[i].push(p)
}



//Gets it ready for box 2d
physTemp = JSON.parse(JSON.stringify(phys))
physBox2D = {}
for (var i in physTemp) {
    physBox2D[i] = []
    for (var k in physTemp[i]) {
        var p = []
    	var r
        while (physTemp[i][k].shape.length > 0) {
            if (i.indexOf('cup') > -1) {
            	r = 0.25
            }
            else if (i.indexOf('pickle') > -1) {
                r = 0.75
            }
            else if (i.indexOf('player') > -1) {
                r = 0.55
            }
            p.push({x:physTemp[i][k].shape.shift() * r, y:physTemp[i][k].shape.shift() * r})

        }

        physBox2D[i].push(p)
    }
}








angular.module('USQApp', [])

.controller('master', function master ($scope) {
    
    m = $scope;

    m.map = location.hash.replace('#/', '').replace('#', '')

    m.game = {
        width: 800,
        height: 450,
        resources: {},
        keys: {},
        assets: {},
        maskData: [],
        loader: new PIXI.loaders.Loader(),
        
        /*Set up the PIXI renderer*/
        renderer: new PIXI.autoDetectRenderer(800, 450, {
            autoResize: true,
            // roundPixels: true,
            antialias: true,
            backgroundColor: 0xaaaaaa,
            resolution: window.devicePixelRatio || 3
        }),
        stage: new PIXI.Container(),
    }

    m.initKeyboard = function (keys) {
        var listener = new window.keypress.Listener()
        keys = keys || [
            'up',
            'down',
            'left',
            'right'
        ]

        var createListener = function createListener (key) {
			listener.register_combo({
				keys: keys[i],
				on_keydown: function () {
					m.game.keys[key] = true
				},
				on_keyup: function () {
					m.game.keys[key] = false
				}
			})
        }

        for (var i in keys) {
			createListener(keys[i])
        }
    }

    m.physCanvas = $('.debug2D')[0]

    m.init = function init (loader, res) {
        m.game.resources = res

        lastFrame = new Date().getTime()
        m.physics = new Physics(m.physCanvas)
		
		/*Add the boundaries*/
			m.addBoundary()


        for (var i in res.sprites.data.frames) {
            m.addSprites(res, i, (map[m.map] ? map[m.map][i] : null))
        }

		m.game.player = m.game.assets.player.body
		m.game.player.body.SetLinearDamping(3)

        if (debug) m.initDebug()

        m.initKeyboard()


    	/*TODO: Designed to switch maps when the has changes*/
        setInterval(function () {
            var map = location.hash.replace('#/', '').replace('#', '')
            if (m.map != map) {
                m.map = mapm.$applyAsync()
            }
        }, 100)

        m.loop()
    }

	m.loop = function loop () {

		requestAnimationFrame(loop)
		
		m.handleMove()

        var tm = new Date().getTime(),
            dt = (tm - lastFrame) / 1000

        if(dt > 1/16) { dt = 1/16 }
        m.physics.step(dt)
        lastFrame = tm
        for (var i in m.game.assets) {
            if (m.game.assets[i].body) {
                var p = m.game.assets[i].body.body.GetPosition(),
                	r = m.game.assets[i].body.body.GetAngle()
                m.game.assets[i].x = p.x
                m.game.assets[i].y = p.y
                m.game.assets[i].rotation = r
            }
        }

		m.game.renderer.render(m.game.stage)
	}

    m.addSprites = function (res, i, mapData) {
        mapData = mapData || {}
        var newI = i.replace('.png', '')
            m.game.assets[newI] =  new PIXI.Sprite(res.sprites.textures[i])


            /*The cups*/
            if (i.indexOf('cup') > -1) {
                m.game.assets[newI].scale.x = m.game.assets[newI].scale.y = 0.25
                m.game.stage.addChild(m.game.assets[newI])

                for(var k in physBox2D[newI]){
                    var temp = new Body(m.physics, {
                        type: 'static',
                        shape: 'polygon',
                        points: physBox2D[newI][k],
                        x: mapData.x || m.getRandomBetween(0, m.game.width - m.game.assets[i].width),
                        y: mapData.y || m.getRandomBetween(0, m.game.height - m.game.assets[i].height),
                        density: 0.1,
                        friction: 0,
                        restitution: 0.2,
                        active: false,
                        allowSleep: true,
                        angle: 0,
                        angularVelocity: 0,
                        awake: debug,
                        bullet: false,
                        fixedRotation: false,
                    }, (m.game.assets[newI].body ? m.game.assets[newI].body.body : null))
                    if (!m.game.assets[newI].body)  {
                    	m.game.assets[newI].body = temp
                    	temp.body.asset = newI


	                    m.game.assets[newI].x = m.game.assets[newI].body.details.x
	                    m.game.assets[newI].y = m.game.assets[newI].body.details.y
	                }
                }
            }

            /*The pickle*/
            else if (i.indexOf('pickle') > -1) {
                m.game.assets[newI].scale.x = m.game.assets[newI].scale.y = 0.75
                m.game.stage.addChild(m.game.assets[newI])
     			 for(var k in physBox2D[i.replace('.png', '')]){
                    var temp = new Body(m.physics, {
                        type: 'dynamic',
                        shape: 'polygon',
                        points: physBox2D[i.replace('.png', '')][k],
                        x: mapData.x || m.getRandomBetween(0, m.game.width - m.game.assets[newI].width),
                        y: mapData.y || m.getRandomBetween(0, m.game.height - m.game.assets[newI].height),
                        density: 35,
                        friction: 1,
                        restitution: 0.2,
                        active: debug,
                        allowSleep: debug,
                        angle: 0,
                        angularVelocity: 0,
                        awake: debug,
                        bullet: false,
                        fixedRotation: false,
                    }, (m.game.assets[newI].body ? m.game.assets[newI].body.body : null))
                    if (!m.game.assets[newI].body)  {
                    	m.game.assets[newI].body = temp
                    	temp.body.SetLinearDamping(0.6)
                    	temp.body.SetAngularDamping(1.5)
                    	temp.body.asset = newI

	                    m.game.assets[newI].x = m.game.assets[newI].body.details.x
	                    m.game.assets[newI].y = m.game.assets[newI].body.details.y
	                }
                }
            }

            /*The player*/
            else if (i.indexOf('player') > -1) {
                m.game.assets[newI].scale.x = m.game.assets[newI].scale.y = 0.55
                m.game.stage.addChild(m.game.assets[newI])
     			 for(var k in physBox2D[i.replace('.png', '')]){
                    var temp = new Body(m.physics, {
                        type: 'dynamic',
                        shape: 'polygon',
                        points: physBox2D[i.replace('.png', '')][k],
                        x: mapData.x || m.getRandomBetween(0, m.game.width - m.game.assets[newI].width),
                        y: mapData.y || m.getRandomBetween(0, m.game.height - m.game.assets[newI].height),
                        density: 20,
                        friction: 1,
                        restitution: 0.2,
                        active: debug,
                        allowSleep: debug,
                        angle: 0,
                        angularVelocity: 0,
                        awake: debug,
                        bullet: false,
                        fixedRotation: true,
                    }, (m.game.assets[newI].body ? m.game.assets[newI].body.body : null))
                    if (!m.game.assets[newI].body)  {
                    	m.game.assets[newI].body = temp
                    	temp.body.asset = newI

	                    m.game.assets[newI].x = m.game.assets[newI].body.details.x
	                    m.game.assets[newI].y = m.game.assets[newI].body.details.y
	                }
                }
            }

			/*The desk*/
            else if (i.indexOf('desk') > -1){
                m.game.assets[newI].width = m.game.width
                m.game.assets[newI].height = m.game.height
                m.game.stage.addChildAt(m.game.assets[newI], 0)
            }
    }

    m.addBoundary = function addBoundary () {
    	m.game.walls = []
		m.game.walls.push(new Body(m.physics, {
		    type: 'static',
		    shape: 'block',
		    x: (m.game.width/2),
		    y: 2.5,
		    width: m.game.width ,
		    height: 5
		}))
		
		m.game.walls.push(new Body(m.physics, {
		    type: 'static',
		    shape: 'block',
		    x: 2.5,
		    y: m.game.height / 2,
		    width: 5,
		    height: m.game.height
		}))
		
		m.game.walls.push(new Body(m.physics, {
		    type: 'static',
		    shape: 'block',
		    x: (m.game.width/2),
		    y: m.game.height-2.5,
		    width: m.game.width ,
		    height: 5
		}))
		
		m.game.walls.push(new Body(m.physics, {
		    type: 'static',
		    shape: 'block',
		    x: m.game.width - 2.5,
		    y: m.game.height / 2,
		    width: 5,
		    height: m.game.height
		}))
    }

	m.handleMove = function handleMove () {
		if (m.game.keys.left) {
			m.game.player.body.ApplyImpulse({x: -300000, y: 0}, {x:48,y:26});
		}

		if (m.game.keys.up) {
			m.game.player.body.ApplyImpulse({x: 0, y: -300000}, {x:26,y:46});
		}

		if (m.game.keys.down) {
			m.game.player.body.ApplyImpulse({x: 0, y: 300000}, {x:26,y:0});
		}

		if (m.game.keys.right) {
			m.game.player.body.ApplyImpulse({x: 300000, y: 0}, {x:0,y:26});
		}
	}

    m.pointInPoly = function pointInPoly (x, y, vs) {
        // ray-casting algorithm based on
        // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
       var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1],
                xj = vs[j][0], yj = vs[j][1],
                intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;

        }
        return inside;
    }

	m.getRandomBetween = function getRandomBetween (min, max, precision) {

		return (Math.random() * (max - min) + min).toFixed(precision || 0)
	}

	m.initDebug = function () {
		$(m.physCanvas).mousedown(function (evt) {
			var e = evt.originalEvent,
				start = start = {
					//oX: m.game.assets[i].x,
					//oY: m.game.assets[i].y,
					x: e.clientX,
					y: e.clientY
				}

			start.rX = start.x
			start.rY = start.y
			

            var test = getBodyAtMouse(m.physics.world,  {x: start.x, y: start.y}, true)

            if (test) {
            	start.o = JSON.parse(JSON.stringify(test.GetPosition()))
            	start.asset = m.game.assets[test.asset]
                m.start = start
            }
        })

         m.physics.debug();

        $(document.body).bind('mouseup', function () {
            m.start = null
        })

        $(m.physCanvas).bind('mousemove', function (evt) {
            var e = evt.originalEvent
            if (m.start && m.start.asset && m.start.asset.body && m.start.asset.body.body) {
            	console.log(m.start.o, m.start)
                m.start.asset.body.body.SetPosition({
                	x: e.clientX + (m.start.o.x - m.start.x),
                	y: e.clientY + (m.start.o.y - m.start.y),
                })
            }
        })
	}



/*Editor items*/
    m.exportMap = function () {
        var map = {}
        for (var i in m.game.assets) {
            map[i] = {x: m.game.assets[i].x, y: m.game.assets[i].y}
        }
        var name = prompt('Please enter a map name:')
        if (name) m.download('map_' + name.replace(/ /g, '-') + '.js', 'map["' + name + '"] = ' + JSON.stringify(map))
    }

    m.download = function download (filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }




/*Add assets to the loader*/
	m.game.loader.add('sprites', 'sys/img/assets/sprites.json')






/*When all the assets load, start the game*/
	m.game.loader.once('complete', m.init)


/*Start the loading*/
	m.game.loader.load()


/*Add the render canvas to the page*/
	$(document.body).append(m.game.renderer.view)

	
})



function getBodyAtMouse(world, mouse, includeStatic) {
    var mouse_p = new b2Vec2(mouse.x, mouse.y),
    	aabb = new b2AABB(),     
    	body = null

    aabb.lowerBound.Set(mouse.x - 0.001, mouse.y - 0.001)
    aabb.upperBound.Set(mouse.x + 0.001, mouse.y + 0.001)
     
     
    function GetBodyCallback(fixture) {
        var shape = fixture.GetShape()
        if (fixture.GetBody().GetType() != b2Body.b2_staticBody || includeStatic) {
            var inside = shape.TestPoint(fixture.GetBody().GetTransform(), mouse_p)
             
            if (inside) {
                body = fixture.GetBody()
                return false;
            }
        }
         
        return true;
    }
     
    world.QueryAABB(GetBodyCallback, aabb)
    return body
}