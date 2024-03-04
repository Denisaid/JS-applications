async function getInfo() {
    const baseURI="http://localhost:3030/jsonstore/bus/businfo/";

    const stopIdInputRef=document.getElementById('stopId');
    const busId=stopIdInputRef.value;
    const stopNameRef=document.getElementById("stopName");
    const ulref=document.getElementById("buses");
    try {
        const response=await fetch(baseURI+busId);
        const data=await response.json();

        stopNameRef.textContent=data.name;
        clear();

        for (let [busId,time] of Object.entries(data.buses)) {
            let li =document.createElement("li");
            li.textContent=`Bus ${busId} arrives in ${time} minutes`;
            ulref.appendChild(li);
        }
        
    } catch (e){
        appendErrorMSG()
    }
    function appendErrorMSG(){
        clear();
        stopNameRef.textContent="Error"
    }
    function clear(){
        stopIdInputRef.value="";
        ulref.innerHTML=""; 
    }

}