
function myMsgGen(){
    let randomFirst = Math.floor(Math.random() * ayah.length);
    let randomSecond = Math.floor(Math.random() * day.length);
    let random3 = Math.floor(Math.random() * times.length);
    return `${day[randomSecond]}'s ayah is : ${ayah[randomFirst]} and you can repeat it ${times[random3]} times`;
}


let ayah = ['O humanity! Worship your Lord, Who created you and those before you, so that you may become mindful "of Him"',
          'How can you deny Allah? You were lifeless and He gave you life, then He will cause you to die and again bring you to life, and then to Him you will all be returned',
           'Do not mix truth with falsehood or hide the truth knowingly',
           'Establish prayer, pay alms-tax, and bow down with those who bow down',
           'Do you preach righteousness and fail to practice it yourselves, although you read the Scripture? Do you not understand?',
          ' And seek help through patience and prayer. Indeed, it is a burden except for the humble—,',
            'To Allah belong the east and the west, so wherever you turn you are facing ˹towards˺ Allah. Surely Allah is All-Encompassing, All-Knowing.',
            'Allah only accepts the repentance of those who commit evil ignorantly ˹or recklessly˺ then repent soon after—Allah will pardon them. And Allah is All-Knowing, All-Wise.' ,
           'And it is Allah’s Will to lighten your burdens, for humankind was created weak.',
            'If you avoid the major sins forbidden to you, We will absolve you of your ˹lesser˺ misdeeds and admit you into a place of honour.'];

let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let times = [1,2,3];



console.log(myMsgGen());