import { Component, LOCALE_ID, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { WebapiService } from 'src/app/webapi.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    array: any = []
    newarray: any = []
    bloodarray: any = [];
    arryamount: any = []
    bloodDarray: any = [];
    arryDamount: any = []
    ctx: any
    ctx2: any
    ctx3:any
    recipent: any
    donar: any;
    elem: any = [];
    user:any
    constructor(private web: WebapiService) { }
    ngOnInit(): void {
        sessionStorage.setItem('Role', 'Admin');
        this.getDashbord();
    }
    async getDashbord() {
        this.web.getdashbord().subscribe((rec) => {
            this.array = rec
            console.log(this.array ,'<====trun');
            
            if(this.array.request[0].users == undefined){
                this.array.request[0].users = 0
            }
          this.user =this.array.request[0].users

            console.log(this.array.request[0].users, 'hfghdagvfjh');
            
            this.newarray = [this.array.data[0].history, this.array.dataDonar[0].donar, this.array.accepter[0].recipent, this.array.request[0].users, this.array.verified[0].users]
            this.array.bloodAccepter.forEach((elem, index) => {
                console.log(elem) // the elment
                this.bloodarray.push(elem._id.blood_g);
                this.arryamount.push(elem.totalBlood)
                console.log(this.bloodarray);
                console.log(index) // the index in the NodeList
            })
            this.array.bloodDonar.forEach((elem, index) => {
                console.log(elem ,"<===viv") // the elment
                this.bloodDarray.push(elem._id.blood_g);
                this.arryDamount.push(elem.totalBlood)
                console.log( this.bloodDarray);
                console.log(this.arryDamount,"<===rohi") // the index in the NodeList
            })
            console.log(this.newarray, "gsdafsagas");
            this.grtGraph()
        })


    }

    grtGraph() {
        console.log("this.newarray==>", this.newarray);

        this.ctx = document.getElementById('myChart');
        this.ctx2 = document.getElementById('myChartBlood');
        this.ctx3 = document.getElementById('myChartBlooddonar');

        new Chart(this.ctx, {
            type: 'bar',
            data: {
                labels: ['history', 'Donar', 'Accepter', 'Request', 'Verified'],
                datasets: [{
                    label: 'Total user data',
                    data: this.newarray,
                    borderWidth: 1,
                    borderColor: ['rgba(255, 99, 132, 0.4)',
                        'rgba(75, 192, 192, 0.24)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 999, 142, 0.3)'],
                    backgroundColor: ['rgba(255, 99, 132, 0.4)',
                        'rgba(75, 192, 192, 0.24)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 999, 142, 0.3)'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        new Chart(this.ctx2, {
            type: 'bar',
            data: {
                labels: this.bloodarray,
                datasets: [{
                    label: 'Blood data of accepter',
                    data: this.arryamount,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        new Chart(this.ctx3, {
            type: 'bar',
            data: {
                labels: this.bloodDarray,
                datasets: [{
                    label: 'Blood data of donar',
                    data: this.arryDamount,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }



}
