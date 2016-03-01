var clipwindow = function(){
          this.chart =null;
          this.xmin = 0;
          this.xmax = 0;
          this.ymin = 0;
          this.ymax = 0;
          this.rowmindps = [];
          this.rowmaxdps = [];
          this.colmindps = [];
          this.colmaxdps = [];
          this.polydps =[];
          this.clippolydps = [];
          this.currentLine = [];
          this.initializechart = function (){
              this.chart = new CanvasJS.Chart("chartContainer", {
              axisX:{
                       minimum: 0,
                       maximum: 400
                  
                     },  
              axisY:{
                       minimum: 0,
                       maximum: 400,
                       gridThickness : 0
                    },
              data:[{
                      type: "line",
                      color: "DarkSlateBlue",
                      indexLabel: "ymin : {y}",
                      indexLabelOrientation: "vertical",
                      indexLabelFontSize: 12,
                      dataPoints: this.rowmindps
                    },
                    {
                      type: "line",
                      color: "DarkSlateBlue",
                      indexLabel: "ymax: {y}",
                      indexLabelOrientation: "vertical",
                      indexLabelFontSize: 12,    
                      dataPoints: this.rowmaxdps
                    },
                    {
                      type: "line",
                      color: "DarkSlateBlue",                            
                      indexLabel: "xmin: {x}",
                      indexLabelFontSize: 12,
                      dataPoints: this.colmindps
                    },
                    {
                      type: "line",
                      color: "DarkSlateBlue",
                      indexLabel: "xmax: {x}",
                      indexLabelFontSize: 12,  
                      dataPoints: this.colmaxdps
                    },
                    {
                      type: "area",
                      markerType: "circle",
                      fillOpacity: 0,
                      color: "DarkOrange",
                      indexLabel: "",
                      indexLabelFontSize: 12,    
                      dataPoints: this.polydps
                    },
                    {
                      type: "area",
                      markerType: "circle",
                      fillOpacity: 0,
                      color: "ForestGreen",
                      indexLabel: "",
                      indexLabelFontSize: 12,     
                      dataPoints: this.clippolydps
                    },
                    {
                      type: "line",
                      markerType: "circle",
                      indexLabel: "({x},{y})",
                      color: "Red", 
                      indexLabelFontSize: 12,     
                      dataPoints: this.currentLine
                    }
                   ]
             });     
               
      }

       this.drawcanvas= function(){      
            if((this.rowmaxdps.length & this.rowmindps.length & this.colmaxdps.length & this.colmindps.length) !=0)  {
                console.log('free dps data 1');
                this.rowmindps.length =0;
                this.rowmaxdps.length =0;
                this.colmindps.length =0;
                this.colmaxdps.length =0;
            }
            // bounding box
            this.colmindps.push({x:this.xmin,y:0},{x:this.xmin,y:400});
            this.colmaxdps.push({x:this.xmax,y:0},{x:this.xmax,y:400});
            this.rowmindps.push({x:0,y:this.ymin},{x:400,y:this.ymin});
            this.rowmaxdps.push({x:0,y:this.ymax},{x:400,y:this.ymax});  
            
            //Polygon
            if(this.polydps.length==0)
              this.polydps.push({x:50, y:200}, {x:150, y:350}, {x:200, y:200}, {x:250, y:350}, {x:350, y:200}, {x:200, y:50}, {x:50, y:200});
                this.clippolydps.length = 0;
            
           this.chart.render();     
        }      
      this.defaultwindow = function(){
          document.getElementById("inputInformationCustom").style.display = "none";
          document.getElementById("xmin").value = 100;
          document.getElementById("ymin").value = 100;
          document.getElementById("xmax").value = 300;
          document.getElementById("ymax").value = 300;
          this.xmin = parseInt(document.getElementById("xmin").value);
          this.xmax = parseInt(document.getElementById("xmax").value);
          this.ymin = parseInt(document.getElementById("ymin").value);
          this.ymax = parseInt(document.getElementById("ymax").value);
          this.polydps = [];
          this.polydps.push({x:50, y:200}, {x:150, y:350}, {x:200, y:200}, {x:250, y:350}, {x:350, y:200}, {x:200, y:50}, {x:50, y:200});
          this.initializechart();
          this.drawcanvas();
      }
      
      this.updatewindow = function(){
                 console.log('update window');
                 if(document.getElementById("xmin").value <= document.getElementById("xmax").value && document.getElementById("ymin").value <= document.getElementById("ymax").value)
                  {
                      
                      this.xmin = parseInt(document.getElementById("xmin").value);
                      this.xmax = parseInt(document.getElementById("xmax").value);
                      this.ymin = parseInt(document.getElementById("ymin").value);
                      this.ymax = parseInt(document.getElementById("ymax").value);
                      console.log(this.xmin,this.ymin,this.xmax,this.ymax);
                      this.drawcanvas();
                      return true;
                  }
               return false;
      }
      
      };
      var Experiment = function(objwindow,start,end){
            
             this.startOpcode = null;
             this.endOpcode = null;
             this.resultstart = [];
             this.resultend = [];
             
            this.startExperiment = function(){
                objwindow.chart.render();
                console.log("drawnline");            
            }
      };
      
      var Iterator = function(items) {
         this.index = 0;
         this.items = items;
         this.first = function() {
            this.reset();
            return this.next();
          },
         this.next = function() {
            return this.items[this.index++];
          },
         this.hasNext= function() {
            return this.index < this.items.length;
          },
         this.isEmpty = function() {
            return this.index == this.items.length;
         },
         this.reset= function() {
            this.index = 0;  
         },
         this.hasPrevious =function(){
            if(this.index == 0) return false;
             else
               return true;         
         },     
         this.previous = function(){
             this.index--;
             return this.items[index];
         },
         this.getIndex = function() {
          return this.index;
         }
      };
      window.onload = function () {
                  
          
      }

