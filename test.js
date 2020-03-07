// var a1= document.getElementsByName('q1');
// var a2= document.getElementsByName('q2');
// var a3= document.getElementsByName('q3');
// var a4= document.getElementsByName('q4');
// var a5= document.getElementsByName('q5');
// var a6= document.getElementsByName('q6');
// var a7= document.getElementsByName('q7');
// var a8= document.getElementsByName('q8');
// var a9= document.getElementsByName('q9');
// var a10= document.getElementsByName('q10');
// var a11= document.getElementsByName('q11');
// var a12= document.getElementsByName('q12');
// var a13= document.getElementsByName('q13');
// var a14= document.getElementsByName('q14');
// var a15= document.getElementsByName('q15');
// var a16= document.getElementsByName('q16');
// var a17= document.getElementsByName('q17');
// var a18= document.getElementsByName('q18');
// var a19= document.getElementsByName('q19');
// var a20= document.getElementsByName('q20');
// var a21= document.getElementsByName('q21');

// function store() {
//     localStorage.setItem('a1', a1.value);
//     localStorage.setItem('a2', a2.value);
//     localStorage.setItem('a3', a3.value);
//     localStorage.setItem('a4', a4.value);
//     localStorage.setItem('a5', a5.value);
//     localStorage.setItem('a6', a6.value);
//     localStorage.setItem('a7', a7.value);
//     localStorage.setItem('a8', a8.value);
//     localStorage.setItem('a9', a9.value);
//     localStorage.setItem('a10', a10.value);
//     localStorage.setItem('a11', a11.value);
//     localStorage.setItem('a12', a12.value);
//     localStorage.setItem('a13', a13.value);
//     localStorage.setItem('a14', a14.value);
//     localStorage.setItem('a15', a15.value);
//     localStorage.setItem('a16', a16.value);
//     localStorage.setItem('a17', a17.value);
//     localStorage.setItem('a18', a18.value);
//     localStorage.setItem('a19', a19.value);
//     localStorage.setItem('a20', a20.value);
//     localStorage.setItem('a21', a21.value);
// }

// stress: 1,6,8,11,12,14,18
// anxiety: 2,4,7,9,15,19,20
// depression: 3,5,10,13,16,17,21

function store(){
    document.getElementById("result").innerHTML="" ; 
    var ele = document.getElementsByTagName('input'); 

    // var val1= ele[0].value;
    // alert
    // var val6 = parseInt(document.getElementsByName("q6").value);
    //                 var val8 = parseInt(document.getElementsByName("q8").value);
	// 	            var val11 = parseInt(document.getElementsByName("q11").value);
    //                 var val12 = parseInt(document.getElementsByName("q12").value);
	// 	            var val14 = parseInt(document.getElementsByName("q14").value);
    //                 var val18 = parseInt(document.getElementsByName("q18").value);
   var stress=0;
   var dep=0;
   var anxiety=0;
   var stress_rate="";
   var dep_rate="";
   var anxiety_rate="";

   var val1=0;
    var val2=0;
    var val3=0;
    for(i = 0; i < ele.length; i++) { 
            if(ele[i].checked) {
                // document.getElementById("result").innerHTML 
                //         += ele[i].name + " Value: " 
                //         + ele[i].value + "<br>"; 
                if(ele[i].name=="q1"|| ele[i].name=="q6"|| ele[i].name=="q8"||ele[i].name=="q11"||ele[i].name=="q12"||ele[i].name=="q14"||ele[i].name=="q18")
                {
                    val1+= parseInt(ele[i].value);
                 
                }

                else if(ele[i].name=="q2"|| ele[i].name=="q4"|| ele[i].name=="q7"||ele[i].name=="q9"||ele[i].name=="q15"||ele[i].name=="q19"||ele[i].name=="q20")
               {
                   val2+= parseInt(ele[i].value);
               }

               else if(ele[i].name=="q3"|| ele[i].name=="q5"|| ele[i].name=="q10"||ele[i].name=="q13"||ele[i].name=="q16"||ele[i].name=="q17"||ele[i].name=="q21")
               {
                   val3+= parseInt(ele[i].value);
               }
            }


        } 
        stress= val1*2;
        if(stress<=14)
            stress_rate= "Your Stress is Normal"
        if(stress>=15 && stress<=18)
            stress_rate="You take mild stress"
        if(stress>=19 && stress<=25)
            stress_rate="You take moderate stress"
        if(stress>=26 && stress<=33)
            stress_rate= "Your stress is severe"
        if(stress>33)
            stress_rate="Your stress rate is extremely severe."
        dep= val2*2;
        if(dep<=9)
            dep_rate= "Your Depression is Normal"
        if(dep>=10 && dep<=13)
            dep_rate="You have mild depression"
        if(dep>=14 && dep<=20)
            dep_rate="You have moderate depression"
        if(dep>=21 && dep<=27)
            dep_rate= "Your depression is severe"
        if(dep>28)
            dep_rate="Your depression rate is extremely severe."
        anxiety= val3*2;
        if(anxiety<=14)
            anxiety_rate= "Your anxiety is Normal"
        if(anxiety>=15 && anxiety<=18)
            anxiety_rate="You have mild anxiety"
        if(anxiety>=19 && anxiety<=25)
            anxiety_rate="You have moderate anxiety"
        if(anxiety>=26 && anxiety<=33)
            anxiety_rate= "Your anxiety is severe"
        if(anxiety>33)
            anxiety_rate="Your anxiety rate is extremely severe."
        


        document.getElementById("result").innerHTML="Stress: " +stress +"</br>"+"Depression: "+dep+"</br>"+"Anxiety: "+anxiety+
        "</br>"+stress_rate+"</br>"+dep_rate+"</br>"+anxiety_rate ;


}