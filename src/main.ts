import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { HeroComponent } from './app/hero/hero.component';
import { FeaturesComponent } from './app/features/features.component';
// import { ProcessComponent } from './app/process/process.component';
import { TestimonialsComponent } from './app/testimonials/testimonials.component';
import { SubjectsComponent } from './app/subjects/subjects.component';
import { FaqComponent } from './app/faq/faq.component';
import { FooterComponent } from './app/footer/footer.component';
import { ChatPopupComponent } from './app/chat-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    // ProcessComponent,
    TestimonialsComponent,
    ChatPopupComponent,
    SubjectsComponent,
    FaqComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main>
        <app-chat-popup [isOpen]="isChatOpen" (isOpenChange)="isChatOpen = $event"></app-chat-popup>
        <app-hero></app-hero>
        <app-features></app-features>
        <!-- <app-process></app-process> -->
        <app-testimonials></app-testimonials>
        <app-subjects></app-subjects>
        <app-faq></app-faq>
      </main>
      <app-footer></app-footer>
    </div>
    <div class="orderOnWhatsapp">
        <a aria-label="livechat" rel="noreferrer" href="" class="liveChat tooltipBox" target="_blank">
                <span class="whtIcon"> <i class="fa fa-whatsapp fa-2x"></i></span>
                <span style="top: -6px; position: relative; font-size: 14px; margin-left: 5px; display: none;" class="whatsappText">Order/Chat On Whats App</span></a>
        </div>
    <button class="woot-widget-bubble woot-elements--right woot-widget--expanded" title="Open chat window" (click)="openChat()" style="background: rgb(4, 139, 37);"><svg id="woot-widget-bubble-icon" width="24" height="24" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z" fill="#FFFFFF"></path></svg><div id="woot-widget--expanded__text">Chat with us, We are Online!</div></button>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
    .woot-widget-bubble.woot-widget--expanded {
    transform: translateX(0px);
    transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-elements--right {
    right: 20px;
}
.woot-widget-bubble.woot-widget--expanded {
    bottom: 24px;
    display: flex;
    height: 48px !important;
    width: auto !important;
    align-items: center;
}
.woot-widget-bubble {
    transform-origin: center;
    will-change: transform, opacity;
    transform: translateX(0) scale(1) rotate(0deg);
    transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble {
    background: #1f93ff;
    border-radius: 100px;
    border-width: 0px;
    bottom: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
    cursor: pointer;
    height: 64px;
    padding: 0px;
    position: fixed;
    user-select: none;
    width: 64px;
    z-index: 2147483000 !important;
    overflow: hidden;
}
  `]
})
export class App {isChatOpen = false;
// Add a method to open the chat
openChat() {
  this.isChatOpen = true;
}}

bootstrapApplication(App);
