// chat-popup.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-popup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chat-popup-overlay" [class.active]="isOpen" (click)="close()">
      <div class="chat-popup" (click)="$event.stopPropagation()">
        <div class="chat-header">
          <h2>Chat with Real Person <span>👋</span></h2>
          <p>We DO NOT believe in automated reply by BOTS</p>
          <button class="close-btn" (click)="close()">×</button>
        </div>
        <div class="chat-body">
          <!-- Chat messages will go here -->
          <div class="chat-message bot">
            <p>Hello! How can we help you today?</p>
          </div>
        </div>
        <div class="chat-footer">
          <div class="status-message">
            <h3>We are away at the moment</h3>
            <p>Typically replies in a few minutes</p>
            <button class="start-chat-btn">
              Start Conversation <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chat-popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .chat-popup-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    .chat-popup {
      width: 90%;
      max-width: 500px;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
      transform: translateY(20px);
      transition: transform 0.3s ease;
    }
    
    .chat-popup-overlay.active .chat-popup {
      transform: translateY(0);
    }
    
    .chat-header {
      background: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
      position: relative;
    }
    
    .chat-header h2 {
      margin: 0 0 5px 0;
      font-size: 1.5rem;
    }
    
    .chat-header p {
      margin: 0;
      opacity: 0.8;
      font-size: 0.9rem;
    }
    
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    
    .chat-body {
      padding: 20px;
      min-height: 200px;
      max-height: 60vh;
      overflow-y: auto;
    }
    
    .chat-message {
      margin-bottom: 15px;
      padding: 10px 15px;
      border-radius: 18px;
      max-width: 80%;
    }
    
    .chat-message.bot {
      background: #f1f1f1;
      margin-right: auto;
    }
    
    .chat-footer {
      padding: 20px;
      background: #f8f9fa;
      border-top: 1px solid #eee;
      text-align: center;
    }
    
    .status-message h3 {
      margin: 0 0 5px 0;
      font-size: 1.1rem;
    }
    
    .status-message p {
      margin: 0 0 15px 0;
      color: #666;
      font-size: 0.9rem;
    }
    
    .start-chat-btn {
      background: #2ecc71;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: background 0.3s ease;
    }
    
    .start-chat-btn:hover {
      background: #27ae60;
    }
  `]
})
export class ChatPopupComponent {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
close() {
  this.isOpen = false;
  this.isOpenChange.emit(false);
}
}