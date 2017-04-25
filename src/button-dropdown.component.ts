import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'button-dropdown',
  template: `
    <div id="container" [ngClass]="{'open': isOpen}">
      <div id="wrap" [ngClass]="{'active': isOpen}" (click)="toggleShow($event)" tabindex="0">
        <ng-content select=[content]></ng-content>
      </div>
      <div class="menu" [ngClass]="{'open': isOpen, 'active': isOpen }" #menu>
        <ng-content select=[list]></ng-content>
        <div class="arrow-container">
          <div class="arrow-inner"></div>
          <div class="arrow-border"></div>
        </div>
      </div>
    </div>
  `,
  styles: [ `
    :host {
        position: relative;
      }

      #container {
        position: relative;
        display: inline-block;
      }

      .menu.open .arrow-container {
        position: relative;
      }
      .menu.open .arrow-container > .arrow-inner {
        border-bottom: 12px solid #fff;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        height: 0;
        left: 4px;
        position: absolute;
        top: -9px;
        width: 0;
        z-index: 1000;
      }
      .menu.open .arrow-container > .arrow-border {
        border-bottom: 16px solid #55595c;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        height: 0;
        position: absolute;
        top: -9px;
        width: 0;
      }

      .menu {
        position: absolute;
        left: -16px;
      }

      #wrap {
        cursor: pointer;
      }

  
  ` ]
})
export class ButtonDropdownComponent {
  private isOpen: boolean = false;

  constructor(private _elementRef: ElementRef) {
  }

  /**
   * hides dropdown on outside click
   * @param target
   */
  @HostListener('document:click', ['$event.target']) documentClickHandler = (target) => {
    if (!this._elementRef.nativeElement.contains(target)) {
      this.hide();
    }
  };

  toggleShow() {
    this.isOpen = !this.isOpen;
    this.checkPosition();
  }

  hide() {
    this.isOpen = false;
    this.checkPosition();
  }

  /**
   * check position of menu and move if it is placed out of view window
   */
  checkPosition() {
    setTimeout(() => {
      // czy da się pozbyć elementRef?
      let el = this._elementRef.nativeElement.querySelector('[list]');
      let triggerRect = this._elementRef.nativeElement
        .querySelector('#wrap')
        .getBoundingClientRect();
      let arrowContainer = this._elementRef.nativeElement.querySelector('.arrow-container');

      if (!el) {
        return;
      }
      let menuRect = el.getBoundingClientRect();
      if (menuRect.right > window.innerWidth) {
        let left: number = +el.style.left.slice(0, -2);
        el.style.left = left - (menuRect.right - window.innerWidth) - 20 + 'px';
      }
      if (menuRect.left < 0) {
        let left: number = +el.style.left.slice(0, -2);
        el.style.left = left - menuRect.left + 5 + 'px';
      }
      arrowContainer.style.left = triggerRect.width / 2 + 'px';
    }, 1);
  }

}
