// expected result from GET /messages/${username} 

const conversationMessage = [ 
  {
    senderId:"6084d06d159e890779753ea0",
    senderLang:"en",
    senderUsername:"pink",
    receiverUsername:"goku",
    receiverId:  "608622d8e574bf6e741ff32c",
    receiverLang: "es",
    messageSent:"Hello Friend",
    translatedMessage:"Hola amigo",
    //https://stackoverflow.com/questions/36550263/how-create-a-date-field-with-default-value-as-the-current-timestamp-in-mongodb
    timeSent: 1619566886, //unix timestamp 
  },
  {
    senderId:"6084d06d159e890779753ea0",
    senderLang:"en",
    senderUsername:"pink",
    receiverUsername:"goku",
    receiverId:  "608622d8e574bf6e741ff32c",
    receiverLang: "es",
    messageSent:"Hello Enemy",
    translatedMessage:"Hola enemiga",
    timeSent: 1619568952, //unix timestamp 
  },
  {
    senderId:"608622d8e574bf6e741ff32c",
    senderLang:"es",
    senderUsername:"goku",
    receiverUsername:"pink",
    receiverId:  "6084d06d159e890779753ea0",
    receiverLang: "en",
    messageSent:"Tengo hambre",
    translatedMessage:"I'm hungry",
    timeSent: 1619678952, //unix timestamp
  },
]
