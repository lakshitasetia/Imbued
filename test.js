// stress: 1,6,8,11,12,14,18
// anxiety: 2,4,7,9,15,19,20
// depression: 3,5,10,13,16,17,21
$("#menu").on('click', function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('aside-open');
  });
function store(){
    // document.getElementById("result").innerHTML="" ; 
    var ele = document.getElementsByTagName('input'); 
    var st=[];
    var ax=[];
    var dp=[];
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
                
                if(ele[i].name=="q1"|| ele[i].name=="q6"|| ele[i].name=="q8"||ele[i].name=="q11"||ele[i].name=="q12"||ele[i].name=="q14"||ele[i].name=="q18")
                {
                    val1+= parseInt(ele[i].value);
                    st.push(ele[i].value);
                }

                else if(ele[i].name=="q2"|| ele[i].name=="q4"|| ele[i].name=="q7"||ele[i].name=="q9"||ele[i].name=="q15"||ele[i].name=="q19"||ele[i].name=="q20")
               {
                   val2+= parseInt(ele[i].value);
                   dp.push(ele[i].value);
               }

               else if(ele[i].name=="q3"|| ele[i].name=="q5"|| ele[i].name=="q10"||ele[i].name=="q13"||ele[i].name=="q16"||ele[i].name=="q17"||ele[i].name=="q21")
               {
                   val3+= parseInt(ele[i].value);
                   ax.push(ele[i].value);
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
        console.log(st);
        console.log(dp);
        console.log(ax);
        localStorage.setItem("stressRate", stress);
        localStorage.setItem("anxietyRate", anxiety);
        localStorage.setItem("depressionRate", dep);
        localStorage.setItem("stress", st);
        localStorage.setItem("anxiety", ax);
        localStorage.setItem("depression", dp);
        // document.getElementById("result").innerHTML="Stress: " +stress +"</br>"+"Depression: "+dep+"</br>"+"Anxiety: "+anxiety+
        // "</br>"+stress_rate+"</br>"+dep_rate+"</br>"+anxiety_rate+"</br>"+"For more information, contact a psychiatrist" ;
        



}