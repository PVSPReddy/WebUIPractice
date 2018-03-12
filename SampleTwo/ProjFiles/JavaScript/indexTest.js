//var json = require('../ProjFiles/LocalFiles/JsonFiles/URLs.json');
onAppStart();
function onAppStart()
{
   // x.appendChild(y);
   // this requests the file and executes a callback with the parsed result once
   //   it is available
   /*
   fetchJSONFile('./ProjFiles/LocalFiles/JsonFiles/URLs.json', function(data)
   {
       // do something with your data
       console.log(data);
   });*/

   /*
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function()
   {
       if (xhr.readyState === XMLHttpRequest.DONE)
       {
           if (xhr.status === 200 && xhr.readyState === 4)
           {
             var dddddd = xhr.response;
               if (success)
               {
                 success(JSON.parse(xhr.responseText));
               }
            }
            else
            {
              if (error)
              {
                error(xhr);
              }
           }
       }
   };
   xhr.open("GET", "./ProjFiles/LocalFiles/JsonFiles/URLs.json", true);
   */


   //xhr.send();


   /*
   var a = new XMLHttpRequest();
   a.open("GET","./ProjFiles/LocalFiles/JsonFiles/URLs.json",true);
   a.onreadystatechange = function() {
     if( this.readyState == 4) 
     {
       if( this.status == 200) 
       {
         var json = window.JSON ? JSON.parse(this.reponseText) : eval("("+this.responseText+")");
         // do something with json
        }
        else alert("HTTP error "+this.status+" "+this.statusText);
      }
    }
    // a.send();
    */


    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './ProjFiles/LocalFiles/JsonFiles/URLs.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () 
    {
      if (xobj.readyState == 4 && xobj.status == 200)
      {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        //callback(xobj.responseText);
        var data = xobj.response;
        var options = JSON.parse(data);
        var option = document.getElementById('URLOptions');
        var optionsHTML="";
        for(i=0; i<options.length; i++ )
        {
          optionsHTML = optionsHTML+"<option value="+options[i].url+">"+options[i].name+"</option>";
        }
        option.innerHTML = option.innerHTML+optionsHTML;
      }
    };
    xobj.send();
    //xobj.send(null);  
 }


function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
              var data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
          }
      }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}

function SubmitURL()
{
  var urls="";
  var x6 = document.forms["addURLForm"]["preDefinedURLs"].value;
  var imageType = document.forms["addURLForm"]["imageTypes"].value;
  var x1 = document.forms["addURLForm"]["url"].value;
  // if(x6=="I have a URL")
  // {
  //   urls=x1;
  // }
  // else
  // {
  //   urls=x6;
  // }
  urls=x1;
  var x2 = document.forms["addURLForm"]["startIndex"].value;
  var x3 = document.forms["addURLForm"]["endIndex"].value;
  var x4 = document.forms["addURLForm"]["HasZero"].value;
  var data="";
  if(x4 == "1")
  {
    for(var i= x2; i<=x3; i++)
    {
      if(i<10)
      {
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+"0"+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+"0"+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
      }
      else
      {
        data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
      }
    }
  }
  else
  {
    for(var i= x2; i<=x3; i++)
    {
      if(i<10)
      {
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
      }
      else
      {
        data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
      }
    }
  }
  var y=document.getElementById("listview");
  y.innerHTML = data;
}

function UpdateURL()
{
  var urlId = document.getElementById('URLValue');
  var urlval = document.getElementById('URLOptions');
  var modelval = document.getElementById('ModelOptions');
  if(urlval.value == "http://cdn.brutalx.com/content/thumbs/")
  {
    //modelval.style.display = 'block'; //for java script but effects UI design
    modelval.style.visibility = 'visible'; //for java script
    //modelval.show(); //for jquery

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './ProjFiles/LocalFiles/JsonFiles/BrutalXModels.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () 
    {
      if (xobj.readyState == 4 && xobj.status == 200)
      {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        //callback(xobj.responseText);
        modelval.innerHTML = "";
        var data = xobj.response;
        var options = JSON.parse(data);// {"code" : "", "url" : ""},
        var optionsHTML="";
        for(i=0; i<options.length; i++ )
        {
          optionsHTML = optionsHTML+"<option value="+options[i].url+">"+options[i].code+"</option>";
        }
        modelval.innerHTML = modelval.innerHTML+optionsHTML;
      }
    };
    xobj.send();

  }
  else
  {
    //modelval.style.display = 'none'; //for java script but effects UI design
    modelval.style.visibility = 'hidden'; //for java script
    //modelval.hide(); //for jquery
  }
  urlId.value = urlval.value;

}

function UpdateModel()
{
  var urlId = document.getElementById('URLValue');
  var urlval = document.getElementById('URLOptions');
  var modelval = document.getElementById('ModelOptions');
  urlId.value = (urlval.value)+(modelval.value);
}
