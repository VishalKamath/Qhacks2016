var client = new Keen({
  projectId: "56db010546f9a71794985bb8",
  readKey: "ed27cd048e0b378aef5203e02ecfa1147e9bb011864fe1065a7f734f308efa4f9625f53ddf076de74fd9c73199e5688d9a16a297460859f34dd7eb1b6e59068b13176ae1cf42b2b7c1f5dd21b48e648f35f661422d308238791d6db0ead8fb88"
});

Keen.ready(function(){


  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("funnel", {
    eventCollection: "pageviews",
    interval: "hourly",
    groupBy: "price",
    timeframe: {
      start: "2014-05-04T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });

var funnel = new Keen.Query("funnel", {
  steps: [ 
          { 
            eventCollection: "stocks", 
            actorProperty: "price", 
          }, 
          { 
            eventCollection: "stocks2", 
            actorProperty: "price", 
          }
        ],
        timeframe: "this_12_months" 
      }); 

  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

client.draw(funnel, document.getElementById("chart-01"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Pageviews Pie Chart
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
    eventCollection: "pageviews",
    groupBy: "user.device_info.browser.family",
    timeframe: {
      start: "2014-05-01T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(pageviews_static, document.getElementById("chart-02"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      },
      pieHole: .4
    }
  });


  // ----------------------------------------
  // Impressions timeline
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "ad.advertiser",
    interval: "hourly",
    timeframe: {
      start: "2014-05-04T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Impressions timeline (device)
  // ----------------------------------------
  var impressions_timeline_by_device = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "user.device_info.device.family",
    interval: "hourly",
    timeframe: {
      start: "2014-05-04T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Impressions timeline (country)
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "user.geo_info.country",
    interval: "hourly",
    timeframe: {
      start: "2014-05-04T00:00:00.000Z",
      end: "2014-05-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


});
