//Maybe we can realize the maze as one giant geometry? Could boost performance significantly 
AFRAME.registerGeometry('example', {
    schema: {
      vertices: {
        default: [''], //vertices of the maze should go here
      }
    },
  
    init: function (data) {
      var geometry = new THREE.Geometry();
      geometry.vertices = data.vertices.map(function (vertex) {
          var points = vertex.split(' ').map(function(x){return parseInt(x);});
          return new THREE.Vector3(points[0], points[1], points[2]);
      });
      geometry.computeBoundingBox();
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.mergeVertices();
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      this.geometry = geometry;
    }
  });