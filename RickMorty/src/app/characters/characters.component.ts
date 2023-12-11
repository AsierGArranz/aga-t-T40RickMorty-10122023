import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent{
  constructor(private route: ActivatedRoute, private http: HttpClient){}
  protected personjae_id: any;
  protected personaje: any;
  protected loaded:boolean = false;
  valor: number = 0;

  randomNum(){
    this.valor = Math.trunc(Math.random()*826)+1;
  }


  ngOnInit():void{
    this.randomNum();
    this.route.paramMap.subscribe(params => {
      this.personjae_id = params.get('id');
      let url : string = "https://rickandmortyapi.com/api/character/"+this.valor
      this.http.get(url).subscribe(result =>{
        this.personaje=result;
        console.log(result)
        this.loaded=true
      })
    })
  }
  

  // intento 1
  // httpClient = inject(HttpClient);

  // valor: number = 0;
  // nombre: any;
  // data: Personaje[] = [];

  // ngOnInit(): void {
  //   this.httpClient.get<Personaje[]>("https://rickandmortyapi.com/api/character/1").subscribe((data:Personaje[]) => {console.log(data); this.data = data; this.nombre = this.data[0].name;});
  // }
  // retornar(){
  //   this.httpClient.get("https://rickandmortyapi.com/api/character/1").subscribe((data: any) => {console.log(data); this.data = data;});
  // }
  // randomNum(){
  //   this.valor = Math.trunc(Math.random()*826)+1;
  // }
}
// export interface Personaje{
//   id: number;
//   name: string;
//   status: string;
//   species: string;
// }