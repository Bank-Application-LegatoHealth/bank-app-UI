import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

baseUrl = 'http://localhost:8081/api'
constructor(private _client:HttpClient) { }

login(loginRequest : any) : Observable<any>{
  let url = `${this.baseUrl}/login`
  return this._client.post(url,loginRequest);
}
getAccountDetails(custId : any){
  let url = `${this.baseUrl}/getDetails/${custId}`
  return this._client.get(url);
}

getTransactionDetails(transactionRequestBody : any){
  let url = `${this.baseUrl}/showAllTransactions`
  return this._client.post(url,transactionRequestBody);
}

downloadExcel(transactionRequestBody :Blob){
  let url = `${this.baseUrl}/customers/excel`
  return this._client.post(url,transactionRequestBody,{
    responseType: 'blob'
  });
}

changePassword(passwordRequestBody : any){
  let url = `${this.baseUrl}/changePassword`
  return this._client.put(url,passwordRequestBody);
}

performTransaction(transferRequestBody : any){
  let url = `${this.baseUrl}/transfer`
  return this._client.post(url,transferRequestBody);
}
}
