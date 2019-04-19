createData();

function createData() {
  //Orignial geo.json data which will be parsed by this function...
  //TODO: Look into grouping later...
  var labelledData = [
    {
      lon: 24,
      lat: 54.9,
      size: 340000,
      dir: 1,
      group: 1
    },
    {
      lon: 24.5,
      lat: 55,
      size: 340000,
      dir: 1,
      group: 1
    },
    {
      lon: 25.5,
      lat: 54.5,
      size: 340000,
      dir: 1,
      group: 1
    },
    {
      lon: 26,
      lat: 54.7,
      size: 320000,
      dir: 1,
      group: 1
    },
    {
      lon: 27,
      lat: 54.8,
      size: 300000,
      dir: 1,
      group: 1
    },
    {
      lon: 28,
      lat: 54.9,
      size: 280000,
      dir: 1,
      group: 1
    },
    {
      lon: 28.5,
      lat: 55,
      size: 240000,
      dir: 1,
      group: 1
    },
    {
      lon: 29,
      lat: 55.1,
      size: 210000,
      dir: 1,
      group: 1
    },
    {
      lon: 30,
      lat: 55.2,
      size: 180000,
      dir: 1,
      group: 1
    },
    {
      lon: 30.3,
      lat: 55.3,
      size: 175000,
      dir: 1,
      group: 1
    },
    {
      lon: 32,
      lat: 54.8,
      size: 145000,
      dir: 1,
      group: 1
    },
    {
      lon: 33.2,
      lat: 54.9,
      size: 140000,
      dir: 1,
      group: 1
    },
    {
      lon: 34.4,
      lat: 55.5,
      size: 127100,
      dir: 1,
      group: 1
    },
    {
      lon: 35.5,
      lat: 55.4,
      size: 100000,
      dir: 1,
      group: 1
    },
    {
      lon: 36,
      lat: 55.5,
      size: 100000,
      dir: 1,
      group: 1
    },
    {
      lon: 37.6,
      lat: 55.8,
      size: 100000,
      dir: 1,
      group: 1
    },
    {
      lon: 37.7,
      lat: 55.7,
      size: 100000,
      dir: -1,
      group: 1
    },
    {
      lon: 37.5,
      lat: 55.7,
      size: 98000,
      dir: -1,
      group: 1
    },
    {
      lon: 37,
      lat: 55,
      size: 97000,
      dir: -1,
      group: 1
    },
    {
      lon: 36.8,
      lat: 55,
      size: 96000,
      dir: -1,
      group: 1
    },
    {
      lon: 35.4,
      lat: 55.3,
      size: 87000,
      dir: -1,
      group: 1
    },
    {
      lon: 34.3,
      lat: 55.2,
      size: 55000,
      dir: -1,
      group: 1
    },
    {
      lon: 33.3,
      lat: 54.8,
      size: 37000,
      dir: -1,
      group: 1
    },
    {
      lon: 32,
      lat: 54.6,
      size: 24000,
      dir: -1,
      group: 1
    },
    {
      lon: 30.4,
      lat: 54.4,
      size: 20000,
      dir: -1,
      group: 1
    },
    {
      lon: 29.2,
      lat: 54.3,
      size: 20000,
      dir: -1,
      group: 1
    },
    {
      lon: 28.5,
      lat: 54.2,
      size: 20000,
      dir: -1,
      group: 1
    },
    {
      lon: 28.3,
      lat: 54.3,
      size: 20000,
      dir: -1,
      group: 1
    },
    {
      lon: 27.5,
      lat: 54.5,
      size: 20000,
      dir: -1,
      group: 1
    },
    {
      lon: 26.8,
      lat: 54.3,
      size: 12000,
      dir: -1,
      group: 1
    },
    {
      lon: 26.4,
      lat: 54.4,
      size: 14000,
      dir: -1,
      group: 1
    },
    {
      lon: 25,
      lat: 54.4,
      size: 8000,
      dir: -1,
      group: 1
    },
    {
      lon: 24.4,
      lat: 54.4,
      size: 4000,
      dir: -1,
      group: 1
    },
    {
      lon: 24.2,
      lat: 54.4,
      size: 4000,
      dir: -1,
      group: 1
    },
    {
      lon: 24.1,
      lat: 54.4,
      size: 4000,
      dir: -1,
      group: 1
    },
    {
      lon: 24,
      lat: 55.1,
      size: 60000,
      dir: 1,
      group: 2
    },
    {
      lon: 24.5,
      lat: 55.2,
      size: 60000,
      dir: 1,
      group: 2
    },
    {
      lon: 25.5,
      lat: 54.7,
      size: 60000,
      dir: 1,
      group: 2
    },
    {
      lon: 26.6,
      lat: 55.7,
      size: 40000,
      dir: 1,
      group: 2
    },
    {
      lon: 27.4,
      lat: 55.6,
      size: 33000,
      dir: 1,
      group: 2
    },
    {
      lon: 28.7,
      lat: 55.5,
      size: 33000,
      dir: 1,
      group: 2
    },
    {
      lon: 28.7,
      lat: 55.5,
      size: 33000,
      dir: -1,
      group: 2
    },
    {
      lon: 29.2,
      lat: 54.2,
      size: 30000,
      dir: -1,
      group: 2
    },
    {
      lon: 28.5,
      lat: 54.1,
      size: 30000,
      dir: -1,
      group: 2
    },
    {
      lon: 28.3,
      lat: 54.2,
      size: 28000,
      dir: -1,
      group: 2
    },
    {
      lon: 24,
      lat: 55.2,
      size: 22000,
      dir: 1,
      group: 3
    },
    {
      lon: 24.5,
      lat: 55.3,
      size: 22000,
      dir: 1,
      group: 3
    },
    {
      lon: 24.6,
      lat: 55.8,
      size: 6000,
      dir: 1,
      group: 3
    },
    {
      lon: 24.6,
      lat: 55.8,
      size: 6000,
      dir: -1,
      group: 3
    },
    {
      lon: 24.2,
      lat: 54.4,
      size: 6000,
      dir: -1,
      group: 3
    },
    {
      lon: 24.1,
      lat: 54.4,
      size: 6000,
      dir: -1,
      group: 3
    }
  ];

  var citiesData = [
    {
      lon: 24,
      lat: 55,
      city: "Kowno",
      temp: 0
    },
    {
      lon: 25.3,
      lat: 54.7,
      city: "Wilna",
      temp: 0
    },
    {
      lon: 26.4,
      lat: 54.4,
      city: "Smorgoni",
      temp: -9
    },
    {
      lon: 26.8,
      lat: 54.3,
      city: "Moiodexno",
      temp: -21
    },
    {
      lon: 27.7,
      lat: 55.2,
      city: "Gloubokoe",
      temp: -11
    },
    {
      lon: 27.6,
      lat: 53.9,
      city: "Minsk",
      temp: -20
    },
    {
      lon: 28.5,
      lat: 54.3,
      city: "Studienska",
      temp: -24
    },
    {
      lon: 28.7,
      lat: 55.5,
      city: "Polotzk",
      temp: -30
    },
    {
      lon: 29.2,
      lat: 54.4,
      city: "Bobr",
      temp: -26
    },
    {
      lon: 30.2,
      lat: 55.3,
      city: "Witebsk",
      temp: "NA"
    },
    {
      lon: 30.4,
      lat: 54.5,
      city: "Orscha",
      temp: "NA"
    },
    {
      lon: 30.4,
      lat: 53.9,
      city: "Mohilow",
      temp: "NA"
    },
    {
      lon: 32,
      lat: 54.8,
      city: "Smolensk",
      temp: "NA"
    },
    {
      lon: 33.2,
      lat: 54.9,
      city: "Dorogobouge",
      temp: "NA"
    },
    {
      lon: 34.3,
      lat: 55.2,
      city: "Wixma",
      temp: "NA"
    },
    {
      lon: 34.4,
      lat: 55.5,
      city: "Chjat",
      temp: "NA"
    },
    {
      lon: 36,
      lat: 55.5,
      city: "Mojaisk",
      temp: "NA"
    },
    {
      lon: 37.6,
      lat: 55.8,
      city: "Moscou",
      temp: "NA"
    },
    {
      lon: 36.6,
      lat: 55.3,
      city: "Tarantino",
      temp: "NA"
    },
    {
      lon: 36.5,
      lat: 55,
      city: "Malo-Jarosewii",
      temp: "NA"
    }
  ];

  // console.log(labelledData);
  let dataset1 = []; //For army attacking
  //Using only one dataset for now...
  let dataset2 = []; //For army returning

  //Starting feature extraction
  labelledData.forEach(function(data) {
    if (data.dir == 1) {
      dataset1.push(data);
    } else if (data.dir == -1) {
      dataset2.push(data);
    }
  });
  //Draw the chart.
  drawChart(dataset1, dataset2, citiesData);
}

//TODO: Write this function for stroke width manipulation acc. to army size.
function scaleValue(value) {
  //Assuming army size is between
}

function drawChart(dataset1, dataset2, cityData) {
  //Update this to two or more arguments later
  //First split dataset1 into 3 different datasets according to group...
  let data1 = [];
  let data2 = [];
  let data3 = [];
  dataset1.forEach(function(data) {
    if (data.group == 1) {
      data1.push(data);
    } else if (data.group == 2) {
      data2.push(data);
    } else data3.push(data);
  });

  let returnData1 = [];
  let returnData2 = [];
  let returnData3 = [];

  dataset2.forEach(function(data) {
    if (data.group == 1) {
      returnData1.push(data);
    } else if (data.group == 2) {
      returnData2.push(data);
    } else returnData3.push(data);
  });

  //Start actual chart drawing...
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_material);

  var chart = am4core.create("minard-map", am4charts.XYChart);

  chart.data = dataset1;
  var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
  xAxis.renderer.minGridDistance = 50;

  var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.renderer.minGridDistance = 50;

  var attackSeries1 = chart.series.push(new am4charts.LineSeries());
  attackSeries1.data = data1;
  attackSeries1.dataFields.valueY = "lat";
  attackSeries1.dataFields.valueX = "lon";
  attackSeries1.stroke = am4core.color("#e91e63");
  attackSeries1.strokeWidth = 8;
  attackSeries1.legendSettings.labelText = "[bold{color}]Group 1 (Attack)[/]";

  var attackSeries2 = chart.series.push(attackSeries1.clone());
  attackSeries2.data = data2;
  attackSeries2.strokeWidth = 5;
  attackSeries2.stroke = am4core.color("#4caf50");
  attackSeries2.legendSettings.labelText = "[bold{color}]Group 2 (Attack)[/]";

  var attackSeries3 = chart.series.push(attackSeries1.clone());
  attackSeries3.data = data3;
  attackSeries3.strokeWidth = 4;
  attackSeries3.stroke = am4core.color("#fbc02d");
  attackSeries3.legendSettings.labelText = "[bold{color}]Group 3 (Attack)[/]";

  var returnSeries1 = chart.series.push(attackSeries1.clone());
  returnSeries1.data = returnData1;
  returnSeries1.stroke = am4core.color("#00acc1");
  returnSeries1.strokeWidth = 2;
  returnSeries1.zIndex = -1;
  returnSeries1.legendSettings.labelText = "[bold{color}]Return[/]";

  var returnSeries2 = chart.series.push(returnSeries1.clone());
  returnSeries2.data = returnData2;

  var returnSeries3 = chart.series.push(returnSeries1.clone());
  returnSeries3.data = returnData3;

  //Draw city points on the chart
  var citySeries = chart.series.push(attackSeries1.clone());
  citySeries.data = cityData;
  citySeries.strokeWidth = 0;
  citySeries.zIndex = -1;

  var cityBullet = citySeries.bullets.push(new am4charts.CircleBullet());
  cityBullet.circle.strokeWidth = 2;
  cityBullet.circle.radius = 7;

  //Adding shadow to bullet
  var shadow = new am4core.DropShadowFilter();
  shadow.dx = 2;
  shadow.dy = 2;
  cityBullet.circle.filters.push(shadow);
  cityBullet.circle.fill = "#616161";
  cityBullet.circle.stroke = "#fff";
  cityBullet.tooltipText = "[bold]{city}\nTemp: {temp}[/]";
  // cityBullet.tooltip.getFillFromObject = false;

  //Create bullet hover element
  var cityHover = cityBullet.states.create("hover");
  cityHover.properties.scale = 1.7;

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = xAxis;
  chart.cursor.yAxis = yAxis;
  chart.cursor.tooltipText = "{size}";
  chart.cursor.lineX.stroke = am4core.color("#ffeeff");
  chart.cursor.lineX.strokeWidth = 4;
  chart.cursor.lineX.strokeOpacity = 0.2;
  chart.cursor.lineX.strokeDasharray = "";

  chart.cursor.lineY.stroke = am4core.color("#ffeeff");
  chart.cursor.lineY.strokeWidth = 4;
  chart.cursor.lineY.strokeOpacity = 0.2;
  chart.cursor.lineY.strokeDasharray = "";

  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarX = new am4core.Scrollbar();

  //Create chart legend
  chart.legend = new am4charts.Legend();
  chart.legend.markers.template.disabled = true;
}
