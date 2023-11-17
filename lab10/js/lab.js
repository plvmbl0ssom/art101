// index.js - This simple JavaScript/jQuery script appends new elements to an output div
// Requirements: jQuery must be loaded for this script to work.
// Author: Jazmine Noguera
// Date: November 16, 2023

function generateRandomText() {
    const text = "Nangbihaji ma ne siganeun eunhaeng Seodulleoseo jeongnihae gyaeneun real bad Badajumyeon andwae No, you better trust me Dapdapaeseo geurae Jeobeonedo bwatjiman neo eopseul ttae Gyaen yeogijeogienunbicheul ppurine Aju nunbusige Honestly uri saie He's been totally lyin', yeah Nae saengil patie neoman mot on geunal Hyejiniga eomcheong honnatdeon geunal Jiwoniga yeochinirang heeojin geunal Gyaeneun eonjena nega eopsi geunal Neomu meosinneun oseul ipgo geunal Heard him say We can go wherever you like Baby, say the words and I'm down All I need is you on my side We can go whenever you like Now, where are you? (Mm-mhm) What's your ETA? What's your ETA? (Mm-mhm-mm) What's your ETA? What's your ETA? (Mm-mhm) What's your ETA? What's your ETA? I'll be there right now, lose that boy on her arm Get up I don't wanna fight your shadow Meet me back in 5 If I matter to you Like you say, I do So, get up I don't wanna fight your shadow Meet me back in 5 If I matter to you Like you say, I do Neoneun marya He's the one that's living in my system baby Oh my oh my God Yesanghaesseo na I was really hoping That he will come through Oh my oh my God Dan neoppuniya Asking all the time about what I should do No I can never let him go Neoman saenggangna 24 Nan haengunaya jeongmallo I know, I know Neol algi jeonkkajineun na Uimi eopseosseo jeonbu da Nae mami kkeuchi eomneun geol I know, I know I'm going crazy right? Eodiseodeun Myeot beonideun There ain't nothing else that I would hold on to I hear his voice Through all the noise Jamshirado nae son nochi ma no, no Geokjeong eopjana 'Cause I got someone Honjarado gwaenchana 'Cause I love someone H-h-hi, it's me again I'm back Hey Let's talk ASAP Do you have the time? Let's talk A-S-A-P, baby Hurry up, don't be lazy A-S-A-P, baby Hurry up, don't say maybe There's this one more thing I'll show you come with me So much to do and lots to see Just for a minute Tik, tok, tik, tok, tik, tik, tik Tik, tok, tik Just for a minute Tik, tok, tik, tok, tik, tok, tik, tik, tik Tik, tok, tik, tok, tik, tok, tik, tik, tik Just for a minute";
    const min = 3;
    const max = 200;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randLen + randStart);
  }
  
  // click listener for button
  $("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });