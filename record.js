// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);

function myFunction(event){
    event.preventDefault();

    let name=document.querySelector("#name").value;
    let employeeID=document.querySelector("#employeeID").value;
    let department=document.querySelector("#department").value;
    let exp=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mbl=document.querySelector("#mbl").value;
    // let submit=document.querySelector("#submit").value;

    // let employeeID=document.querySelector("#employeeID").value;

    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=name;
    let td2=document.createElement("td");
    td2.innerText=employeeID;
    let td3=document.createElement("td");
    td3.innerText=department;
    let td4=document.createElement("td");
    td4.innerText=exp;
    let td5=document.createElement("td");
    td5.innerText=email;
    let td6=document.createElement("td");
    td6.innerText=mbl;
    let td7=document.createElement("td");
    // td1.innerText=name;
    let tem="";
    let x=document.querySelector("#exp").value;
    if(x>5){
        tem="Senior";
    }else if(x>=2&&x<=5){
        tem="Junior";
    }else if(x<=1){
        tem="Fresher";
    }
    td7.innerText=tem;
    let td8=document.createElement("td");
    td8.innerText="DELETE";
    td8.style.backgroundColor="red";
    // td8.style.pointer="mouseOver";
    td8.addEventListener("click",deleterow);
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);  
}
function deleterow(event){
event.target.parentNode.remove();
}