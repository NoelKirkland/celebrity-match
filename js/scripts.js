$(document).ready(function(){
  $("form#info").submit(function(event){
    const age = parseInt($("input#age").val());
    const pref = $("input:radio[name=pref]:checked").val();
    const astrological = $("#astro").val();
    if(!age){
      alert("Please input your age in numbers");
    }
    else if(age < 0 || age > 150){
      alert("Incorrect age input (you are not born yet or you are already dead)");
    }
    else{
      if(pref === "star-wars" && (astrological === "Aries" || astrological === "Taurus" || astrological === "Gemini" ||
      astrological === "Cancer" || astrological === "Leo" || astrological === "Virgo")){
        $("#match").text("Darth Vador");
      }
      else if(pref === "marvel" && (astrological === "Aries" || astrological === "Taurus" || astrological === "Gemini" ||
      astrological === "Cancer" || astrological === "Leo" || astrological === "Virgo")){
        $("#match").text("Spider Man");
      }
      else if(pref === "star-wars" && (astrological === "Libra" || astrological === "Scorpio" || astrological === "Sagittarius" ||
      astrological === "Capricorn" || astrological === "Aquarius" || astrological === "Pisces")){
        $("#match").text("Yoda");
      }
      else{
        $("#match").text("Thanos");
      }
      $("#answer").show();
    }
    event.preventDefault();
  });
});