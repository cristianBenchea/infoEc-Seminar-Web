$(document).ready(function () {
   $("#submit").click(function () {
      var verb = $("#verb").val();
      var adj = $("#adj").val();
      var adv = $("#adv").val();
      var noun = $("#noun").val();
      var excl = $("#excl").val();
      if(!verb || !adj || !adv || !noun || !excl){
          alert("You forgot to fill something!");
      }

      $("#story").html("One day " + noun + " was walking " + adv + " down the street. All of the sudden, they saw a, <br/> \"" + excl + "!\" They exclaimed. Then they put the " + adj + " in their " + verb + " home.");
   });
});