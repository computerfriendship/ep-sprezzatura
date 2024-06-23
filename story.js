var storyContent = {"inkVersion":21,"root":[[{"->":"Morning"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Morning":[["^Narrator: In the big city... ","#","^img bg: background-daytime.png","/#","\n","^Gertrude: Look at me! ","#","^img lady: lady-happy.png 90 100 50","/#","\n","#","^audio: audio/car.mp3","/#","^Gertrude: A young visual novel sprite in the big city.","\n","^Gertrude: I wonder who I'll meet? ","#","^img lady: lady-listening.png","/#","\n","^Gertrude: Someone cool, maybe?","\n","^Theodore: Hey! Nice to meet you! I'm a cool VN sprite. ","#","^img bro: bro-happy.png 10 100 50","/#","\n","^Theodore: Wanna go out on a date with... ME?! ","#","^img bro: bro-listening.png","/#","\n","ev","str","^Yes, please!!","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Nope, never!!","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Gertrude: I'd love to go on a date with... YOU!? ","#","^img lady: lady-excited.png","/#","\n","^Theodore: It's gonna be the best date ever! ","#","^img bro: bro-excited.png 10 100 50","/#","\n","ev",{"VAR?":"love"},1,"+",{"VAR=":"love","re":true},"/ev","#","^img lady:","/#","#","^img bro:","/#",{"->":"Evening"},{"#f":5}],"c-1":["\n","^Theodore: You're supposed to go on the date as part of the tutorial!!! ","#","^img bro: bro-angry.png","/#","\n","^Gertrude: I don't have to go on any dates I don't want to, you jerk!!! ","#","^img lady: lady-angry.png","/#","\n","^Theodore: You're right. I need to learn feminism. ","#","^img bro: bro-sad.png","/#","\n","^Theodore: Bye forver... ","#","^img bro:","/#","\n","^Gertrude: I'm single and that's OKAY by me. ","#","^img lady: lady-excited.png 50 100 50","/#","\n","^Narrator: <b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":5}]}],{"#f":1}],"Evening":[["#","^img bg: background-evening.png","/#","#","^audio: audio/harp.mp3","/#","^Narrator: Later that evening...","\n","#","^img bro: bro-happy.png 10 100 50","/#","#","^img lady: lady-happy.png 90 100 50","/#","^Gertrude: Thanks for asking me out! It was very heteronormative of you.","\n","^Theodore: Being heteronormative is... kinda my thing.","\n","^Gertrude: The background changed. It looks nice. ","#","^img lady: lady-happy.png 80 100 50","/#","\n","^Theodore: You look nice. ","#","^img bro: bro-happy.png 20 100 50","/#","\n","^Gertrude: Are we...? ","#","^img lady: lady-happy.png 70 100 50","/#","\n","^Theodore: Is this...? ","#","^img bro: bro-happy.png 30 100 50","/#","\n","ev","str","^Kiss!","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Don't!","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Gertrude: ... ","#","^img lady: lady-happy.png 65 100 50","/#","\n","^Theodore: ... ","#","^img bro: bro-happy.png 35 100 50","/#","\n","ev",{"VAR?":"love"},1,"+",{"VAR=":"love","re":true},"/ev","^Gertrude: We don't have a kissing cutscene, do we? ","#","^img lady: lady-sad.png","/#","\n","^Theodore: What? Oh man, come on! ","#","^img bro: bro-angry.png","/#","\n","#","^img lady: lady-happy.png 90 100 50","/#","#","^img bro: bro-sad.png 10 100 50","/#",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Gertrude: Nah, I'm good. ","#","^img lady: lady-happy.png 90 100 50","/#","\n","^Theodore: Oh no. Will I ever kiss...? ","#","^img bro: bro-sad.png 10 100 50","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Gertrude: The tutorial... I mean, the date is over. ","#","^img lady: lady-happy.png","/#","\n",["ev",{"VAR?":"love"},1,">","/ev",{"->":".^.b","c":true},{"b":["\n","^Gertrude: I think the two of us really love each other. Love wins! ","#","^img lady: lady-happy.png","/#","\n",{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n","^Gertrude: Let's not even be friends!!! ","#","^img lady: lady-angry.png","/#","\n",{"->":".^.^.^.7"},null]}],"nop","\n","^Narrator: <b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":5}]}],{"#f":1}],"PlayAgain":[["ev","str","^Play again?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"Restart"},{"#f":5}]}],{"#f":1}],"Restart":["#","^RESTART","/#","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"love"},false,{"VAR=":"strip_speaker_tags"},"/ev","end",null],"#f":1}],"listDefs":{}};