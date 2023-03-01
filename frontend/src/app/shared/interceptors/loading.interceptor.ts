import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';


// define a variable
var pendingRequest=0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loadingService.showLoading();
    pendingRequest+=1;

    return next.handle(request).pipe(tap({
      next:(event)=>{
        // request is finished
        if(event.type=== HttpEventType.Response)
        {
          this.handleHideLoading();
        }
      },
      error:()=>{
        this.handleHideLoading();
      }
    }));
  }

  handleHideLoading(){
    pendingRequest-=1;
    if (pendingRequest===0){
      this.loadingService.hideLoading();

    }

  }
}
