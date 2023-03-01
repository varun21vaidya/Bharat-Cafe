import { Component, Input } from '@angular/core';

// for input validations:
const VALIDATOR_MSG:any={
  required: 'Should not be empty',
  email: 'Email is not valid',
  minLength: 'Minimum Length should be 6',
  maxLength: 'Maximum Length should  be 10'
}
@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent {
  @Input()
  label!:string;
  @Input()
  bgColor='white';

}
