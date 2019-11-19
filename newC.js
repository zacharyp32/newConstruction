

function paperWork() {
    //Grab HTML elements--------------------------------------
    const dateInput = document.getElementById("date-input");
    const adrInput = document.getElementById("address-input");
    const companyInput = document.getElementById("company-input");
    const furInMake = document.getElementById("furnace-input");
    const acInMake = document.getElementById("a/c-input");
    const seerInput = document.getElementById("seer-input");
    const tempInput = document.getElementById("temp-input");
  
    const dlTargetInput = document.getElementById("dlt-input");
    const openCheck = document.getElementById("open-check");
    const pbsCheck = document.getElementById("pbs-check");
    const actualCheck = document.getElementById("actual-check");
  
    const lpInput = document.getElementById("lp-input");
    const hpInput = document.getElementById("hp-input");
    const evInput = document.getElementById("ev-input");
    const coInput = document.getElementById("co-input");
    const t1Input = document.getElementById("t1-input");
    const t2Input = document.getElementById("t2-input");
    const rqSubInput = document.getElementById("rq-s-input");
    const inputAirflow = document.getElementById("input-airflow");
    const treeHundCheck = document.getElementById("300-check");
    const treeFidCheck = document.getElementById("350-check");
    const flowRCheck = document.getElementById("flow-remed-check");
  
    const bdInput = document.getElementById("bd-input");
    const fwdInput = document.getElementById("fan-w-draw");
    const passCheck = document.getElementById("pass-check");
    const failCheck = document.getElementById("fail-check");
  
    const notes = document.getElementById("notes");
    const inputBtu = document.getElementById("input-btu");
    const outputBtu = document.getElementById("output-btu");
    const tons = document.getElementById("tons");
    const furnaceEff = document.getElementById("furnace-eff");
    const asbestos = document.getElementById("a-b");
    const leakage = document.getElementById("leakage");
  
    const genId = document.getElementById("general-id");
    const furId = document.getElementById("fur-id");
    const acId = document.getElementById("ac-id");
    const ductId = document.getElementById("duct-id");
    const rcaId = document.getElementById("rca-id");
    const airflowId = document.getElementById("airflow-id");
    const bdId = document.getElementById("bd-id");
    const fwdId = document.getElementById("fwd-id");
    const statusId = document.getElementById("status-id");
    const notesId = document.getElementById("notes-id");
  
    const genAnsWrapper = document.getElementById("gen-ans-wrapper");
    const furAnsWrapper = document.getElementById("fur-ans-wrapper");
    const acAnsWrapper = document.getElementById("ac-ans-wrapper");
    const leakAnsWrapper = document.getElementById("leak-ans-wrapper");
    const rcaAnsWrapper = document.getElementById("rca-ans-wrapper");
    const flowAnsWrapper = document.getElementById("flow-ans-wrapper");
    const bdAnsWrapper = document.getElementById("bd-ans-wrapper");
    const fwdAnsWrapper = document.getElementById("fwd-ans-wrapper");
    const statusAnsWrapper = document.getElementById("stat-ans-wrapper");
    const notesAnsWrapper = document.getElementById("notes-ans-wrapper");
  
    genAnsWrapper.innerHTML = "";
    furAnsWrapper.innerHTML = "";
    acAnsWrapper.innerHTML = "";
    leakAnsWrapper.innerHTML = "";
    rcaAnsWrapper.innerHTML = "";
    flowAnsWrapper.innerHTML = "";
    bdAnsWrapper.innerHTML = "";
    fwdAnsWrapper.innerHTML = "";
    statusAnsWrapper.innerHTML = "";
    notesAnsWrapper.innerHTML = "";
  
    genId.style.display = "none";
    furId.style.display = "none";
    acId.style.display = "none";
    ductId.style.display = "none";
    rcaId.style.display = "none";
    airflowId.style.display = "none";
    bdId.style.display = "none";
    fwdId.style.display = "none";
    statusId.style.display = "none";
    notesId.style.display = "none";
  
    if (dateInput.value) {
      genId.style.display = "block";
      let dateShow = document.createElement("p");
      let adrShow = document.createElement("p");
      let companyShow = document.createElement("p");
      dateShow.textContent = "Date: " + dateInput.value;
      adrShow.textContent = "Address: " + adrInput.value;
      companyShow.textContent = "Company: " + companyInput.value;
      genAnsWrapper.appendChild(dateShow);
      genAnsWrapper.appendChild(adrShow);
      genAnsWrapper.appendChild(companyShow);
    }
    if (asbestos.checked) {
      let asbShow = document.createElement("p");
      asbShow.textContent = "Asbestos: Yes";
      genAnsWrapper.appendChild(asbShow);
    }
  
  
    if (furInMake.value) {
      furId.style.display = "block";
      let furMakeShow = document.createElement("p");
      let iBShow = document.createElement("p");
      let oBShow = document.createElement("p");
      furMakeShow.textContent = "Make: " + furInMake.value;
      iBShow.textContent = "Input BTU: " + inputBtu.value;
      oBShow.textContent = "Output BTU: " + outputBtu.value;
      furAnsWrapper.appendChild(furMakeShow);
      if (furnaceEff.value) {
        let fEShow = document.createElement("p");
        fEShow.textContent = "AFUE: " + furnaceEff.value + "%";
        furAnsWrapper.appendChild(fEShow);
      }  
      furAnsWrapper.appendChild(iBShow);
      furAnsWrapper.appendChild(oBShow);
    }
  
    if (acInMake.value) {
      acId.style.display = "block";
      let acShow = document.createElement("p");
      let tonsShow = document.createElement("p");
      let seerShow = document.createElement("p");
      let tempShow = document.createElement("p");
      acShow.textContent = "Make: " + acInMake.value;
      tonsShow.textContent = "Tonnage: " + tons.value;
      seerShow.textContent = "SEER: " + seerInput.value;
      tempShow.textContent = "Outdoor Temp: " + tempInput.value;
      acAnsWrapper.appendChild(acShow);
      acAnsWrapper.appendChild(tonsShow);
      acAnsWrapper.appendChild(seerShow);
      acAnsWrapper.appendChild(tempShow);
    }
  
    if (leakage.value) {
      ductId.style.display = "block";
      let leakShow = document.createElement("p");
      let leakTarget = document.createElement("p");
      leakShow.textContent = "Result: " + leakage.value + " CFM";
      leakTarget.textContent = "Target: " + dlTargetInput.value + "%";
      leakAnsWrapper.appendChild(leakShow);
      leakAnsWrapper.appendChild(leakTarget);
    }
    if (pbsCheck.checked) {
      let smokeShow = document.createElement("p");
      smokeShow.textContent = "Pass by smoke: Yes";
      leakAnsWrapper.appendChild(smokeShow);
    }
    if (actualCheck.checked) {
      let actShow = document.createElement("p");
      actShow.textContent = "Actual Airflow Method: Yes";
      leakAnsWrapper.appendChild(actShow);
    }
  
    if (lpInput.value) {
      rcaId.style.display = "block";
      let lpShow = document.createElement("p");
      let hpShow = document.createElement("p");
      let evShow = document.createElement("p");
      let coShow = document.createElement("p");
      let t1Show = document.createElement("p");
      let t2Show = document.createElement("p");
      let subcoolShow = document.createElement("p");
      lpShow.textContent = "LP psi: " + lpInput.value;
      hpShow.textContent = "HP psi: " + hpInput.value;
      evShow.textContent = "Ev: " + evInput.value;
      coShow.textContent = "Co: " + coInput.value;
      t1Show.textContent = "T1: " + t1Input.value;
      t2Show.textContent = "T2: " + t2Input.value;
      subcoolShow.textContent = "Required Subcool: " + rqSubInput.value;
      rcaAnsWrapper.appendChild(lpShow);
      rcaAnsWrapper.appendChild(hpShow);
      rcaAnsWrapper.appendChild(evShow);
      rcaAnsWrapper.appendChild(coShow);
      rcaAnsWrapper.appendChild(t1Show);
      rcaAnsWrapper.appendChild(t2Show);
      rcaAnsWrapper.appendChild(subcoolShow);
    }
  
    if (inputAirflow.value) {
      airflowId.style.display = "block";
      let airMeasShow = document.createElement("p");
      airMeasShow.textContent = "Result: " + inputAirflow.value + " CFM";
      flowAnsWrapper.appendChild(airMeasShow);
    }
  
    if (treeHundCheck.checked) {
      let tresHundShow = document.createElement("p");
      tresHundShow.textContent = "300 CFM";
      flowAnsWrapper.appendChild(tresHundShow);
    } else if (treeFidCheck.checked) {
      let tresHundShow = document.createElement("p");
      tresHundShow.textContent = "350 CFM";
      flowAnsWrapper.appendChild(tresHundShow);
    }
  
    if (flowRCheck.checked) {
      let remedAirShow = document.createElement("p");
      remedAirShow.textContent = "Airflow Remediation: Yes";
      fwdAnsWrapper.appendChild(remedAirShow);
    }
  
    if (bdInput.value) {
      bdId.style.display = "block";
      let bdShow = document.createElement("p");
      bdShow.textContent = "Result: " + bdInput.value;
      bdAnsWrapper.appendChild(bdShow);
    }
    if (fwdInput.value) {
      fwdId.style.display = "block";
      let fwdShow = document.createElement("p");
      fwdShow.textContent = "Result: " + fwdInput.value;
      fwdAnsWrapper.appendChild(fwdShow);
    }
  
    if (passCheck.checked) {
      statusId.style.display = "block";
      let passOrFailShow = document.createElement("p");
      passOrFailShow.textContent = "Passed";
      statusAnsWrapper.appendChild(passOrFailShow);
    } else if (failCheck.checked) {
      statusId.style.display = "block";
      let passOrFailShow = document.createElement("p");
      passOrFailShow.textContent = "Failed";
      statusAnsWrapper.appendChild(passOrFailShow);
    }
  
    if (notes.value) {
      notesId.style.display = "block";
      let notesShow = document.createElement("p");
      notesShow.textContent = notes.value;
      notesAnsWrapper.appendChild(notesShow);
    }
    if (openCheck.checked) {
      let openShow = document.createElement("p");
      openShow.textContent = "Open Chaseway";
      notesAnsWrapper.appendChild(openShow);
    }
  
    // blankInputs(climateZone, tons, inputBtu, furnaceEff, outputBtu, inputAirflow, leakage, fwD, notes)
  
    // uncheck(asbestos, furnace, acCheck, packageUnit, newDucts)
  }
  // Functions_____________________________________________________________________________________
  
  function requiredText(
    reqBool,
    required,
    reqAirBool,
    reqAir,
    czBool,
    reqLeakBool,
    reqLeak,
    secondH2,
    ductPof,
    ansPercent,
    realAnsP,
    reqRefBool,
    reqRefrig,
    reqWBool,
    reqWDraw,
    inBool,
    installed,
    acBool,
    acShow,
    furBool,
    furShow,
    ductsBool,
    ductsShow,
    puBool,
    puShow
  ) {
    //Make text blank if that test is no longer required with new parameters
    //Else, fill the text
    if (reqBool === false) required.textContent = "";
    else required.textContent = "Required Tests";
    if (reqAirBool === false) reqAir.textContent = "";
    else if (czBool !== false) reqAir.textContent = "Airflow";
    if (reqLeakBool === false) {
      reqLeak.textContent = "";
      secondH2.textContent = "";
      ductPof.textContent = "";
      ansPercent.textContent = "";
      realAnsP.textContent = "";
    } else {
      required.textContent = "Required Tests";
      reqLeak.textContent = "Duct Leakage";
    }
    if (reqRefBool === false) reqRefrig.textContent = "";
    else if (czBool !== false) reqRefrig.textContent = "Refrigerant Charge";
    if (reqWBool === false) reqWDraw.textContent = "";
    else reqWDraw.textContent = "Fan Watt-Draw";
    if (inBool === false) installed.textContent = "";
    else installed.textContent = "Installed";
    if (acBool === false) acShow.textContent = "";
    else acShow.textContent = "A/C";
    if (furBool === false) furShow.textContent = "";
    else furShow.textContent = "Furnace";
    if (ductsBool === false) ductsShow.textContent = "";
    else ductsShow.textContent = "New Ducts";
  }
  
  function blankInputs(
    climateZone,
    tons,
    inputBtu,
    furnaceEff,
    outputBtu,
    inputAirflow,
    leakage,
    fwD,
    notes
  ) {
    [
      climateZone.value,
      tons.value,
      inputBtu.value,
      furnaceEff.value,
      outputBtu.value,
      inputAirflow.value,
      leakage.value,
      fwD.value,
      notes.value
    ] = ["", "", "", "", "", "", "", "", ""];
  }
  
  function uncheck(asbestos, furnace, acCheck, packageUnit, newDucts) {}
  