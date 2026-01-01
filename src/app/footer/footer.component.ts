import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
        <div class="footerTopSect">
                <div class="container">             
                        <div class="row">
                                <div class="col-sm-12">
                                        <div class="ftrDisclaimer">
                                                Disclaimer: AllAssignmentHelp.com provides reference papers to the student and we strongly recommend you not to submit the papers as it is. Please use our solutions as model answer to improve your skills.
                                        </div>
                                </div>
                        </div>
                </div>
        </div>

        <div class="clearfix"></div>



        <div class="clearfix"></div>
        <div class="footerBottomSect">
                <div class="container">
                        <div class="copyright">Copyright © 2025. <a href="https://www.allassignmenthelp.com">AllAssignmentHelp.com</a>. <span class="mbreak">All Rights Reserved.</span></div>
                </div>
        </div>
</footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
