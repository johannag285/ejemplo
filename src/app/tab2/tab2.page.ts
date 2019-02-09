import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor (public actionSheetController:ActionSheetController){}

  async presentActionSheet (){
    const actionSheet= await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: ()=>{
        
          console.log('delete cliked')
        }
      },
      {
        text: 'Hola',
        role: 'destructive',
        icon: 'trash',
        handler: ()=>{
          console.log('delete cliked')
        }
        
      },
      {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }

    ]
    })
    await actionSheet.present()
  }

  
    
}
