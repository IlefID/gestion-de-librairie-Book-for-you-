import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string, public content:string){}

}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any ={
    "hi":"hello",
    "Hi":"Hello",
    "HI":"HELLO",
    "who are you":"My name is ChatBook",
    "Who are you":"My name is ChatBook",
    "what is angular":"Angular is the best framework ever ♥",
    "What is angular":"Angular is the best framework ever ♥",
    "i'm ilef":"Welcome ilef to Book For You ,How can i help you?",
    "i'm ranim":"Welcome ranim to Book For You ,How can i help you?",
    "i'm nour":"Welcome nour to Book For You ,How can i help you?",
    "i'm alya":"Welcome alya to Book For You ,How can i help you?",
    "do you have this book 'les langages de l'amour'":"yes",
    "who is his author 'les langages de l'amour'?":" Gary D. Chapman",
    "how much does it coast 'les langages de l'amour'? ":"19,00€",
    "do you have this book 'zero to one'":"yes",
    "who is his author of 'zero to one'?":" Peter Thiel",
    "how much does it coast of 'zero to one'? ":"25,00€",
    "do you have this book 'i will be fierce'":"yes",
    "who is his author of 'i will be fierce'?":" Bea Birdsong and Nidhi Chanani",
    "how much does it coast of 'i will be fierce'? ":"23,00€",
    "do you have this book 'amour propre'":"no",
    "okay thanks":"okay ☻",
    "do you have this book 'Educated'":"no",
    "do you have this book 'the rules of work'":"no",
    "default":"I can't understand.Can you repeat please" 
  }
  getBotAnswer(msg:any)
  {
    const userMessage=new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage =new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    },1500);
  }
  getBotMessage(question:string)
  {
    let answer=this.messageMap[question];
    return answer || this.messageMap['default']
  }
}
