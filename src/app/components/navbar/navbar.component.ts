import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showModal = false; /*Property to control the visibility of the modal window*/
  showMenu = false; /* Variable to control the visibility of navbar-mobile-menu*/

    /* Method to toggle modal window visibility*/
    toggleModal() {
      this.showModal = !this.showModal;
    }

    /* Feature to toggle menu visibility*/
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
}
