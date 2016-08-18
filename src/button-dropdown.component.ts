import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'button-dropdown',
    template: require('./button-dropdown.component.html'),
    styles: [require('./button-dropdown.component.scss')]
})
export class ButtonDropdownComponent implements OnInit {
    private static ids: number = 0;
    private static pairs: ButtonDropdownComponent[] = [];
    @Input() group: number;
    @Input() useAsLink: boolean = false;
    id: number;
    private isOpen: boolean = false;

    toogleShow() {
        if (this.useAsLink) return;
        ButtonDropdownComponent.pairs.forEach(e => {
            if (e.group === this.group && e.id !== this.id) {
                e.isOpen = false;
            }
        });
        this.isOpen = !this.isOpen;

    }

    hide() {
        ButtonDropdownComponent.pairs.forEach(e => {
            if (e.group === this.group && e.id !== this.id) {
                e.isOpen = false;
            }
        });
        this.isOpen = false;
    }


    constructor() {
        this.group = 1;
        this.id = ButtonDropdownComponent.ids++;
        if (ButtonDropdownComponent.pairs.indexOf(this) === -1) {
            ButtonDropdownComponent.pairs.push(this);
        }
    }


    ngOnInit() { }

}
