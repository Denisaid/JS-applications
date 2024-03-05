function solve() {
    const baseURI="http://localhost:3030/jsonstore/bus/schedule/"
    const spanRef=document.querySelector("div[id='info'] span");
    
    const arriveBtnRef=document.getElementById("arrive");
    const departBtnRef=document.getElementById("depart");
    let nextStop="depot";
    let currentStop='';

    async function depart() {
        try {
        //const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
        const response=await fetch(baseURI+nextStop);
        const data=await response.json();

        spanRef.textContent=`Next stop ${data.name}`;
        nextStop=data.next;
        currentStop=data.name;
        arriveBtnRef.disabled=false;
        departBtnRef.disabled=true;
        } catch(error){
        arriveBtnRef.disabled=true;
        departBtnRef.disabled=true;
        spanRef.textContent="Error"
        }


    }

    function arrive() {
        spanRef.textContent=`Arriving at ${currentStop}`
        arriveBtnRef.disabled=true;
        departBtnRef.disabled=false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();