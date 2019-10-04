let status,
    password,
    website,
    confirmPassword;
var shutdown;
    

// Function Start
function game (){
    status = Number( prompt("What is your Pc power/battery status"));

    if(status >= 50){
        password = Boolean(prompt(" Please enter your password"));
        for(i=0; i<2; i++){
            confirmPassword = Boolean( prompt("Confirm your password"));
         }
         if(password = confirmPassword){
            alert(" Congratulations Password accepted ")
            alert(" I have opened the browser ")
            website = prompt("Which website do you want to visit?")
            if(website == null){
                alert("Invalid Website, Please provide a valid site, Thank you.")
            }else if(website == ""){
                alert("Invalid Website, Please provide a valid site, Thank you.")
            }else{
                alert("Visited " + website)
            shutdown = prompt("Should I shutdown?")
            if(shutdown == "no"){
                while(shutdown == "no"){
                    alert(" I have opened the browser ")
                    website = prompt("Which website do you want to visit?")
                    if(website == null ){
                        alert("Invalid Website, Please provide a valid site, Thank you.")
                    }else if(website == ""){
                        alert("Invalid Website, Please provide a valid site, Thank you.")
                    }else{
                        alert("Visited " + website)
                    }
                    shutdown = prompt("Should I shutdown?")
            }
            alert("Congratulations you have finished the game... Feel free to visit again ")
            
            }else{
                alert("Congratulations you have finished the game... Feel free to visit again ")
            }
            }
            
        }else{
            alert(" Password did not match or not found try again")
        }
    }else if(status == null){
        alert("Invalid input")
    }else{
        alert("Please charge your Pc up to 50% before playing the game, thank you");
    }
    
}
// Function End
