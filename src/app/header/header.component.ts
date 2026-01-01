import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="header">
                        <div class="header-top-bar">
                                <div class="container"></div>
                        </div>
                        <nav class="navbar navbar-default aah-navbar animated">
                                <div class="container">
                                        <div class="navbar-header" itemscope="" itemtype="https://schema.org/Organization">
                                                <button type="button" aria-label="open sidemenu" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false" style="float: left; margin-left: 12px;" onclick="openNav()">
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                </button>
                                                <a class="navbar-brand nav-logo-white" ><img src="https://www.allassignmenthelp.com/static/images/logo1.png" class="img-responsive" width="42" alt="AllAssignmentHelp Logo"> AllAssignmentHelp</a>
                                                <a class="navbar-brand nav-logo-colored" ><img src="https://www.allassignmenthelp.com/static/images/logo1.png" class="img-responsive" width="42" alt="AllAssignmentHelp Logo"> AllAssignmentHelp</a>
                                                <a class="mobilechatIcon mobilecallIcon hidden-lg hidden-md hidden-sm" href="javascript:void(0);" aria-label="call or text us for support" itemprop="telephone" onclick="$('#contactus_modal').modal('show');ga('send', 'event', 'Call Us', 'click', 'CallUsMenuBtn');">
                                                        <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                                                </a>
                                                <a class="mobilechatIcon hidden-lg hidden-md hidden-sm" style="color: green;" aria-label="get support on whatsapp" rel="norefferrer" href="https://api.whatsapp.com/send?phone=19066291047&amp;text=Hey!%20I%20need%20help%20with%20my%20online%20class!"><i class="fa fa-whatsapp fa-2x"></i></a>
                                        </div>
<!-- /.navbar-header -->

<div class="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown">
        <ul class="nav navbar-nav navbar-center">
                <li class="dropdown resources-dropdown">
                        <a href="#homeTestimonialSection" class="dropdown-toggle main-nav-link">
                                Reviews
                                <img src="https://www.allassignmenthelp.com/static/images/review_favourite.svg" alt="Rating star" width="16" class="rating-stars">
                                <img src="https://www.allassignmenthelp.com/static/images/review_favourite.svg" alt="Rating star" width="16" class="rating-stars">
                                <img src="https://www.allassignmenthelp.com/static/images/review_favourite.svg" alt="Rating star" width="16" class="rating-stars">
                                <img src="https://www.allassignmenthelp.com/static/images/review_favourite.svg" alt="Rating star" width="16" class="rating-stars">
                                <img src="https://www.allassignmenthelp.com/static/images/review_favourite.svg" alt="Rating star" width="16" class="rating-stars">
                        </a>
                </li>
        </ul>
<!-- /.nav .navbar-nav -->
<ul class="nav navbar-nav navbar-right">
        <li>
                <a class="nav-signup btn btn-default btn-small" href="tel:18179685551" style="border: 1px solid #232e45 !important;">
                        <i class="fa fa-phone"></i> +1-817-968-5551
                </a>
        </li>
</ul>
</div>
<!-- /.navbar-collapse -->
<!-- Mobile Responive Menu Start -->
<nav id="sidebar" class="hidden-lg hidden-md hidden-sm">
        <a href="javascript:void(0)" class="closebtn" id="dismiss">×</a>
        <div class="sidebar-header"><img src="https://www.allassignmenthelp.com/static/images/logo1.png" class="img-responsive" width="80" height="70" alt="AllAssignmentHelp Logo"> AllAssignmentHelp</div>
        <ul class="list-unstyled components">
                <li>
                        <a ><i class="fa fa-home"></i> Home</a>
                </li>
        </ul>
</nav>
</div>
<!-- /.container-fluid -->
</nav>
<div class="overlay"></div>
</div>
  `,
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const navItem = target.closest('.nav-item');
    if (navItem) {
      navItem.classList.toggle('active');
    }
  }
}