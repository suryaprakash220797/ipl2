var y1
function add() {
    var y=document.formname.year.value;
    y1=y;
    if(y=='2008')
    {
    fetch("./datae1.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2009')
    {
    fetch("./datae2.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2010')
    {
    fetch("./datae3.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2011')
    {
    fetch("./datae4.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2012')
    {
    fetch("./datae5.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2013')
    {
    fetch("./datae6.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2014')
    {
    fetch("./datae7.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2015')
    {
    fetch("./datae8.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2016')
    {
    fetch("./datae9.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2017')
    {
    fetch("./datae10.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2018')
    {
    fetch("./datae11.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
    if(y=='2019')
    {
    fetch("./datae12.json")
      .then(r => r.json())
      .then(visualizeData22);
    }
  }

  
  function visualizeData22(data) {
    visualizeMatchesPlayedPerYear22(data.economicBowlers);
    return;
  }
  
  function visualizeMatchesPlayedPerYear22(economicBowlers) {
    const seriesData = [];
    var newEle=document.getElementById('want');
    var newDiv=newEle.innerHTML="<div id='economic-bowlers2016' style='min-width: 310px; height: 400px; margin: 0 auto'></div><script src='https://code.highcharts.com/highcharts.js'></script>";

    for (let bowler in economicBowlers) {
      seriesData.push([bowler, economicBowlers[bowler]]);
    }
  
    Highcharts.chart("economic-bowlers2016", {
      chart: {
        type: "column"
      },
      title: {
        text: "6. Top Economic Bowlers In " +y1+ " Season"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      series: [
        {
          name: "Bowlers",
          data: seriesData
        }
      ]
    });
  }