
function launchBrowser(browserName){
    if(browserName==="chrome"){
        console.log("Browser used here is chrome");
    }
    else{
        console.log("Browser used here is NOT chrome");
    }
}

function runTest(testType){
    switch(testType){
        case "smoke":
            console.log("The test type is Smoke");
            break;
          case "sanity":
            console.log("The test type is Sanity");
            break;
         case "regression":
            console.log("The test type is Regression");
            break;
        case "default":
            console.log("The test type is Default(Smoke)"); 
            break;  
    }

}
launchBrowser("chrome");
runTest("regression");