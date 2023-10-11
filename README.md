# Ink VN-lite template

Write your choices in square brackets so the VN runner can distinguish the player's lines from the NPCs' lines:

```
* [Yeah, sure.]
* [No way!]
```


## Images

The image command is a tag.

`#img id: filename x y width`

`id` is the name of this sprite, so you can later move or remove it.

`x` and `y` are the image's placement as a percentage of the camera size, starting with `0 0` at the top-left. So `50 100` is bottom center, `100 100` is bottom right.

`width` is the size of the image as a percentage of the camera width.

Note that only the filename is case-sensitive. You can capitalize the `#IMG` and `ID:` parts however you like (though it's probably good to get into the habit of being consistent).

-----

So you could say `#img bro: bro-happy.png 50 100 25` to put a happy bro at the bottom center.

And then `#img sis: lady-angry.png 80 100 25` and `#img bro: bro-sad.png 25 100` to have his angry sister show up on the right while he moves to the left. Note that we can leave off the width on bro the second time: he'll stay the same size.

Finally he could leave (`#img bro:`) while she moves nearer the center (`#img sis: lady-sad.png 60 100`).

-----

To change the background, you can use `#img bg: background-evening.png`. The background doesn't take any sizing or placement parameters: it just covers the screen.


## Speaker Tags

Start a line with `Fred:` or `Gertrude:` or whatever to set the current speaker tag for the transcript. Set `VAR strip_speaker_tags = true` to strip these out of the displayed dialogue and show them only in the transcript.

If the same person is speaking multiple consecutive lines, you can leave out the tag on the later ones and it'll be automatically added.


## Styling

TODO


## Other Ink Commands (tags)

Again, note that none of the tags are case-sensitive: you can capitalize them however you want. And you can put spaces between the `#` and the command name if you want. You *will* have to get the capitalization correct for filenames though.

* `#audio my-audio-file.mp3` will play a sound effect. This is extremely simple and limited: you can only play one sound file at a time.
* `#restart` will restart the game
* Since _Fix Your Mother's Printer_ was styled as a video call app, we added the option to turn off the “video” and display the choices as buttons in a pop-up box. I don't know what you'd use this for, but I didn't see any reason to tear it out. So turn it on with `#alert` and go back to normal character dialogue with `#dialogue`.
