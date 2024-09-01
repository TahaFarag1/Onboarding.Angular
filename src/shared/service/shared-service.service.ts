import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private phoneNumber: string= "";
  private LegalId: string= "";
  private AccNum: string= "";
  private Position: string= "";
  private Captcha: string= "";

  setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
    sessionStorage.setItem('phoneNumber', phoneNumber);
    console.log(this.phoneNumber);
  }

  getPhoneNumber(): string {
    console.log(this.phoneNumber);

    if(this.phoneNumber==null ||  this.phoneNumber=="")
    {
    this.phoneNumber = sessionStorage.getItem('phoneNumber')!;
    }

    return this.phoneNumber;
  }
  
  setLegalIdNumber(LegalId: string): void {
    this.LegalId = LegalId;
    sessionStorage.setItem('LegalId', LegalId);

    console.log(this.LegalId);
  }

  getLegalIdNumber(): string {
    console.log(this.LegalId);
    if(this.LegalId==null ||  this.LegalId=="")
    {
    this.LegalId = sessionStorage.getItem('LegalId')!;
    }
    return this.LegalId;
  }

  setAccNum(AccNum: string): void {
    this.AccNum = AccNum;
    sessionStorage.setItem('AccNum', AccNum);

    console.log(this.AccNum);
  }

  getAccNum(): string {
    console.log(this.AccNum);
    if(this.AccNum==null ||   this.AccNum=="")
    {
      this.AccNum = sessionStorage.getItem('AccNum')!;
    }
   
    return this.AccNum;
  }

  
  setCaptcha(Captcha: string): void {
    this.Captcha = Captcha;
    sessionStorage.setItem('Captcha', Captcha);

    console.log(this.Captcha);
  }

  getCaptcha(): string {
    console.log(this.Captcha);
    if(this.Captcha==null ||   this.Captcha=="")
    {
      this.Captcha = sessionStorage.getItem('Captcha')!;
    }
   
    return this.Captcha;
  }

  setPosition(Position: string): void {
    this.Position = Position;
    
  }

  getPosition(): string {
   
    return this.Position;
  }

  ////////////////////////////////////////

  // 
}
