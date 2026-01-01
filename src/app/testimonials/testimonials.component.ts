import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-section-grey" style="background: rgb(255 253 237);">
        <div class="container">
                <div class="col-sm-12" style="padding: 56px 56px; border-radius: 16px; background-color: rgb(233 255 250);">
                        <div class="row">
                                <div class="col-sm-7">
                                        <h3 class="large-heading" style="margin-bottom: 24px; color: #4c4c4c; font-size: 28px; line-height: 44px; text-transform: lowercase; font-family: fantasy; width: 100%;">
                                                <span class="text-span-10" style="text-transform: capitalize;"><strong>Why Choose Us to Do Your Online Class? Guaranteed Result &amp; Peace of Mind</strong><br></span>
                                        </h3>
                                        <ul class="list-vertical space-vertical home-list" style="color: #606060; margin-top: 36px; grid-row-gap: 20px; padding-left: 24px; line-height: 40px; font-family: monospace; font-size: 16px;">
                                                <li>
                                                        <div>Pay Only After You See Your Grades. No Upfront Payment.<br></div>
                                                </li>
                                                <li>
                                                        <div>We know all kind of platforms such as Edgenuity, Canvas, Moodle, BB and lot more.<br></div>
                                                </li>
                                                <li>
                                                        <div>Pay using Credit Card or Debit Card through Channel Protected by 256-bit SSL Encryption<br></div>
                                                </li>
                                                <li>
                                                        <div>24/7 Expert Support: Connect with Our Team via SMS, WhatsApp, or Live Chat.<br></div>
                                                </li>

                                                <li>
                                                        <div>We offer customized services not just for online classes, but also for assignments, quizzes, proctored exams and much more.<br></div>
                                                </li>
                                        </ul>
                                </div>
                                <div class="col-sm-5 hidden-xs" style="
                                left: -5.3vw;
                                top: 1px;
                                z-index: auto;
                                padding: 48px;">
                                <img class="hiddenImages" src="https://www.allassignmenthelp.com/static/images/communication.png" data-src="https://www.allassignmenthelp.com/static/images/communication.png" alt="communication">
                        </div>
                </div>
                <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                                <div class="aah-banner-stats" style="width: 100%; float: left; position: relative; margin: 20px auto 0px; clear: both;">
                                        <div class="row">
                                                <div class="input-wrapper" style="
                                                width: 100%;
                                                height: 80px;
                                                border-radius: 3px;
                                                background-color: #fff;
                                                -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.28);
                                                -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 28%);
                                                box-shadow: 0 2px 4px 0 rgb(0 0 0 / 28%);
                                                margin: 0 auto;
                                                ">
                                                <img src="https://www.allassignmenthelp.com/static/images/usflag.svg" alt="Online Exam Assistance" height="100" loading="lazy" width="30" class="image-33" style="width: 30px; height: 30px; top: 35px; left: 29px; position: absolute; display: block;">
                                                <input id="sendmetext" name="number" class="inputmask" type="tel" placeholder="(XXX) XXX-XXXX" value="" maxlength="14" required="required">
                                        </div>
                                        <div class="flex-center"><button class="btn2" id="sendmetextBtn" type="submit" onclick="sendSMS();"> Text me </button></div>
                                        <p class="notice" style="text-align: center; margin-top: 10px; font-size: 12px; margin-bottom: 10px;">
                                                We will never spam you. We need your phone number to provide our services.<br class="desktop-only desktop">
                                        </p>
                                        <p id="sendmetextErr" style="text-align: center;
                                        font-size: 18px;
                                        font-weight: 700;">&nbsp;</p>
                                </div>
                        </div>
                </div>
                <div class="col-sm-2"></div>
        </div>
</div>
</div>
</div>
  `,
})
export class TestimonialsComponent {
  currentSlide = 0;

  testimonials = [
    {
      name: 'Sarah Johnson',
      initials: 'SJ',
      course: 'Business Administration',
      text: 'I was struggling with my online MBA program while working full-time. The tutors here helped me maintain a 3.8 GPA throughout my degree. Their support was invaluable and completely confidential.'
    },
    {
      name: 'Michael Chen',
      initials: 'MC',
      course: 'Computer Science',
      text: 'The quality of work is outstanding. My tutor helped me understand complex programming concepts and I went from barely passing to getting A\'s consistently. Best investment I made in my education.'
    },
    {
      name: 'Emily Rodriguez',
      initials: 'ER',
      course: 'Nursing',
      text: 'Being a working nurse and taking online courses was overwhelming. This service helped me balance everything perfectly. I graduated with honors thanks to their expert assistance.'
    },
    {
      name: 'David Thompson',
      initials: 'DT',
      course: 'Finance',
      text: 'I needed help with my finance courses and they delivered beyond expectations. The tutors are real experts who understand the material deeply. My grades improved dramatically.'
    },
    {
      name: 'Jessica Lee',
      initials: 'JL',
      course: 'Psychology',
      text: 'Excellent service! They helped me with research papers, discussions, and exams. Everything was done professionally and on time. I couldn\'t have completed my degree without them.'
    }
  ];

  get maxSlide(): number {
    return this.testimonials.length - 1;
  }

  get dots(): number[] {
    return Array(this.testimonials.length).fill(0).map((_, i) => i);
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
