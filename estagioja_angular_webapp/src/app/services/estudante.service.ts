import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../shared/models/empresa.model';
import { Observable } from "rxjs";
import { Estudante } from '../shared/models/estudante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {
  private apiUrl = 'http://localhost:8080/estudante';
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  buscarPorId(id: number): Observable<Estudante> {
    return this.http.get<Estudante>(`${this.apiUrl}/${id}`);  
  }

  buscarDadosPerfilPorId(id: number): Observable<Estudante> {
    return this.http.get<Estudante>(`${this.apiUrl}/perfil/${id}`);  
  }

  atualizarEstudante(estudante: Estudante) {
    return this.http.put<Estudante>(this.apiUrl, estudante);
  }

}
