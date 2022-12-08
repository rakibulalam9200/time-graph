const employees = [
  {
    name: "Rakibul Alam",
    //activity: [1670395500000, 1670395800000,1670397300000,1670397600000],
     activity: [1670486400000, 1670493000000,1670494500000,1670500800000,1670502000000,1670511600000],
  },
];

let parent = document.getElementsByClassName("time-content");


const timeContent = d3
  .selectAll(".time-content")
  .selectAll(".time-content")
  .data([...new Array(60)])
  .enter()
  .append("span")
  .classed("minute", true);

console.log(timeContent, "timecontent...");

 for(let i = 0; i<parent.length;i++){
  let employeeTime = employees[0].activity;
  for(j = 0;j<employeeTime.length;j++){
    if(j % 2 === 0){
      let startTime = new Date(employeeTime[j]);
      let endTime = new Date(employeeTime[j+1]);
      if(parent[i].id === startTime.getHours().toString()){
        const timeContent = document.getElementById(parent[i].id);
        const timecontentChilds = timeContent.children;
        for (let i = 0; i < timecontentChilds.length; i++) {
          if(i>=startTime.getMinutes()){
            timecontentChilds[i].classList.remove('out-office');
            timecontentChilds[i].classList.add('in-office');
          }
        }
        
      }
      if(startTime.getHours().toString() < endTime.getHours().toString()){
        if(parent[i].id === startTime.getHours().toString()){
          const timeContent = document.getElementById(parent[i].id);
          timeContent.classList.add('in-border')
        }
      }
    }else{
      let startTime = new Date(employeeTime[j-1])
      let endTime = new Date(employeeTime[j]);
      if(startTime.getHours().toString() === endTime.getHours().toString()){
        if(parent[i].id === endTime.getHours().toString()){
          const timeContent = document.getElementById(parent[i].id);
          const timecontentChilds = timeContent.children;
          // console.log(timecontentChilds.length,'length')
          for (let i = 0; i < timecontentChilds.length; i++) {
            if(endTime.getMinutes() <= i){
              timecontentChilds[i].classList.remove('in-office');
              timecontentChilds[i].classList.add('out-office');
            }
          }
        }
      }else if(startTime.getHours().toString() < endTime.getHours().toString()){
        if(parent[i].id === endTime.getHours().toString()){
          const timeContent = document.getElementById(parent[i].id);
          const timecontentChilds = timeContent.children;
          for (let i = 0; i < timecontentChilds.length; i++) {
            if(endTime.getMinutes() > i){
              timecontentChilds[i].classList.remove('out-office');
              timecontentChilds[i].classList.add('in-office');
            }
          }
        }
        if (
          startTime.getHours().toString() < endTime.getHours().toString() &&
          parent[i].id  < endTime.getHours().toString() &&
          parent[i].id  > startTime.getHours().toString()
        ) {
          let timeContent = document.getElementById(parent[i].id);
          timeContent.classList.add("hour-in-office");
        }
      }
    }
  }
} 
