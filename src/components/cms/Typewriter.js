import React, { useRef, useEffect } from 'react';

const Typewriter = () => {

    const textElem = useRef(null);

    const phrases = [
        "decor", "living room", "room with 'that cupboard' in", "hiding place", "family room", "room that you will get to at some point", "quiet place", "kitchen", "room where the wine is kept", "personal space", "sanctuary ", "spare room", "room with the boxes still in ", "decor", "room you want to post on instagram", "place to relax", "retreat", "dining room", "place to eat good food ", "room for film nights", "room with the makeshift office ", "zen", "room to watch your favourite TV shows ", "room where you always escape to", "place to house your book collection", "rented home", "room where memories are made", "room with that chair holding the clothes pile", "multi-purpose space", "art studio", "decor", "room to tuck into that cake that you deserve  ", "bedroom", "your reading nook", "craft room", "room that you avoid", "music studio", "room where time is shared", "room to cook your favourite meal ", "forever home", "room perfect for a rainy day", "room that makes you smile", "bathroom", "room where you start your day ", "room where stories are shared ", "room that's half done", "nursery", "room for a mama to be ", "room to bring the family together ", "room where you can enjoy a bubbly bath ", "place for inspiration", "new home", "room where you hold the best parties ", "minimalist masterpiece ", "room that shows your personality ", "guest room", "room where your friend comes to stay", "home office ", "place to reset ", "utility room", "room where you can sing in the shower ", "apartment ", "room where you can work from home", "room where you keep hitting snooze when the alarm goes off", "first home", "conservatory ", "place where the magic happens", "room where you can be creative", "home cinema ", "room that you don't want to leave ", "your place to meditate ", "room where the houseplants live", "games room", "ideal space", "home studio", "room that never seems to be tidy", "kids bedroom", "room perfect for little ones", "toy room", "room where the dog tries to sleep", "distraction for the kids", "favourite room", "room where laughter is had ", "dressing room", "own snug", "home gym", "room where all your shoes live", "home bar lounge", "room where drinks are had ", "own library", "boot room", "room where muddy shoes are allowed", "decor"
    ];

    let self = {};

    const typePhrase = (el, phrases, period) => {
        console.log(el);
        self.phrases = phrases;
        self.el = el;
        self.loopNum = 0;
        self.period = parseInt(period, 10) || 2000;
        self.txt = '';
        self.tick();
        self.isDeleting = false;
    };

    self.tick = function() {
        var i = self.loopNum % self.phrases.length;
        var fullTxt = self.phrases[i];

        if (self.isDeleting) {
        self.txt = fullTxt.substring(0, self.txt.length - 1);
        } else {
        self.txt = fullTxt.substring(0, self.txt.length + 1);
        }

        self.el.innerHTML = '<span class="wrap">'+self.txt+'</span>';

        var that = self;
        var delta = 200 - Math.random() * 100;

        if (self.isDeleting) { delta /= 2; }

        if (!self.isDeleting && self.txt === fullTxt) {
        delta = self.period;
        self.isDeleting = true;
        } else if (self.isDeleting && self.txt === '') {
        self.isDeleting = false;
        self.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    useEffect(() => {
        typePhrase(textElem, phrases, 3000);
    });

    return (
        <div>
            <h3>Design your</h3>
            <p ref={textElem}></p>
        </div>
    );
}

export default Typewriter;