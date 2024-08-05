import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  navbar: HTMLElement | null = null;

  ngAfterViewInit() {
    this.navbar = document.querySelector('.navbar');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.navbar) {
      if (window.scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }
  }
}

