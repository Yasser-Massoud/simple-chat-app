




//A sad tale based on inspired by real life events :(
//Do not copy the code unless.

 var current_chat =  0;
 var is_typing;

var name1 = prompt("Please enter your name");
if(name1 === "" || name1 === null){
  name1 = "yeser";//I'm sorry but that's the best name I could think of  
}

var age = prompt("Please enter your age");
if(age === "" || age === null){
  age = "41";//I'm sorry but that's the best name I could think of  
}


alert("A short story titled, \"tassnim My Love\" by Nick .S. \nDisclaimers:\n1. Doesn't work well with all aspect ratios.\n2. Also a long list of alert popups coming up.  Hope you enjoy.");



$(document).ready(function(){
   
  
	
	$("#btn").click(function(){
		chat();
	});
});


//This function 'sends' messages from me to tassnim
function showMessage1(){
	var p = document.createElement('p');//create paragraph
	var node = document.createTextNode($('#input').find(':selected').text());//create text node
	p.appendChild(node);//add it to the paragraph you created
	p.setAttribute("id","me");//set the id attribute to me so you can style it in css
	var parent = document.getElementById('parent');//get the parent which is a div element
	 parent.append(p);//add the paragraph element to the div
	 
	 //This simply makes sure the focus is always on the last message
	  document.body.scrollTop = document.body.scrollHeight;
	  parent.scrollTop = parent.scrollHeight;
  
}

//basically similar to showMessage1() but has a Timeout
function showMessage2(message,time){
	 currentStatus(2);
	 setTimeout(function () {//Here is the time out
	var p = document.createElement('p');
	var node = document.createTextNode(message);
	p.appendChild(node);
	p.setAttribute("id","her");
	var parent = document.getElementById('parent');
	 parent.append(p);   
	  currentStatus(1);
	   document.body.scrollTop = document.body.scrollHeight;
	  parent.scrollTop = parent.scrollHeight;
	   
	 }, time * 1000);//pretend it's loading lolololol :D. Executes after time seconds
	
	  
}

function sendImage(url,time){
	currentStatus(2);
   setTimeout(function () {
	   var img = document.createElement('img');
	   img.setAttribute("src",url);
	   img.setAttribute("id","image");
	   var parent = document.getElementById('parent');
		parent.append(img); 
		 currentStatus(1);
	   document.body.scrollTop = document.body.scrollHeight;
	  parent.scrollTop = parent.scrollHeight;
	  
		
   }, time * 1000);//pretend it's loading again lolololol :D
}



function sendButtonStatus(status){//planned to disable send if tassnim is typing but It didn't work :(
  
	   $("#btn").attr("disabled",status);
	 
}


function updateOption(option1,option2,option3){//updates the 3 options for the user
	$('#o1').html(option1);
	 $('#o2').html(option2);
	  $('#o3').html(option3);
	  
	 
	 
}

//This method pretty much tells the story
//It uses current_chat which is an int that constantly increases by one in every chat. 
function chat(){
   
	switch(current_chat){
	   case 0:
			showMessage1();
			showMessage2("Hi, I'm  tasnim",3);
		  
			updateOption("Beautiful name","cute name");
			 current_chat += 1;
			
	break;
	 case 1:
		   showMessage1();
		   showMessage2("Thank you",3);
		   updateOption("I'm "+ name1 ,"My name is "+ name1, "They call me "+ name1);
		   current_chat += 1;
		   break;
		   
	case 2:
		   showMessage1();
		   showMessage2("Weird name. What do you do " + name1,3);
		   updateOption("I'm a programmer","I'm a code guru", "Programming...");
			current_chat += 1;
		   break;
  
	  
   case 3:
		  showMessage1();
		  showMessage2("(: No wonder",3);
		  updateOption("?No wonder what","?What...","??");
		  
		   current_chat += 1;
		   break;
	
	case 4:
		   showMessage1();
		  showMessage2("You're on this dating app. Programmers have no social life. LOL",3);
		  updateOption("That's not entirely true","I have a social life","You are wrong");
		  
		   current_chat += 1;
		   break;
		   
	case 5:
		   showMessage1();
		  showMessage2("?Have you ever had a girlfriend",3);
		  updateOption("Ammmmm...No","...Not really","No...");
		  
		   current_chat += 1;
		   break;
		   
   case 6:
		  showMessage1();
		  showMessage2("And how old are you",3);
		  updateOption("I'm " + age,"Just "+age+ " years old","Huh...Only "+age);
		  
		   current_chat += 1;
		   break;
   case 7: showMessage1();
		  showMessage2("? ☺ You see what I mean",3);
		  updateOption("How did you know my life sucks","How can you tell these things","Wow..okay...");
		  
		   current_chat += 1;
		   break;
   case 8:
		  showMessage1();
		  showMessage2("My brother is a programmer. All he does is stare at his computer all day doing God knows what",3);
		  updateOption("?Okay. What do you do","?And you","?what about you");
		  
		   current_chat += 1;
		   break;
		   
   case 9:
		  showMessage1();
		  showMessage2("Just living life :)",3);
		  updateOption("LOL...Very open of you","...","Haha, funny...");
		  
		   current_chat += 1;
		   break;
		   
	case 10:
			showMessage1();
		  showMessage2("The 3 dots you keep using. It's cute",3);
		  updateOption("Thanks hehe","...",".Thanks tassnim");
		  
		   current_chat += 1;
		   break;
	case 11:
			showMessage1();
		  showMessage2("So what are you doing? Jacking off",3);
		  updateOption("OMG! Why would you ask me that","?!!What...","?Are you seriously asking me that");
		  
		   current_chat += 1;
		   break;
		   
		   
	case 12:
			showMessage1();
			showMessage2("I can help (;",3);
			updateOption("?With what","?How exactly","?Wow! How...");
		  
		   current_chat += 1;
		   break;
	case 13:
			showMessage1();
			showMessage2("Nudes, I know you want my nudes",3);
		  updateOption("LOL you're crazy","?What...","?You're serious");
		  
		   current_chat += 1;
		   break;
	case 14:
			showMessage1();
			showMessage2("?Do you mind if I send you one",3);
			updateOption(".I don't mind","Huh...okay",".Not at all");
		  
		   current_chat += 1;
		   break;
	case 15:
			showMessage1();
			showMessage2("?So, you do want my nudes",3);
			updateOption("Ammmmmm...","...","?Wooow....I...Is this a test");
		  
		   current_chat += 1;
		   break;
	case 16:
			showMessage1();
			showMessage2("I hope you are not this awkard in person",3);
			updateOption("?I'm not, are you sending","!No,please send me","I'm not awkard. How can I say no");
		  
		   current_chat += 1;
		   break;
	case 17:
			showMessage1();
			showMessage2("?You want a picture of my pussy",3);
			updateOption("Wow...okay","!Yes...send it now","?Not sure about that");
		  
		   current_chat += 1;
		   break;
	case 18:
			showMessage1();
			sendImage("http://www.tridanim.com/images/s2.favim.com/orig/150809/animals-cat-cute-cat-happy-cat-Favim.com-3085942.jpg",3);
			updateOption("!LOL",".I knew it","That's what you have down there");
		  
		   current_chat += 1;
		   break;
	case 19:
			showMessage1();
			showMessage2("?Cute or nah",3);
			updateOption(".I'm a dog person",".Not really",".I'm not sure about that");
		  
		   current_chat += 1;
		   break;
	case 20:
			showMessage1();
			showMessage2(" ☺ Then, I have to end things here",3);
			updateOption("I'm kidding, don't go","C'mon dear",":) I love the kitten");
		  
		   current_chat += 1;
		   break;
	case 21:
			showMessage1();
			showMessage2("😂😂.LOL",3);
			updateOption("?How old are you","?What's your age","?Your age");
		  
		   current_chat += 1;
		   break;
	case 22:
			showMessage1();
			showMessage2("(; Old enough",3);
			updateOption("?Flirt much","You are really flirty","...");
		  
		   current_chat += 1;
		   break;
	case 23:
			showMessage1();
			showMessage2("I like your nerdy profile picture. It's really cute",3);
			updateOption("Thanks...","Looking good too","I like yours more");
		  
		   current_chat += 1;
		   break;
	case 24:
			showMessage1();
			showMessage2("Night Nerd",3);
			updateOption("Goodnight tassnim","😊 Night","?No goodnight kiss");
		   current_chat += 1;
		   break;
	case 25:
		   showMessage1();
		   updateOption("Hey","Morining","tassnim...");
		   current_chat += 1;
		   break;
  
		   
	case 26:
			alert("On that night " + name1 + " could not sleep. He kept thinking about tassnim. Her beauty. He couldn't believe that such a beautiful girl like tassnim had taken interest in a guy like him. ");
			alert("Perhaps she wasn't real, a sick troll on the internet playing a sick joke on him? "+ name1 + " wasn't too skeptical. He had a positive feeling about tassnim.");
		   alert(name1 + " had never been good with the ladies. He never had any girl take interest in him the way tassnim did. " + name1 + " really liked this girl.");
		   showMessage1();
			showMessage2("?Hey, miss me already",3);
			updateOption("Maybe...","!hehe No","Not too much...");
		  
		   current_chat += 1;
		   break;
	case 27:
		   showMessage1();
			showMessage2(name1 + ", I'm the only girl on your contact list whose not your sister or cousin. LOL",3);
			updateOption("?Why do you always put me down like that","You're being mean","Not funny tassnim. Why did you say that");
		  
		   current_chat += 1;
		   break;
	case 28:
		   showMessage1();
			showMessage2("Cuz you're so adorable",3);
			updateOption("!tassnim","!I'm mad","!I'm being serious here");
		  
		   current_chat += 1;
		   break;
	case 29:
		   showMessage1();
			showMessage2("(: Okay Mr Sensitive. Won't do it again. Scouts honor",3);
			updateOption("LOL...you're silly","Good","...");
		  
		   current_chat += 1;
		   break;
	case 30:
		   showMessage1();
			showMessage2("Oookay",3);
			updateOption("Hmmmmm...","Yeah","Mmmmh");
		  
		   current_chat += 1;
		   break;
	case 31:
		   showMessage1();
			showMessage2("?What are you up to",3);
			updateOption("I'm coding","Hacking NASA","Programming Stuff on SoloLearn");
		  
		   current_chat += 1;
		   break;
	case 32:
		   showMessage1();
			showMessage2("LOL..."+ age+   " year old virgin with computers all day in your mum's basement",3);
			updateOption("There you go again", "??Really","!Seriously. tassnim");
		  
		   current_chat += 1;
		   break;
	case 33:
		   showMessage1();
			showMessage2("?What? I'm I wrong",3);
			updateOption("?About What","?About","??");
		  
		   current_chat += 1;
		   break;
	case 34:
		   showMessage1();
			showMessage2("?You being a virgin",3);
			updateOption("Listen. I might not be the most popular guy around but I have a social life, friends and family that care about me","What does that have to do with anything","That's a bit personal tassnim");
		  
		   current_chat += 1;
		   break;
	case 35:
		   showMessage1();
			showMessage2("LOLOL! You need to get out and get laid",3);
			updateOption("?I'm awkward around girls too. Isn't that what you want to hear","Whatever","This is crazy");
		  
		   current_chat += 1;
		   break;
	case 36:
		   showMessage1();
			showMessage2("It confirms the stereotype",3);
			updateOption("?What are you up to","WYD","?What are you doing");
		  
		   current_chat += 1;
		   break;
	case 37:
		   showMessage1();
			sendImage("https://images-na.ssl-images-amazon.com/images/I/91%2BpVzw8qEL._SX342_.jpg",3);
			updateOption("!I love that show","No way, so cool","Awesome show");
		  
		   current_chat += 1;
		   break;
	case 38:
			showMessage1();
			showMessage2("Ikr. Who doesn't love Rick and Morty",3);
			updateOption("You wanna hang out and watch it","Let's watch it together","?Wanna see it together");
		  
		   current_chat += 1;
		   break;
	case 39:
			showMessage1();
			showMessage2("Like a netflix and chill kinda thing",3);
			updateOption("!Haha, No","!Wooow, No","!Yes, exactly");
		  
		   current_chat += 1;
		   break;
	case 40:
			showMessage1();
			showMessage2("I'm kidding, you're a nice person " + name1,3);
			updateOption("Thanks","Yes","Only nice to you");
		  
		   current_chat += 1;
		   break;
	case 41:
		 showMessage1();
			showMessage2("...",3);
			updateOption("?Haha...What","LOL, you stole my dots","LOL...");
		  
		   current_chat += 1;
		   break;
	case 42:
		   showMessage1();
			showMessage2("I think someone broke into my house " + name1,3);
			updateOption("???What, are you okay","?Should I call 911","?tassnim, you're serious");
		  
		   current_chat += 1;
		   break;
	case 43:
		   showMessage1();
			sendImage("https://easter.org/wordpress/wp-content/uploads/2014/08/SafeHouse-thumbnail.jpg",3);
			updateOption("tassnim, Where do you live? I want to call 911","!tassnim, Go hide now","I'm calling the police");
		  
		   current_chat += 1;
		   break;
	case 44:
			showMessage1();
			showMessage2("OMG",3);
			sendImage("http://vault.starproperty.my.s3.amazonaws.com/wp-content/uploads/2013/06/tapah-murthi.jpg",4);
			updateOption("?Where's your address","???tassnim, what's happening","!!!!Hide now");
		  
		   current_chat += 1;
		   break
	case 45:
		 showMessage1();
			showMessage2("LOLOL, you're too easy",3);
			updateOption("Sigh! You had me scared there","You got me","I was so scared");
		  
		   current_chat += 1;
		   break;
		   alert("later that night...");
		   
	case 46:
		   showMessage1();
			showMessage2("😘",3);
			updateOption("?Is that mine","?For me","?...For who");
		  
		   current_chat += 1;
		   break;
		
	case 47:
		   showMessage1();
			showMessage2("No it's for my cat. Fcos it's for you silly. Night Dork",3);
		  
			updateOption("Night tassnim","*: Night","sleep tight");
		  
		   current_chat += 1;
		   break;
	case 48:
		 
		   showMessage1();
		   
			updateOption("Morning. Just wake up already","Morning","Morning Sunshine");
		  
		   current_chat += 1;
		   break;
	case 49:
			  alert(name1 + " couldn't help but foolishly smile. tassnim had lit up a spark in him. For the first time in a long time " + name1 + " felt alive.");
		  alert(name1 + " slept like a baby and had a beautiful dream about tassnim.");
			 alert("When "+ name1 + " woke up, He knew he had to build up his confidence and meet up with tassnim");
			 alert("He knew he had to do this in order to steal tassnim's heart");
		   showMessage1();
			showMessage2("(: Morning",3);
			updateOption("I need your advice on something","I need your advice","?A piece of advice from you");
		  
		   current_chat += 1;
		   break;
	case 50:
		   showMessage1();
			showMessage2("?Advice on what",3);
			updateOption("How to impress this girl. And be confident around her","I want to be confident","To impress a girl and improve my confidence");
		  
		   current_chat += 1;
		   break;
	case 51:
		   showMessage1();
			showMessage2("Take alcohol. It helps with anxiety",3);
			updateOption("?What","?Really","?Are you sure");
		  
		   current_chat += 1;
		   break;
	case 52:
		   showMessage1();
			showMessage2("Okay, cocaine is much better for your confidence",3);
			updateOption("!tassnim","I'm serious, I really like her","C'mon");
		  
		   current_chat += 1;
		   break;
	case 53:
		   showMessage1();
			showMessage2("LOLOL😂😂",3);
			updateOption("That girl is you","It's you I wanna be confident for","I want to impress you");
		  
		   current_chat += 1;
		   break;
	case 54:
		   showMessage1();
			showMessage2("?And",3);
			updateOption("I wanna meet up with you today","Let's go on a date","Let's meet up today");
		  
		   current_chat += 1;
		   break;
	case 55:
		  showMessage1();
			showMessage2("Okay, where? It better be worth my time",3);
			updateOption("At the park","At the movies","At the beach");
		  
		   current_chat += 1;
		   break;
	case 56:
		   showMessage1();
			showMessage2("?What time",3);
			updateOption("At 1400 hrs","Exactly 1400 hrs","1400 hrs");
		  
		   current_chat += 1;
		   break;
	case 57:
		   showMessage1();
			showMessage2("!At 1400 hrs??, Who says that? Such a dork. It's a date then LOL",3);
			updateOption("Haha...I can't wait","I'm super nervous","LOL... I say 1400 hrs");
		   
		   current_chat += 1;
		   break;
	case 58:
		   
  
			  alert("The date was unlike anything "+ name1 + " had ever imagined. tassnim was even more beautiful and charming in person. Suddenly nothing but tassnim mattered to him.");
			alert("When it reached 6 pm. They started walking home. The sun was setting and the twilight looked amazing. They were holding hands. As they walked, tassnim made "+ name1 + " stop. She looked at him straight in the eyes. John felt shy but tried his best to relax. She stood up on her toes and gave " + name1 + " a soft kiss on his lips. She teased him for not making the first move on her. So many emotions surged through " + name1+ "'s head.");	
			alert("One thing was for sure though, "+name1 + " was in love.");
			updateOption("Morning sunshine","Hey beautiful","Morning tassnim");
		   
		   current_chat += 1;
		   break;
	case 59:
		   
		   showMessage1();
			showMessage2(".Morning",3);
			updateOption("Yesterday was amazing, It was the best day of my life",".Yesterday was perfect","I want to redo yesterday until we get old");
		  
		   current_chat += 1;
		   break;
	case 60:
		   showMessage1();
			showMessage2("It was really fun",3);
			updateOption("I really like you tassnim","I like you","I like you very much");
		  
		   current_chat += 1;
		   break;
	case 61:
		   showMessage1();
			showMessage2("I like you too",3);
			updateOption("I love you","Scratch that. I love you","I'm in love with you tassnim");
		  
		   current_chat += 1;
		   break;
		   
	case 62:
		  showMessage1();
			showMessage2("??What",3);
			updateOption("I've never been so sure of anything in my life","I do love you","Yes tassnim. I love you");
		  
		   current_chat += 1;
		   break;
	case 63:
		   showMessage1();
			showMessage2("I have to go "+ name1,3);
			updateOption("?Did I say, something wrong","tassnim, No","...Please don't");
		  
		   current_chat += 1;
		   
		
		   break;
	case 64:
			 showMessage1();
		   alert("For 2 weeks "+name1 + " couldn't get hold of tassnim. He tried everything. From calling her cell, going to her place to asking her neighbours if they knew where she was.");
		   alert("His beautiful angel had slipped away from him. He would have given anything to see tassnim again" + " to hold her hand even for just a moment, to see her beautiful warm smile again.");
		   alert("After the 3rd week, " + name1+ " got a message.");
		   
		 
		   showMessage2("Hello. My name is Martha. I'm tassnim's mother. She asked me to tell you this beacuse " + "she"+  " cared about you. She had stage 4 cancer and had a very short time to live. She loved" + " spending the last moments of her life with you because you were real and made her happy. She"+ " was"+ " rude to you some of the times because she didn't want to hurt you in the end. She "+ "cared"+ " about you very much. My little daughter is gone now. She's gone to be with the Lord. She" + " passed away 3 days ago in St Lucia Hospital",8);
		   
			updateOption("This can't be","tassnim","No...No...tassnim that's you joking");
		 
		   current_chat += 1;
		   break;
	case 65:
			showMessage1();
			
			 showMessage2("I'm afraid that's the case sir. tassnim is really gone",3);
			 updateOption("But she was okay a few weeks ago","tassnim cannot be dead","This cannot be happening");
		   
		   current_chat += 1;
		   break;
	   
		   
		   
   case 66:
		  showMessage1();
		  showMessage2("It was hard for us all. It still is. She asked me to send you this",3);	 
		  showMessage2(		 "Remember when we first did meet, " +
								   "our hearts rejoiced and skipped a beat. "+
								   "Remember our first kiss goodnight, "+ 
								  "the hug we shared that summer's night. "+
								   "Remember when we walked the beach "+
								   "and all our dreams within our reach. "+
								  "Remember how we used to be "+ 
								 "when I had you and you had me. "+
								  "Remember when we used to talk, "+
								 "when we held hands and took long walks. "+
								 "Remember how we spent our days "+
"								in warm sunshine and in the rain",7);
		sendImage("https://st.depositphotos.com/1004472/2301/v/950/depositphotos_23012960-stock-illustration-i-love-you-too.jpg",8);
		 showMessage2("She couldn't finish the poem",10);
		   updateOption("I'm sorry. I cant't help but cry","...","I loved your daughter very much");
		   
		   current_chat += 1;
		   break;
	case 67:
			  showMessage1();
				
	alert(name1 + "'s heart was torn apart. His life with tassnim, had just vanished in thin air.");
	alert("The only saved memories he had were the chats he had with her.");
	alert("It was only a few days to valentines. He was going to be in his room that day. Thinking about tassnim. His first love.");
	alert("Programmers need friends and love too. Go to that person you love and spend time with him/her. Buy them a gift this valentines season and remind them how much you care about them.  You still have time to prepare :)");
   currentStatus(3);//she's offline now. Never to talk again
		  
	alert("The END. Happy valentines good people!");
	}
}


//This final function defines the current status of tassnim
function currentStatus(current_status){
 if(current_status == 1){
	 
	 $('#status').css('font-style','normal');	 //currently online
	 $('#status').html('online');
	  $('#dot').css('opacity','1');
	 
 } else if(current_status == 2){
 
	//currently typing
	 setTimeout(function () {
	$('#status').html('typing...');
		$('#status').css('font-style','italic'); 
  $('#dot').css('opacity','1');

	 }, 1000);//pretend it's loading lolololol :D
 } else if (current_status == 3){
	
	//currently offline
   $('#status').html('offline');
   $('#dot').css('opacity','0');
 } 
}



