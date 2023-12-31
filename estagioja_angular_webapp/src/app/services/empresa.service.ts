import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../shared/models/empresa.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'http://localhost:8080/empresa';
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  buscarPorId(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/empresaId/${id}`);  
  }

  buscarPorIdLogin(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);  
  }

  buscarPerfilPorIdLogin(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/perfil/${id}`);  
  }

  atualizarEmpresa(empresa: Empresa) {
    return this.http.put<Empresa>(this.apiUrl, empresa);
  }

}
