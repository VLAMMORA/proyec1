import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private Http:HttpClient) {
    console.log("Funcionando ")
  }


  ObtenerCancionesX(){

    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQDWocfPCdu1wVOCqN6CTLiJm95NB4Qqp9kbUBxy5HPXzwyH9NA81FVfvxKadLuEuavZArQMcJUKtrIHbiTMVyYQ6PS23jZrpqEOG2nmKe-RfDty7sA"

    })
    return this.Http.get("https://api.spotify.com/v1/browse/new-releases?country=CR&limit=5",{headers})
  }


}
