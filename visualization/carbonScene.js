var sphere;
var sphere2;

function updateSphere () {
  r = m3toRadius(grams2m3(predictCO2(cubic_model)));
  sphere.scale.set(r,r,r);
  sphere2.scale.set(r,r,r);
  /*
  sphere.scale.x = r;
  sphere.scale.y = r;
  sphere.scale.z = r;
  */
}

(function (){
  //Boilerplate to add the scene, camera, renderer,
  //and fit into the designated DOM element
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(75,
    0.29/0.5 * window.innerWidth/window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();

  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, 2);
  scene.add( light );

  renderer.setSize( window.innerWidth*0.29, window.innerHeight/2 );

  document.getElementById("viz1").appendChild( renderer.domElement );

  renderer.setClearColor( 0xcccccc, 1);

  camera.position.z = 1.1;

  var render = function () {
    requestAnimationFrame( render );
    renderer.render(scene, camera);
  };

  //make a human variable in this scope and asynchronously load the human head
  var human;
  var humanLoader = new THREE.JSONLoader();
  humanLoader.load('../models/humanheadmin.js',function(geometry, materials){
    humangeo = geometry;
    human = new THREE.Mesh( geometry, new THREE.MultiMaterial(materials) );
    scene.add(human);
  });

  //make a sphere to represent air consumption while running
  var sphgeo = new THREE.SphereGeometry(1, 18, 18);
  var sphgeo2 = new THREE.SphereGeometry(1, 4, 4);
  var sphmat = new THREE.MeshBasicMaterial({color: 0xbbbbbb,
      transparent: true, opacity: 0.5, wireframe: true});
  var sphmat2 = new THREE.MeshBasicMaterial({color: 0xaaaaaa,
      transparent: true, opacity: 0.5})
  sphere = new THREE.Mesh( sphgeo2, sphmat);
  sphere2 = new THREE.Mesh( sphgeo, sphmat2);

  scene.add(sphere);
  scene.add(sphere2);
  var rinit = m3toRadius(grams2m3(predictCO2(cubic_model)));
  sphere.scale.set(rinit, rinit, rinit);
  sphere2.scale.set(rinit,rinit,rinit);
  //Event listeners to add interactivity
  var down = false;
      var sx = 0,
          sy = 0;

  document.getElementById("viz1").onmousedown = function(ev) {
    down = true;
    sx = ev.clientX;
    sy = ev.clientY;
  };

  document.getElementById("viz1").onmouseup = function() {
      down = false;
  };

  document.getElementById("viz1").onmousemove = function(ev) {
      if (down) {
          var dx = ev.clientX - sx;
          var dy = ev.clientY - sy;
          human.rotation.y += dx * 0.01;
          human.rotation.x += dy * 0.01;
          sphere.rotation.y += dx * 0.01;
          sphere.rotation.x += dy * 0.01;
          sx += dx;
          sy += dy;
      }
  };

  render();
})();
