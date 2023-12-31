import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/usuario.model';
import { Estudante } from '../shared/models/estudante.model';
import { Empresa } from '../shared/models/empresa.model';
import { AuthRequest } from '../shared/models/authRequest.model';
import { Notificacao } from '../shared/models/notificacao.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:8080/Auth';

    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    

    constructor(private http: HttpClient) { }

    public cadastrarEstudante(estudante: Estudante) {
        return this.http.post<Estudante>(`${this.apiUrl}/cadastrar-estudante`, estudante, {headers: this.headers});
    }

    public cadastrarEmpresa(empresa: Empresa) {
        return this.http.post<Empresa>(`${this.apiUrl}/cadastrar-empresa`, empresa, {headers: this.headers});
    }

    public logar(auth: AuthRequest) {
        return this.http.post<AuthRequest>(`${this.apiUrl}/logar`, auth, {headers: this.headers});
    }

    public buscarNotificacoes(idLogin: number): Observable<Notificacao[]> {
      return this.http.get<Notificacao[]>(`${this.apiUrl}/notificacoes/${idLogin}`);
    }

}
