const notificationList = [
   {
      name: "Mark Webber",
      action: "reacted to your recent post",
      postOrGroup: "My first tournament today!",
      date: "1m ago",
      perfil_pic: "assets/images/avatar-mark-webber.webp",
   },
   {
      name: "Angela Gray",
      action: "followed you",
      postOrGroup: "",
      date: "5m ago",
      perfil_pic: "assets/images/avatar-angela-gray.webp",
   },
   {
      name: "Jacob Thompson",
      action: "has joined your group",
      postOrGroup: "Chess Club",
      date: "1 day ago",
      perfil_pic: "assets/images/avatar-jacob-thompson.webp",
   },
   {
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      postOrGroup: "",
      date: "5 day ago",
      perfil_pic: "assets/images/avatar-rizky-hasanuddin.webp",
   },
   {
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      postOrGroup: "",
      date: "5 day ago",
      perfil_pic: "assets/images/avatar-rizky-hasanuddin.webp",
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
   },
   {
      name: "Kimberly Smith",
      action: "commented on your picture",
      postOrGroup: "",
      date: "1 week ago",
      perfil_pic: "assets/images/avatar-kimberly-smith.webp",
      picture:"assets/images/image-chess.webp",
   },
   {
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      postOrGroup: "5 end-game strategies to increase your win rate",
      date: "2 week ago",
      perfil_pic: "assets/images/avatar-nathan-peterson.webp",
   },
   {
      name: "Anna Kim",
      action: "left the group",
      postOrGroup: "Chess Club",
      date: "2 week ago",
      perfil_pic: "assets/images/avatar-anna-kim.webp",
      picture:"assets/images/image-chess.webp",
   }
];

const notifications = document.querySelector(".notifications");
const mainContainer = document.querySelector(".main-container");
const markBtn = document.querySelector(".mark-read");
const redDot = document.querySelector(".dot");

let newArray = [];

function notificationArray(){
   let notifDiv = document.createElement("div");
   notifDiv.classList.add("notifications");


   let profilePic = document.createElement("img");
   profilePic.classList.add("perfil-pic");

   let infoDiv = document.createElement("div");
   infoDiv.classList.add("info");

   let userNotif = document.createElement("p");
   userNotif.classList.add("user-notif");

   let timeAgoPara = document.createElement("p");
   timeAgoPara.classList.add("time-ago");

   let postImg = document.createElement("img");
   postImg.classList.add("post-pic");

   let messagePara = document.createElement("p");
   messagePara.classList.add("message");


   for(let i = 0; i < notificationList.length; i++){
      profilePic.src = notificationList[i].perfil_pic;

      userNotif.textContent = `${notificationList[i].name} ${notificationList[i].action} ${notificationList[i].postOrGroup}`;

      timeAgoPara.textContent = notificationList[i].date;

      postImg.src = notificationList[i].picture;

      messagePara.textContent = notificationList[i].message;

      notifDiv.appendChild(profilePic);

      infoDiv.appendChild(userNotif);
      infoDiv.appendChild(timeAgoPara);

      notifDiv.appendChild(infoDiv)

      notifDiv.appendChild(postImg);
      
      mainContainer.appendChild(notifDiv);
      mainContainer.appendChild(messagePara);
   }
}

notificationArray();