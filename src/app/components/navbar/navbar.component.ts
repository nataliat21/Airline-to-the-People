import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
@Output() menuShowing=new EventEmitter<boolean>()


  showModal = false; /*Property to control the visibility of the modal window*/
  showMenu = false; /* Variable to control the visibility of navbar-mobile-menu*/
  showInformation = false; /* Variable to control the visibility of the information container*/


  /* Method to toggle modal window visibility*/
  toggleModal() {
    this.showModal = !this.showModal;
  }

  // Feature to toggle menu visibility
  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.menuShowing.emit(this.showMenu);
  }


  /*Function to toggle the visibility of the information container */
  toggleInformation() {
    this.showInformation = !this.showInformation;
  }
}
