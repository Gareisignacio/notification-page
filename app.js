const notificationList = [
   {
      name: "Mark Webber",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      date: "1m ago",
      perfil_pic: "assets/images/avatar-mark-webber.webp",
      read: false,
   },
   {
      name: "Angela Gray",
      action: "followed you",
      date: "5m ago",
      perfil_pic: "assets/images/avatar-angela-gray.webp",
      read:false,
   },
   {
      name: "Jacob Thompson",
      action: "has joined your group",
      group: "Chess Club",
      date: "1 day ago",
      perfil_pic: "assets/images/avatar-jacob-thompson.webp",
      read: false,
   },
   {
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      date: "5 day ago",
      perfil_pic: "assets/images/avatar-rizky-hasanuddin.webp",
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      read: false,
   },
   {
      name: "Kimberly Smith",
      action: "commented on your picture",
      date: "1 week ago",
      perfil_pic: "assets/images/avatar-kimberly-smith.webp",
      picture:"assets/images/image-chess.webp",
      read: false,
   },
   {
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      date: "2 week ago",
      perfil_pic: "assets/images/avatar-nathan-peterson.webp",
      read: false,
   },
   {
      name: "Anna Kim",
      action: "left the group",
      group: "Chess Club",
      date: "2 week ago",
      perfil_pic: "assets/images/avatar-anna-kim.webp",
      picture:"assets/images/image-chess.webp",
      read: false,
   }
];

const mainContainer = document.querySelector(".main-container");
const markBtn = document.querySelector(".mark-read");
const redDot = document.querySelector(".dot");

function notificationArray(){
   for(let i = 0; i < notificationList.length; i++){
      let notifDiv = document.createElement("div");
      notifDiv.classList.add("notifications");
   
      let profilePic = document.createElement("img");
      profilePic.classList.add("perfil-pic");
   
      let infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
   
      let userDiv = document.createElement("div");
      userDiv.classList.add("user-notif");

      //Paragraphs
      let nameSpan = document.createElement("span");
      nameSpan.classList.add("name")
      nameSpan.textContent = notificationList[i].name;

      let actionSpan = document.createElement("span");
      actionSpan.classList.add("action");
      actionSpan.textContent = notificationList[i].action;
      
      if(notificationList[i].post !== undefined){
         let postSpan = document.createElement("span");
         postSpan.classList.add("post");
         postSpan.textContent = notificationList[i].post;
         userDiv.appendChild(postSpan);
      } else if(notificationList[i].group !== undefined){
         let groupSpan = document.createElement("span");
         groupSpan.classList.add("group");
         groupSpan.textContent = notificationList[i].group;
         userDiv.appendChild(groupSpan);
      }
      
      if(notificationList[i].picture !== undefined){
         let postImg = document.createElement("img");
         postImg.classList.add("post-pic");
         postImg.src = notificationList[i].picture;
      }

      let timeAgoPara = document.createElement("p");
      timeAgoPara.classList.add("time-ago");
   
      if(notificationList[i].message !== undefined){
         let messagePara = document.createElement("p");
         messagePara.classList.add("message");
         messagePara.textContent = notificationList[i].message;
      }
   
      // Introducir Div
      profilePic.src = notificationList[i].perfil_pic;

      userDiv.appendChild(nameSpan);
      userDiv.appendChild(actionSpan);

      timeAgoPara.textContent = notificationList[i].date;

      notifDiv.appendChild(profilePic);
      notifDiv.appendChild(userDiv);

      infoDiv.appendChild(userNotif);
      infoDiv.appendChild(timeAgoPara);

      notifDiv.appendChild(infoDiv)

      notifDiv.appendChild(postImg);
      
      mainContainer.appendChild(notifDiv);
      mainContainer.appendChild(messagePara);
   }
}

notificationArray();
