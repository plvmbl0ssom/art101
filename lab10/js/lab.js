// index.js - This simple JavaScript/jQuery script appends new elements to an output div
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 16, 2023

function generateRandomText() {
    const text = "Get up I don't wanna fight your shadow Meet me back in five if I matter to you Like you say, I do So, get up I don't wanna fight your shadow Meet me back in five if I matter to you Like you say, I do This song its about you, baby Only you You, you, you You, you, you, you When Im down, feel like Im crying mm-hm When I cant even pretend to be okay mm-hm Its you, you worry about me Its you, you make me laugh No need to say, boy, what do you say? they keep on asking me, “Who is he?” Youre only one call away they keep on asking me, “Who is he?” You show up with no hesitation they keep on asking me, “Who is he?” Can this be real? they keep on asking me, “Who is he?” You really are, hes the one thats living in my system, baby Oh my, oh my god, I knew this would happen I was really hoping that he will come through Oh my, oh my god, its only you Asking all the time about what I should do No I can never let him go (ooh) I only think of you, twenty-four ooh Im a lucky girl ooh I know, I know ooh Before I met you ooh Everything was pointless (ooh) My feeling is boundless ooh I know, I know, Im going crazy right? Wherever, whenever There aint nothing else that I would hold on to I hear his voice through all the noise Dont let go of my hand for one second no, no Got no worries cause I got someone Its okay to be alone cause I love someone they keep on asking me, “Who is he?” Youre only one call away they keep on asking me, “Who is he?” You show up with no hesitation they keep on asking me, “Who is he?” Can this be real? they keep on asking me, “Who is he?” You really are, hes the one thats living in my system, baby Oh my, oh my god, I knew this would happen I was really hoping that he will come through Oh my, oh my god, its only you Asking all the time about what I should do No I can never let him go (ooh) I only think of you, twenty-four ooh Im a lucky girl ooh I know, I know ooh Before I met you ooh Everything was pointless ooh My feeling is boundless ooh I know, I know hes the one thats living in my system, baby, baby Baby Babe, baby Im going crazy, right? baby Baby Im going crazy, right? Babe, baby You and me My heart is glowing, its glowing up glow, glow With you, nothing can scare me no, no All filled up, all filled up all red now My heart is glowing, itd be glowing cause he Oh my, oh my god, I knew this would happen I was really hoping that he will come through Oh my, oh my god, its only you Asking all the time about what I should do No, I can never let him go ooh Hes right there for me, twenty-four ooh I really am a lucky girl ooh I know, I know you and me Before I met you ooh Everything was pointless ooh What should I do? My heart is glowing, its glowing My heart is glowing, so I cant sleep at night";
    const min = 3;
    const max = 200;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
  
  // click listener for button
  $("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });