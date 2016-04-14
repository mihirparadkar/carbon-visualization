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
