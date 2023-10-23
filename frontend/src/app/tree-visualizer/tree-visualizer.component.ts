import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { parisDistricts } from './districts-paris';
import * as L from 'leaflet';

@Component({
  selector: 'app-tree-visualizer',
  templateUrl: './tree-visualizer.component.html',
  styleUrls: ['./tree-visualizer.component.css']
})
export class TreeVisualizerComponent implements AfterViewInit
{
  constructor(private http: HttpClient, private parisDistricts:parisDistricts){}

  message: string = '';
  prefixUrl:string = "http://localhost:3000/";
  selectedOption: string = '';

  treeSelected: string = '';
  AllTreesVarieties:any;
  treeInfo: any;
  treeSelectedNbr: any;

  map: any;

  async ngOnInit() 
  {
    await lastValueFrom(this.http.get(this.prefixUrl + ""));

    this.parisDistricts.setDensity(0);
    this.getAllTreesVarieties();
  }

  async getAllTreesVarieties()
  {
    this.AllTreesVarieties = await lastValueFrom(this.http.get(this.prefixUrl + "getAllTreesVarieties"));
    console.table(this.AllTreesVarieties.result);
    return ;
  }

  async getValueSelect(treeName: string)
  {
    const body = {treeName: treeName}

    this.treeInfo = await lastValueFrom(this.http.post(this.prefixUrl + "getTreeInfo", body));
    this.treeSelectedNbr = await lastValueFrom(this.http.post(this.prefixUrl + "getTreeNbr", body));
    this.treeSelected = treeName;

    this.parisDistricts.setDensity(this.treeInfo);
    this.clearMap();
    this.addPolygonsToMap();
    return ;
  }

  
  ngAfterViewInit()
  {
    this.initMap();
    this.addPolygonsToMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([48.8566, 2.3522], 12);

    const tiles = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
		maxZoom: 12,
    minZoom: 12,
	  }).addTo(this.map);

    tiles.addTo(this.map);
  }

  addPolygonsToMap(): void {
    const geoJSONData = this.parisDistricts.getSharedVariable();

    L.geoJSON(geoJSONData as any, {
      style: function (feature: any) {
        return { weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7,
          fillColor: feature.properties.density > 1000 ? '#0B5C00' : feature.properties.density > 500  ? '#1E7F00' : feature.properties.density > 200  ? '#2EA800' : feature.properties.density > 100  ? '#6BCB00' : feature.properties.density > 0  ? '#A5E16D' : '#C6E5A9'};
      }
    }).addTo(this.map);
  }

  clearMap(): void {
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.GeoJSON) {
        this.map.removeLayer(layer);
      }
    });
  }

}
