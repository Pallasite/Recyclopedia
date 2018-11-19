import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    // for when we want to make it inaccessible to submit from an unauthorized account
//   public adminState: boolean = false;
    public token: String;
}