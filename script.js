let btns = document.querySelectorAll(".btn");
let submit = document.getElementById("submit");
function downloadResume() {
    var fileUrl = 'file:///C:/Users/Dell/Downloads/Shraddha_Pandey_Resume.pdf';
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  document.getElementById('downloadButton').addEventListener('click', function() {
    downloadResume();
  });
btns.forEach(function(buttons){
    buttons.addEventListener("click",function(){
        console.log(buttons.attributes.id.value);

        if(buttons.attributes.id.value == "all"){
            document.getElementById("frontend_design").style.display="block";
            document.getElementById("backend_design").style.display="block";
            document.getElementById("db_design").style.display="block";

        }
        if(buttons.attributes.id.value == "fd"){
            document.getElementById("frontend_design").style.display="block";
            document.getElementById("backend_design").style.display="none";
            document.getElementById("db_design").style.display="none";

        }
        if(buttons.attributes.id.value == "bd"){
            document.getElementById("frontend_design").style.display="none";
            document.getElementById("backend_design").style.display="block";
            document.getElementById("db_design").style.display="none";

        }
        if(buttons.attributes.id.value == "dm"){
            document.getElementById("frontend_design").style.display="none";
            document.getElementById("backend_design").style.display="none";
            document.getElementById("db_design").style.display="block";

        }
    })   
});
function downloadBtn(){
    alert("Resume Downloaded")
}
submit.addEventListener("click",function(){
    let name = document.getElementById("name");
    let email = document.getElementById("emailid");
    let msg= document.getElementById("msg");
    if(name.value == "" || emailid.value == "" || msg.value == ""){
        alert("Details are missing.Kindly fill all details.");
    }else{
        alert("Thanks for joining us");
    }
})