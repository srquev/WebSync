import { Component } from '@angular/core';
import { combineLatest, map, takeUntil } from 'rxjs';

@Component({
  selector: 'web-sync',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  webTitle = 'WebSync Enterprises';

  /** test starts here */

/**
 * 
 
  getData(){
    const params = {
      expnadLines: true,
      expandUnits: true
    }
    let count = 0;
    this.downTimeStateService.setSpinner(true);
    const departmentOptions$ = this.pmService.downtimeCreator(params, this.route.snapshot.params['type']);
    const pluginInputs$ = this.pmService.getPluginInput$;
    combineLatest([departmentOptions$, pluginInputs$]).pipe(
      takeUntil(this.destroyed$),
      map(([allDeptLinesAndUnits, userSelectedDeptLinesAndUnits])=> {
        count++;
        if(count === 1) this.clonedAllDeptLinesAndUnits = {...userSelectedDeptLinesAndUnits};
        if(userSelectedDeptLinesAndUnits?.length){
          this.filterDepartmentsLinesAndUnits(allDeptLinesAndUnits, userSelectedDeptLinesAndUnits);
        } else {
          this.locationData.departmentOptions = this.utlilService.sortdata(
            this.clonedAllDeptLinesAndUnits.departmentOptions, 'name'
          );
          this.isLocationTreeNotReady = '';
        }
      })
    ).subscribe();
  }

  
 */

getPreReq(){
  const params ={
    ext: true,
    exu: true
  }
  let count = 0;
  let orignalData;
  const department$ = this.pmService.downtimeCreator(params, 'downtime');
  const pluginInput$ = this.pmService.getPluginInput$;
  combineLatest([department$, pluginInput$]).pipe(
    map(([defaultUnits, appInputUnits])=>{
      count++;
       if (count ===1 ) orignalData = [...defaultUnits.departmentOptions];
       if(appInputUnits.length){
        this.filterDefaultUnits(orignalData, appInputUnits)
       } else {
        this.setDepartmentOptions(orignalData)
       }
    })
  ).subscribe()
}


checkForUnits(unitDetails: arrayOfObject[]){
  const nonPreferred = [];
if(unitDetails.length){
  unitDetails.forEach((unit)=>{
    if(!unit.isPreferred) nonPreferred.push()
  })

  if(nonPreferred.length) {
    //here showNotify is a private method in component.ts file
    this.showNotify(nonPreferred);
    console.log('-------')


  }
}
}




  /** test ends here */
}
