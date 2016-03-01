var inside = function(line, x, y, xmin, ymin, xmax, ymax) {
        switch(line) {
          case LEFT: if(x<xmin) return -1; break;
          case RIGHT: if(x>xmax) return -1; break;
          case BOTTOM: if(y<ymin) return -1; break;
          case TOP: if(y>ymax) return -1; break;
        }
        return 1;
      };
      
      var cross = function(line, x1, y1, x2, y2, xmin, ymin, xmax, ymax) {
          //Edge from p1 tp p2;
          console.log(x1 + " " + x2);
          var a=inside(line,x1,y1,xmin,ymin,xmax,ymax);
          var b=inside(line,x2,y2,xmin,ymin,xmax,ymax);
          if((a==-1)&&(b==-1)) {
                  return 4;
          }
          else if((a==-1)&&(b==1)) {
                  return 1;
          }
          else if((a==1)&&(b==1)) {
                  return 2;
          }
          else if((a==1)&&(b==-1)) {
                  return 3;
          }
          return 0;
      };
      
     var intersect = function(line, x1, y1, x2, y2, xmin, ymin, xmax, ymax) {
          x=0,y=0;
          m = 0;
          if(x1!=x2)
          {
                  m=(y1-y2)/(x1-x2);
          }
          switch (line)
          {
                  case LEFT:
                          x=xmin;
                          y=y2+((xmin - x2)*m);
                          break;
                  case RIGHT:
                          x=xmax;
                          y=y2+((xmax - x2)*m);
                          break;
                  case BOTTOM:
                          if(x1!=x2)
                                  x=x2+((ymin - y2)/m);
                          else
                                  x=x2;
                          y=ymin;
                          break;
                  case TOP:
                          if(x1!=x2)
                                  x=x2+((ymax - y2)/m);
                          else
                                  x=x2;
                          y=ymax;
                          break;
      }
      return [x,y];
    };