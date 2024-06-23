VAR love = 0
VAR strip_speaker_tags = false

-> Morning


=== Morning ===

Narrator: In the big city... # img bg: background-daytime.png

Gertrude: Look at me! #img lady: lady-happy.png 90 100 50

# audio: audio/car.mp3

Gertrude: A young visual novel sprite in the big city.

Gertrude: I wonder who I'll meet? #img lady: lady-listening.png

Gertrude: Someone cool, maybe?

Theodore: Hey! Nice to meet you! I'm a cool VN sprite. #img bro: bro-happy.png 10 100 50

Theodore: Wanna go out on a date with... ME?! #img bro: bro-listening.png

+ [Yes, please!!]
    
    Gertrude: I'd love to go on a date with... YOU!? #img lady: lady-excited.png
    
    Theodore: It's gonna be the best date ever! #img bro: bro-excited.png 10 100 50
    ~love++
    
    #img lady:
    #img bro:
    
    -> Evening
    
+ [Nope, never!!]
    
    Theodore: You're supposed to go on the date as part of the tutorial!!! #img bro: bro-angry.png
    
    Gertrude: I don't have to go on any dates I don't want to, you jerk!!! #img lady: lady-angry.png
    
    Theodore: You're right. I need to learn feminism. #img bro: bro-sad.png
    
    Theodore: Bye forver... #img bro:
    
    Gertrude: I'm single and that's OKAY by me. #img lady: lady-excited.png 50 100 50
    
    Narrator: <b>THE END</b>
    
-> PlayAgain

=== Evening ===

# img bg: background-evening.png
# audio: audio/harp.mp3

Narrator: Later that evening...

#img bro: bro-happy.png 10 100 50

#img lady: lady-happy.png 90 100 50

Gertrude: Thanks for asking me out! It was very heteronormative of you.

Theodore: Being heteronormative is... kinda my thing.

Gertrude: The background changed. It looks nice. #img lady: lady-happy.png 80 100 50

Theodore: You look nice. #img bro: bro-happy.png 20 100 50

Gertrude: Are we...? #img lady: lady-happy.png 70 100 50

Theodore: Is this...? #img bro: bro-happy.png 30 100 50

+ [Kiss!]

    Gertrude: ... #img lady: lady-happy.png 65 100 50
    
    Theodore: ... #img bro: bro-happy.png 35 100 50
    
    ~love++
    
    Gertrude: We don't have a kissing cutscene, do we? #img lady: lady-sad.png
    
    Theodore: What? Oh man, come on! #img bro: bro-angry.png
    
    #img lady: lady-happy.png 90 100 50
    
    #img bro: bro-sad.png 10 100 50
    
+ [Don't!]

    Gertrude: Nah, I'm good. #img lady: lady-happy.png 90 100 50
    
    Theodore: Oh no. Will I ever kiss...? #img bro: bro-sad.png 10 100 50

- Gertrude: The tutorial... I mean, the date is over. #img lady: lady-happy.png

{

- love > 1:

Gertrude: I think the two of us really love each other. Love wins! #img lady: lady-happy.png
    
- else:
    
Gertrude: Let's not even be friends!!! #img lady: lady-angry.png
    
}

Narrator: <b>THE END</b>

-> PlayAgain


=== PlayAgain ===

+ [Play again?]
    -> Restart

    
=== Restart ===

# RESTART

-> END

