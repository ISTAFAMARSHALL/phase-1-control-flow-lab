function scuberGreetingForFeet(feet) {
  // Write your code here!
  let message;

  if (feet > 2500) { return message = "No can do."; }
  if (feet > 2000) { return message = "I will gladly take your thirty bucks."; }
  if (feet >= 400) { return message = "That will be twenty bucks."; }
  if (feet < 400) { return message = "This one is on me!"; }
}

function ternaryCheckCity(city) {
  // Write your code here!
  let message;

  city === "NYC" ? (message = "Ok, sounds good.") : (message = "No go.");
  return message;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let message;

  switch (tip) {
    case 'generous': return message = "Thank you so much.";
    case "not as generous" : return message = "Thank you.";

    default: return message = "Bye.";
  }
}