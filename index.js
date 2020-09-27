const csv=require('csvtojson');
const matchesPlayedPerYear=require("./ipl/matchesPlayedPerYear");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const fs= require("fs");
const JSON_OUTPUT_FILE_PATH="./public/data.json";
const matchesWonByEachTeam =require("./ipl/matchesWonByEachTeam");
const JSON_OUTPUT_FILE_PATH1="./public/data1.json";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const extraRunsConceded =require("./ipl/extraRunsConceded");
const JSON_OUTPUT_FILE_PATH2="./public/data2.json";
const economicBowlers =require("./ipl/economicBowlers");
const JSON_OUTPUT_FILE_PATH3="./public/data3.json";
const matchesWonByRcb =require("./ipl/matchesWonByRcb");
const matchesWonByEachTeam1 = require('./ipl/matchesWonByEachTeam1');
const JSON_OUTPUT_FILE_PATH4="./public/data4.json";
const JSON_OUTPUT_FILE_PATH5="./public/data5.json";
const economicBowlers2008 =require("./ipl/economicBowlers2008");
const JSON_OUTPUT_FILE_PATHE1="./public/datae1.json";
const economicBowlers2009 =require("./ipl/economicBowlers2009");
const JSON_OUTPUT_FILE_PATHE2="./public/datae2.json";
const economicBowlers2010 =require("./ipl/economicBowlers2010");
const JSON_OUTPUT_FILE_PATHE3="./public/datae3.json";
const economicBowlers2011 =require("./ipl/economicBowlers2011");
const JSON_OUTPUT_FILE_PATHE4="./public/datae4.json";
const economicBowlers2012 =require("./ipl/economicBowlers2012");
const JSON_OUTPUT_FILE_PATHE5="./public/datae5.json";
const economicBowlers2013 =require("./ipl/economicBowlers2013");
const JSON_OUTPUT_FILE_PATHE6="./public/datae6.json";
const economicBowlers2014 =require("./ipl/economicBowlers2014");
const JSON_OUTPUT_FILE_PATHE7="./public/datae7.json";
const economicBowlers2015 =require("./ipl/economicBowlers2015");
const JSON_OUTPUT_FILE_PATHE8="./public/datae8.json";
const economicBowlers2016 =require("./ipl/economicBowlers2016");
const JSON_OUTPUT_FILE_PATHE9="./public/datae9.json";
const economicBowlers2017 =require("./ipl/economicBowlers2017");
const JSON_OUTPUT_FILE_PATHE10="./public/datae10.json";
const economicBowlers2018 =require("./ipl/economicBowlers2018");
const JSON_OUTPUT_FILE_PATHE11="./public/datae11.json";
const economicBowlers2019 =require("./ipl/economicBowlers2019");
const JSON_OUTPUT_FILE_PATHE12="./public/datae12.json";



function main()
{
    csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches=>{
    csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries=>{
      // console.log(deliveries.slice(0,5));
       
        let result2=extraRunsConceded(matches,deliveries);
        saveextraruns(result2); 
        let result3=economicBowlers(matches,deliveries);
       saveEconomicBowlers(result3);
       let res1=economicBowlers2008(matches,deliveries);
       saveEconomicBowlers2008(res1);
       let res2=economicBowlers2009(matches,deliveries);
       saveEconomicBowlers2009(res2);
       let res3=economicBowlers2010(matches,deliveries);
       saveEconomicBowlers2010(res3);
       let res4=economicBowlers2011(matches,deliveries);
       saveEconomicBowlers2011(res4);
       let res5=economicBowlers2012(matches,deliveries);
       saveEconomicBowlers2012(res5);
       let res6=economicBowlers2013(matches,deliveries);
       saveEconomicBowlers2013(res6);
       let res7=economicBowlers2014(matches,deliveries);
       saveEconomicBowlers2014(res7);
       let res8=economicBowlers2015(matches,deliveries);
       saveEconomicBowlers2015(res8);
       let res9=economicBowlers2016(matches,deliveries);
       saveEconomicBowlers2016(res9);
       let res10=economicBowlers2017(matches,deliveries);
       saveEconomicBowlers2017(res10);
       let res11=economicBowlers2018(matches,deliveries);
       saveEconomicBowlers2018(res11);
       let res12=economicBowlers2019(matches,deliveries);
       saveEconomicBowlers2019(res12);

    });
    
  // console.log(matches[0]);
    let result=matchesPlayedPerYear(matches);
    saveMatchesPlayedPerYear(result);
    let result1=matchesWonByEachTeam(matches);
    saveMatchesWon(result1);
    let result4=matchesWonByRcb(matches);
    saveMatchesWonByRcb(result4);
    let result5=matchesWonByEachTeam1(matches);
    saveMatchesWonByEachTeam1(result5);
    
    
    
}

);
}

function saveMatchesPlayedPerYear(result)
{
    const jsonData={matchesPlayedPerYear:result};
    const jsonString=JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveextraruns(result2)
{
    const jsonData={extraRunsConceded:result2};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH2,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveMatchesWon(result1)
{
    const jsonData={matchesWonByEachTeam:result1};
    const jsonString=JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH1,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers(result3)
{
    const jsonData={economicBowlers:result3};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH3,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveMatchesWonByRcb(result4)
{
    const jsonData={matchesWonByRcb:result4};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH4,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveMatchesWonByEachTeam1(result5)
{
    const jsonData={matchesWonByEachTeam1:result5};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH5,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2008(res1)
{
    const jsonData={economicBowlers:res1};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE1,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2009(res2)
{
    const jsonData={economicBowlers:res2};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE2,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2010(res3)
{
    const jsonData={economicBowlers:res3};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE3,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2011(res4)
{
    const jsonData={economicBowlers:res4};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE4,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2012(res5)
{
    const jsonData={economicBowlers:res5};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE5,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2013(res6)
{
    const jsonData={economicBowlers:res6};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE6,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2014(res7)
{
    const jsonData={economicBowlers:res7};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE7,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2015(res8)
{
    const jsonData={economicBowlers:res8};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE8,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2016(res9)
{
    const jsonData={economicBowlers:res9};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE9,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2017(res10)
{
    const jsonData={economicBowlers:res10};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE10,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2018(res11)
{
    const jsonData={economicBowlers:res11};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE11,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers2019(res12)
{
    const jsonData={economicBowlers:res12};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATHE12,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
main();