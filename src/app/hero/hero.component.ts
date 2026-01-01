import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="full-width-banner main-banner" id="fullWidthBanner">
        <div class="container">
                <div class="banner-headline">
                        <div class="row">
                                <div class="col-md-7">
                                        <h1 class="banner-title" style="font-size: 45px; line-height: 55px; font-weight: 700; text-align: left; text-transform: none; color: #3273b9;">
                                                Pay Someone To Do My Online Class. <span style="color: #03bf97; text-decoration: underline;">Reliable Expert Assistance</span>
                                        </h1>
                                        <h2 class="banner-title-slogan" style="font-size: 19px; margin: 10px 0 30px 0; font-weight: 400; line-height: 32px; margin-top: 30px;">
                                                <span style="font-weight: 700; text-decoration: underline;">No upfront payment</span>. Pay only after first week grades are posted
                                                <span style="font-weight: 600;">Guaranteed A or B!</span>
                                        </h2>
                                        <div class="clearfix"></div>
                                        <div class="aah-banner-stats hidden-xs" style="    width: 85%;
                                        float: left;
                                        position: relative;
                                        margin: 30px auto 30px;">
                                        <div class="row">
                                                <div class="col-xs-6 text-center">
                                                        <div class="card bg-offset-white">
                                                                <div class="card-body home-metrics-cardss" style="min-height: 200px; padding-bottom: 60px; border: 1px solid #02c39a; border-radius: 8px; box-shadow: none; padding:25px;">
                                                                        <div class="content-width-medium" style="width: 100%; max-width: 400px; margin-right: auto; margin-left: auto;">
                                                                                <div class="display-heading-2 metric-heading metrics-numbers" style="font-family: 'Space Grotesk', sans-serif; color: #050505; font-size: 45px; line-height: 56px; font-weight: 700; text-transform: capitalize; margin-bottom: 12px;">
                                                                                99.1% Success
                                                                        </div>
                                                                        <div class="metrics-font" style="color: #444;">B or better in 5,000+ classes over three years.<br></div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="col-xs-6 text-center">
                                                <div class="card bg-offset-white">
                                                        <div class="card-body home-metrics-cardss" style="min-height: 200px; padding-bottom: 60px; border: 1px solid #02c39a; border-radius: 8px; box-shadow: none; padding: 25px;">
                                                                <div class="content-width-medium" style="width: 100%; max-width: 400px; margin-right: auto; margin-left: auto;">
                                                                        <div class="display-heading-2 metric-heading metrics-numbers" style="font-family: 'Space Grotesk', sans-serif; color: #050505; font-size: 45px; line-height: 56px; font-weight: 700; text-transform: capitalize; margin-bottom: 12px;">
                                                                        From $49/week
                                                                </div>
                                                                <div class="metrics-font" style="color: #444;">Prices vary based on subject complexity and workload.</div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="alert alert-warning shake shake-error" style="
                                width: 100%;
                                float: left;
/* background: green; */
">

<span style="color:black;font-weight: 700;text-decoration: underline;margin-right: 10px;">Veteran Discount Available</span>You served our country so let us serve you by tackling your online classes at discounted price.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" onclick="openLiveChatWidet();">Talk Now</a></div>
</div>
</div>
</div>
<div class="col-md-5">
        <div id="loadingcontactform" style="display:none;position: absolute;z-index: 100;background: rgba(0,0,0,.3);width: 94%;height: 100%;border-radius: 1rem;"><span style="color: #fff;font-size: 40px;position: absolute;padding-left: 30px;padding-right: 30px;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;/* background:#fff; */display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="75" cy="50" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.9166666666666666s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.9166666666666666s"></animate>
                        </circle><circle cx="71.65063509461098" cy="62.5" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.8333333333333334s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.8333333333333334s"></animate>
                        </circle><circle cx="62.5" cy="71.65063509461096" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.75s"></animate>
                        </circle><circle cx="50" cy="75" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.6666666666666666s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.6666666666666666s"></animate>
                        </circle><circle cx="37.50000000000001" cy="71.65063509461098" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5833333333333334s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5833333333333334s"></animate>
                        </circle><circle cx="28.34936490538903" cy="62.5" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5s"></animate>
                        </circle><circle cx="25" cy="50" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.4166666666666667s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.4166666666666667s"></animate>
                        </circle><circle cx="28.34936490538903" cy="37.50000000000001" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.3333333333333333s"></animate>
                        </circle><circle cx="37.499999999999986" cy="28.349364905389038" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.25s"></animate>
                        </circle><circle cx="49.99999999999999" cy="25" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.16666666666666666s"></animate>
                        </circle><circle cx="62.5" cy="28.349364905389034" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.08333333333333333s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="-0.08333333333333333s"></animate>
                        </circle><circle cx="71.65063509461096" cy="37.499999999999986" fill="#dcfff8" r="5">
                                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate>
                                <animate attributeName="fill" values="#dcfff8;#dcfff8;#004bff;#dcfff8;#dcfff8" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" dur="1s" begin="0s"></animate>
                        </circle>
                </svg>
        We are processing your details. It will take just a while.</span></div>
        <div id="successform" class="alert alert-success" style="padding:50px;display:none;"><p style="text-align: center;font-size: 30px;"><i class="fa fa-check-circle">&nbsp;</i>Success</p>
                <p>We have received your enquiry. Our team will contact you shortly via email from <a href="mailto:susanwhite.aah@gmail.com">susanwhite.aah@gmail.com</a> or Call you on the phone number provided from +1-817-968-5551</p>
        </div>
        <div class="aah-banner-form-wrapper" id="steponeform">
                <h3 class="form-title text-center m-t-0">Get Your Class Done—Up to 50% Off</h3>
                <form method="post" action="#" id="classContactForm" onsubmit="return false;">
                        <div class="form-row">
                                <div class="form-group">
                                        <div class="col-sm-12">
                                                <input type="text" class="form-control inp" name="name" id="clientname" value="" placeholder="Enter Your Name" style="font-size:20px;">
                                        </div>
                                </div>
                                <div class="form-group">
                                        <div class="col-sm-12">
                                                <input type="hidden" name="CSRFToken" value="NXIweDRQSk1DZlJrNFRuRDdBd1k0dz09OjrSvlgzlnW3luW3fXkE5S8y">
                                                <input type="hidden" name="formType" class="form-control" value="bEN1dmpuWlVnKy9lMnJQKzRQNlNXUT09OjqGwGdAysq28yBVaf4tO6On">

                                                <input type="email" name="email" class="form-control" placeholder="Enter your Email" id="inputEmail2" onchange="emailValidate('inputEmail2', $(this).val())" style="font-size:20px;">
                                        </div>
                                </div>
                                <div class="form-group">
                                        <div class="col-sm-12">
                                                <input type="text" class="form-control inp" name="subject" id="subject2" value="" placeholder="Enter Course Name" style="font-size:20px;">
                                        </div>
                                </div>
                                <div class="form-group">
                                        <div class="col-sm-12">
                                                <input style="padding: 0;padding-left: 10px;font-size: 20px;text-transform:none;" name="number" class="inputmask form-control" id="contactnumber" type="tel" placeholder="Enter Contact Number" value="" maxlength="14">
                                        </div>
                                </div>
                                <div class="form-group">
                                        <div style="position: absolute; left: -5000px;"><input aria-label="checking fake user please ignore" type="text" name="checkFakeUserbv451" value=""></div>
                                </div>
                                <div class="form-group">
                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-8">
                                                <button type="submit" style="font-size: 14px;padding: 15px 10px;" class="btn btn-secondary btn-block btn-common-orange" id="odrBtn2">GET DISCOUNTED PRICE </button>
                                        </div>
                                </div>
                        </div>
                </form>
        </div>
</div>
</div>
</div>
</div>
</div>
  `,
})
export class HeroComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitError = false;

  async submitForm() {
    this.isSubmitting = true;
    this.submitMessage = '';
    this.submitError = false;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      this.submitMessage = 'Thank you! We will contact you shortly.';
      this.submitError = false;

      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      this.submitMessage = 'Something went wrong. Please try again.';
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
}
