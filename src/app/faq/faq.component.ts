import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="content-section-white">
        <div class="container">
                <div class="row">
                        <div class="col-md-12">
                                <h2>Frequently Asked Questions</h2>
                        </div>
                </div>
                <div class="row">
                        <div class="col-sm-12">
                                <p style="font-size: 16px;margin-bottom: 20px;line-height: 1.6;">Know the answers to the questions our client asks frequently. The questions help you understand about our services, payments, refunds, scope and much more.</p>
                                <div class="faqContainer">
                                        <div class="faqBox">
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Who handles my online class? Is my identity safe?</div>
                                                        <div class="faqAnswer">We have a team of more than 200 online class takers from the USA who handles your online courses professionally. You connect with the expert through out secured platform giving you 100% confidentiality. There is no information leak due to our encrypted platform.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Can I choose the expert for my online class?</div>
                                                        <div class="faqAnswer">Yes, you have an option to choose an expert from our list of experts in the USA. However, we suggest you to rely on what we provide as we know what suits best for your online class requirements.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Can you take my online class fast?</div>
                                                        <div class="faqAnswer">If you are running short on time to do your online class, do not panic. Our team is capable of handling online classes even for shorter deadlines like 2 hours. So, any weekly submission due shortly, just say take my class and consider it done.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Are you able to take my online math class?</div>
                                                        <div class="faqAnswer">Yes, we have expertise with math and many other subjects. We can assist with most of the topics under math including Algebra, Calculus, Geometry and many more. We have specialized maths tutor with 10 years of experience.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Do you also attend zoom sessions when you complete my online class?</div>
                                                        <div class="faqAnswer">No, we have to maintain confidentiality of our experts as well. Hence, they cannot appear on videos on your behalf. So we do all hard work for your classes, but you have to record yourself for videos or be there for online sessions with your professor.</div>
                                                </div>
                                        </div>
                                        <div class="faqBox">
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Any refunds if you fail to take my online class?</div>
                                                        <div class="faqAnswer">We have a clear refund policy. If we do not deliver B or better grade, we process 100% refund or a free redo of any other class with similar amount of work. In case the scores are not good on a week or two, it is not covered under refund policy. </div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Can you do my full online coursework with discounts?</div>
                                                        <div class="faqAnswer">We can do multiple classes you sign up with your college. We have no bandwidth issues as our team has more than 200 US based academic experts. Our guarantees about grades stay intact for all your coursework. When you bundle mutiple classes together, we offer a good discount.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Can my class helper match my location for IP tracking?</div>
                                                        <div class="faqAnswer">Yes, we use Proton VPN to match your IP address. Hence, your logins are 100% secure and comes from your location. Furthermore, we assign expert from closest location possible to leave out any red flags related to digital footprints.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Are You on Reddit for Online Class Help?</div>
                                                        <div class="faqAnswer">No, we do not chase for leads on Reddit. We are one of the top choice when you pay someone for online class help. With 15,000 completed classes with 98% satisfaction rate, we have become go to place for students. Chat now if you want to hire someone to take your online class.</div>
                                                </div>
                                                <div class="faqItem">
                                                        <div class="faqQuestion">Are submissions checked for plagiarism and quality?</div>
                                                        <div class="faqAnswer">Whatever work we complete for your online class it is checked via SafeAssign, copyleaks and zeroGPT to ensure zero plagiarism. To maintain quality of the work, we stick to the class modules and stay relevant to your professor expectations.</div>
                                                </div>
                                        </div>
                                </div>
                                <p style="font-size: 16px;margin-bottom: 20px;margin-top: 20px;line-height: 1.6;">If you have more questions about our online class help services, feel free to click on the chat and connect with an agent. We are happy to assist you with your queries.</p>
                        </div>
                </div>
        </div>
</div>
  `,
})
export class FaqComponent {
  openIndex: number | null = null;

  faqs = [
    {
      question: 'Is this service legal and safe?',
      answer: 'Yes, our service is completely legal. We provide tutoring and educational support to help you understand course material better. We maintain strict confidentiality and never share your information with anyone.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing varies based on the course difficulty, duration, and workload. We offer customized quotes after reviewing your specific requirements. Contact us for a free, no-obligation quote tailored to your needs.'
    },
    {
      question: 'Do you guarantee good grades?',
      answer: 'Yes! We guarantee A or B grades on all work we complete. If we fail to deliver the promised grade, you will receive a full refund. Our success rate is over 98%, so you can trust us to deliver excellent results.'
    },
    {
      question: 'What platforms do you support?',
      answer: 'We support all major learning management systems including Canvas, Blackboard, Moodle, McGraw Hill Connect, Pearson MyLab, WileyPlus, and many others. If you have a different platform, just ask - we likely support it.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply fill out our contact form with your course details, and we will get back to you within minutes with a free quote. Once you approve, we will match you with an expert tutor and begin working immediately.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Absolutely. We take your privacy very seriously. All personal information and academic details are kept strictly confidential. We never share your data with third parties and use secure systems to protect your information.'
    },
    {
      question: 'Can you help with urgent assignments?',
      answer: 'Yes, we offer rush services for urgent assignments and exams. Let us know your deadline when requesting a quote, and we will do our best to accommodate your timeline.'
    },
    {
      question: 'What if I am not satisfied with the work?',
      answer: 'Your satisfaction is our priority. If you are not happy with any work, we offer unlimited revisions at no extra cost. We will work with you until you are completely satisfied with the results.'
    }
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
