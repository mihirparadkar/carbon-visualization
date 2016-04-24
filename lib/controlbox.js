function setMPG () {
  var mpg = d3.select("#combined").property("value");
  d3.select("#boxmpg").html(mpg);
}

function setCylinders () {
  var cyls = d3.select("#cylinders").property("value");
  d3.select("#boxcyls").html(cyls);
}

function setDrive () {
  var drive = d3.select("#drive").property("value");
  d3.select("#boxdrive").html(drive);
}

function setYear () {
  var year = d3.select("#year").property("value");
  d3.select("#boxyear").html(year);
}

function setVClass () {
  var vclass = d3.select("#vclass").property("value");
  d3.select("#boxvclass").html(vclass);
}

function setTransmission () {
  var trany = d3.select("#transmissiontype").property("value");
  d3.select("#boxtransmission").html(trany);
}

function setDisplacement () {
  var displ = d3.select("#displ").property("value");
  d3.select("#boxdispl").html(displ);
}

function setFuel () {
  var fueltype = d3.select("#fueltype").property("value");
  d3.select("#boxfueltype").html(fueltype);
}

var rows = [];

function setTrees() {
  var table = d3.select("#trees");
  table.selectAll('tr').data(rows).remove();
  var nTrees = numTrees();
  var full = Math.floor(nTrees);
  var extra = nTrees - full;
  console.log(nTrees);
  rows = [];
  for (var i = 0; i <= full; i += 10) {
    rows.push(i);
  }
  console.log(rows);
  var tr = table.selectAll('tr')
    .data(rows).enter()
    .append('tr');
  for (var i = 0; i < 10; i++) {
    tr.append('td')
      .attr('id', 'treeTD')
      .html( function(d) {
      if (d + i < full)
        return '<img id="tree" src="../assets/tree.svg" alt="Tree">';
      else if (d + i < nTrees) {
        return '<img id="tree" style="transform: scale(' + extra + ', ' + extra + ');" src="../assets/tree.svg" alt="Tree">';
      }
      else {
        return "";
      }
    })
  }
  d3.select("#treesnum").html(numTrees().toPrecision(2))
}
