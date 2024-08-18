const array = [
    "Boost your coding skills with Coding Ninja! Improve your typing speed and accuracy while mastering the art of programming.",

    "Ready to become a coding wizard? Practice your typing speed with Coding Ninja's interactive website and level up your coding game!",

    "Calling all aspiring developers! Enhance your coding prowess with Coding Ninja's typing speed website, designed to make you a coding pro.",

    "Want to impress employers with your coding skills? Train your fingers with Coding Ninja's typing speed website and stand out in the tech industry.",

    "Unlock the secrets of coding efficiency with Coding Ninja's typing speed platform. Type faster, code better, and conquer any programming challenge.",

    "Become a coding samurai! Join Coding Ninja's typing speed website and sharpen your coding skills to slice through any coding obstacle.",

    "Coding Ninja's typing speed platform: Where speed meets precision. Enhance your coding abilities and accomplish tasks in record time!",

    "Tired of bugs slowing you down? Practice coding with Coding Ninja's typing speed website and squash those errors with lightning-fast fingers!",

    "Embark on a journey to coding mastery with Coding Ninja's typing speed website. Type like a ninja and code like a pro!",

    "Level up your coding game with Coding Ninja's typing speed platform. Are you ready to type your way to coding success?"
];

//Write your rest of the javascript here

const btn = document.getElementById("btn");

let myDate = new Date();



btn.onclick = () => {
    const msg = document.getElementById("msg");
    if (btn.textContent == "Done") {
        let newDate = new Date();
        const myWords = document.getElementById("mywords");
        let speed = Math.floor(myWords.value.split(" ").length/((newDate-myDate)/60000));
        btn.textContent = "Start";
        msg.textContent=`Your typing speed is ${speed} words per minute.`

    } else {
        let random = Math.floor(Math.random() * 100) % array.length;
        console.log(random);
        msg.textContent = array[random];
        btn.textContent = "Done";
        myDate = new Date();
    }
}