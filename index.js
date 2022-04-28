// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/*** ASK FOR HOROSCOPE SIGN ***/

/* Task: Create a program that asks the user what the zodiac sign is and print certain text for that zodiac sign in the console. */

function askUserForHoroscopeSign() {
  /* User name */
  var userName = document.querySelector('#userName');
  var userNameValue = prompt('Enter your name!');
  console.log(userNameValue);
  userName.innerText = userNameValue;

  /* User zodiac sign */
  var userZodiacSign = document.querySelector('#userZodiacSign');
  var userZodiacSignValue = prompt('Enter your zodiac sign!');
  console.log(userZodiacSignValue);
  userZodiacSign.innerText = userZodiacSignValue;

  /* Zodiac signs description */
  var userZodiacSignDescription = document.querySelector(
    '#userZodiacSignDescription'
  );
  var ariesDescription =
    'Aries is considered fierce, active, and even aggressive, prone to competition and tireless in responding to challenges. But, beneath all that fighting spirit, passion and love for victory and recognition, lie the hidden depths of a big and sensitive heart. What Aries really wants and what he secretly longs for is great and true love - to love and to feel loved.';
  var taurusDescription =
    'Taurus is known as the most stubborn sign in the horoscope, which is confirmed by the fact that they can be very hard, rejecting any argument against their beliefs. However, the Bulls are very sensitive and kind and they would like to be like that all the time, only that life has taught them not to pay off. This means that Taurus will be kind and kind whenever others allow him to, that is, when they themselves are polite and kind, but he will show the strength of his stubbornness and opposition, if you try to stand in his way.';
  var twinsDescription =
    'They consider them superficial, duplicitous and reckless people, who constantly change their minds and go from relationship to relationship. But Gemini is a fantastic friend and he will do anything for close people - everything he needs and more. If he leaves the impression that he is just running and doing three hundred things at once, it does not mean that Gemini is disorganized and careless, but that he is trying to please everyone.';
  var cancerDescription =
    'Crabs themselves are more insane to hear about how emotional they are, because that means both insane and unstable, and Cancers are actually much stronger than they seem. Cancers use their emotions to improve their situation, not to make it worse, and they express their emotions in order to see them and understand what they need to do. Cancer does not run away from feelings and is much smarter than many.';
  var lionDescription =
    'Leo is egocentric, loves shine, loves to show off, he needs respect and adoration. Okay, but there is a lot more to it than that. Lions are dedicated and loyal friends, very generous and generous when it comes to helping a loved one, even to their own detriment. And he does not do it to get praise and respect, it just happens spontaneously.';
  var virgoDescription =
    'Analytical, serious, petty and cold Virgos are also considered egocentric and hardworking people. But Virgo is one of the most caring and attentive signs in the horoscope. She honestly and devotedly takes care of the people in her life, only she does not express that concern in an emotional way, but in a much more practical and logical way. Virgo is there to give every support and to surprise you with her loyalty and understanding.';
  var libraDescription =
    'When you are dealing with Libra, you will sometimes see how her effort to achieve balance and win beautiful and positive things in life becomes despair when she does not get what she wants, and how she then redirects to a new goal. However, Libra is very thoughtful and does everything on purpose. It is difficult for her to give in completely, not because she is afraid or does not have the capacity, but because she wants to make the best possible decision. So she will take as much time as she needs to make sure she is doing the right thing.';
  var scorpioDescription =
    'Scorpios carry the label of heavy darklings, and their behavior deserves it - but it is a test of courage. Whoever has the guts to get closer and look deeper, will discover the most romantic and interesting person he has ever met. For Scorpio, life is too short to look for anything that does not engage her passion and dedication. She is intense - in the best way.';
  var sagittariusDescription =
    'Dear, cheerful, positive, surrounded by a mass of people, the soul of fun - this is Sagittarius as others see him. Inside, he is deep and thoughtful and often does not show his feelings because he is afraid of rejection, and when he opens up to someone, it means that he is convinced that he will be understood and accepted as he is. Sagittarius has big dreams and vivid imagination and specific attitudes about the world around him, and if he shares it with someone, he wants to be respected and understood.';
  var capricornDescription =
    'Capable and hardworking Capricorn seems limited by his high standards and criteria - focused, organized and ambitious, Capricorn does not look away from the goal and everyone gets out of his way, trying not to bother him, convinced that what they would like to share, Capricorns in general it is neither important nor interesting. Capricorns would like people around them to understand their sensitivity, but they just can’t show it and risk not getting the understanding and support they need. In order for Capricorn to open up, he needs to have complete confidence in you.';
  var aquariusDescription =
    'Eccentric, thoughtful and a little crazy Aquarius is not such a weirdo that exists outside the world, as it sometimes seems. She is the type of person who achieves the most in peace and solitude - Aquarius must have quality periods of solitude in order to function. She is independent and emotional at the same time, and she likes to solve her problems on her own, thinking, discovering, connecting and processing. He will always return to his relatives - but he must have enough time for himself.';
  var piscesDescription =
    'Since most people think that strength is the ability to hide and control your feelings, Pisces is considered an excessive playwright. But Pisces think completely differently and find strength and vitality in expressing their emotionality. They have a supply of inner strength, with which they go through life, bravely overcoming the greatest obstacles.';

  if (userZodiacSign === 'aries') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        ariesDescription
    );
    userZodiacSignDescription.innerText = ariesDescription;
  } else if (userZodiacSign === 'taurus') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        taurusDescription
    );
    userZodiacSignDescription.innerText = taurusDescription;
  } else if (userZodiacSign === 'twins') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        twinsDescription
    );
    userZodiacSignDescription.innerText = twinsDescription;
  } else if (userZodiacSign === 'cancer') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        cancerDescription
    );
    userZodiacSignDescription.innerText = cancerDescription;
  } else if (userZodiacSign === 'lion') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        lionDescription
    );
    userZodiacSignDescription.innerText = lionDescription;
  } else if (userZodiacSign === 'virgo') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        virgoDescription
    );
    userZodiacSignDescription.innerText = virgoDescription;
  } else if (userZodiacSign === 'libra') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        libraDescription
    );
    userZodiacSignDescription.innerText = libraDescription;
  } else if (userZodiacSign === 'scorpio') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        scorpioDescription
    );
    userZodiacSignDescription.innerText = scorpioDescription;
  } else if (userZodiacSign === 'sagittarius') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        sagittariusDescription
    );
    userZodiacSignDescription.innerText = sagittariusDescription;
  } else if (userZodiacSign === 'capricorn') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        capricornDescription
    );
    userZodiacSignDescription.innerText = capricornDescription;
  } else if (userZodiacSign === 'aquarius') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        aquariusDescription
    );
    userZodiacSignDescription.innerText = aquariusDescription;
  } else if (userZodiacSign === 'pisces') {
    console.log(
      userNameValue +
        ' ' +
        userZodiacSign +
        ' is a great sign. Description: ' +
        piscesDescription
    );
    userZodiacSignDescription.innerText = piscesDescription;
  }
}

askUserForHoroscopeSign();
