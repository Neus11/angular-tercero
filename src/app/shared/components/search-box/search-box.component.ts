import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
    public placeholder: string = '';

  @Output()
    public onValue = new EventEmitter<string>();

    emitCapital( capital:string ):void {

    this.onValue.emit(capital)

  }

/*   @Output()
  public onValueCountry = new EventEmitter<string>();

  emitCoutry( country:string ):void {

    this.onValueCountry.emit(country)

  } */
}
