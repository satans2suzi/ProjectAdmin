import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment.dev';
import {Observable, Subscription, throwError, Unsubscribable} from 'rxjs';
import {DocumentaryModel} from '../models/documentary.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  constructor(private httpClient: HttpClient
  ) {
  }

  getDocumentary(): any {
    const url = environment.DOCUMENT_BASE_URL + environment.DOCUMENTARY.GET_ALL_DOCUMENT;
    return this.httpClient.get<any>(url);
  }

  // Demo
  createDocumentary(file: File, bodyDataDocument: DocumentaryModel): any {
    const formData = new FormData();
    formData.append('documentName', bodyDataDocument.documentName);
    formData.append('documentNumber', bodyDataDocument.documentNumber);
    formData.append('documentType', bodyDataDocument.documentType);
    formData.append('documentAddress', bodyDataDocument.documentAddress);
    formData.append('documentDate', bodyDataDocument.documentDate);
    formData.append('documentSecret', bodyDataDocument.documentSecret);
    formData.append('documentWhoSign', bodyDataDocument.documentWhoSign);
    formData.append('documentFile', file);
    formData.append('documentFileName', file.name);
    formData.append('documentBox', bodyDataDocument.documentBox);
    formData.append('documentStatus', bodyDataDocument.documentStatus);
    const header = new HttpHeaders();
    const params = new HttpParams();
    const url = environment.DOCUMENT_BASE_URL + environment.DOCUMENTARY.CREATE_DOCUMENT;
    // const req = new HttpRequest('POST', url, formData, options);
    // return this.httpClient.request(req);
    return this.httpClient.post<any>(url, formData, {
      params,
      reportProgress: true,
      headers: header,
      observe: 'events'
    });
  }


  viewDocumentary(id: any): Observable<DocumentaryModel> {
    const url = environment.DOCUMENT_BASE_URL + environment.DOCUMENTARY.GET_DOCUMENT_DETAILS + '?_id=' + id;
    return this.httpClient.get<DocumentaryModel>(url);
  }

  //
  // editDocumentary(id, customerObj){
  //
  // }
  //
  deleteDocumentary(id: any): Observable<DocumentaryModel> {
    const url = environment.DOCUMENT_BASE_URL + environment.DOCUMENTARY.DELETE_DOCUMENT + '?_id=' + id;
    return this.httpClient.delete<DocumentaryModel>(url);
  }

  // searchDocumentary(keyword){
  //
  // }
}
