import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**needed if this is injectible class means ng should be able to inject dependencies into this class
 * component decorator itself includes the injectable class
 */
export class EmailService {

  constructor() { }
}
