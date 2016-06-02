import { Pipe, PipeTransform } from 'angular2/core';
import { Bucha } from './bucha.model';

@Pipe({
  name: "low",
  pure: false
})

export class LowPipe implements PipeTransform {
  transform(input: Bucha[], args) {
    var lowState = "notLow";
    if(lowState === "low") {
      return input.filter((bucha) => {
        return bucha.low;
      });
    } else if (lowState === "notLow") {
      return input.filter((bucha) => {
        return !bucha.low;
      });
    } else {
      return input;
    }
  }
}
