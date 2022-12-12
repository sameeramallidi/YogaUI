const collect=(ev)=>{
    ev.preventDefault();
    let user={
        Fname:document.getElementById('fname').value,
        Email:document.getElementById('email').value,
        PhoneNum:document.getElementById('phone').value,
        Age:document.getElementById('age').value,
        Batch:document.getElementById('batch').value
        
    }
    fetch("https://localhost:7140/api/Yoga",{
        method:"POST",
        headers:
        {   
            'Accept': 'application/json, text/plain',
            "Content-type":"application/json",
            "Access-Control-Allow-Origin":"*"
            // 'Access-Control-Allow-Methods':"POST,OPTIONS",
            // "Access-Control-Allow-Credentials": "true"
        },
        body:JSON.stringify(user),
        mode:'no-cors'
    }).then((res)=>{
        if(res){
            alert(res);
        }
    });
    document.getElementById('fname').value="";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";
    document.getElementById('age').value="";
    document.getElementById('batch').value="";
}





document.addEventListener('DOMContentLoaded',()=>{
   document.getElementById('btn').addEventListener('click', collect);
});
