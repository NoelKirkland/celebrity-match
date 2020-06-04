$(document).ready(function(){
  $("form#info").submit(function(event){
    const age = parseInt($("input#age").val());
    const pref = $("input:radio[name=pref]:checked").val();
    const astrological = $("#astro").val();
    if(age){
      alert("Please input your age in numbers");
    }
    else if(age < 0 || age > 150){
      alert("Incorrect age input (you are not born yet or you are already dead)");
    }
    else{

    }

    event.preventDefault();
  });

});