let myLeads=[];
const ulEl=document.getElementById("ul-el");
const inputBtn=document.getElementById("input-btn");
const inputFeild=document.getElementById("input-el");
const storageValues = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("save-btn");

tabBtn.addEventListener('click',function(){
    chrome.tabs.query({active:true ,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        renderLeads(myLeads);
    })

})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads);
})

if(storageValues){
    myLeads=storageValues;
    renderLeads(myLeads);
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputFeild.value);
    inputFeild.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads(myLeads);
})

function renderLeads(leads){
let listitems="";
    for(let i=0;i<leads.length;i++){
        listitems+=`<li>
                    <a href=${leads[i]} target='_blank'>
                    ${leads[i]}
                    </a></li>`
    }
    ulEl.innerHTML =listitems;
}
