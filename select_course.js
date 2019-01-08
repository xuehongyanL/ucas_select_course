// ==UserScript==
// @name         抢课(UCAS)
// @version      0.1
// @description  中国科学院大学的抢课脚本
// @author       Xue Hongyan
// @match        http://jwxk.ucas.ac.cn/courseManageBachelor/selectCourse*
// ==/UserScript==

(function() {
    'use strict';
    if(document.getElementById("loginError").innerText) return;
    let choice=document.getElementsByTagName("tr");
    let classes=[]; //要选的课程列表，每个字符串用引号包裹，字符串之间用逗号分隔
    for(let i=0;i<choice.length;i++){
        let box=choice[i].getElementsByTagName("td")[0];
        if(!box) continue;
        let classId=choice[i].getElementsByTagName("span")[0].innerText;
        if(classes.includes(classId)){
            let check=box.getElementsByTagName("input")[0];
            if(!check.disabled) check.checked=true;
        }
    };
    let button=document.getElementsByClassName("btn btn-primary")[0];
    button.click();
})();
