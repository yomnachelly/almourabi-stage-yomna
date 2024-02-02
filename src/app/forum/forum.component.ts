import { Component } from '@angular/core';
import { Status, Topic } from '../Models/Topic';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  topics: Topic[] = [];
  topicStatus = Status;

  name!: string;



  constructor() { }

  ngOnInit() {
    this.getTopics();


  }


  getTopics() {
    for (let i = 1; i <= 50; i++) {
      this.topics.push({
        id: i,
        title: `Topic ${i}`,
        subject: `Subject ${i}`,
        likes: Math.floor(Math.random() * 100),
        replies: Math.floor(Math.random() * 20),
        views: Math.floor(Math.random() * 200),
        activity: "2024-02-02T12:00:00Z",
        status: i % 2 === 0 ? this.topicStatus.CLOSED : this.topicStatus.OPEN
      });
    }

  }






  stringToHexColor(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - color.length) + color;
  }



}
