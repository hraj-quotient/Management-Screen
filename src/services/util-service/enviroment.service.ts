import { Injectable } from '@angular/core';
// import { NumericDictionary } from 'lodash';

export enum Environment {
  Prod = 'prod',
  Staging = 'staging',
  UAT = 'uat',
  Dev = 'dev',
  LocalDev = 'localDev',
  Local = 'local',
  Stage = 'stage'
}

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  private enviroment!: Environment;

  private baseApiUrl!: string;
  private baseAuthApiUrl!: string;

  private OKTAFlag!: boolean;
  private AnnouncementCookieName!:string;
  private AnnouncementCookiePath!:string;
  private AnnouncementCookieDomain!:string;
  private AnnouncementCookieExpireInDays!:Number;
  private clientId!:string;
  private clientSecret!:string;
  private OKTACookieName!:string;
  private OKTALoginURL!:string;
  private OKTAHomeURL!:string;
  private OKTARedirectURL!:string;
  private OKTACookiePath!:string;
  private OKTACookieDomain!:string;
  private baseImgHref:string = '/qta-announcement-centre/';
 // this.baseImgHref=""
  private quotientBusniessUrl!:string;
  private quotientAnalyticsUrl!:string;
  private AnnouncementCentreUrl!:string;
  private helpCenterUrl!:string;
  private logLevel! : Number;
  private logToConsole : boolean  = true;

  private appKey:string = 'qta';



  get getEnv(): Environment {
    return this.enviroment;
  }

  get getbaseApiUrl(): string {
    return this.baseApiUrl;
  }
  get getbaseAuthApiUrl(): string {
    return this.baseAuthApiUrl;
  }

  get getOktaFlag(): boolean {
    return this.OKTAFlag;
    
  }

  get getAnnouncementCookieName(): string {
    return this.AnnouncementCookieName;
  }

  get getClientId(): string {
    return this.clientId;
  }

  get getAnnouncementCookieExpireInDays(): Number {
    return this.AnnouncementCookieExpireInDays;

  }

  get getAnnouncementCookiePath(): string {
    return this.AnnouncementCookiePath;
  }

  get getAnnouncementCookieDomain(): string {
    return this.AnnouncementCookieDomain;
  }


  get getClientSecret(): string {
    return this.clientSecret;
  }

  get getOKTACookieName(): string {
    return this.OKTACookieName;
  }

  get getOKTALoginURL(): string {
    return this.OKTALoginURL;
  }

  get getOKTAHomeURL(): string {
    return this.OKTAHomeURL;
  }

  get getOKTARedirectURL(): string {
    return this.OKTARedirectURL;
  }
  
  get getOKTACookiePath(): string {
    return this.OKTACookiePath;
  }

  get getOKTACookieDomain(): string {
    return this.OKTACookieDomain;
  }

  get getQuotientBusniessUrl(): string {
    return this.quotientBusniessUrl;
  }

  get getQuotientAnalyticsUrl(): string {
    return this.quotientAnalyticsUrl;
  }

  get getHelpCenterUrl():string{
    return this.helpCenterUrl;
  }

  get getAnnouncementCentreUrl(): string {
    return this.AnnouncementCentreUrl;
  }
  get getBaseImgHref(): string {
    return this.baseImgHref;
  }

  get getLogLevel() : Number{
    return this.logLevel;
  }

  get getCanLogToConsole() : boolean{
    return this.logToConsole;
  }

  get getAppKey(): string {
    return this.appKey;
  }

  constructor() {
    this.init();
  }

  init(){
    this.setEnvVariables();
  }

  private setEnvVariables(): void {
    const hostname = window && window.location && window.location.hostname;
    if (/^.*localhost.*/.test(hostname)) {
      this.enviroment = Environment.Local;
      this.baseApiUrl = 'http://localhost:8080/api/announcement';
      this.baseAuthApiUrl='http://localhost:8083/';
      this.OKTAFlag = false;
      this.baseImgHref=""

      this.appKey="qta";
      this.AnnouncementCookieName="quotient-announcement-dev";
      this.clientId="aiq-rest-client";

      this.clientSecret="aiq@2020";
      this.AnnouncementCookiePath="/";
      this.AnnouncementCookieDomain="localhost";
      this.OKTACookiePath="/";
      this.OKTACookieDomain="dev.quotient.com";
      this.AnnouncementCookieExpireInDays=1;
      this.OKTACookieName="quotient-id-token-DEV";
      this.OKTALoginURL="http://business.dev.quotient.com:3001/login";
      this.OKTAHomeURL="http://business.dev.quotient.com:3001/home";
      this.OKTARedirectURL="http://business.dev.quotient.com:3001/login?returnUrl=http://localhost:4200/home";
      this.quotientBusniessUrl="http://business.dev.quotient.com:3001/home";

      this.helpCenterUrl = "http://business.dev.quotient.com:3001/support/create-ticket?app=social_offline_conversion";

      this.AnnouncementCentreUrl="http://localhost:4200/home";
      this.logLevel = 0;
    } else if (/^.*local.dev.quotient/.test(hostname)) {
      // console.log(".dev.quotient domain");
      this.enviroment = Environment.LocalDev;
      this.baseImgHref="";
      this.baseApiUrl = 'http://portal.local.dev.quotient.com:8080/api/announcement';
      this.baseAuthApiUrl='http://portal.local.dev.quotient.com:8083/';
      this.OKTAFlag = true;
      this.baseImgHref="";

      this.appKey="qta";
      this.AnnouncementCookieName="quotient-announcement-dev";
      this.clientId="aiq-rest-client";
      this.clientSecret="aiq@2020";

      this.AnnouncementCookiePath="/";
      this.AnnouncementCookieDomain="dev.quotient.com";
      this.OKTACookiePath="/";
      this.OKTACookieDomain="dev.quotient.com";
      this.AnnouncementCookieExpireInDays=1;
      this.OKTACookieName="quotient-id-token-DEV";
      this.OKTALoginURL="http://business.dev.quotient.com:3001/login";
      this.OKTAHomeURL="http://business.dev.quotient.com:3001/home";  
      this.OKTARedirectURL="http://business.dev.quotient.com:3001/login?returnUrl=http://portal.local.dev.quotient.com:4200/home";
      this.quotientBusniessUrl="http://business.dev.quotient.com:3001/home";
      this.quotientAnalyticsUrl="http://portal.dev.quotient.com:8080/quotientinsights/";
      this.helpCenterUrl = "http://portal.dev.quotient.com:8080/quotientinsights/help";
      this.AnnouncementCentreUrl="http://portal.local.dev.quotient.com:4200/home";
      this.logLevel = 0;

    } else if (/^.*portal.dev.quotient/.test(hostname)) {
      // console.log("portal.dev.quotient domain");
      this.enviroment = Environment.Dev;
      this.baseAuthApiUrl='http://portal.dev.quotient.com:8085/biauth/';
      this.baseApiUrl = 'http://portal.dev.quotient.com:8080/qta-announcement-centre-api/api/announcement';
      this.OKTAFlag = true;
      this.appKey="qta";
      this.baseImgHref="/qta-announcement-centre/";
      this.AnnouncementCookieName="quotient-announcement-dev";
      this.clientId="aiq-rest-client";
      this.clientSecret="aiq@2020";
      this.AnnouncementCookiePath="/";
      this.AnnouncementCookieDomain="dev.quotient.com";
      this.OKTACookiePath="/";
      this.OKTACookieDomain="dev.quotient.com";
      this.AnnouncementCookieExpireInDays=1;
      this.OKTACookieName="quotient-id-token-DEV";
      this.OKTALoginURL="http://business.dev.quotient.com:3001/login";
      this.OKTAHomeURL="http://business.dev.quotient.com:3001/home";
      this.OKTARedirectURL="http://business.dev.quotient.com:3001/home?returnUrl=http://portal.dev.quotient.com:8080/qta-announcement-centre/";
      this.quotientAnalyticsUrl="http://portal.dev.quotient.com:8080/quotientinsights/";
      this.quotientBusniessUrl="http://business.dev.quotient.com:3001/home";
      this.helpCenterUrl ="http://portal.dev.quotient.com:8080/quotientinsights/help";
      this.AnnouncementCentreUrl="http://portal.dev.quotient.com:8080/qta-announcement-centre/";
      this.logLevel = 0;
    }else if (/^.*corp.coupons.com/.test(hostname)) {
      //console.log("analytics-uat.corp.coupons.com domain");
      this.enviroment = Environment.UAT;
      this.baseAuthApiUrl='https://analytics-uat.corp.coupons.com/biauth/';
      this.baseApiUrl = 'https://analytics-uat.corp.coupons.com/qta-announcement-centre-api/api/announcement';
      this.OKTAFlag = true;
      this.appKey="qta";
      this.baseImgHref="/qta-announcement-centre/";
      this.AnnouncementCookieName="quotient-announcement-token";
      this.clientId="aiq-rest-client";
      this.clientSecret="aiq@2020";
      this.AnnouncementCookiePath="/";
      this.AnnouncementCookieDomain="corp.coupons.com";
      this.OKTACookiePath="/";
      this.OKTACookieDomain="corp.coupons.com";
      this.AnnouncementCookieExpireInDays=1;
      this.OKTACookieName="quotient-id-token";
      this.OKTALoginURL="https://business.corp.coupons.com/login";
      this.OKTAHomeURL="https://business.corp.coupons.com/home";
      this.OKTARedirectURL="https://business.corp.coupons.com/home?returnUrl=https://analytics-uat.corp.coupons.com/qta-announcement-centre/";
      this.quotientBusniessUrl="https://business.corp.coupons.com/home";
      this.quotientAnalyticsUrl="https://analytics-uat.corp.coupons.com/quotientinsights/";
      this.helpCenterUrl ="https://analytics-uat.corp.coupons.com/quotientinsights/help";
      this.AnnouncementCentreUrl="https://analytics-uat.corp.coupons.com/qta-announcement-centre/";
      this.logLevel = 0;
    } else if (/^analytics-stg.corp.quotient.com/.test(hostname)) {
      console.log("analytics-stg.corp.quotient.com domain");
      this.enviroment = Environment.Stage;
      this.baseApiUrl = 'https://analytics-stg.corp.quotient.com/qta-announcement-centre-api/api/announcement';
      this.OKTAFlag = true;
      this.appKey="qta";
      this.AnnouncementCookieName="quotient-announcement-token";
      this.clientId="aiq-rest-client";
      this.clientSecret="aiq@2020";
      this.AnnouncementCookiePath="/";
      this.AnnouncementCookieDomain="quotient.com";
      this.OKTACookiePath="/";
      this.OKTACookieDomain="quotient.com";
      this.AnnouncementCookieExpireInDays=1;
      this.OKTACookieName="quotient-id-token";
      this.OKTALoginURL="https://business.quotient.com/login";
      this.OKTAHomeURL="https://business.quotient.com/home";
      this.OKTARedirectURL="https://business.quotient.com/home?returnUrl=https://analytics-stg.corp.quotient.com/qta-announcement-centre/";
      this.quotientBusniessUrl="https://business.quotient.com/home";
      this.quotientAnalyticsUrl="https://analytics-stg.corp.quotient.com/quotientinsights/";
      this.helpCenterUrl ="https://analytics-stg.corp.quotient.com/quotientinsights/help";
      this.AnnouncementCentreUrl="https://analytics-stg.corp.quotient.com/qta-announcement-centre/";
      this.logLevel = 0;
    }
    else if (/^analytics.corp.quotient.com/.test(hostname)) {
      console.log("analytics.corp.quotient.com domain");
      this.enviroment = Environment.Prod;
      this.baseApiUrl = 'https://analytics.corp.quotient.com/qta-announcement-centre-api/api/announcement';
      this.OKTAFlag = true;
      this.appKey="qta";
      this.AnnouncementCookieName="quotient-announcement-token";
      this.clientId="aiq-rest-client";
      this.clientSecret="aiq@2020";
      this.AnnouncementCookiePath="/";
      this.AnnouncementCookieDomain="quotient.com";
      this.OKTACookiePath="/";
      this.OKTACookieDomain="quotient.com";
      this.AnnouncementCookieExpireInDays=1;
      this.OKTACookieName="quotient-id-token";
      this.OKTALoginURL="https://business.quotient.com/login";
      this.OKTAHomeURL="https://business.quotient.com/home";
      this.OKTARedirectURL="https://business.quotient.com/home?returnUrl=https://analytics.corp.quotient.com/qta-announcement-centre/";
      this.quotientBusniessUrl="https://business.quotient.com/home";
      this.quotientAnalyticsUrl="https://insights.quotient.com/quotientinsights/";
      this.helpCenterUrl ="https://insights.quotient.com/quotientinsights/help";
      this.AnnouncementCentreUrl="https://analytics.corp.quotient.com/qta-announcement-centre/";
      this.logLevel = 3;
      this.logToConsole = false;
    } else {
      console.warn(`Cannot find environment for host name ${hostname}`);
    }
  }
}

